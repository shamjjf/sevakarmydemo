import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/creativity.png'
import simg2 from '../../../public/assets/images/service/identity.png'
import simg3 from '../../../public/assets/images/service/benchmarking.png'



import SectionTitle from '../SectionTitle/SectionTitle';

function WhyMatter2() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Recognition and Motivation',
            slug: '2',
            description: "Publicly recognising top volunteers helps to motivate them and encourages others to follow their example. It also enhances personal satisfaction and pride in their contributions.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Career Development',
            slug: '1',
            description: 'High performers may be seen as role models within the company, leading to opportunities for career development and leadership roles.',
        },
        {
            Id: '03',
            
            
            title: 'Personal Achievement',
            slug: '3',
            description: 'Being featured on the leaderboard provides individuals with a sense of achievement and validation for their efforts, fostering a deeper connection to the organisation’s mission.'

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
                                <ServiceCard height="425px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WhyMatter2;