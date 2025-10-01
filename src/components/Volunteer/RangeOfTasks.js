import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/real-time.png'
import simg2 from '../../../public/assets/images/service/financial.png'
import SectionTitle from '../SectionTitle/SectionTitle';
import Pimg4 from "../../../public/assets/images/service-single/poverty.png"

function RangeOfTasks() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Community Development',
            slug: '2',
            description: "From building homes to organising community events, these tasks focus on improving local infrastructure and fostering stronger communities.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Environmental Initiatives',
            slug: '1',
            description: 'Tasks like beach clean-ups, tree planting and wildlife conservation are perfect for companies committed to sustainability and environmental stewardship.',
        },
        {
            Id: '03',
            
            
            title: 'Education & Mentorship',
            slug: '3',
            description: 'Empower the next generation by volunteering in schools, mentoring underprivileged students and leading workshops that equip young people with skills for the future.'

        },
        {
            Id: '04',
            
            
            title: 'Healthcare & Wellness',
            slug: '4',
            description: 'Get involved in health camps, blood donation drives and mental health awareness campaigns.',
        },
        {
            Id: '05',
            sImg: Pimg4,
            
            title: 'Poverty Alleviation',
            slug: '4',
            description: 'Help provide basic necessities like food, clothing and shelter to those living in poverty.',
        },

    ]
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle title="Explore a Range of Tasks for Your Employees." />
                    <p className='text-center'>At Sevak Army, we understand that volunteerism is not one-size-fits-all. That’s why we offer a diverse array of Volunteering Opportunities tailored to different industries, causes and company cultures.</p>
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row justify-content-center">
                    {Services.slice(0, 5).map((Service, sitem) => (
                        <div className="col col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
                            <div className="service-card-wrapper d-flex flex-column h-100">
                                <ServiceCard height="370px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-xl-8 col-lg-10 col-md-12 col-12">
                    <p className='text-center'>By offering a wide range of volunteering opportunities, Sevak Army ensures that every company can find tasks that align with their mission and values, while also giving employees the chance to volunteer for causes they are passionate about.</p>
                </div>
            </div>
        </div>
    )
}

export default RangeOfTasks