import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PublicLayout = ({children}) => {
    return(
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}
export {PublicLayout};