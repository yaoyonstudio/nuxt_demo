<template>
  <router-link :to="{name: 'post-id', params: {id: data.id}}" class="postItem" tag="div">
    <img v-if="data.thumbnailurl" :src="data.thumbnailurl" />
    <div class="postItemRight">
      <h3>{{data.title.rendered}}</h3>
      <p>{{data.date}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
.postItem {
  cursor: pointer;
  width: 100%;
  background-color: #f8f8f8;
  border: 1px solid #dedede;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 238px;
    flex-basis: 238px;
    margin-right: 20px;
  }
  .postItemRight {
    flex: 1;
    h3 {
      margin-bottom: 10px;
    }
    p {}
  }
}
</style>
