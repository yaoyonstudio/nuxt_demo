<template>
  <div class="index">
    <section class="slider_section">
      <slider :data="sliders" />
    </section>
    Home Page
  </div>
</template>

<script>
import Slider from '~/components/Slider'

export default {
  data () {
    return {
      sliders: ['/img/s1.jpg', '/img/s2.jpg', '/img/s3.jpg', '/img/s4.jpg']
    }
  },
  head () {
    return {
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'nuxt.js' },
        { hid: 'description', name: 'description', content: '这是一个用Nuxt.js构建的网站' }
      ]
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
.index {
}
</style>
