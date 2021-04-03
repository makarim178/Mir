

import { useMediaQuery } from "react-responsive";
import { Data } from "../../data/Data";
import { DeviceSize } from "../responsive";
import MobileNavLinks from './MobileNavLinks';
import Nav from "./Nav";

const Navbar = () => {
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile});
    const data = Data
    
    return (

        <div className="container-fluid flex-1 flex justify-between items-center pl-6 pr-6 lg:pl-20 lg:pr-20">
            <div className="justify-start">
                <a className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={data.logo} alt="Mir Logo"
                        className="text-white p-2 rounded-full w-14" />
                </a>
            </div>

            <div className="justify-end">
                <div className="h-full flex items-center mx-auto">
                    { !isMobile && <Nav />}
                    { isMobile && 
                    <MobileNavLinks />
                    } 
                </div>

            </div>
        </div>

        // <div className="flex-1 flex justify-between items-center">
        //     <Link href="/">
                // <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                //     <img src="https://res.cloudinary.com/makarim/image/upload/v1617242624/mirLogo-w_gxxuhk.png" alt="Mir Logo"
                //         className="text-white p-2 rounded-full w-14" />
                // </a>
        //     </Link>

            

        //     <label for="menu-toggle" className="cursor-pointer w-12 lg:hidden block">
        //         <svg className="fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        //         </svg>
        //     </label>
        //     <input type="checkbox" className="hidden" id="menu-toggle"/>

        //     <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu"></div>
        // </div>




        // <div className="container-fluid bg-gray-800 bg-opacity-25 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        //         <div>
        //             <Link href="/">
        //             <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //                 <img src="https://res.cloudinary.com/makarim/image/upload/v1617242624/mirLogo-w_gxxuhk.png" alt="Mir Logo"
        //                     className="text-white p-2 rounded-full w-14" />
        //             </a>
        //             </Link>

        //         </div>

        //         <div>
        //             <Nav/>
        //         </div>
        // </div> 
    )
}

export default Navbar;
