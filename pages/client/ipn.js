import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PrivateApi from "../../apis/PrivateApi";
import { PublicLayout } from "../../layouts/public";

const Ipn = () => {
  const router = useRouter();
  console.log(router.query);
  useEffect(() =>{
    const query = router.query;
    const body = {
        do_id : query.vpc_MerchTxnRef,
        do_data : JSON.stringify(query),
        do_state : query.vpc_TxnResponseCode == '0' ? 'approved' : 'failed'
    }
    PrivateApi.udpateDonate(body).then(res =>{
        console.log(res.data);
    }).then(error =>{
        console.log(error);
    })
  },[router.isReady, router.query])
  return (
    <>
      <div className="text-white">
        <div className="w-full">
          <div className="flex flex-col mx-auto max-w-[1240px] ">
            {(() => {
              if (router.query.vpc_TxnResponseCode == "0") {
                return (
                  <>
                    <div className="flex flex-col mx-auto">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
                        className="w-[130px] mx-auto my-7"
                      />
                      <strong className="text-[#00df9a] mx-auto text-2xl pb-4">
                        {" "}
                        {router.query.vpc_Message}{" "}
                      </strong>
                    </div>
                    <p className="my-2 mx-auto">
                      Mã đơn hàng: {router.query.vpc_MerchTxnRef}
                    </p>
                    <p className="my-2 mx-auto">
                      Số tiền nạp: {router.query.vpc_Amount} VNĐ
                    </p>
                    <p className="my-2 mx-auto">
                      Mã trạng thái đơn hàng: {router.query.vpc_TxnResponseCode}
                    </p>
                    <div className="text-center text-[#00df9a] mb-4">
                      <Link href="/donate" className="cursor-pointer">Thử lại</Link>
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};
Ipn.Layout = PublicLayout;
export default Ipn;
