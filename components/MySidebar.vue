<template>
  <div class="mySidebar">
    <div class="mySidebar_ad">
      <img src="/img/timg.jpg" alt="" />
    </div>
    <div class="mySidebar_hot">
      <header>
        <h4>热门文章</h4>
      </header>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <nuxt-link :to="{ path: '/post/' + post.id }">{{post.title.rendered }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
      let that = this
      axios.get('http://www.thatyou.cn/wp-json/wp/v2/posts').then((res) => {
        if (res.status === 200 && res.data) {
          this.busy = false
          that.posts = res.data
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.mySidebar {
  width: 100%;
  .mySidebar_ad {
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
  .mySidebar_hot {
    margin-top: 20px;
    border: 1px solid #efefef;
    header {
      background: #efefef;
      height: 36px;
      line-height: 36px;
      padding: 0 12px;
      h4 {
        font-family: 'Microsoft YaHei';
        font-size: 16px;
        font-weight: 600;
      }
    }
    ul {
      padding: 0 12px 10px 12px;
      li {
        padding: 10px 0;
        border-bottom: 1px dashed #ccc;
      }
      a, a:visited {
        text-decoration: none;
        color: #444;
        font-size: 14px;
      }
      a:hover {
        color: #dd3333;
      }
    }
  }
}
</style>
