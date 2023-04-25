import request from '../utils/request';


// 新增地址
export const addAddress = (options:any)=>{
    return request({  
      method:'post',
      url:'/user/addAddress',
      data:options
    })
  }
  
  // 删除地址
  export const delAddress = (options:any) =>{
    return request({  
      method:'post',
      url:'/user/deleteAddress',
      data:options
    })
  }

  //获取地址列表  参数 customer_id 用户id     使用不了
  export const getAddressList= (options:any) =>{
    return request({  
      method:'post',
      url:'/user/getAddress',
      data:options
    })
  }


  //defaultAddress  设置默认收获地址  参数id, prime, customer_id
export const defaultAddress = (options:any) =>{
  return request({  
    method:'post',
    url:'/user/defaultAddress',
    data:options
  })
}

// getDefaultAddress  获取默认收获地址
export const getdefault = (options:any) =>{
  return request({  
    method:'post',
    url:'/user/getDefaultAddress',
    data:options
  })
}

