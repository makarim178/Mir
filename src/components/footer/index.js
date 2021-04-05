function Footer({footerLinks}) {
    return( 

        <footer className="bg-gray-800 container-fluid body-font items-center flex justify-center">
            <div className="p-2 flex justify-center items-center">
                <img className="h-6 w-auto" src="https://res.cloudinary.com/makarim/image/upload/v1617611569/profile-mir/footerlinks/copyright_gh3osz.png"/>
                <div className="m-2 text-lg">
                    <h1>Copyright by, Mir Ashiful Karim</h1>
                </div>
            </div>

            <div className="flex items-center justify-center">
                {
                    footerLinks.map(link => (
                        
                            <div key={link.id} className="m-2">
                                <a href={link.url} target="_blank">
                                    <img src={link.icon} alt={link.linkFor} className="h-6 w-auto"/>
                                </a>
                            </div>

                        )
                    )
                }

            </div>
        </footer>

    )
}

export default Footer;