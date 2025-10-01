import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/creativity.png'
import simg2 from '../../../public/assets/images/service/identity.png'
import simg3 from '../../../public/assets/images/service/benchmarking.png'



import SectionTitle from '../SectionTitle/SectionTitle';

function WhyMatterContact() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Efficient Communication',
            slug: '2',
            description: "This contact form helps us streamline inquiries, ensuring that your message reaches the right team quickly.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Organised Responses',
            slug: '1',
            description: 'Providing specific details will help us deliver a more accurate and relevant response.',
        },
        {
            Id: '03',
            
            
            title: 'Convenience',
            slug: '3',
            description: 'Submit your inquiry any time and we’ll get back to you as soon as possible.'

        },

    ]
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle title="Why It Matters?" />
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row justify-content-center">
                    {Services.slice(0, 3).map((Service, sitem) => (
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                            <div className="service-card-wrapper d-flex flex-column h-100">
                                <ServiceCard height="360px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WhyMatterContact