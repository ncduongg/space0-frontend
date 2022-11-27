import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Profile() {
  const route = useRouter();
  const params = route.query;
  console.log(params.profileid);
  return (
    <div className="text-white">
      <Navbar />
      Nguyeenx Cong DUong neeee + {JSON.stringify(route.query)}
      <Footer />
    </div>
  );
}
