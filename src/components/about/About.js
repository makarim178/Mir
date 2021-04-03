import { Data } from "../../data/Data";


const About = () => {
    return (
        <>
            {/* <svg className="fixed"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 300"
            >
                <path  
                    fill="#485460" 
                    fillOpacity="1" 
                    d="M0,128L120,154.7C240,181,480,235,720,256C960,277,1200,267,1320,261.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                />
            </svg> */}
            <div>
                <h1 className="text-2xl md:text-4xl text-center p-5 mt-5">About <span className="font-bold text-blue-400 border-b-2  md:border-b-4 border-blue-400">{Data.firstName_mir}</span></h1>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mx-auto p-10">
                        <img className="rounded-full w-64 md:w-48  md:w-auto border-4 shadow-lg" src={Data.aboutImgUrl} alt={Data.lastName}/>
                    </div>

                    <div className="pl-4 pr-4 md:p-10 text-justify">
                        <p>{Data.aboutDesc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
