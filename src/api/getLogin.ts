import request from '../utils/request';

export const getLogins = (options:any)=> {
    return  request({ method: 'post', url: "/user/login", data:options})
}

export const changePassword = (option:any)=>{
    return request({method:'post',url:'/user/changePassword',data:option})
}