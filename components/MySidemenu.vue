<template>
  <div class="mySidemenu">
    <div class="mySidemenu_content">
      <header>
        <img src="/img/logo.png" />
      </header>
      <ul>
        <li v-for="(menu, index) in menus" :key="index"><a><i :class="menu.icon"></i>{{menu.title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {id: 1, title: '管理首页', icon: 'fa fa-dashboard', link: ''},
        {id: 2, title: '网站设置', icon: 'fa fa-home', link: ''},
        {id: 3, title: '文章管理', icon: 'fa fa-file-text', link: ''},
        {id: 4, title: '用户管理', icon: 'fa fa-users', link: ''},
        {id: 5, title: '商品管理', icon: 'fa fa-file', link: ''},
        {id: 6, title: '订单管理', icon: 'fa fa-tags', link: ''}
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.mySidemenu {
  width: 100%;
  padding: 12px 0;
  .mySidemenu_content {
    header {
      img {
        display: block;
        margin: 0 auto;
        width: 168px;
      }
    }
    ul {
      li {
        padding: 0 12px;
        cursor: pointer;
        line-height: 48px;
        color: #fff;
      }
      li:hover {
        background: #fff;
        color: #233B5D;
      }
      a {
        i {
          margin-left: 4px;
          margin-right: 10px;
        }
        display: block;
        border-bottom: 1px solid rgba(255, 255, 255, .3);
      }
    }
  }
}
</style>
