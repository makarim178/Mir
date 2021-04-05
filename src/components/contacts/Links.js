import React from 'react'

const Links = ({contacts}) => {
    return (

        <div className="flex flex-row mx-auto items-center p-10 justify-center">
            <div className="w-auto h-60 bg-white bg-opacity-30 p-10 m-4 rounded-lg" style={{backdropFilter: "blur(5px)"}} >
                <div className="items-center flex justify-center text-center text-5xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </div>
                <div className="items-center justify-center flex text-center">
                    <h1 className="text-center text-2xl">{contacts.location}</h1>
                </div>
            </div>
            <div className="w-auto h-60 bg-white bg-opacity-30 p-10 m-4 rounded-lg" style={{backdropFilter: "blur(5px)"}} >
                <div className="items-center flex justify-center text-center text-5xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                </div>
                <div className="items-center justify-center flex text-center">
                    <a href="mailto:makarim178@gmail.com" className="hover:text-blue-400"> 
                        <h1 className="text-center text-2xl">{contacts.email}</h1>
                    </a>
                </div>
            </div>
            <div className="w-auto h-60 bg-white bg-opacity-30 p-10 m-4 rounded-lg" style={{backdropFilter: "blur(5px)"}} >
                <div className="items-center flex justify-center text-center text-5xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    
                </div>
                <div className="items-center justify-center flex text-center">
                    <a href={`tel:${contacts.phone}`} className="hover:text-blue-400"> 
                        <h1 className="text-center text-2xl">{contacts.phone}</h1>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Links
