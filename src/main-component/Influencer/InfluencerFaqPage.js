import React, { useState } from 'react'
import CtaSection from '../../components/CtaSection/CtaSection';

const accordionData = [
  {
    "title": "What is SevakArmy?",
    "content": "SevakArmy is a platform connecting NGOs with volunteers who want to make a difference through meaningful social work."
  },
  {
    "title": "What is the role of an influencer in SevakArmy?",
    "content": "Influencers inspire their followers to join SevakArmy, helping them find volunteer opportunities that match their skills and interests."
  },
  {
    "title": "Why does SevakArmy work with influencers?",
    "content": "Influencers amplify social impact by encouraging their followers to volunteer, spreading awareness, and supporting important causes."
  },
  {
    "title": "Who can become an influencer for SevakArmy?",
    "content": "Anyone with a platform and a commitment to social good can apply to be a SevakArmy influencer."
  },
  {
    "title": "How does SevakArmy verify NGOs?",
    "content": "All NGOs registering with SevakArmy are verified to ensure their legitimacy."
  },
  {
    "title": "How do I become an influencer in SevakArmy?",
    "content": "Register on SevakArmy's influencer page and create your profile to get started."
  },
  {
    "title": "What is a referral link?",
    "content": "A referral link is a unique link given to influencers to share with followers, allowing them to register as volunteers in SevakArmy."
  },
  {
    "title": "How does my referral link work?",
    "content": "Each person who registers through your referral link will be tracked, contributing to your points and leaderboard ranking."
  },
  {
    "title": "Can I share my referral link across all my social media platforms?",
    "content": "Yes, you can share your referral link on any platform to encourage your followers to join SevakArmy."
  },
  {
    "title": "Will I get notified when someone registers through my link?",
    "content": "Yes, SevakArmy provides tools to help you track registrations through your referral link."
  },
  {
    "title": "How are points awarded to influencers?",
    "content": "Points are awarded for each successful volunteer sign-up and task completion through your referral link."
  },
  {
    "title": "What is the leaderboard, and how does it work?",
    "content": "The leaderboard ranks influencers based on points earned from referral sign-ups and completed tasks, updated weekly, monthly, and yearly."
  },
  {
    "title": "Can I earn points for referring friends to SevakArmy?",
    "content": "Yes, referring others to SevakArmy will also earn you points, boosting your position on the leaderboard."
  },
  {
    "title": "What recognition does SevakArmy provide for top influencers?",
    "content": "Top influencers receive digital badges and digital certificates and may attend special recognition events."
  },
  {
    "title": "How often is the leaderboard updated?",
    "content": "The leaderboard is updated in real-time, with weekly, monthly, and yearly rankings."
  },
  {
    "title": "Are there rewards for being at the top of the leaderboard?",
    "content": "Top influencers receive recognition, awards, and exclusive event invitations."
  },
  {
    "title": "What kinds of volunteer opportunities are available for my followers?",
    "content": "SevakArmy offers diverse tasks, from education and healthcare to environmental and social causes."
  },
  {
    "title": "How do my followers find volunteer tasks?",
    "content": "Followers can filter tasks based on skills, interests, and availability on SevakArmy platform."
  },
  {
    "title": "Do I have to assign tasks to my followers?",
    "content": "No, followers can independently browse and apply for tasks that interest them."
  },
  {
    "title": "How can I see the impact my followers are making?",
    "content": "SevakArmy provides an impact tracker to monitor volunteer contributions through your referral link."
  },
  {
    "title": "Can followers communicate with NGOs directly?",
    "content": "Yes, volunteers can communicate directly with the NGO once accepted for a task."
  },
  {
    "title": "What is SevakArmy's gamification system?",
    "content": "SevakArmy uses a points and leaderboard system to engage influencers and volunteers, awarding achievements for completed tasks."
  },
  {
    "title": "How are digital badges earned in SevakArmy?",
    "content": "Digital badges are earned for reaching specific milestones in volunteer recruitment and task completion."
  },
  {
    "title": "What are digital certificates, and how do I get them?",
    "content": "Digital certificates are awarded to influencers who reach critical milestones in SevakArmy."
  },
  {
    "title": "Is there a limit to the number of points I can earn?",
    "content": "No, you can continue earning points if your followers register and volunteer through SevakArmy."
  },
  {
    "title": "How do I check my points balance?",
    "content": "Log in to your influencer profile on SevakArmy to view your points, digital badges, and rank."
  },
  {
    "title": "How does SevakArmy measure social impact?",
    "content": "SevakArmy measures impact by tracking volunteer hours and the types of tasks completed."
  },
  {
    "title": "What is SevakArmy’s mission?",
    "content": "SevakArmy aims to empower volunteers and NGOs collectively to achieve 2 million hours of service by 2025."
  },
  {
    "title": "Can influencers promote specific causes in SevakArmy?",
    "content": "Yes, you can highlight specific causes like healthcare or education that resonate with your followers."
  },
  {
    "title": "How does SevakArmy align with social responsibility?",
    "content": "SevakArmy focuses on creating real, measurable change by connecting volunteers with verified NGOs addressing pressing issues."
  },
  {
    "title": "What are SevakArmy’s recognition events?",
    "content": "These events honour top influencers who have made significant contributions by recruiting volunteers."
  },
  {
    "title": "How are influencers selected for recognition events?",
    "content": "Influencers with high leaderboard rankings and points are invited to exclusive recognition events."
  },
  {
    "title": "What happens at a recognition event?",
    "content": "Influencers receive awards, share success stories, and network with other social changemakers and NGOs."
  },
  {
    "title": "Do I get a physical award for my achievements?",
    "content": "SevakArmy awards digital certificates and may present physical awards at recognition events."
  },
  {
    "title": "Can my followers attend recognition events?",
    "content": "Recognition events are specifically for influencers, but followers’ contributions are celebrated through the platform."
  },
  {
    "title": "How can I stay updated on new volunteer opportunities?",
    "content": "Subscribe to SevakArmy’s newsletter for updates on new campaigns and volunteer needs."
  },
  {
    "title": "Does SevakArmy send regular updates to influencers?",
    "content": "Yes, influencers receive emails with platform updates, leaderboard rankings, and new volunteer opportunities."
  },
  {
    "title": "What is included in SevakArmy newsletter?",
    "content": "The newsletter includes news on impactful projects, influencer stories, new volunteer needs, and leaderboard updates."
  },
  {
    "title": "Can I unsubscribe from updates?",
    "content": "Yes, you can opt out of updates anytime through your profile settings."
  },
  {
    "title": "How do I reset my SevakArmy password?",
    "content": "Go to the login page, click 'Forgot Password,' and follow the instructions."
  },
  {
    "title": "Can I update my influencer profile after registering?",
    "content": "Yes, you can edit your profile details in the account settings."
  },
  {
    "title": "Is my data secure in SevakArmy?",
    "content": "SevakArmy is committed to data privacy and security, following strict protection protocols."
  },
  {
    "title": "How do I contact support?",
    "content": "For any issues, contact SevakArmy support through the 'Contact Us' page."
  },
  {
    "title": "Can I deactivate my influencer account?",
    "content": "Yes, contact support if you wish to deactivate your account."
  },
  {
    "title": "How much do I earn per referral?",
    "content": "You’ll earn points for every new volunteer contributing to your leaderboard standing and recognition."
  },
  {
    "title": "Can I see which followers joined through my link?",
    "content": "Yes, your influencer dashboard provides details on new sign-ups through your link."
  },
  {
    "title": "Is there a minimum requirement for referrals?",
    "content": "No, but more referrals will help you earn higher points and rise on the leaderboard."
  },
  {
    "title": "Are there extra rewards for high referral numbers?",
    "content": "High referral counts are rewarded with digital badges, digital certificates, and potential event invitations."
  },
  {
    "title": "Can I refer to other influencers?",
    "content": "Yes, you may refer to other influencers, which can also contribute to your points."
  },
  {
    "title": "Can influencers join campaigns with specific NGOs?",
    "content": "Yes, influencers can align with specific NGO causes to promote tasks that match their audience’s interests."
  }
]

const InfluencerFaqPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div className='container section-padding'>
        <h2 className='w-100 text-center p-1'>Our Guide to Influencing for SevakArmy: Frequently Asked Questions</h2>

        <section className="wpo-service-single-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 col-md-12">
                <div className="wpo-service-single-wrap">
                  <div className="wpo-benefits-section">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="wpo-benefits-item">
                          <div className="accordion" id="accordionExample">
                            {accordionData.map((item, index) => (
                              <div className="accordion-item" key={index}>
                                <h3 className="accordion-header" id={`heading${index}`}>
                                  <button
                                    className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeAccordion === index ? 'true' : 'false'}
                                    aria-controls={`collapse${index}`}
                                  >
                                    {item.title}
                                  </button>
                                </h3>
                                <div
                                  id={`collapse${index}`}
                                  className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                  aria-labelledby={`heading${index}`}
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <p>{item.content}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  )
}

export default InfluencerFaqPage