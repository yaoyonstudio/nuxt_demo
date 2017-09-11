<template>
  <section class="register">
    <form class="registerContent">
      <h3>会员注册</h3>
      <label>
        <span>用户名：</span>
        <input type="text" v-model="user.username" placeholder="请输入用户名" @keyup="valid.username = Common.checkField('require', user.username)" :class="{'inputOk': valid.username, 'inputError': !valid.username }" />
        <i v-if="!valid.username"></i>
      </label>
      <label>
        <span>手机：</span>
        <input type="telephone" v-model.number="user.telephone" @keyup="valid.telephone = Common.checkField('telephone', user.telephone)" :class="{'inputOk': valid.telephone, 'inputError': !valid.telephone }" placeholder="请输入手机" />
        <i v-if="!valid.telephone"></i>
      </label>
      <label>
        <span>邮箱：</span>
        <input type="email" v-model="user.email" @keyup="valid.email = Common.checkField('email', user.email)" :class="{'inputOk': valid.email, 'inputError': !valid.email }" placeholder="请输入邮箱" />
        <i v-if="!valid.email"></i>
      </label>
      <label>
        <span>密码：</span>
        <input type="password" v-model="user.password" @keyup="valid.password = Common.checkField('password', user.password)" :class="{'inputOk': valid.password, 'inputError': !valid.password }"  placeholder="请输入密码" />
        <i v-if="!valid.password"></i>
      </label>
      <label>
        <span>年龄：</span>
        <input type="number" v-model="user.age" @keyup="valid.age = Common.checkField('integer', user.age)" :class="{'inputOk': valid.age, 'inputError': !valid.age }"  placeholder="请输入年龄" />
        <i v-if="!valid.age"></i>
      </label>
      <label>
        <span>性别：</span>
        <div><input type="radio" name="sex" value="1" v-model="user.sex" />男<input type="radio" name="sex" value="2" v-model="user.sex" />女</div>
      </label>
      <label>
        <span>地区：</span>
        <zone-selector style="margin-left: 12px;" v-model="user.zone"></zone-selector>
      </label>
      <label class="action">
        <button @click.prevent="register($event)">注册</button>
      </label>
    </form>
  </section>
</template>

<script>
import Common from '@/assets/js/common'
import ZoneSelector from '~/components/ZoneSelector'

export default {
  // transition: 'bounce',
  data () {
    return {
      user: {},
      valid: {
        username: false,
        telephone: false,
        email: false,
        password: false,
        age: false
      }
    }
  },
  created () {
    this.Common = Common
  },
  methods: {
    register () {
      console.log(this.user)
      console.log(this.valid)
    }
  },
  components: {
    ZoneSelector
  }
}
</script>

<style scoped lang="scss">
.register{
  .registerContent {
    margin: 0 auto;
    width: 600px;
    font-family: 'Microsoft YaHei';
    color: #444;
    h3 {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      margin: 20px 0;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      line-height: 48px;
      span {
        display: block;
        width: 80px;
      }
      i {
        margin-left: 10px;
        width: 20px;
        height: 20px;
        background: url(/img/i.png) no-repeat center center;
        background-size: contain;
      }
      input[type=text], input[type=telephone], input[type=email], input[type=password], input[type=number] {
        margin-left: 12px;
        padding: 0 8px;
        flex: 1;
        height: 80%;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      input[type=radio] {
        width: 32px;
        height: 20px;
        margin-left: 12px;
      }
      input[type=radio]:last-child {
        margin-left: 60px;
      }
      .inputOk {
        border-color: #0a8acd !important;
      }
      .inputError {
        border-color: #dd3333 !important;
      }
      div {
        flex: 1;
        display: flex;
        align-items: center;
      }
    }
    .action {
      margin: 20px 0;
      text-align: center;
      justify-content: center;
      button {
        display: block;
        background-color: #dd3333;
        border: none;
        color: #fff;
        border-radius: 6px;
        width: 148px;
        height: 44px;
      }
    }
  }
}

</style>
