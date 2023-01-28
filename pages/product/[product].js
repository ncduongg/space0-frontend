
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { PublicLayout } from "../../layouts/public";
import Comment from "./components/Comment";
import ProductAuction from "./components/ProductAuction";
import ProductContent from "./components/ProductContent";
import ProductDetail from "./components/ProductDetail";

const Product = () => {
  return (
    <>
        <ProductDetail />
        <ProductAuction />
        <ProductAuction />
        <ProductContent />
        <Comment />
        <Comment />
        <Comment />
    </>
  );
};
Product.Layout = PublicLayout;
export default Product;
