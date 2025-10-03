import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/creativity.png'
import simg2 from '../../../public/assets/images/service/identity.png'
import simg3 from '../../../public/assets/images/service/benchmarking.png'



import SectionTitle from '../SectionTitle/SectionTitle';

function WhyMatter3() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Motivation and Engagement',
            slug: '2',
            description: "Badges and achievements provide tangible recognition of efforts, motivating employees and organisations to participate more actively and strive for higher goals.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Celebrating Success',
            slug: '1',
            description: 'By formally recognising achievements, SevakArmy helps celebrate the hard work and dedication of those involved in volunteer activities, enhancing overall morale and engagement.',
        },
        {
            Id: '03',
            
            
            title: 'Showcasing Commitment',
            slug: '3',
            description: 'Displaying badges and achievements on profiles and company pages demonstrates a strong commitment to social responsibility and helps build a positive reputation.'

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
                                <ServiceCard title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WhyMatter3