import { Input } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { AiOutlineFilter } from "react-icons/ai";

const HistoryBuy = () => {
  return (
    <>
      <div className="w-full flex-[1_1_90%]  h-auto bg-white bg-gradient-to-r from-slate-800 to-[#00df9a] rounded-br-3xl">
        <div className="flex-col border-b-teal-50 border-b-2 pb-3 mr-5">
          <h1 className="font-medium py-3">Lịch sử đơn hàng</h1>
          <i>
            <p>
              Hiển thị thông tin các sản phẩm bạn đã mua tại{" "}
              <span className="text-[#00df9a] cursor-pointer">SPACE.</span> Shop
            </p>
          </i>
        </div>
        <div className="flex mt-5 gap-3 mr-5">
          <div className="relative">
            <input
              type="text"
              id="madonhang"
              className="block rounded-xl px-2 pb-2 pt-3 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00df9a] focus:outline-none focus:ring-0 focus:border-[#00df9a] peer"
              placeholder=""
            />
            <label
              htmlFor="madonhang"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#00df9a] peer-focus:dark:text-[#00df9a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Mã đơn hàng
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="sotientu"
              className="block rounded-xl px-2 pb-2 pt-3 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00df9a] focus:outline-none focus:ring-0 focus:border-[#00df9a] peer"
              placeholder=""
            />
            <label
              htmlFor="sotientu"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#00df9a] peer-focus:dark:text-[#00df9a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Số tiền từ
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="sotienden"
              className="block rounded-xl px-2 pb-2 pt-3 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00df9a] focus:outline-none focus:ring-0 focus:border-[#00df9a] peer"
              placeholder=""
            />
            <label
              htmlFor="sotienden"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#00df9a] peer-focus:dark:text-[#00df9a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Só tiên đến
            </label>
          </div>
          <div className="flex gap-3">
            <Input type="date" width="186px" /> <i className="my-auto">to</i>{" "}
            <Input type="date" width="186px" />
          </div>
          <button className=" bg-[#1e293b]  rounded-2xl px-4 flex">
            <IconContext.Provider value={{ color: "white", size: "25px", className:'my-auto'}}>
              <AiOutlineFilter />
            </IconContext.Provider>
            <p className="my-auto">Lọc</p>
          </button>
        </div>
        <div className="mr-5 ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Thời gian
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Mã đơn hàng
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Sản phẩm
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Thành tiền
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Mark
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Otto
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @mdo
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @mdo
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Jacob
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Thornton
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                      </tr>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td
                          colSpan="2"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                        >
                          Larry the Bird
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HistoryBuy;
