import Footer from "../footer";
import Header from "../header";

function Layout({children}) {
    return (
        <div className="main">
            <Header />
                <div className="min-h-60vh">
                    
                    {children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout;