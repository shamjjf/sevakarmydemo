import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/name.png'
import simg2 from '../../../public/assets/images/service/email.png'
import SectionTitle from '../SectionTitle/SectionTitle';

function InformationMessege() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Name',
            slug: '2',
            description: "Your full name so we can address you properly.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Email Address',
            slug: '1',
            description: 'The email address where we can send our response.',
        },
        {
            Id: '03',
            
            
            title: 'Subject',
            slug: '3',
            description: 'A brief description of your inquiry or issue.'

        },
        {
            Id: '04',
            
            
            title: 'Message',
            slug: '4',
            description: 'Provide details about your request to help us assist you better.'

        },

    ]
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle title="Please include the following information in your message" />
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row justify-content-center">
                    {Services.slice(0, 4).map((Service, sitem) => (
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                            <div className="service-card-wrapper d-flex flex-column h-100">
                                <ServiceCard title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default InformationMessege