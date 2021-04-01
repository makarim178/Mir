import { useState } from "react";
import MenuToggle from "./menuToggle";
const MobileNavLinks = () => {

    const [isOpen, setOpen] = useState(false);

    const liStyles = "flex w-full p-4 border-l-2 border-transparent hover:text-blue-400 transition ease-in-out delay-100";

    return (
        <div className="h-full flex items-center mx-auto justify-center ">
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && 

<ul className="flex w-full m-0 p-0 flex-col fixed top-20 -mt-2 p-4 bg-gray-900 text-white bg-opacity-80 shadow-md" style={{backdropFilter: "blur(10px)"}}>
                <li className={liStyles}>
                    <a href="#" className="cursor-pointer">Home</a>
                </li>
                <li className={liStyles}>
                    <a href="#" className="cursor-pointer">About</a>
                </li>
                <li className={liStyles}>
                    <a href="#" className="cursor-pointer">Education</a>  
                </li>  
                <li className={liStyles}>
                    <a href="#" className="cursor-pointer">Experience</a>  
                </li>  
                <li className={liStyles}>
                    <a href="#" className="cursor-pointer">Skills</a>  
                </li>  
                <li className={liStyles}>
                    <a href="#" className="cursor-pointer">Portfolio</a>  
                </li>  
                <li className={liStyles}>
                    <a href="#" className="cursor-pointer">Contact</a>
                </li>
            </ul>
            
        }
        </div>
        
    )
}

export default MobileNavLinks
