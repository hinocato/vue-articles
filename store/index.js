import axios from 'axios'
import Vuex from 'vuex'


export default () => new Vuex.Store({
  state: {
    items: [],
    item: {
      id: 0,
      title: '',
      thumbnail_url: null,
      text: '',
      is_saved: false,
      create_at: '',
      update_at: ''
    },
    page: null,
    size: null
  }, 
  mutations: {
    setItems (state, { items }) {
      state.items = items;
    },
    setItem (state, { item }) {
      state.item = item;
    },
    setSize (state, { size }) {
      state.size = size;
    },
    setPage (state, { page }) {
      state.page = page;
    }
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await axios.get('https://4fc1wt8cqi.execute-api.ap-northeast-1.amazonaws.com/dev/articles');
        const result = response.data;
        commit("setItems", { items: result.items });
        commit("setSize", { size: result.size });
        commit("setPage", { page: result.page });
      } catch (e) {
        console.error(e);
      }
    },
    async fetchItem({ commit }, { id }) {
      try {
        const response = await axios.get(`https://4fc1wt8cqi.execute-api.ap-northeast-1.amazonaws.com/dev/articles/${id}`);
        const result = response.data;
        commit("setItem", { item: result });
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    items: (state) => state.items,
    item: (state) => state.item
  },
})