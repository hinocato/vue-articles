<template>
  <div class="container">
    <el-row class="button-area" justify="space-between">
				<el-button class="button" @click="clickCancel(item.id)" plain>キャンセル</el-button>
				<el-button class="button" type="primary" plain>保存</el-button>
				<el-button class="button" type="danger" plain>削除</el-button>
    </el-row>
    <el-row class="article-body" type="flex" justify="space-between">
      <el-col :span="20">
        <el-link :href="'/articles/' + item.id + '/edit'"><el-button v-if="this.$auth.$state.loggedIn && !item.is_saved" size="small" icon="el-icon-edit"></el-button></el-link>
        <fontawesome-icon v-if="toBoolean(item.is_saved)" class="lock-icon fs-2x" :icon="['fas', 'lock']"/>
        <span class="timestamp">作成日時 {{formatDate(item.create_at)}}</span>
        <span class="title">{{ item.title }}</span>
        <img :src="item.thumbnail_url" alt onerror="this.onerror = null; this.src='';" class="image">
        <div class="text" v-html="$md.render(item.text)"></div>
      </el-col>
    </el-row>
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
  async asyncData({ store, params }: { store: any, params: any}) {
    await store.dispatch('fetchItem', { id: params.id });
  },
  methods: {
    formatDate(datetime: any) {
      return new Date(datetime).toLocaleString();
    },
    toBoolean(bool: any) {
      return Boolean(bool)
    }
  },
  computed: {
    ...mapGetters(['item']),
  }
}
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.timestamp {
  font-size: 13px;
  color: #999;
}

.article-body {
  border-radius: 6px;
  min-width: 1000px;
  background-color: white;
  align-items: left;
  text-align: left;
  padding: 5px;
}

.image {
  padding-top: 10px;
  padding-bottom: 10px;
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
  font-size: 36px;
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

.text {
  padding-top: 10px;
  padding-bottom: 10px;
}

.links {
  padding-top: 15px;
}
</style>
