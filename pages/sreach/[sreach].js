import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { PublicLayout } from "../../layouts/public";
import Util from "../../Util/Util";
import Filter from "./components/Filter";
import MenuCategory from "./components/MenuCategory";
import ProductList from "./components/ProductList";

const Sreach = ({data}) => {
    const [key,setKey] = useState();
    const router = useRouter();
    const query = router.query;
    useEffect(() =>{
        if (router.isReady){
            setKey(Util.convertSreachPrams(query.sreach))
        }
    },[query.sreach, router.isReady])
    return (
        <>
        <MenuCategory />
        <Filter keysreach={key}/>
        <ProductList />
        </>
    )
}
Sreach.Layout = PublicLayout
export default Sreach