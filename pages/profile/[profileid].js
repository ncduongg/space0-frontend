import { useRouter } from "next/router";
import React from "react";
import { IconContext } from "react-icons";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MenuProfile from "./components/MenuProfile";

export default function Profile() {
  const route = useRouter();
  const params = route.query;
  console.log(params.profileid);
  return (
    <div className="text-white">
      <Navbar />
      <div className="w-full">
        <div className="max-w-[1340px] flex mx-auto">
        <MenuProfile />
        </div>
      </div>
      <Footer />
    </div>
  );
}
