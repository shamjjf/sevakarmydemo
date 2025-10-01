import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/badge.png'
import simg2 from '../../../public/assets/images/service/trophy.png'
import simg3 from '../../../public/assets/images/service/red-carpet.png'



import SectionTitle from '../SectionTitle/SectionTitle';

function VolunteerRecognition() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Monthly Volunteer Recognition',
            slug: '2',
            description: 'Acknowledge the top performers on the leaderboard.',
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Annual Volunteer of the Year Award',
            slug: '1',
            description: 'Honor individuals for their significant contributions this year.',
        },
        {
            Id: '03',
            
            
            title: 'Awards Ceremony',
            slug: '3',
            description: 'Honor top volunteers and event organizers for their outstanding contributions.'

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
                    <SectionTitle subtitle="Volunteer Recognition Ceremonies" />
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

export default VolunteerRecognition