
import Header from "../header/Index";
import Meta from "../meta/Meta";
import Navbar from '../Nav/Navbar'
import Footer from '../footer/Index'
import About from "../about/About";
import Education from "../education/Education";
import Experience from "../experience/Index";

import { Data } from "../../data/Data";

function Layout({children}) {
    return (
        <> 
            <Meta />
            <header className="flex flex-wrap items-center lg:py-0 py-2 shadow-md" >
                <Navbar />
            </header>
                
                <div className="container-fluid">
                    <main className="main">
                        
                        {children}
                        <Header />
                        <About />
                        <Education />
                        <div className="mx-8 md:mx-14 ">
                            <Experience experiences={Data.workExperiences}/>
                        </div>
                    </main>
                </div>

                <Footer />
                
            
        </>
    )
}

export default Layout;