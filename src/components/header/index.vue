<template>
  <el-row class="header" type="flex" justify="end" align="middle">
    <span class="userName">{{userInfo.name}}</span>
    <img :src="userInfo.photo?userInfo.photo:defaultImg" alt="" class="userPhoto">
    <el-dropdown size="mini" @command="click">
        <el-button class="btn">
          更多<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userInfo">个人账户</el-dropdown-item>
          <el-dropdown-item command="github">github</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      defaultImg: require('../../assets/img/avatar.jpg'),
      userInfo: {}
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then((res) => {
        this.userInfo = res.data
      })
    },
    click (command) {
      if (command === 'userName') {

      } else if (command === 'github') {
        location.href = 'https://github.com/'
      } else {
        window.localStorage.removeItem('token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
  .header{
    height: 60px;
    background-color: #89EFEC;
    .userName{
      color:#666;
      font-size:15px;
    }
    .userPhoto{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 15px;
    }
    .btn{
      background-color: #89EFEC;
      border: 0;
    }
  }
</style>
