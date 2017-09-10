<template>
  <div class="slider" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slider, index) in data" :key="index">
        <img :src="slider">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

export default {
  props: ['data'],
  data () {
    return {
      swiperOption: {
        autoplay: 5000,
        initialSlide: 1,
        loop: true,
        pagination: '.swiper-pagination',
        onSlideChangeEnd: swiper => {
          console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  img {
    display: block;
    width: 100%;
  }
}
</style>
