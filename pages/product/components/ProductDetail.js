import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Notiflix, { Notify } from "notiflix";
import { useContext, useEffect, useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { IconContext } from "react-icons";
import { AiOutlineCopy } from "react-icons/ai";
import { BsFillCartPlusFill, BsFillInboxesFill } from "react-icons/bs";
import AlertCustom from "../../../components/AlertCustom";
import CountDown from "../../../components/CountDown";
import useAuth from "../../../hooks/useAuth";
import { CartContext } from "../../../Util/CartProvider";

const ProductDetail = ({ product }) => {
  const [countDate, setCountDate] = useState(
    new Date("Dec 25, 2022 15:37:25").getTime()
  );
  const { profile, firstLOading } = useAuth();
  const [url, setUrl] = useState();
  const route = useRouter();
  const urlIMG = "http://localhost:8686/api/file/images/";
  const [cart, setCart] = useContext(CartContext);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  useEffect(() => {
    setUrl(`${origin}${route.asPath}`);
  }, [origin, route.asPath, url]);
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url);
    Notiflix.Notify.success("Đã Copy Url vào bộ nhớ đệm", {
      timeout: 2000,
      clickToClose: true,
    });
  };
  const handlerMuaNgay = (options) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <AlertCustom
          title="Thông báo mua sản phẩm"
          message={`Bạn có chắc chắn muốn mua ${product.prod_name} với giá ${product.prod_amount_dis} ?`}
          onConfirm={muasanpham}
          onCancel={onClose}
        />
      )
    });
  }
  function muasanpham (o) {
    let checkDuplicate = cart.some(i  => i.prod_id === product.prod_id)
    if(checkDuplicate) {
      Notify.warning(product.prod_name + " đã tồn tại trong giỏ hàng của bạn")
      route.push('/cart')
      return;
    }
    if(!profile?.data || profile.data.response_code !== "000") {
      alert("Bạn chưa đăng nhập, hãy đăng nhập để mua tài khoản nhé!")
      route.push('/auth/login')
    }
  }
  const addToCart = () => {
    let checkDuplicate = cart.some(i  => i.prod_id === product.prod_id)
    if(checkDuplicate) {
      Notify.warning(product.prod_name + " đã tồn tại trong giỏ hàng của bạn")
      return;
    }
    Notify.success("Thêm thành công " + product.prod_name + " vào giỏ hàng")
    setCart([...cart, {prod_id : product.prod_id,prod_name:product.prod_name,prod_amount:product.prod_amount,prod_amount_dis:product.prod_amount_dis}]);
  };
  return (
    <>
      <div className="text-white flex max-w-[1340px] mx-auto pb-8 gap-4 border-dashed border-b-2 border-[#00df9a]">
        <img
          className="w-[470px] rounded-xl mr-3 "
          src={urlIMG + product.prod_image}
          alt="/"
        />
        <div className="w-full">
          <p>Sản phẩm</p>
          <h2 className="text-[30px]">{product.prod_name}</h2>

          <div className="flex">
            <BsFillInboxesFill />
            <p className="pl-3">
              Tình trạng: <span className="text-[#00df9a]">Còn hàng</span>
            </p>
            <p className="pl-3">
              {product.prod_active_auction === "active" && (
                <>
                  Còn lại:{" "}
                  <CountDown
                    countDownClassName="opacity-90 text-[#00df9a]"
                    countDate={countDate}
                  />
                </>
              )}
            </p>
          </div>
          <p className="font-bold text-[#00df9a] text-[23px]">
            {product.prod_amount_dis} VNĐ
          </p>
          <p className="line-through">{product.prod_amount} VNĐ</p>
          {(() => {
            if (product.prod_active_auction === "active" ) {
              return (
                <div className="flex gap-4">
                  <input
                    className="bg-gray-200 border-2  border-gray-200 rounded-3xl py- w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    contentEditable="true"
                    placeholder="Nhập vào số tiền bạn muốn đấu giá"
                  />
                  <button
                    id="daugia"
                    className="bg-[#00df9a] px-4  border-2 border-[#00df9a] rounded-md whitespace-nowrap"
                  >
                    Đấu giá
                  </button>
                </div>
              );
            }
          })()}
          <div className="flex justify-items-start">
            <button
              onClick={handlerMuaNgay}
              id="muangay"
              className="py-2 px-4  border-2 bg-[#068ff1] border-[#068ff1] rounded-md m-3"
            >
              Mua Ngay
            </button>
            <IconContext.Provider
              value={{
                color: "white",
                size: "45px",
                className:
                  "border-[#00df9a] py-2 my-3 mx-3 px-1 bg-[#00df9a] rounded-md cursor-pointer",
              }}
            >
              <div>
                <BsFillCartPlusFill title="Thêm vào giỏ hàng" onClick={addToCart} textRendering= "sđấ"/>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-[550px] border-l-2 pl-3 border-[#00df9a]">
          <p className="font-light">Mã sản phẩm</p>
          <p className="font-bold">DBF</p>
          <p className="text-[20px] font-bold">Giới thiệu bạn bè</p>
          <p className="text-xs">
            Bạn bè được giảm 5% giá sản phẩm và bạn nhận hoa hồng vĩnh viễn.
          </p>
          <div className="flex">
            <input
              className="bg-gray-200 appearance-none border-2  border-gray-200 rounded-3xl py- w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="text"
              id="first"
              name="first"
              contentEditable={false}
              value={url}
            />
            <IconContext.Provider
              value={{
                color: "white",
                size: "35px",
                className:
                  "border-[#00df9a] m-2 bg-[#00df9a] px-1 rounded-md cursor-pointer",
              }}
            >
              <div>
                <AiOutlineCopy title="Copy" onClick={handleCopyUrl} />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
