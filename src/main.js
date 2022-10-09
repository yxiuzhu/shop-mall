import Vue from 'vue'
import App from './App.vue'

// 注册全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button, MessageBox } from 'element-ui'
// import Pagination from '@/components/Pagination'
//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
// ElementUI注册全局组件 方式一
Vue.component(Button.name, Button)
// ElementUI注册全局组件 方式二 挂在原型上
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
// 引入MockServer.js的mock数据
import '@/mock/mockServe'
// 引入swiper的样式
import 'swiper/css/swiper.css'
//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from '@/api'
// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  // 注册仓库
  store,
}).$mount('#app')
