
import request from "@/utils/request";
// 请求获取订单
// /order/getOrder  参数:store_id , page ,count
export const getOrder = (option:any)=> {
    return  request({ method: 'post', url: "/order/getUserOrder", data: option })
}
//删除订单
//deleteOrder

export const deleteOrder = (option:any)=> {
    return  request({ method: 'post', url: "/order/deleteOrder", data: option })
}