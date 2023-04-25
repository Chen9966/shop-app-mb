import request from '../../utils/index'
// 通过一级分类获取二级分类
export const getName = (parent_name: string) => {
    return request({ method: 'post', url: '/wares/getName', data: { parent_name } })
}
// 通过id获取详细商品内容
export const getSpu = (id: number) => {
    return request({ method: 'post', url: '/store/getSpu', data: { id } })
}
// 通过以及分类名获取所有一级分类商品
export const getProduct = (data: any) => {
    return request({ method: 'post', url: '/type/getproduct', data })
}

// 添加购物车
export const addShopCarList = (data: any) => {
    return request({ method: 'post', url: '/shopCar/addShopCar', data })
}
// 购物车数据
export const getShopCarList = (data: any) => {
    return request({ method: 'post', url: '/shopcar/getShopCar', data })
}
// 删除购物车
export const deleteShopCar=(data:any)=>{
    return request({method:'post',url:'/shopCar/deleteShopCar',data})
}
