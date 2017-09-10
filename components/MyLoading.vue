<template>
  <div class="myLoading" v-if="loading">
    <img src="/img/loading.gif" />
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.myLoading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .5);
  img {
    display: block;
    width: 100px;
  }
}
</style>
