<template>
  <transition name="layout" mode="out-in">
    <div class="admin_container">
      <my-sidemenu class="admin_side"></my-sidemenu>
      <nuxt class="admin_main" />
    </div>
  </transition>
</template>

<script>
import MySidemenu from '~/components/MySidemenu'

export default {
  head: {
    link: [
      { rel: 'stylesheet', href: '/font-awesome/css/font-awesome.css' }
    ]
  },
  components: {
    MySidemenu
  }
}
</script>

<style>
.admin_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
.admin_side {
  width: 268px;
  height: 100%;
  flex-basis: 268px;
  margin-right: 20px;
  background: #233B5D;
}
.admin_main {
  flex: 1;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
}
</style>
