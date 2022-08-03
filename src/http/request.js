
import Server from './config'

// 封装get请求
const get = (config)=>{
    return Server(
        {
            ...config,
            method:'get',
            params:config.data,
        }
    )
}

// 封装post请求
const post = (config) => {
    return Server(
        {
            ...config,
            method:'post',
            data:config.data
        }
    )
}

export default{
    get,
    post
}