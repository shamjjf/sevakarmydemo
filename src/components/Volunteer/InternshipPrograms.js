import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/skill.png'
import simg2 from '../../../public/assets/images/service/hourglass.png'
import SectionTitle from '../SectionTitle/SectionTitle';

function InternshipPrograms() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'What You’ll Gain',
            slug: '2',
            description: 'Real-world experience in project management, outreach and social impact.',
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Duration',
            slug: '1',
            description: 'Our internship programs typically range from 3 to 6 months, depending on the project.',
        },
        {
            Id: '03',
            
            
            title: 'Certificate & Credits',
            slug: '3',
            description: 'Get certified for your contributions, along with valuable college credit for applicable courses.'

        },
        // {
        //     Id: '04',
        //     
        //     
        //     title: 'Digital Skills',
        //     slug: '4',
        //     description: 'Help NGOs create eye-catching banners and websites for effective promotion.',
        // },

    ]
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle subtitle="Internship Programs" title="Sevak Army provides hands-on internships in volunteer management and social work." />
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

export default InternshipPrograms