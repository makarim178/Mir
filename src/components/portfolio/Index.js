import TitleSection from "../titleSection/TitleSection"
import Gallery from "./gallery"

const Index = ({projects}) => {
    return (
        <div>
            <TitleSection title="Portfolio" borderColor="border-blue-400" />

            <Gallery projects={projects} />
            
        </div>
    )
}

export default Index;