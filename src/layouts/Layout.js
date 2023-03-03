import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="App" id="butter">
                {children}
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Layout;