<template>
  <header class="myHeader">
    <div class="myHeader_content">
      <h1>My Blog</h1>
      <my-nav></my-nav>
    </div>
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
  border-bottom: 5px solid #dd3333;
  .myHeader_content {
    width: 1200px;
    margin: 0 auto;
  }
  h1 {
    height: 72px;
    line-height: 72px;
    color: #ffffff;
  }
}
</style>
