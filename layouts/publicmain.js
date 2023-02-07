import Cart from "../components/Cart";
import Footer from "../components/Footer";
import GoToTheMoon from "../components/GoToTheMoon";
import Navbar from "../components/Navbar";

const PublicMainLayout = ({children}) => {
    return(
        <>
        <Navbar />
        {children}
        <Cart/>
        <GoToTheMoon />
        <Footer />
        </>
    )
}
export {PublicMainLayout};