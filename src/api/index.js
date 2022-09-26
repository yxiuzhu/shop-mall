// 当前模块：API统一管理
import requests from './request'
import mockRequests from './mockAjax'
// 三级联动接口
// api/product/getBaseCategoryList  get  无参数
// 发请求：axios发请求返回结果Promise对象
// 此接口获取的信息需要把结果返回
export const reqCategoryList = () =>
  requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  })

// 获取mock的banner数据（轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取search搜索模块数据 地址：/api/list 请求方式：post 参数：需要带参数

// 当前这个函数需不需要接受外部传递参数
export const reqGetSearchInfo = (params) =>
  requests({ url: '/list', method: 'post', data: params })

//获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式：get
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: 'get' })

//将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表数据接口
//URL:/api/cart/cartList   method:get
export const reqCartList = () =>
  requests({ url: '/cart/cartList ', method: 'get' })

//删除购物产品的接口
//URL:/api/cart/deleteCart/{skuId}   method:DELETE
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//修改商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get
export const reqUpdateCheckedByid = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
