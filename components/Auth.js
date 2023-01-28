import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth"

const Auth = ({children}) =>{
    const {profile,firstLOading} = useAuth();
    const router = useRouter();
    useEffect(() =>{
        if(!firstLOading && profile?.data && profile.data.response_code != '000'){
            router.push('/auth/login')
        }
    },[profile,router,firstLOading])
    if(!profile?.data) return <p className="text-white">Loadingg....</p>
    return(
        <>
        {children}
        </>
    )
}
export default Auth