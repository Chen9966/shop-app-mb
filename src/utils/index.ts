import axios from 'axios'
import React, { useState } from 'react'
import { Spin } from "antd";
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
})

instance.interceptors.request.use(config => {
    NProgress.start()
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})
instance.interceptors.response.use(response => {
    NProgress.done()
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

export default instance