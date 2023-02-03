
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PublicApi from "../../apis/PublicApi";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { PublicLayout } from "../../layouts/public";
import Comment from "./components/Comment";
import ProductAuction from "./components/ProductAuction";
import ProductContent from "./components/ProductContent";
import ProductDetail from "./components/ProductDetail";

const Product = () => {
  const router = useRouter();
  
  const [product,setProduct] = useState({});
  useEffect(()=>{
    if(router.isReady){
      const id = router.query.product;
      console.log("id : " + id);
      PublicApi.getProductDetail(id).then(res =>{
        setProduct(res.data);
      }).catch(error =>{
        console.log(error);
      })
    }
  },[router.isReady,router.query.product])
  return (
    <>
        <ProductDetail product={product}/>
        <ProductAuction />
        <ProductAuction />
        <ProductContent notes={product.prod_note} />
        <Comment />
        <Comment />
        <Comment />
    </>
  );
};
Product.Layout = PublicLayout;
export default Product;
