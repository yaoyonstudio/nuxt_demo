<template>
  <header class="myHeader">
    <h1>My Blog</h1>
    <my-nav></my-nav>
  </header>
</template>

<script>
import MyNav from './MyNav'

export default {
  components: {
    MyNav
  }
}
</script>

<style lang="scss" scoped>
.myHeader {
  width: 100%;
  background: #233B5D;
  h1 {
    height: 72px;
    line-height: 72px;
    padding: 0 10px;
    color: #ffffff;
  }
}
</style>
