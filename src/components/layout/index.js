
import Header from "../header/Index";
import Meta from "../meta/Meta";
import Navbar from '../Nav/Navbar'
import Footer from '../footer/Index'
import About from "../about/About";
import Education from "../education/Education";
import Experience from "../experience/Index";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Index"
import Contact from "../contacts/Index"

import { Data } from "../../data/Data";


function Layout({children}) {

    return (
        <> 
            <Meta />
            <header className="fixed top-0 left-0 w-full items-center lg:py-0 py-2 shadow-md" >
                <Navbar />
            </header>
                
                <div className="container-fluid mb-8">
                    <main className="main">
                        
                        {children}
                        <Header />
                        <About/>
                        <Education />
                        <div id="experience" className="mx-8 md:mx-14 ">
                            <Experience  experiences={Data.workExperiences}/>
                        </div>
                        <div id="skills" className="mx-8 md:mx-14 ">
                            <Skills skills={Data.skills} />
                        </div>
                        <div id="portfolio" className="mx-8 md:mx-14 group">
                            <Portfolio projects={Data.projects} />
                        </div> 
                        <div id="contact" className="mx-8 md:mx-14 group">
                            <Contact contacts={Data.contacts} />
                        </div> 
                    </main>
                </div>

                <Footer footerLinks={Data.footerLinks} />
                
            
        </>
    )
}

export default Layout;