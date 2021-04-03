import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import TitleSection from "../titleSection/TitleSection";
import Card from "./Card";

const timeline = () => {

}

export default function Experience({experiences}) {
  const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile});
  

  const lineDivider = isMobile ? "11%" : "50%";

  

  console.log(experiences);
    return (
      <div>
      <TitleSection title="Experience" borderColor="border-blue-400" />
      <div className="container bg-gray-200 bg-opacity-10 mx-auto mt-16 w-full h-full rounded-lg" style={{backdropFilter: "blur(5px)"}}>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-40 border-dashed border-white h-full border" style={{left: lineDivider}}></div>

          {experiences.map(experience => {
            return(
              <Card key={experience.id} experience={experience} />
            )
          })}
        </div>
      </div>
      </div>
    )
}
