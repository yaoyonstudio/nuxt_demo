<template>
  <nav class="myNav">
    <ul>
      <router-link :to="menu.link" tag="li" v-for="(menu, index) in menus" :key="index">{{ menu.title }}</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {'id': 1, 'title': 'Home', 'link': '/'},
        {'id': 2, 'title': 'Post', 'link': '/posts'},
        {'id': 3, 'title': 'Admin', 'link': '/admin'},
        {'id': 4, 'title': 'Register', 'link': '/register'},
        {'id': 9, 'title': 'Test', 'link': '/test'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.myNav {
  width: 100%;
  background: #233B5D;
  ul {
    li {
      width: 72px;
      text-align: center;
      display: inline-block;
      height: 36px;
      line-height: 36px;
      color: #ffffff;
      cursor: pointer;
    }
    li:hover {
      background: #dd3333;
    }
  }
}
.nuxt-link-exact-active {
  background: #dd3333;
}
</style>
