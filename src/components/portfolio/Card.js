const Card = ({portfolio}) => {

    const spans = (parseInt(portfolio.id) % 2 === 0) ? "row-span-2" : ""
    let plink = (portfolio.imageUrls.length > 0) ? portfolio.imageUrls[0].imageUrl : portfolio.projectLinks[0].linkUrl;
    return (
        <div className="m-1 rounded-lg overflow-hidden shadow-lg hover:bg-white hover:shadow-lg hover:border-transparent relative cursor-pointer ">
            <img 
                className="w-full"
                src={portfolio.thumbnailImageUrl} 
                alt={portfolio.id}
            />
                <div 
                    className="absolute 
                        h-auto
                        bottom-0
                        transition-all 
                        delay-200 
                        p-4
                        duration-400 
                        ease-in-out 
                        opacity-0 
                        hover:opacity-100 
                        transform 
                        hover:-translate-y-1 
                        scale-110 
                        hover:scale-100">
                    <div className="p-4 bg-opacity-60 rounded-lg rounded-b-none" style={{backdropFilter:"blur(5px)"}}>
                        <div className="font-bold text-white text-sm mb-2">
                            {portfolio.desc}
                            <a href={plink} target="_blank" alt={portfolio.desc} className="text-green-600 font-bold text-lg hover:text-red-400"> Click me
                            </a> 
                        </div>
                        
                    </div>
                </div>
            
        </div>
    )
}

export default Card
