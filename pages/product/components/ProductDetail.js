import Image from "next/image";
import { useRouter } from "next/router";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCopy } from "react-icons/ai";
import { BsFillInboxesFill } from "react-icons/bs";
import Item from "../../../assets/imgItems/laptop.jpg";
import CountDown from "../../../components/CountDown";
const ProductDetail = () => {
  const [countDate, setCountDate] = useState(
    new Date("Dec 25, 2022 15:37:25").getTime()
  );
  const [url,setUrl] = useState();
  const route = useRouter();
  const [dataTabs, setDataTabs] = useState([
    {
      id: 1,
      tabTitle: "1 Tháng",
      tabTitleItem: "Tài khoản Grammarly Premium 1 Tháng",
      tabClass: "py-2 px-4  border-2 border-[#00df9a] rounded-md m-3",
      tabClicked: true,
    },
    {
      id: 2,
      tabTitle: "12 Tháng",
      tabTitleItem: "Tài khoản Grammarly Premium 12 Tháng",
      tabClass: "py-2 px-4  border-2 border-[#00df9a] rounded-md m-3",
      tabClicked: false,
    },
  ]);
  const [title, setTitle] = useState(
    dataTabs.map((i) => {
      if (i.tabClicked) {
        return i.tabTitleItem;
      }
    })
  );
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  useEffect(()=>{
    setUrl(`${origin}${route.asPath}`)
  },[origin, route.asPath, url])
  const handleClickSelect = () => {
    let newArray = dataTabs.map((i) => {
      const newI = {
        ...i,
        tabClicked: !i.tabClicked,
      };
      if (newI.tabClicked) {
        setTitle(newI.tabTitleItem);
      }
      return newI;
    });
    setDataTabs(newArray);
  };
  const handleCopyUrl = () =>{
    navigator.clipboard.writeText(url)
    Notiflix.Notify.success(
      'Đã Copy Url vào bộ nhớ đệm',
      {
        timeout:2000,
        clickToClose:true
      }
    );
  }
  return (
    <>
      <div className="text-white flex max-w-[1340px] mx-auto pb-8 gap-4 border-dashed border-b-2 border-[#00df9a]">
        <Image className="w-[470px] rounded-xl mr-3 " src={Item} alt="/" />
        <div className="w-full">
          <p>Sản phẩm</p>
          <h2 className="text-[30px]">{title}</h2>

          <div className="flex">
            <BsFillInboxesFill />
            <p className="pl-3">
              Tình trạng: <span className="text-[#00df9a]">Còn hàng</span>
            </p>
            <p className="pl-3">
              Còn lại: <CountDown countDownClassName="opacity-90 text-[#00df9a]" countDate={countDate}/>
            </p>
          </div>
          <p className="font-bold text-[#00df9a] text-[23px]">490.000VNĐ</p>
          <p className="line-through">1.500.000VNĐ</p>
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
          <div className="flex justify-items-start hidden">
            {dataTabs.map((btn) => (
              <button
                key={btn.id}
                id={btn.id}
                onClick={handleClickSelect}
                className={
                  btn.tabClicked
                    ? "bg-[#00df9a] " + btn.tabClass
                    : " border-[#00df9a]" + btn.tabClass
                }
              >
                {btn.tabTitle}
              </button>
            ))}
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
            <IconContext.Provider value={{ color: 'white', size: '35px', className:"border-[#00df9a] m-2 bg-[#00df9a] px-1 rounded-md cursor-pointer" }}>
              <div>
                <AiOutlineCopy title="Copy" onClick={handleCopyUrl}/>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
