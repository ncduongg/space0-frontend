import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Util from "../Util/Util";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sreach, setSreach] = useState("");
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    // Chỉ hiện nút khi kéo xuống quá 600px
    const toggleVisibility = () => {
      if (window.pageYOffset > 750) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const onHandlerSubmitSreach = (e) => {
    if (e.key === "Enter") {
      if (router.pathname === "/" || !router.pathname.startsWith('/sreach')) {
        Notiflix.Loading.standard("Loading...", {
          backgroundColor: "rgba(0,0,0,0.8)",
        });
        setTimeout(() => {
          router.push(
            "/sreach/" +
              Util.convertSreachkey(sreach, "en")
          );
          Notiflix.Loading.remove();
        }, 1500);
      } else {
        Notiflix.Block.standard(".product-list", "Loading...", {
          backgroundColor: "rgba(0,0,0,0.8)",
          messageColor: "rgba(0,223,154,1)",
        });
        setTimeout(() => {
          Notiflix.Block.remove(".product-list");
        }, 1500);
        router.push(
          "/sreach/" +
            Util.convertSreachkey(sreach, "en")
        );
      }
    }
  };

  return (
    <div
      className={classNames(
        "sticky top-0 z-[1]",
        isVisible
          ? "bg-black"
          : router.pathname === "/"
          ? "bg-nav-opacity"
          : "bg-black"
      )}
    >
      <div className="flex justify-start items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl  font-bold text-[#00df9a] m-4">
          <Link href="/">SPACE.</Link>
        </h1>
        <div className="w-full">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="first"
            name="first"
            on
            placeholder="Tìm kiếm"
            value={sreach}
            onChange={(e) => {
              console.log("e : " + e?.target?.value.toString());
              setSreach(e?.target?.value.toString());
            }}
            onKeyDown={onHandlerSubmitSreach}
          />
        </div>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link href="#">Home</Link>
          </li>
          <li className="p-4">
            <Link href="#">Shop</Link>
          </li>
          <li className="p-4">
            <Link href="#">Blog</Link>
          </li>
          <li className="p-4">
            <Link href="#">About</Link>
          </li>
          <li className="p-4">
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="cursor-pointer block md:hidden">
          {nav ? <AiOutlineMenu size={20} /> : ""}
        </div>
        <div
          className={
            !nav
              ? "fixed top-16 right-0 w-[100%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-700 md:hidden"
              : "fixed right-[-100%]"
          }
        >
          <ul className="p-4 uppercase">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Shop</li>
            <li className="p-4 border-b border-gray-600">Blog</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
            {!nav ? (
              <li
                onClick={handleNav}
                className="p-4 border-b border-gray-600 cursor-pointer"
              >
                Close
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
