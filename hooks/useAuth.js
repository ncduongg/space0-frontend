import { useRouter } from "next/router";
import { Notify } from "notiflix";
import useSWR from "swr";
import AuthApi from "../apis/AuthApi";
import axiosClients from "../apis/axios";

const useAuth = (op) => {
  const router = useRouter();
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/api/user/profile", {
    // dedupingInterval: (60 * 60) & 1000, // 1hr
    // revalidateOnFocus: false,
    ...op
  });
  const firstLOading = profile === undefined && error === undefined
  async function login(body) {
    await AuthApi.login(body).then((res) => {
      if(res.data.response_code ==='000'){
        Notify.success(res.data.message)
        router.push("/profile/"+body.username +"?menu=taikhoan")
      } else {
        Notify.failure(res.data.message)
      }
    }).catch(error =>{
        return error;
    });
    await mutate();
  }
  async function logout() {
    mutate({},false);
  }
  return {profile,error,login,logout,firstLOading}
};
export default useAuth;