<template>
    <el-container>
      <el-aside style='background-color:#89EFEC;transition:all 1s' :style="{width:isCollapse?'60px':'230px'}">
        <!-- 公共组件侧边栏 -->
        <layout-aside></layout-aside>
      </el-aside>
    <el-container>
      <el-header style="padding:0">
        <!-- 公共组件头部 -->
        <layout-header></layout-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import eventBus from '../../utils/eventbus.js'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  created () {
    eventBus.$on('changeCollapse', () => {
      this.isCollapse = !this.isCollapse
    })
  }

}
</script>

<style>

</style>
