import Header from './header/index.vue'
import Aside from './aside/index.vue'
import Date from './homeDate/index.vue'
export default { // 注册全局组件
  install (Vue) {
    Vue.component('layout-header', Header)
    Vue.component('layout-aside', Aside)
    Vue.component('home-date', Date)
  }
}
