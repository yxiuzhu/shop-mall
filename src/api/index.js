// 当前模块：API统一管理
import requests from './request'
import mockRequests from './mockAjax'
// 三级联动接口
// api/product/getBaseCategoryList  get  无参数
// 发请求：axios发请求返回结果Promise对象
// 此接口获取的信息需要把结果返回
export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList',
  method: 'get'
})

// 获取mock的banner数据（轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取search搜索模块数据 地址：/api/list 请求方式：post 参数：需要带参数
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
// 当前这个函数需不需要接受外部传递参数
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

