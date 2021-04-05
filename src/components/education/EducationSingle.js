import Course from "./Course";


const EducationSingle = ({edu}) => {
    return (
        <div className="z-10 bg-gray-400 bg-opacity-10 rounded-xl m-4" >
            <div className="p-6">
                <div className="flex flex-row mx-auto justify-between">
                    <div>
                        <h1 className="text-3xl text-white" >{edu.instituteName}, <span>{edu.instituteAddress}</span> </h1>
                        <h5 className="text-lg mt-5">{edu.gradName}</h5>
                    </div>

                    <div>
                        <span>
                            {edu.yearStarted} - {edu.yearEnded}
                        </span>
                        <div className="w-64">
                            <div className="w-full h-4 bg-gray-200 items-center rounded shadow-md">
                                <div className="h-4 bg-blue-500 rounded" style={{width: edu.completionRate}}></div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div>
                    <h1 className="text-lg font-bold">Courses Completed So far</h1>

                    <div className="flex flex-row justify-center items-streched flex-wrap">
                        {edu.courses.map(course => {
                            return(
                                <Course key={course.id} course={course} />
                            )
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default EducationSingle;
