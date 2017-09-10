<template>
  <section class="posts">
    <loading v-if="busy" />
    <post-item v-for="(item, index) in posts" :key="index" :data="item"></post-item>
  </section>
</template>

<script>
import axios from 'axios'
import PostItem from '~/components/PostItem'
import Loading from '~/components/Loading'

export default {
  layout: 'content_layout',
  // transition (to, from) {
  //   console.log('to:', to)
  //   console.log('from:', from)
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
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
      // async function getPosts () {
      //   try {
      //     let res = await fetch('http://www.thatyou.cn/wp-json/wp/v2/posts')
      //     return await res.json()
      //   } catch (err) {
      //     console.log(err)
      //   }
      // }
      // getPosts().then((data) => {
      //   this.busy = false
      //   this.posts = data
      // })
      let that = this
      axios.get('http://www.thatyou.cn/wp-json/wp/v2/posts').then((res) => {
        if (res.status === 200 && res.data) {
          this.busy = false
          that.posts = res.data
        }
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
  background-color: #fff;
}
</style>
