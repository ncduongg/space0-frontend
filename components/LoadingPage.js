import Notiflix from "notiflix"
import { useEffect } from "react"

const LoadingPage = () =>{
    useEffect(() =>{
        Notiflix.Block.arrows('.loading')
        return Notiflix.Block.remove(100);
    })
    return (<>
    <div className="loading">

    </div>
    </>)
}
export default LoadingPage