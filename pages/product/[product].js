
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Comment from "./components/Comment";
import ProductContent from "./components/ProductContent";
import ProductDetail from "./components/ProductDetail";

const Product = () => {
  return (
    <>
        <Navbar />
        <ProductDetail />
        <ProductContent />
        <Comment />
        <Comment />
        <Comment />
        <Footer />

    </>
  );
};
/* export async function getStaticProps() {
    const data = [
        {
            title: "duong",
            phone:"0981993333"
        },
        {
            title: "duong1",
            phone:"09819933331111"
        }
    ]
    return {
        props:{data},
        fallback:false
    }
} */
export default Product;
