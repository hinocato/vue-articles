<template>
  <el-menu class="top-navbar" mode="horizontal" background-color="#f08080" text-color="#f0f8ff" active-text-color="#f0f8ff">
    <el-menu-item index="1" class="top-navbar-title"><el-link :underline="false" href="/">portfolio.hinocato.com</el-link></el-menu-item>
    <el-menu-item index="2" class="dock-right"><el-link :underline="false" href="https://github.com/hinocato/vue-articles" target="_blanck">SourceCode(Web)</el-link></el-menu-item>
    <el-menu-item index="3" class="dock-right"><el-link :underline="false" href="https://github.com/hinocato/vue-articles" target="_blanck">SourceCode(Api)</el-link></el-menu-item>
    <el-menu-item index="4" class="dock-right"><el-link :underline="false" href="/aboutme">About me</el-link></el-menu-item>
    <el-menu-item v-if="!this.$auth.$state.loggedIn" index="5" class="dock-right" @click="loginWithAuthZero">login</el-menu-item>
    <el-menu-item v-else index="5" class="dock-right" @click="logoutWithAuthZero">logout</el-menu-item>
  </el-menu>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import { mapGetters } from 'vuex'

Vue.use(Vuex);

export default {
  methods: {
    loginWithAuthZero: async function () {
      await this.$auth.loginWith('auth0');
    },
    logoutWithAuthZero: async function () {
      await this.$auth.logout();
      window.location.href = 'https://dev-z748mr0r.jp.auth0.com/v2/logout?returnTo=http://localhost:3000';
    }
  },
  computed: {
    ...mapGetters(['loggedIn']),
    isLoggedIn() {
      // @ts-ignore
      return this.$auth.$state.loggedIn;
    }
  }
}
</script>

<style>
.top-navbar {
  position: fixed;
  width: 100%;
  max-height: 60px;
  z-index: 999;
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