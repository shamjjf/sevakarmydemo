import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/university-card.png'
import simg2 from '../../../public/assets/images/service/industry.png'
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

function RegisterYourCompany({show, setShow}) {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'organisation Name',
            slug: '2',
            description: 'Register your business under its official name.',
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Industry',
            slug: '1',
            description: 'Tell us which industry you belong to so we can match you with relevant volunteering opportunities.',
        },
        {
            Id: '03',
            
            
            title: 'CSR Goals',
            slug: '3',
            description: 'Share your organisation’s CSR vision and the causes that matter most to your organisation.'

        },
        {
            Id: '04',
            
            
            title: 'organisation Details',
            slug: '4',
            description: 'Provide contact information and details about your organisation size to help us customise opportunities for your business.',
        },
    ]

    return (
        <div className="container pt-3">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle title="Register Your organisation and Make a Difference" paragarap="Joining Sevak Army is quick and straightforward. Simply fill out our Company Registration Form with your basic details and we’ll guide you through the rest. Once you’ve completed the form, you’ll gain access to our platform’s full suite of CSR tools and resources." />
                </div>
            </div>
            <div className="service-wrap mt-3">
                <div className="row justify-content-center">
                    {Services.slice(0, 5).map((Service, sitem) => (
                        <div className="col col-lg-4 col-md-6 col-sm-6 col-12" key={sitem}>
                            <div className="service-card-wrapper d-flex flex-column align-items-stretch" style={{ alignSelf: 'stretch' }}>
                                <ServiceCard height="330px" title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-lg-8 col-md-12 col-12">
                    <p className='text-center' style={{ fontWeight: '600' }}>Once your organisation is registered, you can invite employees, manage your volunteer efforts and track your social impact from a single platform.</p>
                    <div className='w-full d-flex justify-content-center'>
                        <Link to="https://app.sevakarmy.com/" target="_blank" className='theme-btn mt-1'>
                            Fill Out the Registration Form
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterYourCompany