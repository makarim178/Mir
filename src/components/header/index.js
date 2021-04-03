
import { Data } from '../../data/Data';

function Header() {
    return (

        <div className="container-fluid flex mt-20 items-center justify-between header-height-200vh p-4">
            <div className="p-10">
                <h1 className="md:text-5xl md:font-extrabold font-semibold text-2xl" >Hello! I'm &nbsp;
                    <span className="text-blue-400">
                        {Data.lastName}, 
                        {Data.firstName}
                    </span> 
                </h1>
                <h5 className="text-sm font-light md:text-2xl md:font-semibold" >{Data.subTitle}</h5>
                <div className="grid grid-flow-col auto-col-max md:auto-col-min">
                    <div className="curser-pointer flex rounded-lg group border-blue-400 justify-center items-center text-center border-2 trasition delay-200 h-10 mt-4 md:h-16 md:mt-10 bg-blue-400 bg-opacity-20" style={{ backdropFilter : "blur(5px)"}}>
                        <a href="" className="cursor-pointer text-sm font-thin md:text-2xl md:font-extrabold p-2 md:p-0">
                            View My Resume
                        </a>
                        <svg className="h-4 ml-2 md:ml-6 md:h-10 group-hover:animate-bounce cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="w-40 md:w-auto mr-2 md:mr-10">
                <img className="rounded-full shadow-lg" style={{width: "500px"}} src={Data.titleImageUrl} alt="MirAshifulKarim_Image" />
            </div>
        </div>

    )
}

export default Header;