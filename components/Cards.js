import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Item from "../assets/imgItems/laptop.jpg";
import classnames from "classnames";
import CountDown from "./CountDown";
const Cards = ({ product,colortext }) => {
  console.log(product);
  const [countDate, setCountDate] = useState(
    new Date("Dec 5, 2022 15:37:25").getTime()
  );
  const url = "http://localhost:8686/api/file/images/";
  console.log(url + product.prod_image);
  return (
    <>
      <Link href={`/product/${product.prod_id}`}>
        <div
          className={classnames(
            "flex flex-col text-white w-80 relative py-2 shadow-slate-500 hover:scale-110 duration-300",
            colortext
          )}
        >
          <img src={url + product.prod_image} alt="" className="w-full py-2 rounded-2xl" />
          <div>
            <h3>{product.prod_name}</h3>
            <div className="flex">
              <p className="pr-1 font-bold text-[#00df9a]">{product.prod_amount_dis} đ</p>
              <p className="pr-2 line-through text-[#DC3545]">{product.prod_amount} đ</p>
            </div>
            {
              product.prod_active_auction !== 'inactive' &&  <p>Sắp đến hạn đấu giá: <CountDown countDownClassName="bg-[#00df9a] py-2 px-2 opacity-80 rounded-md" countDate={countDate}/></p>
            }
            {
              product.prod_active_auction === 'inactive' &&  <p>Loại sản phẩm thường,hãy mua không thể đầu giá</p>
            }
          </div>
          <span className="bg-[#DC3545] p-1 rounded-lg absolute top-7 right-3">
            {" "}
            {`- ${Math.round((product.prod_amount - product.prod_amount_dis) / product.prod_amount *100)} %`}
          </span>
        </div>
      </Link>
    </>
  );
};

export default Cards;
