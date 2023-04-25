import request from '../utils/request';


/**
 * 获取一级菜单
 * url: /type/getParentName
 */
export  const getTypeOne = ()=>{
    return request({
        method:'post',
        url:"/type/getParentName"
    })
} 
/**
 * 获取二级菜单
 * url: /wares/getSecond
 * 参数：一级菜单 parent_name
 */

export const getTypeTwo = (parent_name:any)=>{
    return request({
        method:'post',
        url:"/wares/getSecond",
        data:parent_name
    })
} 

