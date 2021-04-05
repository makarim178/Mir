import { useState } from "react";
import MenuToggle from "./menuToggle";
import { Link, animateScroll as scroll } from "react-scroll";
const MobileNavLinks = () => {

    const [isOpen, setOpen] = useState(false);

    const liStyles = "flex w-full p-4 border-l-2 border-transparent hover:text-blue-400 transition ease-in-out delay-100";
    function setOpenDialog (from) {

        setOpen(false);
        if(from === "home") scroll.scrollToTop();
    }

    return (
        <div className="h-full flex items-center mx-auto">
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && 

<ul className="flex w-full m-0 p-0 flex-col fixed top-20 left-20 -mt-2 p-4 bg-gray-900 text-white bg-opacity-80 shadow-md" style={{backdropFilter: "blur(10px)"}}>
                <li className={liStyles}>
                    <Link onClick={() => setOpenDialog("home")} smooth={true} duration={1000} className="cursor-pointer">Home</Link>
                </li>
                <li className={liStyles}>
                    <Link onClick={() => setOpenDialog()} to="about" smooth={true} duration={1000} className="cursor-pointer">About</Link>
                </li>
                <li className={liStyles}>
                    <Link onClick={() => setOpenDialog()} to="edu" smooth={true} duration={1000}  smooth={true} duration={1000}  className="cursor-pointer">Education</Link>  
                </li>  
                <li className={liStyles}>
                    <Link onClick={() => setOpenDialog()} to="experience" smooth={true} duration={1000}  className="cursor-pointer">Experience</Link>  
                </li>  
                <li className={liStyles}>
                    <Link onClick={() => setOpenDialog()} href="skills" smooth={true} duration={1000}  className="cursor-pointer">Skills</Link>  
                </li>  
                <li className={liStyles}>
                    <Link onClick={() => setOpenDialog()} to="portfolio" smooth={true} duration={1000}  className="cursor-pointer">Portfolio</Link>  
                </li>  
                <li className={liStyles}>
                    <Link onClick={() => setOpenDialog()} to="contact" smooth={true} duration={1000}   className="cursor-pointer">Contact</Link>
                </li>
            </ul>
            
        }
        </div>
        
    )
}

export default MobileNavLinks
