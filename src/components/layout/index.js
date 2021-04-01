
import Header from "../header/Index";
import Meta from "../meta/Meta";
import Navbar from '../Nav/Navbar'
import Footer from '../footer/Index'

function Layout({children}) {
    return (
        <> 
            <Meta />
            <header className="flex flex-wrap items-center lg:py-0 py-2 shadow-md" >
                <Navbar />
            </header>
                
                <div className="container-fluid">
                    <main className="main">
                        <Header />
                        
                            {children}
                        
                    </main>
                </div>

                <Footer />
                
            
        </>
    )
}

export default Layout;