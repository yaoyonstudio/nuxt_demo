<template>
  <transition name="layout" mode="out-in">
    <div class="container">
      <my-header></my-header>
        <div class="content_main">
          <nuxt class="content_main_left" />
          <my-sidebar class="content_side"></my-sidebar>
        </div>
      <my-footer></my-footer>
    </div>
  </transition>
</template>

<script>
import MyHeader from '~/components/MyHeader'
import MyFooter from '~/components/MyFooter'
import MySidebar from '~/components/MySidebar'

export default {
  components: {
    MyHeader,
    MyFooter,
    MySidebar
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.content_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
.content_main {
  flex: 1;
  width: 1200px;
  height: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  overflow-x: hidden;
}
.content_main_left {
  width: 868px;
  height: 100%;
}
.content_side {
  width: 298px;
  height: 100%;
  flex-basis: 298px;
}
</style>
