<template>
  <el-menu class="top-navbar" mode="horizontal" background-color="#f08080" text-color="#f0f8ff" active-text-color="#f0f8ff">
  <h2 class="top-navbar-title">Articles.hinocato.com</h2>
  <el-menu-item index="1" class="dock-right">About me</el-menu-item>
  <el-submenu index="2" class="dock-right">
    <template slot="title">SourceCode</template>
    <el-menu-item index="2-1">Web</el-menu-item>
    <el-menu-item index="2-2">Api</el-menu-item>
  </el-submenu>
  </el-menu>
</template>

<script>
</script>

<style scoped>
.top-navbar {
  position: fixed;
  width: 100%;
  min-height: 60px;
}

.el-menu-horizontal > .el-menu-item.dock-right {
    float: right;
}

.top-navbar-title {
    color: #f0f8ff;
    padding: 3px;
}
</style>
