
const ContactForm = () => {
    
    
    
    
    function sendEmail(e) {

        alert('Thank you for contacting me, I will get back with you shortly!');
        

        e.target.reset();
    }

    return (
        <form onSubmit={sendEmail}>
        <div className="grid grid-cols-2" >
                <div className="p-4">
                    {/* <label className="p-2 text-lg font-bold">Name:</label> */}
                    <input name="name" className="bg-white bg-opacity-30 text-white rounded w-full h-12 p-2 text-lg" placeholder="Enter your name" />
                </div>
                
                <div className="p-4">
                    {/* <label className="p-2 text-lg font-bold">Email:</label> */}
                    <input name="email" className="bg-white bg-opacity-30 text-white rounded w-full h-12 p-2" placeholder="Enter Email" />
                </div>

                <div className="p-4 col-span-2">
                    {/* <label className="p-2 text-lg font-bold">Subjext</label> */}
                    <input name="subject" className="bg-white bg-opacity-30 text-white rounded w-full h-12 p-4" placeholder="Subject" />
                </div>
                <div className="p-4 col-span-2">
                    {/* <label className="p-2 text-lg font-bold">Subjext</label> */}
                    <textarea name="message" className="bg-white bg-opacity-30 text-white rounded w-full h-12 p-4 h-48" placeholder="Message" rows="8" />
                </div>

                <div></div>
                <div className="p-4 mr-8">
                    <div className="">
                        {/* <a className="text-lg">Submit</a> */}
                        <input type="submit" className="w-full h-12 rounded-md font-bold text-lg bg-blue-400 text-white bg-opacity-0 border-2 hover:bg-opacity-100 hover:border-blue-400 cursor-pointer" />
                    </div>

                </div>

            
        </div>
        </form>
        
    )
}

export default ContactForm
