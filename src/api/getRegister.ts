import request from "@/utils/request";
// 请求注册接口
// /user/register
export const getRegister = (option:any) =>{
    return request({ method: 'post', url: "/user/register", data: option })
}