import axiosClients from "./axios";
const AuthApi = {
    register (body) {
        const bodyReq = {
            username: body.taikhoan,
            password:body.matkhau,
            email:body.email,
            phone:body.phone,
            name:body.hovaten
        }
        return axiosClients.post('/api/auth/register',bodyReq)
    },
    login (body) {
        return axiosClients.post('/api/auth/login',body,{withCredentials:true})
    },
    logout(body){
        return axiosClients.post('/api/auth/logout',body)
    }
}
export default AuthApi;