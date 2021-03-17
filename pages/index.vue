<template>
  <div class="container">
    <div>
      <el-row>
        <el-col v-for="item of items" :key="item.id" :span="6">
          <ThumbnailCard :id="item.id" :title="item.title" :thumbnailUrl="item.thumbnail_url" :isSaved="item.is_saved" :createAt="item.create_at"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuex from 'vuex'
import { mapGetters } from 'vuex'

Vue.use(Vuex);

export default {
  data() {
    return {};
  },
  async created () {},
  async mounted () {},
  async asyncData({ store }: { store: any}) {
    if (store.getters['items'].length) {
      return;
    }
    await store.dispatch('fetchItems');
  },
  methods: {},
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
