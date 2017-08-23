<template>
  <section class="posts">
    posts Page
  </section>
</template>

<script>

export default {
  data () {
    return {
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
        console.log(data)
        this.posts = data
      })
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.posts {
}
</style>
