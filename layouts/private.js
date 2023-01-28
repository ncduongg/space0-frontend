import React from "react";
import Auth from "../components/Auth";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivateLayOut = ({children}) => {
  return (
    <Auth>
      <Navbar />
      {children}
      <Footer />
    </Auth>
  );
};

export default PrivateLayOut;
