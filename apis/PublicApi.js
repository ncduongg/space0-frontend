import axiosClients from "./axios"

const PublicApi = {
    getCategories(){
        return axiosClients.get('/api/public/categories')
    },
    getProducts(cateid,key){
        return axiosClients.get('/api/public/products?cate_id=' + cateid +'&key=' + key )
    },
    getProductDetail(id){
        console.log("id : " + id);
        return axiosClients.get('/api/public/product/'+ id)
    }
}
export default PublicApi