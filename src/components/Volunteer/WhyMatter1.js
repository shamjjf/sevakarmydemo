import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/creativity.png'
import simg2 from '../../../public/assets/images/service/identity.png'
import simg3 from '../../../public/assets/images/service/benchmarking.png'



import SectionTitle from '../SectionTitle/SectionTitle';

function WhyMatter1() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Inspiration and Motivation',
            slug: '2',
            description: "Seeing top-performing organisations on the leaderboard serves as inspiration for other companies to enhance their own CSR efforts and engage more deeply in volunteerism.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Public Recognition',
            slug: '1',
            description: 'Being featured on the leaderboard not only highlights your company’s commitment to social responsibility but also enhances your brand’s reputation among clients, partners and potential employees.',
        },
        {
            Id: '03',
            
            
            title: 'Benchmarking',
            slug: '3',
            description: 'The leaderboard provides a benchmark for organisations to measure their own volunteer efforts against industry peers, helping identify areas for improvement and opportunities for growth.'

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
                                <ServiceCard height="440px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WhyMatter1