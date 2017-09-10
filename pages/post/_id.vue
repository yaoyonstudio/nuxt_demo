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
  layout: 'content_layout',
  // transition (to, from) {
  //   console.log('to:', to)
  //   console.log('from:', from)
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
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
          return {data: res.data}
        })
    }
  },
  head () {
    return {
      title: this.data.title.rendered,
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.data.title.rendered },
        { hid: 'description', name: 'description', content: this.data.title.rendered }
      ]
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
      let idEl = document.querySelector('#id')
      if (!payloadData && idEl && idEl.value) {
        this.getPost(idEl.value).then((res) => {
          that.data = res.data
        })
      } else if (this.$route && this.$route.params.id) {
        this.getPost(this.$route.params.id).then((res) => {
          that.data = res.data
        })
      }
    }
  },
  methods: {
    getPost (id) {
      return axios.get('http://www.thatyou.cn/wp-json/wp/v2/posts/' + id)
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.post {
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
