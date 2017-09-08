<template>
  <section class="posts">
    <loading v-if="busy" />
    <post-item v-for="(item, index) in posts" :key="index" :data="item"></post-item>
  </section>
</template>

<script>
import PostItem from '~/components/PostItem'
import Loading from '~/components/Loading'

export default {
  data () {
    return {
      busy: true,
      posts: []
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      async function getPosts () {
        try {
          let res = await fetch('http://www.thatyou.cn/wp-json/wp/v2/posts')
          return await res.json()
        } catch (err) {
          console.log(err)
        }
      }
      getPosts().then((data) => {
        this.busy = false
        this.posts = data
      })
    }
  },
  components: {
    PostItem,
    Loading
  }
}
</script>

<style lang="scss" scoped>
.posts {
  padding: 40px 0 20px 0;
  background-color: #fff;
}
</style>
