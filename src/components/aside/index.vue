<template>
  <el-menu background-color="#89EFEC"
  class="el-menu"
  active-text-color="#fff"
  :collapse='isCollapse'
  :collapse-transition="false"
  :router="true">
    <el-menu-item>
      <i :class="{'el-icon-s-unfold':isCollapse,'el-icon-s-fold':!isCollapse}"  @click="openOrClose"></i>
      <span>开关</span>
    </el-menu-item>
    <el-menu-item index='/home'>
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </el-menu-item>
    <el-submenu index='1'>
      <template slot="title">
        <i class="el-icon-document-copy"></i>
        <span>内容管理</span>
      </template>
          <el-menu-item index="/home/publish"><i class="el-icon-menu"></i><span>发布文章</span></el-menu-item>
          <el-menu-item index="/home/articles"><i class="el-icon-menu"></i><span>文章列表</span></el-menu-item>
          <el-menu-item index="/home/comment"><i class="el-icon-menu"></i><span>评论管理</span></el-menu-item>
          <el-menu-item index="/home/material"><i class="el-icon-menu"></i><span>素材管理</span></el-menu-item>
    </el-submenu>
    <el-submenu index='2'>
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>粉丝管理</span>
      </template>
          <el-menu-item index="/home/picture"><i class="el-icon-menu"></i><span>图文数据</span></el-menu-item>
          <el-menu-item index="/home/fansInfo"><i class="el-icon-menu"></i><span>粉丝概况</span></el-menu-item>
          <el-menu-item index="/home/fanspicture"><i class="el-icon-menu"></i><span>粉丝画像</span></el-menu-item>
          <el-menu-item index="/home/fansList"><i class="el-icon-menu"></i><span>粉丝列表</span></el-menu-item>
    </el-submenu>
    <el-menu-item>
      <i class="el-icon-s-operation"></i>
      <span>设置</span>
    </el-menu-item>
    <el-menu-item index="/home/userInfo">
      <i class="el-icon-user-solid"></i>
      <span>个人账户</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import eventBus from '../../utils/eventbus.js'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    openOrClose () {
      this.isCollapse = !this.isCollapse
      eventBus.$emit('changeCollapse')
    }
  }
}
</script>

<style lang="less" scoped>
  .el-menu{
    border-right:0;
    height: 100vh;
  }
</style>
