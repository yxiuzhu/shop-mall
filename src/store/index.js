import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件的方式注册vuex
Vue.use(Vuex)

// 引入小仓库
import home from './home'
import search from './search'

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  modules: {
    home,
    search
  }
})