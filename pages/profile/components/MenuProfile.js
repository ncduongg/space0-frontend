import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  AiFillIdcard,
  AiFillSecurityScan,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function MenuProfile({ menu,profileid }) {
  const [menuProfile, setMenuProfile] = useState([
    {
      id: "taikhoan",
      title: "Tài Khoản",
      icon: AiOutlineUser,
      status: false,
    },
    {
      id: "lichsudonhang",
      title: "Lịch sử đơn hàng",
      icon: AiOutlineShoppingCart,
      status: false,
    },
    {
      id: "lichsugiaodich",
      title: "Lịch sử giao dịch",
      icon: AiFillSecurityScan,
      status: false,
    },
    {
      id: "baomat",
      title: "Bảo mật",
      icon: AiFillIdcard,
      status: false,
    },
    {
      id: "binhluan",
      title: "Bình lụân của tôi",
      icon: AiFillIdcard,
      status: false,
    },
    {
      id: "sanpham",
      title: "Sản phẩm của tôi",
      icon: AiFillIdcard,
      status: false,
    },
  ]);
  useEffect(() => {
    const q = menuProfile.map((i) => {
      if (i.id === menu) {
        return {
          ...i,
          status: true,
        };
      } else {
        return {
          ...i,
          status: false,
        };
      }
    });
    setMenuProfile(q);
  }, [menu]);
  return (
    <>
      <div className="flex-[1_5_100%] bg-slate-800 rounded-tl-3xl">
        {menuProfile.map((x) => {
          return (
            <Link key={x.id} href={`/profile/${profileid}?menu=${x.id}`}>
              <div
                className={classnames(
                  "flex gap-2 py-5 pl-4 cursor-pointer",
                  x.status && x.id === 'taikhoan' ? "rounded-tl-3xl border-[#00df9a] border-l-4 border-t-[-14px]" : x.status ? "border-[#00df9a] border-l-4"  : ''
                )}
              >
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  {x.icon()}
                </IconContext.Provider>
                <p className="my-auto">{x.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default MenuProfile;
