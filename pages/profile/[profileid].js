import { useRouter } from "next/router";
import React from "react";
import { IconContext } from "react-icons";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PrivateLayOut from "../../layouts/private";
import Private from "../../layouts/private";
import Account from "./components/Account";
import HistoryBuy from "./components/HistoryBuy";
import MenuProfile from "./components/MenuProfile";

export default function Profile() {
  const route = useRouter();
  const params = route.query;
  return (
    <div className="text-white">
      <div className="w-full">
        <div className="max-w-[1340px] flex mx-auto">
        <MenuProfile menu={params.menu} profileid={params.profileid}/>
        {
          (() =>{
            switch(params.menu){
              case 'taikhoan' :
                return <Account />
              case 'lichsudonhang':
                return <HistoryBuy />
            }
          })()
        }
        </div>
      </div>
    </div>
  );
}
Profile.Layout = PrivateLayOut
