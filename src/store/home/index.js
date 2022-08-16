import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
// home模块的小仓库
const state = {
  // home仓库中的三级菜单数据
  categoryList: [],
  // mock的轮播图数据
  bannerList: [],
  // floor组件的数据
  floorList: []
}

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}

const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    // console.log(result)
    if (result.code === 200) {
      commit("CATEGORYLIST", result.data)
    }
  },
  // 获取首页的轮播图数据banner
  async getBannerList({ commit }) {
    let result = await reqGetBannerList()
    // console.log(result)
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  // 获取floor的数据
  async getFloorList({ commit }) {
    let result = await reqGetFloorList()
    if (result.code === 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}