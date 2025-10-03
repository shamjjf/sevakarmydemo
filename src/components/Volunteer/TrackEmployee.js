import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/real-time.png'
import simg2 from '../../../public/assets/images/service/financial.png'
import simg3 from '../../../public/assets/images/service/leaderboard.png'



import SectionTitle from '../SectionTitle/SectionTitle';

function TrackEmployee() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Live Updates',
            slug: '2',
            description: "See volunteer hours, tasks completed and how much impact each employee is making.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Reports',
            slug: '1',
            description: 'Get reports that show your organisation’s overall volunteer work.',
        },
        {
            Id: '03',
            sImg: simg3,
            
            
            title: 'Employee Profiles',
            slug: '3',
            description: 'Each employee has a profile where they can see their own progress.'

        },
    ]

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle title="Easily Track Employee Volunteering" paragarap="SevakArmy makes it simple to see how your employees are helping. Our Volunteer Progress dashboard lets you track and understand your team’s contributions." />
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row justify-content-center align-items-stretch gy-4">
                    {Services.slice(0, 3).map((Service, sitem) => (
                        <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                            <div className="service-card-wrapper d-flex flex-column h-100">
                                <ServiceCard title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                            {/* height="360px" */}
                        </div>
                    ))}

                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-xl-8 col-lg-10 col-md-12 col-12">
                    <p className='text-center mb-0' style={{fontWeight:'600'}}>Tracking helps make sure your organisation meets its CSR goals and shows employees their efforts are valued. This boosts morale and encourages them to keep volunteering.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TrackEmployee