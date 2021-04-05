import { useState } from "react";
import Card from "./Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = ({projects}) => {
    const [portfolios, setPortfolios] = useState(projects);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] =useState('');

    // useEffect(() => {
    //     filterData("All");
    // }, [])
            
    function filterData (filterParam) {
        //console.log(portfolios);
        let filters = [];
        console.log(filterParam);
        if(filterParam !== "All") {
            const fil = portfolios.filter((portfolio) => portfolio.categoryName === filterParam)
            fil.forEach(element => {
                filters.push(element);
            });
            setPortfolios(filters);
        } else {
            
            setPortfolios(projects)
        }
        // console.log(filters);
        // console.log(projects.filter(id => parseInt(id) >= 6))
    }


            return (
                
        <div className="container mx-auto">
            <div className="container mx-auto mb-8 mt-4 flex justify-center items-center">                
                <a type="text" className=" m-2 bg-white bg-blue-400 cursor-pointer w-1/4 h-12 pt-2 text-lg text-center align-center rounded-md" onClick={() => filterData("All")}>
                    All
                </a>
                <a type="text" className="m-2 bg-white bg-blue-400 cursor-pointer w-1/4 h-12 pt-2 text-lg text-center align-center rounded-md" onClick={() => filterData("Photoshop")}>
                    Photo Art
                </a>
                <a type="text" className="m-2 bg-white bg-blue-400 cursor-pointer w-1/4 h-12 pt-2 text-lg text-center align-center rounded-md" onClick={() => filterData("3D Viz")}>
                    3D Visualization
                </a>
                <a type="text" className="m-2 bg-white bg-blue-400 cursor-pointer w-1/4 h-12 pt-2 text-lg text-center align-center rounded-md" onClick={() => filterData("Web")}>
                    Web
                </a>
            </div>
            <div>
            
                <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 5}}>

                    <Masonry>

                        {portfolios.map((portfolio) => {
                            return(
                                <Card key={portfolio.id} portfolio={portfolio} />
                                )
                            })}
                
                    </Masonry>
                </ResponsiveMasonry>

            </div>
                
            
        </div>
    )
}

export default Gallery;