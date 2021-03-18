<template>
  <div class="container">
		<div v-if="!item.is_saved">
			<el-row class="button-area" justify="space-between">
				<el-button class="button" @click="clickCancel(item.id)" plain>キャンセル</el-button>
				<el-button class="button" type="primary" plain>保存</el-button>
				<el-button class="button" type="danger" plain>削除</el-button>
			</el-row>
			<el-row class="article-body" type="flex" justify="space-between">
				<el-col>
					<el-tabs type="border-card" class="editor-tabs">
						<el-tab-pane label="Editor">
							<span class="heading">タイトル</span>
							<el-input type="text" placeholder="タイトル" v-model="item.title"></el-input>
							<span class="heading">サムネイルURL</span>
							<el-input type="text" placeholder="サムネイルURL" v-model="item.thumbnail_url"></el-input>
							<span class="heading">本文</span>
							<el-input type="textarea" :rows="15" placeholder="本文" v-model="item.text"></el-input>
						</el-tab-pane>
						<el-tab-pane label="Preview">
							<span class="title">{{ item.title }}</span>
							<img :src="item.thumbnail_url" alt onerror="this.onerror = null; this.src='';" class="image">
							<div class="text" v-html="$md.render(item.text)"></div>
						</el-tab-pane>
					</el-tabs>
				</el-col>
			</el-row>
		</div>
		<div v-else>
		  <p>コンテンツは保護されています</p>
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
  async asyncData({ store, params }: { store: any, params: any}) {
    await store.dispatch('fetchItem', { id: params.id });
  },
  methods: {
    formatDate(datetime: any) {
      return new Date(datetime).toLocaleString();
    },
    toBoolean(bool: any) {
      return Boolean(bool)
    },
		clickCancel(id: number) {
			window.location.href = `/articles/${id}`;
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

.button-area {
	align-items: left;
  text-align: left;
	padding-top: 5px;
	padding-bottom: 5px;
}

.editor-tabs {
	width: 100%;
}

.button {
	margin-top: 5px;
	padding-bottom: 5px;
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

.heading {
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
	padding-top: 10px;
  font-weight: 300;
  font-size: 20px;
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