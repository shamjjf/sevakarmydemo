import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/teacher.png'
import simg2 from '../../../public/assets/images/service/idea.png'
import SectionTitle from '../SectionTitle/SectionTitle';

function VolunteerSkills() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Teaching & Mentoring',
            slug: '2',
            description: 'Support blood drives and food distribution charity events.',
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Design & Creativity',
            slug: '1',
            description: 'Aid in website development, social media or online marketing.',
        },
        {
            Id: '03',
            
            
            title: 'Event Management',
            slug: '3',
            description: 'Assist with tutoring or mentoring students.'

        },
        {
            Id: '04',
            
            
            title: 'Digital Skills',
            slug: '4',
            description: 'Help NGOs create eye-catching banners and websites for effective promotion.',
        },
        // {
        //     Id: '05',
        //     sImg: simg5,
        //     
        //     title: 'Earn Points',
        //     slug: '4',
        //     description: 'Complete tasks and earn points through our gamified system, reflected on the leaderboard.',
        // }

    ]
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12 col-12">
                    <SectionTitle subtitle="Volunteer Skills" title="At Sevak Army, we match opportunities to your skills, from design to teaching." />
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

export default VolunteerSkills