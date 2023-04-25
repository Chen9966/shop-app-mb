import request from "@/utils/request";
// 请求获取接口
// /user/getMessage
export const getMessage = (option:any)=> {
    return  request({ method: 'post', url: "/user/getMessage", data: option })
}