const Course = ({course}) => {
    return (
        <div className="bg-white bg-opacity-10 m-1 rounded-lg shadow-md" style={{backdropFilter:"blur(5px)"}}>
            <div className="p-2 md:p-5 w-30"> 
                <p className="text-sm">{course.courseName}</p>  
                    <div className="w-30">
                        <div className="w-full h-6 bg-gray-200 items-center rounded shadow-md">
                            <div className="h-6 bg-blue-500 rounded text-center" style={{width:course.grades}}>
                                <span>Grade: </span>
                                {course.grades}
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        
    )
}

export default Course;

