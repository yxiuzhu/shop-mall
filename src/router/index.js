// 配置路由的地方
import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from "./routes";
// 使用插件
Vue.use(VueRouter)


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
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
})
