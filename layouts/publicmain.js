import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PublicMainLayout = ({children}) => {
    return(
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}
export {PublicMainLayout};