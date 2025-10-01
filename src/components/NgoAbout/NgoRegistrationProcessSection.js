import React, { Fragment } from "react";

import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard2 from "../ServiceSection/ServiceCard2";

import VolunteerRegistration from "../../../public/assets/images1/ngo/home/volunteer-registration.webp";
import Order from '../../../public/assets/images1/ngo/home/order.webp'
import DirectCommunication from '../../../public/assets/images1/ngo/home/direct-communication.webp'
import WideTasks from '../../../public/assets/images1/ngo/home/wide-tasks.webp'
import Coordination from '../../../public/assets/images1/ngo/home/coordination.webp'
import Signup from '../../../public/assets/images1/ngo/home/user-avatar.webp'
import ReviewApplication from '../../../public/assets/images1/ngo/home/review-aplication.webp'
import Passionate from '../../../public/assets/images1/ngo/home/ergonomic.webp'
import TaskManagement from '../../../public/assets/images1/ngo/home/task-management.webp'
import ExpandedReach from '../../../public/assets/images1/ngo/home/expanded-reach.webp'
import Tasks from '../../../public/assets/images1/ngo/home/customize-task.webp'
import Outsourcing from '../../../public/assets/images1/ngo/home/outsourcing.webp'
// import icon from "../../../public/assets/images/cta/top-icon.png";

import Image from "next/image";
import { Link } from "react-router-dom";

const Services = [
    {
        Id: '01',
        sImg: Signup,
        // 
        title: 'Step 1: Register and Create Your NGO Profile',
        slug: '1',
        description: 'Begin by registering your NGO on Sevak Army. Simply register by providing basic details about your organisation, such as your NGO’s name, mission, contact information and the support you need. After registering, you’ll create a profile that showcases your NGO’s work, goals and the tasks you need help with.',
    },
    {
        Id: '02',
        sImg: Order,
        // 
        title: 'Step 2: Post and Customise Your Volunteer Tasks',
        slug: '2',
        description: 'Once your NGO profile is complete, you can start posting volunteer tasks. Customise each task by setting specific qualifications, deadlines and requirements to ensure you find the right volunteers for each role. Whether you need help with event planning, logistics or community outreach, Sevak Army lets you post tasks that match your organisation’s needs.',
    },
    {
        Id: '03',
        sImg: ReviewApplication,
        // 
        title: 'Step 3: Review Volunteer Applications',
        slug: '3',
        description: 'After posting your tasks, volunteers will start applying. You’ll be able to review their profiles and see how their skills and experience align with your requirements. Select the best candidates for your tasks, ensuring that the right volunteers are matched with the right roles.'

    },
    {
        Id: '04',
        sImg: DirectCommunication,
        // 
        title: 'Step 4: Direct Communication with Volunteers',
        slug: '4',
        description: 'Once you’ve selected your volunteers, Sevak Army’s in-platform messaging system allows you to communicate directly with them. Coordinate task details, ask questions and provide updates all in one place. This feature ensures smooth collaboration and makes it easy to manage your volunteers.',
    },
    {
        Id: '05',
        sImg: WideTasks,
        // 
        title: 'Step 5: Track Progress and Manage Tasks',
        slug: '4',
        description: 'As your volunteers begin working on their tasks, you can track their progress through Sevak Army’s Dashboard. This helps you stay organised and ensures tasks are completed on time. You can also log volunteer hours and evaluate the impact they’ve had on your projects.',
    },
    {
        Id: '06',
        sImg: Coordination,
        // 
        title: 'Step 6: Provide Feedback and Build Stronger Partnerships',
        slug: '4',
        description: "Once the tasks are completed, you can provide feedback to volunteers. This helps improve future collaborations and builds a stronger relationship between your NGO and the volunteers. It’s a great way to ensure continued success for your organisation.",
    },
]

const featuresData2 = [
    {
        // iconClass: 'flaticon-volunteer',
        svg: Passionate,
        title: 'Access to Passionate Volunteers',
        description: 'Easily find eager individuals to support your cause.'
    },
    {
        // iconClass: 'flaticon-volunteer',
        svg: TaskManagement,
        title: 'Efficient Task Management',
        description: 'Simplify the process of posting tasks and managing volunteers.'
    },
    {
        // iconClass: 'flaticon-volunteer',
        svg: ExpandedReach,
        title: 'Expanded Reach',
        description: 'Connect with volunteers across India, from urban areas to rural communities.'
    },
    {
        // iconClass: 'flaticon-volunteer',
        svg: Tasks,
        title: 'Customisable Tasks',
        description: 'Tailor your tasks to fit your needs and find the right volunteers for each project.'
    },
    {
        // iconClass: 'flaticon-volunteer',
        svg: Outsourcing,
        title: 'Direct Collaboration',
        description: 'Stay connected with volunteers through our messaging system for smooth coordination and communication.'
    },
];

