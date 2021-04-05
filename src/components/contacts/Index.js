import React from 'react'
import { Data } from '../../data/Data'
import TitleSection from '../titleSection/TitleSection'
import ContactForm from './ContactForm'
import Links from './Links'

const Index = ({contacts}) => {
    return (
        <div>
            <TitleSection title="Contact" borderColor="border-blue-400" />

            <div className="flex justify-center">                
                <Links contacts={contacts} />                    
            </div>

            <div className="container flex justify-center">
                <div className="w-full">
                    <ContactForm />
                </div>
            </div>

        </div>
        
        
    )
}

export default Index
