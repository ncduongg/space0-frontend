import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import PublicApi from "../../../../apis/PublicApi";
import { PublicLayout } from "../../../../layouts/public";
import Util from "../../../../Util/Util";
import Filter from "../../components/Filter";
import MenuCategory from "../../components/MenuCategory";
import ProductList from "../../components/ProductList";

const Index = ({data}) => {
    const [key,setKey] = useState();
    //const [url,setUrl] = useState();
    const [categories,setCategories] = useState([]);
    const [products,setProducts] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const router = useRouter();
    const query = router.query;
    useEffect(() =>{
        if (router.isReady){
            setKey(Util.convertSreachPrams(query.sreach))
            //setUrl(query.category)
        }
    },[query.category, query.sreach, router.isReady])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>{
        PublicApi.getCategories().then((res) =>{
            setCategories(res.data)
        }).catch(error =>{
            Notify.failure(error);
        })
    },[])
    useEffect(() =>{
        PublicApi.getProducts(query?.category,'').then(res =>{
            console.log(res.data);
            setProducts(res.data)
        }).catch(error =>{
            Notify.failure(error);
        });
    },[query.category, query.sreach, router.isReady])
    function onFilterChange (filterProductsChange) {
        setFilterProducts(filterProductsChange)
    }
    return (
        <>
        <MenuCategory listCategory = {categories} keysreach={key}/>
        <Filter keysreach={key} products={products} onFilterChange={onFilterChange}/>
        <ProductList products={products} />
        </>
    )
}
Index.Layout = PublicLayout
export default Index