import request from '../utils/request';

/**
 * 获取一级列表
 * url: /type/getproduct
 * 参数：parent_name
 */
export  const getTypeOneList = (parent_name:string,page?:number)=> {
    return  request({ method: "post", url: "/type/getproduct", data: { parent_name,
      page } })
  }
  /**
   * 获取二级列表
   * url: /wares/getSpu
   * 参数：name
   */
  export  const getTypeOTwoList = (name:string,series?:string)=> {
    return  request({ method: "post", url: "/wares/getSpu", data: { name,series } })
  }