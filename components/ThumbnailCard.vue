<template>
  <el-card :body-style="{ padding: '0px' }" class="thumbnail-card">
    <img :src="thumbnailUrl" alt onerror="this.onerror = null; this.src='';" class="image">
    <div style="padding: 14px;">
      <span>{{ title }}<fontawesome-icon v-if="toBoolean(isSaved)" class="lock-icon fs-2x" :icon="['fas', 'lock']"/></span>
      <div class="bottom clearfix">
        <time class="time">{{ formatDate(createAt) }}</time>
        <el-link :href="'articles/' + id"><el-button type="text" class="button">Detail</el-button></el-link>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['id', 'title', 'thumbnailUrl', 'isSaved', 'createAt'],
  data() {
    return {}
  },
  methods: {
    formatDate(datetime) {
      return new Date(datetime).toLocaleString();
    },
    toBoolean(bool) {
      return Boolean(bool)
    }
  }
}
</script>

<style>
.thumbnail-card {
  margin: 5px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 300px;
  height: 200px;
  object-fit: contain;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.lock-icon {
  margin-left: 3px;
  margin-right: 3px;
}
</style>