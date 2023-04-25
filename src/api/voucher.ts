import request from '@/utils/request'

// 获取商铺的优惠券  参数是商品id
export const getVoucher = (options:any)=> {
    return  request({ 
        method: 'post',
        url: "/voucher/getVoucher", 
        data:options
    })
}