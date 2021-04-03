import { Data } from "../../data/Data";
import TitleSection from "../titleSection/TitleSection";
import EducationSingle from "./EducationSingle";

const Education = () => {
    
    return (
        <div>
                {/* <h1 className="text-2xl md:text-4xl text-center p-5 mt-5">
                    <span className="font-bold border-b-2  md:border-b-4 border-blue-400">Education
                    </span>
                </h1> */}
                <TitleSection title="Education" borderColor="border-blue-400" />

                <div className="container mx-auto items-center p-4" >
                    {Data.education.map(edu => {
                        return (
                            <EducationSingle key={edu.id} edu={edu} />
                        )
                    })}
                </div>
        </div>
    )
}

export default Education;