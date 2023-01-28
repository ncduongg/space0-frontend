import Head from "next/head";
import { useEffect } from "react";
import PublicApi from "../apis/PublicApi";
import Analytics from "../components/Analytics";
import Footer from "../components/Footer";
import GoToTheMoon from "../components/GoToTheMoon";
import Hero from "../components/Hero";
import HotKeyWordList from "../components/HotKeyWordList";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Study from "../components/Study";
import TopSale from "../components/TopSale";
import { PublicLayout } from "../layouts/public";
import { PublicMainLayout } from "../layouts/publicmain";

export default function Home() {
  // useEffect(() =>{
  //   (async ()=>{
  //      const res =  await PublicApi.getCategories()
  //      console.log(res);
  //   })()
  // },[])
  return (
    <div>
      <Head>
        <title>Space0 - Shop bản quyền</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
      <Hero /> 
      <HotKeyWordList />
      <TopSale />
      <Analytics />
      <Newsletter />
      <Study />
      <Study />
      <GoToTheMoon />
      </main>
    </div>
  );
}
Home.Layout = PublicMainLayout
