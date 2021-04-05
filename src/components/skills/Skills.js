import TitleSection from "../titleSection/TitleSection";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";


const Skills = ({skills}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div>
            <TitleSection title={"Skills"} borderColor="border-blue-400" />

            <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            focusOnSelect={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            //customTransition="all 5"
            //transitionDuration={2000}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            customTransition="transform 2000ms ease-in-out"
            >
                {skills.map((skill) => {
                    return(
                        <div key={skill.id} className="bg-white group bg-opacity-30 relative m-4 rounded-lg h-60 w-100 cursor-pointer">

                            <div className="flex justify-center items-center overflow-hidden">
                              <div className="items-center" >
                                <img className="h-48" src={skill.skillImageUrl} />
                              </div>
                              <div className="bottom-0 p-4 absolute text-3xl font-bold text-white opacity-0 transform duration-200 trasnslate-y-2 group-hover:opacity-100">
                                <span>{skill.skillName}</span>
                              </div>
                                
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
        

    )
}

export default Skills;
