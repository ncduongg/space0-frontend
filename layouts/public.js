import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PublicLayout = ({children}) => {
    return(
        <>
        <Navbar />
        {children}
        <Cart/>
        <Footer />
        </>
    )
}
export {PublicLayout};