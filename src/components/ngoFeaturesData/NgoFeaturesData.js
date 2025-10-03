import React from 'react'
import Image from "next/image";

import SectionTitle from '../SectionTitle/SectionTitle';

// import NGO from '../../../public/assets/images1/volunteer/home/ngo.png'

import RightVolunteer from '../../../public/assets/images1/ngo/home/right.webp'
import Task from '../../../public/assets/images1/ngo/home/easy-task.webp'
import Choose from '../../../public/assets/images1/ngo/home/alternative.webp'
import Approval from '../../../public/assets/images1/ngo/home/approval.webp'
import Planning from '../../../public/assets/images1/ngo/home/planning.webp'
import Megaphone from '../../../public/assets/images1/ngo/home/megaphone.webp'

function NgoFeaturesData() {
    const featuresData = [
        {
            // iconClass: 'flaticon-volunteer',
            svg: RightVolunteer,
            title: 'Find the Right Volunteers',
            description: 'Access a network of volunteers with the skills and passion to support your projects effectively.      '
        },
        {
            // iconClass: 'flaticon-volunteer',
            svg: Task,
            title: 'Easy Task Posting',
            description: 'Create and share tasks on our platform, letting volunteers apply directly to your listings.'
        },
        {
            // iconClass: 'flaticon-volunteer',
            svg: Choose,
            title: 'Choose the Best Fit',
            description: 'Volunteers apply and you pick the ones that suit your needs best, ensuring quality support.'
        },
        {
            // iconClass: 'flaticon-volunteer',
            svg: Approval,
            title: 'Simple Registration & Approval',
            description: 'Register your NGO, get approved by SevakArmy and start posting tasks right away.'
        },
        {
            // iconClass: 'flaticon-volunteer',
            svg: Planning,
            title: 'Track & Manage Effortlessly',
            description: 'Use an easy dashboard to track progress, communicate with volunteers and manage tasks smoothly.'
        },
        {
            // iconClass: 'flaticon-volunteer',
            svg: Megaphone,
            title: 'Promote Your Cause Widely',
            description: 'Boost your NGO’s visibility by connecting with volunteers passionate about making a difference.'
        },
    ];

    return (
        <section className="pt-5 pt-md-100">
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <SectionTitle title="Empower Your NGO with SevakArmy" />
                    </div>
                </div>

                <div className="wpo-features-area pt-0">
                    <div className="features-wrap">
                        <p className="pb-0 w-100 mt-2" style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>Connect with Skilled Volunteers and Grow Your Impact. </p>
                        <div className="row justify-content-center align-items-start column-gappp mt-4">
                            {featuresData.map((feature, index) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="feature-item-wrap">
                                        <div className="feature-item d-flex align-items-center" style={{ height: '198px' }}>
                                            <div className="feature-icon">
                                                <div className="icon">
                                                    {feature.iconClass ? <i className={`fi ${feature.iconClass}`}></i> : <Image src={feature.svg} alt={feature.svg} />}
                                                </div>
                                            </div>
                                            <div className="feature-text">
                                                <h2 className="fs-5">{feature.title}</h2>
                                                <p className="fs-6" style={{ textAlign: 'justify' }}>{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-100 text-center mt-3'>
                    <h2 className='mt-1' style={{fontWeight:'700'}}>Find Skilled Volunteers Today!</h2>
                    <p className='text-center' style={{fontWeight:'600'}}>Register your NGO and connect with passionate, skilled volunteers ready to support your cause.</p>
                </div>
            </div>
        </section>
    )
}

export default NgoFeaturesData