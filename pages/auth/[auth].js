import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { PublicLayout } from "../../layouts/public";
import FormLogin from "./login/components/FormLogin";
import FormRegister from "./register/components/FormRegister";

const Auth = () => {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <div className="text-white max-w-[1340px] mx-auto">
        <div className="px-6">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png"
                className="w-full"
                alt="Sample image"
              />
            </div>
            {(() => {
              switch (query.auth) {
                case "login":
                  return <FormLogin />;
                case "register":
                  return <FormRegister />;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};
Auth.Layout = PublicLayout;
export default Auth;
