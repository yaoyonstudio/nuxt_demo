<template>
  <div class="post">
    <loading v-if="busy" />
    <div class="postMain">
      <h2 class="postTitle">{{data.title.rendered}}</h2>
      <div class="postMeta">
        <p>{{data.date}}</p>
      </div>
      <img class="postFeaturedImg" :src="data.featuredimgurl" v-if="data.featuredimgurl" />
      <div class="postContent" v-html="data.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading'

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      busy: true,
      id: null,
      data: {
        title: {},
        content: {}
      }
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getPost(this.id)
  },
  methods: {
    getPost (id) {
      if (!id) return
      async function getPost (id) {
        try {
          let res = await fetch('http://www.thatyou.cn/wp-json/wp/v2/posts/' + id)
          return await res.json()
        } catch (err) {
          console.log(err)
        }
      }
      getPost(id).then((data) => {
        console.log(data)
        this.busy = false
        this.data = data
      })
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
