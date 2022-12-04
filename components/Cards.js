import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Item from "../assets/imgItems/laptop.jpg";
import classnames from "classnames";
import CountDown from "./CountDown";
const Cards = ({ colortext }) => {
  const [countDate, setCountDate] = useState(
    new Date("Dec 5, 2022 15:37:25").getTime()
  );
  return (
    <>
      <Link href="/product/d">
        <div
          className={classnames(
            "flex flex-col text-white w-80 relative py-2 shadow-slate-500 hover:scale-110 duration-300",
            colortext
          )}
        >
          <Image src={Item} alt="" className="w-full py-2 rounded-2xl" />
          <div>
            <h3>Tài khoản học ngoại ngữ Duolingo 1 năm</h3>
            <div className="flex">
              <p className="pr-1 font-bold text-[#00df9a]">25.000 đ</p>
              <p className="pr-2 line-through text-[#DC3545]">15.000 đ</p>
            </div>
          <p>Sắp đến hạn đấu giá: <CountDown countDownClassName="bg-[#00df9a] py-2 px-2 opacity-80 rounded-md" countDate={countDate}/></p>
          </div>
          <span className="bg-[#DC3545] p-1 rounded-lg absolute top-7 right-3">
            {" "}
            -83%
          </span>
        </div>
      </Link>
    </>
  );
};

export default Cards;
