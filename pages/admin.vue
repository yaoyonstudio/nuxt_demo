<template>
  <div class="admin">
    <div class="admin_main">
      Admin Page
    </div>
  </div>
</template>

<script>

export default {
  layout: 'admin_layout',
  components: {
  }
}
</script>

<style scoped lang="scss">
.admin {
  width: 100%;
  height: 100%;
  .admin_main {
    width: 100%;
    height: 100%;
    padding: 12px;
    overflow-y: scroll;
  }
}
</style>
