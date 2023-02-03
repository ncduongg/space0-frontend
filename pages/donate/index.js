import { Notify } from "notiflix";
import { useState } from "react";
import PrivateApi from "../../apis/PrivateApi";
import useAuth from "../../hooks/useAuth";
import PrivateLayOut from "../../layouts/private";
const CryptoJS = require("crypto-js");
const Donate = () => {
  const { profile } = useAuth();
  console.log(profile);
  const arrayVari = {
    AgainLink: "https://beta-dev.fptplay.vn/",
    Title: "Thanh nạp tiền Shop Space",
    vpc_Locale: "vn",
    vpc_Version: "2",
    vpc_Command: "pay",
    vpc_Merchant: "TESTONEPAY",
    vpc_AccessCode: "22772CEF",
    vpc_MerchTxnRef: "SPACE_" + new Date().getTime(),
    vpc_OrderInfo: "Thanh toán nạp tiền vào Shop Space",
    vpc_Amount: 50000,
    vpc_ReturnURL: "http://localhost:3000/client/ipn/",
    vpc_TicketNo: "23.59.151.108",
    mode: "TEST_PAYGATE",
  };
  const [values, setValues] = useState(arrayVari);
  const handlerOnChangeAmount = (e) => {
    const newValues = {
      ...values,
    };
    newValues["vpc_Amount"] = e.target.value * 100 + "";
    // newValues["vpc_SecureHash"] = hashKey(newValues);
    setValues(newValues);
  };
  const hashKey = (valueHash) => {
    let k = "";
    const ordered = Object.keys(valueHash)
      .sort()
      .reduce((obj, key) => {
        obj[key] = valueHash[key];
        return obj;
      }, {});
    Object.keys(ordered).forEach((i) => {
      if (i.startsWith("vpc_") && i !== "vpc_SecureHash") {
        if (k.length === 0) {
          k = i + "=" + ordered[i];
        } else {
          k = k + "&" + i + "=" + ordered[i];
        }
      }
    });

    const key = CryptoJS.enc.Hex.parse("6D0870CDE5F24F34F3915FB0045120DB");
    const hash = CryptoJS.HmacSHA256(k, key);
    console.log("= " + k);
    return CryptoJS.enc.Hex.stringify(hash).toUpperCase();
  };
  const handleOnSumbit = async () => {
    const newValues = {
      ...values,
    };
    newValues["vpc_SecureHash"] = hashKey(values);
    setValues(newValues);
    var formBody = [];
    for (var property in values) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(values[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const body = {
      do_id:values.vpc_MerchTxnRef,
      do_amount: values.vpc_Amount,
      user_id: profile.data.content.user_id
    }
    PrivateApi.createDonate(body)
      .then((res) => {
        if (res.data.response_code === "000") {
          fetch("https://dev.onepay.vn/client/qt/do/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: formBody,
          })
            .then((res) => {
              if (res.redirected) {
                window.location.href = res.url;
                return;
              }
            })
            .catch((error) => {
              Notify.failure(error);
            });
        }
      })
      .catch((error) => {
        Notify.failure(error);
      });
  };
  return (
    <>
      <div className="text-white">
        <div className="w-full">
          <div className="max-w-[1240px] flex mx-auto flex-row my-7">
            <div className="flex flex-col w-full">
              <p className="text-2xl text-[#00df9a] mx-auto">Chuyển khoản</p>
              <img
                className="w-[550px] mx-auto rounded-lg my-6"
                src="https://zentech.vn/media/blog/2021/07/ma-vietqr-mau-vib.jpg"
              />
              <p className="text-xl">
                - Thông tin tài khoản :{" "}
                <strong className="text-[#00df9a]">Nguyễn Công Dương </strong>
              </p>
              <p className="text-lg">
                - Số tài khoản:{" "}
                <strong className="text-[#00df9a]">02299880089999</strong>
              </p>
              <p className="text-lg">
                - Cú pháp chuyển tiền:{" "}
                <strong className="text-[#00df9a]">hoadon ncduong</strong>
              </p>
              <p className="text-lg">- Số tiền tôi thiểu: 50.000VNĐ</p>
              <p>
                ***Chú ý: Đây là hình thức thanh toán được duyệt thủ công, vui
                lòng chờ trong 1 - 2 giờ trong giờ làm việc hoặc 8 giờ trong giờ
                nghỉ. Nếu bạn cần gấp hay liên hệ với admin qua hotlỉne:
                0981944444
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-2xl text-[#00df9a]  mx-auto">
                Sử dụng các phương thức thanh toán khác qua OnePay
              </p>
              <img
                className="w-[250px] rounded-2xl mx-auto my-4"
                src="https://vhost.vn/wp-content/uploads/2014/12/onepay-1.png"
              />
              <form
                action="https://dev.onepay.vn/vpcpay/paydirect.op"
                className="flex"
                method="POST"
              >
                {Object.keys(values).map(
                  (key) =>
                    key !== "vpc_Amount" && (
                      <input
                        type="text"
                        hidden
                        disabled
                        key={key}
                        id={key}
                        value={values[key]}
                      />
                    )
                )}
                <input
                  type="number"
                  className="form-control block mx-auto my-2 w-[300px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="username"
                  onChange={(e) => handlerOnChangeAmount(e)}
                  placeholder="Nhập số tiền muốn nạp"
                />
                <button
                  type="button"
                  onClick={handleOnSumbit}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className=" mx-auto inline-block p-6 bg-[#00df9a] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-outkey"
                >
                  Thanh toán ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Donate.Layout = PrivateLayOut;
export default Donate;
