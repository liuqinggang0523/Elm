<template>
  <div class="bg">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <img src="../../assets/img/avatar.jpg" class="img">
      </div>
      <div  class="text">
        <el-row type="flex" justify="center">
          <div class="logo">饿了么</div>
        </el-row>
        <el-form :model="formData" :rules="formRules" ref="myForm">
          <el-form-item label="用户名:" prop='mobile' class="userNmae">
            <el-input prefix-icon="el-icon-user" v-model="formData.mobile" style="width:81%" placeholder='请输入用户名'></el-input>
          </el-form-item>
          <el-form-item label="验证码:" prop='code' class="info">
            <el-input prefix-icon="el-icon-phone" v-model="formData.code" style="width:50%"></el-input>
            <el-button  type="primary" style="float:right">获取验证码</el-button>
          </el-form-item>
          <el-form-item prop='agree'>
            <el-checkbox v-model="formData.agree">我已仔细阅读用户管理规则，同意该条款</el-checkbox>
          </el-form-item>
           <el-button type="primary" round style="width:100%" @click="Login">登录</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    let validator = function (rule, value, callback) {
      value ? callback() : callback(new Error('必须同意才能登录'))
    }
    return {
      formData: {
        mobile: '',
        code: '',
        agree: false
      },
      formRules: { mobile: [{ required: true, message: '请输入用户名' }, { min: 6, max: 11, message: '6-11个字符' }],
        code: [{ required: true, message: '请输入验证码' }, { min: 4, max: 6, message: '4-6个字符' }],
        agree: [{ validator }] }
    }
  },
  methods: {
    async Login () {
      await this.$refs.myForm.validate()
      let res = await login(this.formData)
      window.localStorage.setItem('token', res.data.token)
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
  .bg{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('../../assets/img/bg2.jpg');
    background-size: cover;
    .box-card{
      width: 400px;
      height: 350px;
      .clearfix{
        justify-content: center;
        .img{
          position: absolute;
          left: 50%;
          top:100px;
          transform: translateX(-50%);
          width:100px;
          height: 100px;
          border-radius: 50%;
        }
      };
      .text{
        .logo{
          font-size: 24px;
          color:#409EFF;
          letter-spacing:4px;
        }
        .userNmae{
          margin-top: 20px;
        }
      }
    }
  }

</style>
