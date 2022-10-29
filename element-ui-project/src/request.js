import axios from 'axios';


const baseURL = '/api';
const instance = axios.create({
    timeout: 3000,
    baseURL,
    headers: { 'X-Custom-Header': 'foobar' }
});

//请求工具函数  负责发送请求 地址 方式 数据
const request = (url, method, submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}

export default request