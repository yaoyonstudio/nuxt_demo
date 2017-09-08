<template>
  <div class="post">
    <div class="postMain">
      <h2 class="postTitle">{{data.title.rendered}}</h2>
      <div class="postMeta">
        <input type="hidden" id="id" name="id" v-model="data.id" />
        <p>{{data.date}}</p>
      </div>
      <img class="postFeaturedImg" :src="data.featuredimgurl" v-if="data.featuredimgurl" />
      <div class="postContent" v-html="data.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/Loading'
let payloadData = null

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ params, error, payload }) {
    if (payload) {
      payloadData = payload
      // console.log('payload:', payload)
      return { data: payload }
    } else {
      // console.log('no payload')
      return axios.get('http://www.thatyou.cn/wp-json/wp/v2/posts/' + params.id)
        .then((res) => {
          console.log('res:', res)
          return {data: res.data}
        })
    }
  },
  data () {
    return {
      data: {
        title: {},
        content: {}
      }
    }
  },
  created () {
    let that = this
    if (typeof window !== 'undefined') {
      let id = document.querySelector('#id').value
      if(!payloadData) {
        axios.get('http://www.thatyou.cn/wp-json/wp/v2/posts/' + id)
        .then((res) => {
          that.data = res.data
        })
      }
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding: 40px 40px;
  .postMain {
    .postTitle {
      text-align: center;
    }
    .postMeta {
      margin: 20px auto;
      text-align: center;
      color: #ccc;
    }
    .postFeaturedImg {
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
      max-width: 100%;
    }
    .postContent {
    }
  }
}
</style>
