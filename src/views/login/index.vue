<template>
  <div class="login-page">
    <div class="form-block">
      <div class="title-container">
        <h3 class="title">Login</h3>
      </div>
      <el-form :model="formLogin">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="formLogin.userName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="formLogin.passWord" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="intoPage">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      formLogin: {
        userName: '',
        passWord: ''
      }
    }
  },
  methods: {
    intoPage () {
      this.$router.push('/main')
    }
  }
}
</script>
<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3a4b;

  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: 700;
    }
  }

  .form-block {
    width: 350px;
    height: 300px;
  }
}
</style>
