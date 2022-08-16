// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from "@/pages/Home";
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 重写push|replace 因编程式路的该方法会返回promise，多次点击会产生NavigationDuplicated的错误
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve, reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}
// 配置路由
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      // 如何让params可传可不传————加上?
      path: '/search/:keyword?',
      component: Search,
      meta: { show: true },
      name: 'search',
      // 路由组件的可以通过props传递参数（很少用，不能简写）
      props: ($route) => {
        return { keyword: $route.params.keyword}
      }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false }
    },
    // 重定向：设置默认访问的路由地址
    {
      path: '*',
      redirect: 'home'
    }
  ]
})
