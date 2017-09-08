<template>
  <div class="container">
    <my-header></my-header>
    <nuxt class="main" />
    <my-footer></my-footer>
  </div>
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
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
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
  margin: 0 auto;
  width: 100%;
  height: 100%;
  flex: 1;
  max-width: 1200px;
  background: #f8f8f8;
}
</style>
