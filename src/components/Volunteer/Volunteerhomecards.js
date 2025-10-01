import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";

import SectionTitle from '../SectionTitle/SectionTitle';
import ConnectVolunteers from '../../../public/assets/images1/volunteer/home/connect-ngo.webp'
import VolunteerTasks from '../../../public/assets/images1/volunteer/home/volunteer-tasks.webp'
import AgeGroup from '../../../public/assets/images1/volunteer/home/age-group.webp'
import CustomerService from '../../../public/assets/images1/volunteer/home/customer-service.webp'

function Volunteerhomecards() {
    const Services = [
        {
            Id: '01',
            sImg: ConnectVolunteers,
            
            title: 'Connect Volunteers & NGOs',
            slug: '1',
            description: 'Sevak Army connects people with NGOs for impactful volunteering.',
        },
        {
            Id: '02',
            sImg: VolunteerTasks,
            
            title: 'Offer Diverse Volunteer Tasks',
            slug: '2',
            description: 'Sevak Army lets you choose tasks that match your skills and interests.',
        },
        {
            Id: '03',
            sImg: AgeGroup,
            
            title: 'For All Age Groups',
            slug: '3',
            description: 'People of all ages can join and contribute.'

        },
        {
            Id: '04',
            sImg: CustomerService,
            
            title: 'Enable Meaningful Service',
            slug: '4',
            description: 'We help you serve in ways that fit your time and make a difference.',
        },

    ]

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 col-12">
                    <SectionTitle subtitle="What We Do?" title="Connecting Passionate Volunteers with Social Work Opportunities" />
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row pt-3 align-items-stretch gy-4 justify-content-center">
                    {Services.slice(0, 4).map((Service, sitem) => (
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-6 col-12" key={sitem} style={{minHeight:'100%'}}>
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

export default Volunteerhomecards