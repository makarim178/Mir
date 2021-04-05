import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import { JobDesc } from "./JobDesc";

const Card = ({experience}) => {
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile});

    const mainDivider = (id) => {
        let styleForDiv = "mb-8 flex justify-center md:justify-between items-center w-full"
        if(parseInt(id) % 2 == 0) styleForDiv = "mb-8 flex justify-center md:justify-between md:flex-row-reverse items-center w-full"
    
        return styleForDiv
      }


    return (
        <div className={mainDivider(experience.id)}>
                {!isMobile && <div className="order-1 w-5/12"></div>}
                <div className="z-20 flex items-center md:order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-center text-lg text-white">
                            {experience.id}
                        </h1>                    
                </div>
                
                <div className="md:order-1 bg-gray-400 rounded-lg shadow-xl w-11/12 md:w-5/12 px-6 py-4 bg-opacity-60" style={{backdropFilter:"blur(5px)"}} >
                  <div className="mb-3">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-bold text-gray-800 text-xl">{experience.jobTitle}</h3>
                        </div>
                        <div>
                            <h5 className="text-gray-700 font-bold text-sm md:text-lg">{experience.yearStarted} - {experience.yearEnded}</h5>
                        </div>
                    </div>
                    <h5 className="text-sm text-gray-200">
                      {experience.companyName}, {experience.companyLocation}

                      {experience.url !== "" ? (
                          <a href={experience.url}  className="hover:text-blue-600 group" target="_blank">
                            <svg className="w-6 text-green-600 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </a> 
                        ) : null}
                      
                    </h5>
                  </div>
                  <div className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                    <ul className="list-disc list-inside text-sm ">
                      {experience.jobDesc.map(job => {
                        return(
                          <JobDesc key={job.id} job={job} />
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
    )
}

export default Card;
