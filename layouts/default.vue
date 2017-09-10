<template>
  <transition name="layout" mode="out-in">
    <div class="container">
      <my-header></my-header>
      <nuxt class="main" />
      <my-footer></my-footer>
    </div>
  </transition>
</template>

<script>
import MyHeader from '~/components/MyHeader'
import MyFooter from '~/components/MyFooter'

export default {
  components: {
    MyHeader,
    MyFooter
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
.main {
  margin: 12px auto;
  width: 100%;
  height: 100%;
  flex: 1;
  max-width: 1200px;
  overflow-x: hidden;
  background: #f8f8f8;
}
</style>
