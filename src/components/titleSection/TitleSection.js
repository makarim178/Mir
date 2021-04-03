const TitleSection = ({title, borderColor}) => {
    const spanClass="font-bold border-b-2  md:border-b-4 " + borderColor
    return (
        <h1 className="text-2xl md:text-4xl text-center p-5 mt-5">
                    <span className={spanClass}>{title}
                    </span>
        </h1>
    )
}

export default TitleSection;