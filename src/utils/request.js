import router from '../router'
import { Message } from 'element-ui'
import jsonBigInt from 'json-bigint'

import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截器
axios.interceptors.request.use(config => {
  let token = window.localStorage.getItem('token')
  // 给headers设置统一的token属性
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function () {
  // return Promise.reject(error)
})
// 处理失真的大数字
axios.defaults.transformResponse = [function (data) {
  return data ? jsonBigInt.parse(data) : {}
}]
// 相应拦截器
axios.interceptors.response.use(response => {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = '未知错误'
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401: // token过期或者失效
      window.localStorage.removeItem('token')
      router.push('/login')
      break
    case 403:
      message = '没有设置这条评论的权限'
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
  return Promise.reject(error)
})
export default axios
