import { reqAddressInfo, reqOrderInfo } from '@/api'
const state = {
  address: [],
  orderInfo: {}
}
const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address
  },
  GETORDER(state, orderInfo) {
    state.orderInfo = orderInfo
  }
}
const actions = {
  async getUserAddress({ commit }) {
    const result = await reqAddressInfo()
    if (result.code === 200) {
      commit('GETUSERADDRESS', result.data)
    }
  },
  // 获取商品清单数据
  async getOrder({ commit }) {
    const result = await reqOrderInfo()
    // console.log(result)
    if (result.code === 200) {
      commit('GETORDER', result.data)
    }
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
