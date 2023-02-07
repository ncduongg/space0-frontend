import classNames from "classnames";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Util/CartProvider";

const Cart = () => {
  const [cart] = useContext(CartContext);
  
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Chỉ hiện nút khi kéo xuống quá 600px
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <div
        className={classNames(
          "fixed right-5 bottom-5 cursor-pointer animate-bounce hover:animate-spin",
          { "right-6 bottom-28": isVisible }
        )}
      >
        <Link href="/cart">
          <p className="text-white bg-red-600 rounded-full w-6 px-2 top-[-10px] right-0 z-10 absolute">
            {cart.length}
          </p>
          <Image
            src="/trolley.png"
            alt="/"
            width={60}
            height={60}
            className="relative"
          />
        </Link>
      </div>
    </>
  );
};
export default Cart;
