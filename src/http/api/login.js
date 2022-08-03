import login from '../request';

const loginApi = (data) => {
    return login.post({
        url:'/api/login',
        data:data,
    })
}

const registerApi = (data) => {
    return login.post({
        url:'/api/registerApi',
        data:data,
    })
}

const getMyMessge = data => {
    return login.get({
        url:'/api/rand.qinghua',
        data:data,
        // {
        //     messge:'json'
        // }
    })
}

export default{
    loginApi,
    registerApi,
    getMyMessge,
}