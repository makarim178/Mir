
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function Nav({chilren, href}) {

    const router = useRouter()

    const linkTextStyle= (linkname) => {

        if(router.pathname === linkname) {
            return "z-0 opacity-0 absolute"
        } 
        
        return "z-0 text-blue-400 absolute opacity-0 duration-400 ease-in-out transform group-hover:opacity-100 animate-bounce text-center"
    }
    const linkIconStyle= (linkname) => {

        if(router.pathname === linkname) {
            return "z-20 text-green-300 hover:text-blue-300 animate-pulse"
        } 
        
        return "z-20 text-gray-300 transition duration-400 ease-in-out transform group-hover:opacity-0 group-hover:animate-ping"
    }

    
    return (
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" >
                <div className="mr-16 relative group cursor-pointer">
                    <div className={linkTextStyle("/")}>Home</div>
                    
                    <div className={linkIconStyle("/") }>
                        <svg className="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    {/* <a className={router.pathname == "/about" ? "text-green-700 mr-5 hover:text-blue-900" : 
                    "mr-5 opacity-0 transition duration-200 ease-in-out transform hover:text-blue-400 hover:-translate-y-2 hover:scale-110 hover:opacity-100"}>About me</a>
                    <a className={router.pathname == "/about" ? "text-green-700 mr-5 hover:text-blue-900" : "mr-5 opacity-0 transition duration-200 ease-in-out transform hover:text-blue-400 hover:-translate-y-2 hover:scale-110 hover:opacity-100"}>About me</a> */}
                </div>
            </Link>
            <Link href="/about/" >
                <div className="mr-16 relative group cursor-pointer">
                    <div className={linkTextStyle("/about")}>About</div>
                    
                    <div className={linkIconStyle("/about")}>
                        <svg className="h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </Link>
            <Link href="/education/" >
                <div className="mr-16 relative group cursor-pointer">
                    <div className={linkTextStyle("/education")}>Education</div>
                    
                    <div className={linkIconStyle("/education") }>
                        <svg className="h-10"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </div>
                    {/* <a className={router.pathname == "/about" ? "text-green-700 mr-5 hover:text-blue-900" : 
                    "mr-5 opacity-0 transition duration-200 ease-in-out transform hover:text-blue-400 hover:-translate-y-2 hover:scale-110 hover:opacity-100"}>About me</a>
                <a className={router.pathname == "/about" ? "text-green-700 mr-5 hover:text-blue-900" : "mr-5 opacity-0 transition duration-200 ease-in-out transform hover:text-blue-400 hover:-translate-y-2 hover:scale-110 hover:opacity-100"}>About me</a> */}
                </div>
            </Link>
            <Link href="/experience/" >
                <div className="mr-16 relative group cursor-pointer">
                    <div className={linkTextStyle("/experience")}>Experience</div>
                    <div className={linkIconStyle("/experience")}>
                        <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </Link>
            <Link href="/skills/" >
                <div className="mr-16 relative group cursor-pointer">
                    <div className={linkTextStyle("/skills")}>Skills</div>
                    <div className={linkIconStyle("/skills") }>
                    <svg className="h-10 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </div>
                </div>
            </Link>
            <Link href="/portfolio/" >
                <div className="mr-16 relative group cursor-pointer">
                    <div className={linkTextStyle("/portfolio")}>Portfolio</div>
                    <div className={linkIconStyle("/portfolio") }>
                        <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </Link>
            <Link href="/contact-us/" >
                <div className="mr-16 relative group cursor-pointer">
                    <div className={linkTextStyle("/contact-us")}>Contact</div>
                    <div className={linkIconStyle("/contact-us") }>
                        <svg className="h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </Link>
        </nav>
    )
}
