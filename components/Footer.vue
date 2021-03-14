<template>
  <div class="footer">
    <el-link class="createdby footer-text" :underline="false" href="https://github.com/hinocato" target="_blank">
      <p class="footer-text">created by<fontawesome-icon class="footer-icon fs-2x" :icon="['fab', 'github-square']"/>hinocato</p>
    </el-link>
  </div>
</template>

<style>
.footer {
  background-color: #696969;
  min-height: 30px;
}

.footer-icon {
  color: #f0f8ff;
  margin-top: 3px;
  margin-right: 3px;
  margin-left: 3px;
}

.footer-text {
  color: #f0f8ff;
  padding-right: 3px;
  padding-left: 3px;
}

.createdby {
  display: inline-flex;
  align-items: center;
  float: right;
  padding-top: 3px;
  padding-right: 3px;
  padding-left: 3px;
}
</style>