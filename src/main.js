import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission'
import ElementUi from 'element-ui'
import Component from './components/index.js'
import './styles/index.less'// 引入初始化样式
import axios from './utils/request'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$axios = axios
Vue.use(Component)
Vue.use(ElementUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
