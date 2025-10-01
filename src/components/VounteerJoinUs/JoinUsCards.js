import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/1.svg'
import simg2 from '../../../public/assets/images/service/2.svg'
import simg3 from '../../../public/assets/images/service/3.svg'
import simg4 from '../../../public/assets/images/service/4.svg'



import sSimg4 from '../../../public/assets/images/service-single/img4.jpg'

function JoinUsCards() {
    const Services = [
        {
            Id: '01',
            title: "Register",
            sImg: simg1,
            
            slug: '1',
            description: 'Create an account by providing your basic details such as name, email and contact information.',
        },
        {
            Id: '02',
            title: "Complete Profile",
            sImg: simg2,
            
            slug: '2',
            description: 'Fill in your profile with your skills, interests and areas of expertise.',
        },
        {
            Id: '03',
            title: "Browse Tasks",
            
            
            slug: '3',
            description: 'Once your profile is set, browse through a variety of tasks based on your preferences.'

        },
        {
            Id: '04',
            title: "Apply for Tasks",
            
            
            slug: '4',
            description: 'Apply for tasks that interest you, explaining why you are suited for the role.'

        },
        {
            Id: '05',
            title: "Get Approved",
            sImg: simg1,
            
            slug: '5',
            description: 'Once the task organiser reviews your application, they will approve and communicate the next steps.',
        },
    ]

    return (
        <section>
            <div className="container">
                <div className="service-wrap">
                    <div className="row justify-content-center">
                        {Services.map((Service, sitem) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={sitem} style={{ width: '28.3rem', display: 'flex', justifyContent: 'center' }}>
                                <ServiceCard title={Service.title} img={Service.sImg} slug={Service.slug} sdescription={Service.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUsCards