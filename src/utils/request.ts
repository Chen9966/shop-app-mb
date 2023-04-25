import axios from 'axios';
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
const instance = axios.create({
    baseURL: '/api',
    // timeout:5000
})

instance.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8"
    NProgress.start()
    return config
}, function (error) {
    return Promise.reject(error)
}
)

instance.interceptors.response.use(ctx => {
    NProgress.done()

    return ctx.data
}, function (error) {
    return Promise.reject(error)
}
)

export default instance;