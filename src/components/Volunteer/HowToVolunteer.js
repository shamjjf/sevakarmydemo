import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/register.png'
import simg2 from '../../../public/assets/images/service/website.png'
import simg3 from '../../../public/assets/images/service/apply.png'
import simg4 from '../../../public/assets/images/service/quality.png'
import simg5 from '../../../public/assets/images/service/reward.png'
import SectionTitle from '../SectionTitle/SectionTitle';

function HowToVolunteer() {
    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Register',
            slug: '1',
            description: 'Register on the portal with your basic details',
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Browse Tasks',
            slug: '2',
            description: 'Use our filter system to find tasks that suit your skills and interests.',
        },
        {
            Id: '03',
            
            
            title: 'Apply',
            slug: '3',
            description: 'Apply for the task of your choice, showcasing your skills and enthusiasm.'

        },
        {
            Id: '04',
            
            
            title: 'Get Approved',
            slug: '4',
            description: 'Once the task organiser reviews your profile, you’ll be able to start your work.',
        },
        {
            Id: '05',
            sImg: simg5,
            
            title: 'Earn Points',
            slug: '4',
            description: 'Complete tasks and earn points through our gamified system, reflected on the leaderboard.',
        }

    ]
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12 col-12">
                    <SectionTitle subtitle="How to Volunteer?" title="Volunteering with Sevak Army is simple and rewarding." />
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row justify-content-center">
                    {Services.slice(0, 5).map((Service, sitem) => (
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

export default HowToVolunteer