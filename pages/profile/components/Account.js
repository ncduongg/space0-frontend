import Image from "next/image";

const Account = () => {
  return (
    <>
      <div className="w-full flex-[1_1_90%]  h-auto bg-white bg-gradient-to-r from-slate-800 to-[#00df9a] rounded-br-3xl">
        <div className="flex-col border-b-teal-50 border-b-2 pb-3 mr-5 ">
          <h1 className="font-medium py-3">Tổng quan</h1>
          <div className="flex justify-start gap-10">
            <div className="pr-4">
              <p className="font-light text-[#00df9a]">Tên đăng nhập</p>
              <p>ncduong</p>
              <p className="font-light text-[#00df9a]">Số dư</p>
              <p>0đ</p>
            </div>
            <div className="pr-4">
              <p className="font-light text-[#00df9a]">Email</p>
              <p>ncduong.info@gmail.com</p>
              <p className="font-light text-[#00df9a]">Tích lũy</p>
              <p>0đ</p>
            </div>
            <div className="pr-4">
              <p className="font-light text-[#00df9a]">Họ và Tên</p>
              <p>Nguyễn Công Dương</p>
              <p className="font-light text-[#00df9a]">Ngày tham gia</p>
              <p>2018-08-20 22:47:32</p>
            </div>
            <div className="pr-4">
              <p className="font-light text-[#00df9a]">Nhóm khách hàng</p>
              <p>Member</p>
            </div>
          </div>
        </div>
        <div className="flex px-4 pt-8 gap-5 ">
          <Image
            className="rounded-full"
            src="https://cdn.divineshop.vn/image/catalog/icon/avatar-khach-hang-2-52544.png?hash=1649933269"
            width={200}
            height={100}
            alt=""
          ></Image>
          <div className="flex">
            <button className="border-[#00df9a] border-2 px-4 py-3 rounded-2xl m-auto hover:bg-[#00df9a]">
              Sửa ảnh đại diện
            </button>
          </div>
          <div className="flex-col my-auto">
            <strong>
              <i>
                <p>Vui lòng chọn ảnh nhỏ hơn 5MB</p>
              </i>
            </strong>
            <i>
              <p>Chọn hình ảnh phù hợp, không phản cảm</p>
            </i>
          </div>
        </div>
        <div className="flex-col py-9">
          <h4 className="font-medium">Cập nhật mật khẩu</h4>
          <div className="flex gap-5">
            <div className="relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Mật khẩu
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Nhập lại
              </label>
            </div>
            <button className="border-[#00df9a] border-2 px-4 py-1 rounded-2xl hover:bg-[#00df9a]">
             Cập nhật
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Account;
