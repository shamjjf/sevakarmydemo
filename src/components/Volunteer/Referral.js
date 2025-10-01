import React from 'react'
import ServiceCard from "../ServiceSection/ServiceCard";
import simg1 from '../../../public/assets/images/service/creativity.png'
import simg2 from '../../../public/assets/images/service/identity.png'

function Referral() {

    const Services = [
        {
            Id: '01',
            sImg: simg1,
            
            title: 'Refer Fellow Influencers',
            slug: '2',
            description: "Spread the word about Sevak Army to other influencers in your network, earn points as they join and amplify your impact together.",
        },
        {
            Id: '02',
            sImg: simg2,
            
            title: 'Track Your Impact',
            slug: '1',
            description: 'Your referrals contribute to your overall impact on the Influencer Leaderboard and you’ll be recognised for your efforts in growing the movement.',
        },
        {
            Id: '03',
            
            
            title: 'Compete and Lead',
            slug: '3',
            description: 'Stay motivated by participating in our friendly leaderboard competition, where top influencers who refer the most people are recognised and rewarded.'

        },

    ]
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                {/* <div className="col-lg-10 col-md-12 col-12">
                    <SectionTitle title="Why It Matters?" />
                </div> */}
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
            
            <p className='text-center'>
                      By joining forces with these organisations, you’ll ensure your influence is used to support
                      life-changing efforts.
                    </p>
        </div>
    )
}

export default Referral