const axios = require('axios')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractSCSS = new ExtractTextPlugin({filename: 'common.[chunkhash].css', disable: false, allChunks: true})
// const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
  },
  head: {
    title: 'Nuxtjs',
    titleTemplate: '%s - 我的站点',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#dd3333',
    height: '5px'
  },
  // 自定义加载进度组件
  // loading: '~/components/MyLoading.vue',
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
  ],
  css: [
    '@/assets/css/style.scss'
  ],
  // transition: {
  //   name: 'page',
  //   mode: 'out-in'
  // },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    // extractCSS: true,
    // plugins: [
    //   extractSCSS
    // ],
    extend (config, ctx) {
      // config.module.rules.push({
      //   test: /\.scss$/,
      //   // use: ['style-loader', 'css-loader', 'sass-loader']
      //   use: extractSCSS.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader', 'postcss-loader']
      //   })
      // },
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   // important: use vue-style-loader instead of style-loader
      //   options: {
      //     loaders: {
      //       scss: extractSCSS.extract({
      //         use: ['css-loader', 'sass-loader', 'postcss-loader'],
      //         fallback: 'style-loader'
      //       })
      //     },
      //     exclude: /(node_modules)/
      //   },
      //   exclude: /(node_modules)/
      // })
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      // 只有一个动态路由的静态页面生成
      return axios.get('http://www.thatyou.cn/wp-json/wp/v2/posts')
        .then((res) => {
          return res.data.map((post) => {
            post.content = {rendered: null}
            return {
              route: '/post/' + post.id,
              payload: post
            }
          })
        })
      // let posts = axios.get('http://www.thatyou.cn/wp-json/wp/v2/posts')
      //   .then((res) => {
      //     return res.data.map((post) => {
      //       post.content = {rendered: null}
      //       return {
      //         route: '/post/' + post.id,
      //         payload: post
      //       }
      //     })
      //   })
      // let users = axios.get('https://api.com/users')
      //   .then((res) => {
      //     return res.data.map((user) => {
      //       return {
      //         route: '/user/' + user.id,
      //         payload: user
      //       }
      //     })
      //   })
      // return Promise.all([posts, users]).then((values) => {
      //   console.log(values)
      //   return values.join().split(',')
      // })
    }
  }
}
