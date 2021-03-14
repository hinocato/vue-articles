<template>
  <el-menu class="top-navbar" mode="horizontal" background-color="#f08080" text-color="#f0f8ff" active-text-color="#f0f8ff">
  <el-menu-item index="/" class="top-navbar-title">portfolio.hinocato.com</el-menu-item>
  <el-submenu index="/aboutme" class="dock-right">
    <template slot="title">SourceCode</template>
    <el-menu-item index="2-1"><el-link href="https://github.com/hinocato/vue-articles" target="_blanck">Web</el-link></el-menu-item>
    <el-menu-item index="2-2">Api</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" class="dock-right">About me</el-menu-item>
  <el-menu-item index="4" class="dock-right">login</el-menu-item>
  </el-menu>
</template>

<script>
</script>

<style>
.top-navbar {
  position: fixed;
  width: 100%;
  min-height: 60px;
}

.top-navbar-title {
    color: #f0f8ff;
    font-size: 20px;
}

.el-menu--horizontal > .el-menu-item.dock-right {
    float: right;
}

.el-menu--horizontal > .el-submenu.dock-right {
    float: right;
}
</style>