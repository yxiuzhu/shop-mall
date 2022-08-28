// 引入路由组件
import Home from "@/pages/Home";
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default [
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
      return { keyword: $route.params.keyword }
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
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true }
  },
  // 重定向：设置默认访问的路由地址
  {
    path: '*',
    redirect: 'home'
  }
]