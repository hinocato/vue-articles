<template>
  <div class="container">
    <div class="text-content">
      <p class="title">このWebサイトについて</p>
      <p class="text">このWebサイトはポートフォリオとして作成したサイトです。</p>
      <p class="text">Nuxt.jsでフロントエンド、lambdaでバックエンドを構成しています。</p>
      <p class="text">全体構成と簡単な技術採用理由は<el-link href="/articles/1">こちら</el-link>に記載しています。</p>
      <p class="text">ログインすると記事の追加、削除、編集が可能です。</p>
    </div>
    <div class="text-content">
      <p class="title">製作者について</p>
      <p class="text">2018新卒。2021年3月時点で以下の経験をしています。</p>
      <p class="text">(同期間での兼務が多数だったため、期間はその分も含めて記載しています)</p>
      <ul>
        <li clas="text">Webフロントエンド(Typesctipt/Nuxtjs) 開発 (2年)</li>
        <li clas="text">REST API バックエンド(Nodejs、Typescript/Expres) マイクロサービスの開発 (2年)</li>
        <li clas="text">AWS(lambda、S3)を利用したWebサービス開発/保守 (1年)</li>
        <li clas="text">AWS ECS(Kubernetes) で開発/運用されているインフラの運用/メンテナンス (1年)</li>
        <li clas="text">バックエンドログ収集機能 (Fulentd + Grafana) (1年)</li>
        <li clas="text">Gitlab での CI/CD 運用 (1年)</li>
        <li clas="text">AWS SAA 取得(2021/03)</li>
      </ul>
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
  async asyncData({ store }: { store: any}) {},
  methods: {},
  computed: {}
}
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
}

.text-content {
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
  padding-bottom: 10px;
  letter-spacing: 1px;
  line-height: 1.75;  
}

.title {
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
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
