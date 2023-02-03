import axiosClients from "./axios"

const PrivateApi = {
    createDonate (body) {
        return axiosClients.post("/api/private/donate",body)
    },
    udpateDonate (body) {
        return axiosClients.put("/api/private/donate",body)
    }
}
export default PrivateApi