function NgoRegistrationProcessSection(props) {
    return (
        <Fragment>
            <>

                <section className="wpo-about-section section-padding pb-0">
                    <div className="container">
                        <div className="wpo-about-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="wpo-about-img">
                                        <div className="wpo-about-right pt-0">
                                            <Image src={VolunteerRegistration} width={646} height={310} alt="Register Your NGO with Sevak Army" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="wpo-about-text">
                                        <div className="wpo-section-title mb-3">
                                            <span>Register Process</span>
                                            <h2 className="about-heading-second text-titleeee mt-0">
                                                Register Your NGO with Sevak Army: Empower Your Mission
                                            </h2>
                                        </div>
                                        <p style={{ textAlign: "justify" }}>
                                            Sevak Army is here to help NGOs like yours find dedicated volunteers, simplify task management and create lasting change. Register today and gain access to a platform designed to connect your NGO with the right people, make simpler operations and amplify your impact.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding pb-0">
                    <div className="container mt-2">
                        <div className="row justify-content-center">
                            <div className=" col-lg-6 col-md-12 col-12">
                                <SectionTitle subtitle="" title="How It Works: From Sign-Up to Success" />
                            </div>
                        </div>
                        <div className="service-wrap">
                            <p className="mt-2 text-center">Follow these easy steps to register your NGO and start finding the support you need.</p>
                            <div className="row justify-content-center pt-3">
                                {Services.slice(0, 10).map((Service, sitem) => (
                                    <div className="col col-md-6 col-12" key={sitem}>
                                        <div className="service-card-wrapper d-flex flex-column h-100">
                                            <ServiceCard2 title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <p className="text-center mb-0 mb-md-3" style={{ fontWeight: '600' }}>We’ve made it simple for NGOs to join Sevak Army, post tasks and connect with volunteers passionate about making a difference.</p>
                    </div>
                </section>


                <section className="section-padding pb-5 mb-2 mb-md-4">
                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <SectionTitle subtitle="Make an Impact" title="Why Register Your NGO with Sevak Army?" />
                            </div>
                        </div>

                        <div className="wpo-features-area pt-3">
                            <div className="features-wrap">
                                {/* <p className="pb-2 w-100" style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>Connect with Skilled Volunteers and Grow Your Impact </p> */}
                                <div className="row justify-content-center align-items-center column-gappp">
                                    {featuresData2.map((feature, index) => (
                                        <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                            <div className="feature-item-wrap">
                                                <div className="feature-item mb-0 d-flex align-items-center" style={{ height: '158px' }}>
                                                    <div className="feature-icon">
                                                        <div className="icon">
                                                            {feature.iconClass ? <i className={`fi ${feature.iconClass}`}></i> : <Image src={feature.svg} alt={feature.svg} />}
                                                        </div>
                                                    </div>
                                                    <div className="feature-text">
                                                        <h2 className="fs-5 mb-0">{feature.title}</h2>
                                                        <p className="fs-6" style={{ textAlign: 'justify' }}>{feature.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wpo-cta-section section-padding">
                    <div className="bg-overlay">
                        <div className="container">
                            <div className="bg-color">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="cta-wrap">
                                            <h2 className="mb-2">Register Your NGO Today</h2>
                                            <p
                                                className="text-center pt-2 px-2"
                                                style={{ textAlign: "justify", color: "white" }}
                                            >
                                                Join Sevak Army and connect with passionate volunteers ready to support your cause. It only takes a few minutes to register and post tasks to help your NGO make a bigger impact.
                                            </p>
                                            <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                                                <Link
                                                    to="https://app.sevakarmy.com/" target="_blank"
                                                    className="theme-btn"
                                                    style={{ width: "fit-content", textTransform: 'none' }}
                                                >
                                                    Register Now as an NGO
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Fragment>
    );
}

export default NgoRegistrationProcessSection;
