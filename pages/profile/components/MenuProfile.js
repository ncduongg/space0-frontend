import { IconContext } from "react-icons";
import { AiFillIdcard, AiFillSecurityScan, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const MenuProfile = () => {
  return (
    <>
      <div>
        <div className="flex t gap-2 border-l-4 border-[#00df9a] py-5 pl-4 pr-32 bg-slate-800 cursor-pointer">
          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <AiOutlineUser />
          </IconContext.Provider>
          <p className="my-auto">Tài Khoản</p>
        </div>
        <div className="flex t gap-2 py-5 pl-4 pr-32 bg-slate-800 cursor-pointer">
          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
          <p className="my-auto">Lịch sử đơn hàng</p>
        </div>
        <div className="flex t gap-2 py-5 pl-4 pr-32 bg-slate-800 cursor-pointer">
          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <AiFillSecurityScan />
          </IconContext.Provider>
          <p className="my-auto">Lịch sử giao dịch</p>
        </div>
          <div className="flex t gap-2 py-5 pl-4 pr-32 bg-slate-800 cursor-pointer">
          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <AiFillIdcard />
          </IconContext.Provider>
          <p className="my-auto">Mật khẩu và bảo mật</p>
        </div>
      </div>
    </>
  );
};
export default MenuProfile;
