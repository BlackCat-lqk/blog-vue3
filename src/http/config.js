import axios from 'axios'
import { ElMessage } from 'element-plus';

// 创建axios实例
const Server = axios.create({
    // 设置baseURL地址
    // baseURL:'http://localhost:8081',
    baseURL:'https://api.uomg.com',
    // 设置请求头
    headers:{
        'Content-Type':'application/json;charset=UTF-8',
    },
    // 配置超时时间
    timeout:10000,
})

// 请求拦截器
Server.interceptors.request.use((config)=>{
    const number = Math.random(2)
    window.sessionStorage.getItem('number') === null ? window.sessionStorage.setItem('number', number) : window.sessionStorage.getItem('number');
    // 务必返回config
    return config
})

// 响应拦截器
Server.interceptors.response.use((response) => {
    // 获取接口返回结果
    const res = response.data;
    if(res.code === 1){
        return res;
    }else{
        ElMessage.error('请求失败');
        return res;
    }
})

export default Server