// 对于axios的二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
//在当前模块中引入store
import store from '@/store';

// start:进度条开始  done：进度条结束
// 利用axios对象的create方法创建一个axios实例
// requests就是axios
const requests = axios.create({
  // 配置对象
  baseURL: '/mock',
  timeout: 5000
})

// 请求拦截器：设置请求发出之前需要做的一些事情
requests.interceptors.request.use(config => {
  // config配置对象的一个属性：headers请求头很重要
  if(store.state.detail.uuid_token){
    //请求头添加一个字段(userTempId):和后台老师商量好了
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  // 进度条开始动
  nprogress.start()
  return config
})

// 响应拦截器：
requests.interceptors.response.use(res => {
  // 成功的回调函数，
  nprogress.done()
  return res.data
}, error => {
  // 失败的回调函数
  return Promise.resolve(new Error('faile'))
})

export default requests