import axiosClients from "./axios"

const PublicApi = {
    getCategories(){
        return axiosClients.get('/api/public/categories')
    }
}
export default PublicApi