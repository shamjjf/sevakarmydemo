import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/university-card.png'
import simg2 from '../../../public/assets/images/service/industry.png'
import SectionTitle from '../SectionTitle/SectionTitle';

function RegisterSevakArmy() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Customisable Volunteer Opportunities',
            slug: '2',
            description: 'Tailor your volunteer efforts to causes that resonate with your company’s values and industry.',
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Employee Engagement Tools',
            slug: '1',
            description: 'Easily invite, engage and track your employees’ volunteer progress, fostering a culture of responsibility and compassion.',
        },
        {
            Id: '03',
            
            
            title: 'Impact Measurement',
            slug: '3',
            description: 'Track volunteer hours, completed tasks and the social change your company creates to report on CSR goals and achievements.'

        },
        {
            Id: '04',
            
            
            title: 'Recognition and Rewards',
            slug: '4',
            description: 'Gain visibility for your company’s volunteer efforts through our public leaderboard and achievements system, building brand value and loyalty.',
        },

    ]
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle title="Why Register with SevakArmy?" />
                    <p className='text-center'>When you join SevakArmy, you gain access to a suite of features designed to maximise your CSR impact.</p>
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row justify-content-center">
                    {Services.slice(0, 5).map((Service, sitem) => (
                        <div className="col col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
                            <div className="service-card-wrapper d-flex flex-column h-100">
                                <ServiceCard title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <p className='text-center'>Register today and take the first step.</p>
        </div>
    )
}

export default RegisterSevakArmy