import Image from 'next/image';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// import icon from "../../../public/assets/images/cta/top-icon.png";


const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const accordionData = [
  {
    title: "What is Sevak Army?",
    content: "Sevak Army is a platform that connects volunteers with verified NGOs across India. We offer flexible volunteer opportunities that match your skills, interests, and time availability, allowing you to contribute to meaningful social work."
  },
  {
    title: "How do I register to volunteer?",
    content: (
      <>
        Signing up is simple! Visit our website, click{" "}
        <Link to="/volunteer/become-volunteer" target="_self" rel="noopener noreferrer">
          Become a Volunteer
        </Link>{" "}
        and create your profile. Once registered, you can start exploring tasks and apply for those that match your skills and interests.
      </>
    ),
  },
  {
    title: "What kind of tasks can I volunteer for?",
    content: "Sevak Army offers a variety of tasks, including education, healthcare, environmental projects, event management, and more. You can browse tasks based on your interests, skills, and availability."
  },
  {
    title: "Is there any age limit to becoming a volunteer?",
    content: "No, Sevak Army welcomes volunteers of all ages, whether you're a student, working professional, or retiree. Everyone has something to contribute!"
  },
  {
    title: "How are volunteers matched with NGOs?",
    content: "Volunteers can browse through different tasks posted by NGOs on our platform. Once you apply for a task that suits your profile, the NGO reviews your application and selects volunteers who meet their requirements."
  },
  {
    title: "Do I need to pay to volunteer?",
    content: "No, Sevak Army does not charge any fees for volunteering. All you need is a passion for helping others and the willingness to contribute your time."
  },
  {
    title: "Can I volunteer remotely?",
    content: "Yes! Sevak Army provides both on-site and remote volunteer opportunities, depending on what the NGO offers. You can select tasks based on the mode that suits your location and availability."
  },
  {
    title: "What recognition do volunteers receive?",
    content: "For each task completed, volunteers earn points, e-badges, and e-certificates. These can be shared on social media or added to your CV to showcase your contributions."
  },
  {
    title: "Can I refer others to join Sevak Army?",
    content: "Yes! You can refer friends or colleagues through your unique referral link. For each successful referral, you earn extra points, helping you climb the leaderboard."
  },
  {
    title: "How do I communicate with NGOs?",
    content: "Once you are selected for a task, a chat feature will be activated on the platform, allowing you to communicate directly with the NGO to coordinate and manage your tasks smoothly."
  },
  {
    title: "How does Sevak Army leaderboard work?",
    content: "The leaderboard tracks the contributions of all volunteers. Points are awarded for each task completed, and the leaderboard is refreshed weekly, monthly, and yearly to celebrate the top contributors."
  },
  {
    title: "How do I become a Sevak Army Ambassador?",
    content: "If you're passionate about promoting volunteering in the community, you can apply to become a Sevak Army Ambassador. Ambassadors lead initiatives, organise events, and work with NGOs to inspire more people to join."
  },
  {
    title: "What types of NGOs are listed on the platform?",
    content: "Sevak Army approves the registration of trusted and verified NGOs in various fields, including education, healthcare, environment, and community development. All NGOs go through an approval procedure to ensure their legitimacy and impact."
  },
  {
    title: "Can I rate my experience with an NGO?",
    content: "Yes! After completing a task, you can provide feedback and rate the NGO. This helps improve the volunteer experience and guides other volunteers in choosing tasks."
  },
  {
    title: "What is the process after I apply for a task?",
    content: "Once you apply for a task, the NGO reviews your application. If selected, you’ll be notified and can start coordinating with the NGO through the platform’s chat feature."
  },
  {
    title: "Is there any training provided for volunteers?",
    content: "While Sevak Army doesn’t offer formal training, we ensure that volunteers are matched with tasks suited to their skills. If needed, NGOs provide specific guidelines for their tasks."
  },
  {
    title: "How can schools, colleges, or companies get involved?",
    content: "Schools, colleges, and companies can register with Sevak Army to encourage students, employees, and communities to participate in volunteer opportunities. This can help build a culture of service and social responsibility."
  },
  {
    title: "Can I track the hours I’ve volunteered?",
    content: "Yes, you can log your hours and track your volunteer contributions through your profile. This helps you stay motivated and see the positive impact of your efforts over time."
  },
  {
    title: "What happens if I can’t complete a task after applying?",
    content: "If you're unable to complete a task, you must notify the NGO as soon as possible through the chat feature. This will help the NGO find another volunteer to complete the task. Please review and agree to the terms and conditions related to task withdrawal before registering to ensure smooth coordination."
  },
  {
    title: "How can I get more involved with Sevak Army?",
    content: "Aside from volunteering, you can also help promote Sevak Army by sharing your experiences on social media, referring others to join, or applying to become a Sevak Army Ambassador to lead volunteer initiatives in your community."
  },
  {
    title: "How do I register as a volunteer in Sevak Army?",
    content: "To register as a volunteer, visit the registration page, fill in your personal details, and create an account. You will then be able to explore available tasks and apply for opportunities that interest you."
  },
  {
    title: "What should I do if I forget my volunteer account password?",
    content: "If you forget your password, use the ‘Forgot Password’ link on the login page. Follow the instructions sent to your email to reset your password and regain access to your account."
  },
  {
    title: "How can I update my volunteer profile information?",
    content: "Log in to your account, go to the profile section and update your information as needed. Save your changes to ensure that your profile is current and updated."
  },
  {
    title: "How do I find volunteer tasks that match my interests?",
    content: "Use the task search feature to filter tasks based on your interests, skills, and location. Browse the listings to find opportunities that align with what you're looking for."
  },
  {
    title: "Can I apply for multiple volunteer tasks at the same time?",
    content: "Yes, you can apply for multiple tasks simultaneously. Ensure that you can manage the commitments before applying for several tasks to avoid overextending yourself."
  },
  {
    title: "How do I track the progress of my volunteer tasks?",
    content: "Track your task progress by checking the 'My Tasks' section in your dashboard. You'll see updates on the tasks you've applied for and their current status."
  },
  {
    title: "How do I cancel my application for a volunteer task?",
    content: "To cancel your application, go to the 'My Tasks' section, select the task you wish to withdraw from and follow the cancellation instructions."
  },
  {
    title: "How do I receive updates about new volunteer opportunities?",
    content: "You can receive updates by enabling notifications in your account settings. You'll get alerts about new tasks and opportunities that match your profile and interests."
  },
  {
    title: "Can I volunteer for tasks outside of my local area?",
    content: "Yes, you can apply for tasks outside your local area if they are available as remote or virtual opportunities. Ensure that you meet any requirements specified for these tasks."
  },
  {
    title: "How do I provide feedback on a completed volunteer task?",
    content: "After completing a task, you can provide feedback through the feedback form available on your task dashboard. Share your experience and any suggestions for improvement."
  },
  {
    title: "How do I know if my volunteer application has been accepted?",
    content: "You will receive a notification via email or through the platform once your application has been accepted. Check your dashboard for updates on the status of your application."
  },
  {
    title: "How can I view my volunteer hours and contributions?",
    content: "View your volunteer hours and contributions by accessing the 'My Contributions' section on your dashboard. This will show a summary of your activity and hours worked."
  },
  {
    title: "What are the expectations for volunteer conduct?",
    content: "Volunteers are expected to adhere to the platform's code of conduct, which includes being respectful, reliable, and professional. Follow all guidelines provided for each task."
  },
  {
    title: "How do I report an issue with the platform itself?",
    content: "Report platform issues by contacting the support team through the help section or submitting a support ticket. Provide details about the problem for quicker resolution."
  },
  {
    title: "Can I earn e-certificates for completing volunteer tasks?",
    content: "Yes, volunteers will receive e-certificates for each task they complete."
  },
  {
    title: "How can I get involved in long-term volunteer projects, such as those lasting six months or longer?",
    content: "Search for long-term projects on the platform and apply for them. Ensure that you’re ready for a longer commitment before applying."
  },
  {
    title: "Can I volunteer if I have a limited amount of time available?",
    content: "Yes, you can choose tasks that fit your availability. Look for tasks with flexible schedules or short-term commitments to match your time constraints."
  },
  {
    title: "How do I update my availability for volunteering?",
    content: "Update your availability by adjusting your preferences in the account settings or availability section. Ensure that your updated information is saved and reflects your current schedule."
  },
  {
    title: "How do I get involved in special events or one-time volunteer opportunities?",
    content: "Look for special events or one-time opportunities listed on the platform. Apply for these tasks by following the application instructions provided."
  },
  {
    title: "How can I make the most of my volunteer experience?",
    content: "Make the most of your experience by actively participating, seeking feedback, and continuously learning from each task. Engage with other volunteers and take advantage of any additional training or resources offered."
  },
  {
    title: "Can I volunteer for tasks that require specific skills or qualifications?",
    content: "Yes, you can apply for tasks that match your skills or qualifications. Ensure that you meet the requirements listed in the task description before applying."
  },
  {
    title: "How do I get recognition for my volunteer work?",
    content: "Get recognition by participating actively, completing tasks successfully, and contributing positively."
  },
  {
    title: "How do I provide suggestions for improving the volunteer experience?",
    content: "Provide suggestions by using the feedback forms available on the platform or contacting the support team."
  },
  {
    title: "How can I stay motivated as a volunteer?",
    content: "Stay motivated by setting personal goals, celebrating your achievements, and engaging with the volunteer community. Seek out tasks that align with your passions and interests."
  },
  {
    title: "Can I provide feedback on the platform itself?",
    content: "Yes, you can provide feedback on the platform by using the feedback feature or contacting the support team. Share your thoughts and suggestions to help improve the platform."
  },
  {
    title: "Can I volunteer with a specific cause or organisation?",
    content: "Yes, you can choose tasks associated with specific causes or organisations. Use the search and filter features to find opportunities related to your preferred causes or organisations."
  },
  {
    title: "How do I receive updates on my volunteer application status?",
    content: "Receive updates through notifications on the platform or via email. Check your dashboard regularly for the latest information on your application status."
  },
  {
    title: "How do I report a problem with a task or a task listing?",
    content: "Report problems with a task or listing by using the reporting feature on the platform or contacting the support team. Provide specific details about the issue for resolution."
  },
  {
    title: "How can I connect with other volunteers for networking?",
    content: "Connect with other volunteers through platform forums, discussion groups, or events. Networking opportunities may also be provided by the organisations hosting the tasks."
  },
  {
    title: "How do I ensure a positive impact through my volunteer work?",
    content: "Ensure a positive impact by being reliable, completing tasks effectively, and engaging with the community. Seek feedback and continually strive to improve your contributions."
  },
  {
    title: "How can I add or update my skills and interests on my volunteer profile?",
    content: "To add or update your skills and interests, log in to your profile, navigate to the 'Edit Profile' section, and make the necessary changes. Save your updates to ensure your profile reflects your current skills and interests."
  },
  {
    title: "Can I switch between different types of volunteer tasks?",
    content: "Yes, you can switch between different types of volunteer tasks. Review the available tasks on the platform and apply for those that match your new interests or availability."
  },
  {
    title: "What should I do if I have issues with task-related communication?",
    content: "If you experience issues with task-related communication, try reaching out again through the platform’s messaging system. If problems persist, contact the support team for assistance."
  },
  {
    title: "How do I view and manage my past volunteer experiences?",
    content: "View and manage your past volunteer experiences by accessing the 'My Tasks' or 'Volunteer History' section in your dashboard. Here, you can review completed tasks and track your overall contributions."
  },
  {
    title: "How can I update my contact information for volunteer-related communications?",
    content: "Update your contact information in your ‘account settings’ or ‘profile section.’ Ensure that your details are current so that you receive all relevant notifications and communications."
  },
  {
    title: "Can I volunteer for tasks that require a specific level of commitment or availability?",
    content: "Yes, you can select tasks based on your level of commitment and availability. The platform allows you to filter tasks according to your preferences and schedule."
  },
  {
    title: "Can I volunteer if I have limited or no prior experience?",
    content: "Yes, many volunteer tasks are suitable for individuals with limited or no prior experience. Look for beginner-friendly opportunities and consider any training or orientation provided."
  },
  {
    title: "Can I receive a summary of my volunteer contributions over a period?",
    content: "Yes, you can request a summary of your contributions by contacting the support team or accessing your 'Volunteer History' section. This summary provides an overview of your activity."
  },
  {
    title: "What are the benefits of completing a high number of volunteer tasks?",
    content: "Completing a high number of tasks can lead to increased recognition, opportunities for leadership roles, and a greater impact on the community. It can also enhance your skills and experience."
  },
  {
    title: "How do I ensure that my volunteer work aligns with my personal values and goals?",
    content: "Choose tasks and opportunities that match your personal values and goals. Review the task descriptions and organisations involved to ensure they align with your objectives."
  },
  {
    title: "Can I volunteer with multiple organisations through the platform?",
    content: "Yes, you can volunteer with multiple organisations through the platform. Apply for tasks from different organisations based on your interests and availability."
  },
  {
    title: "How do I provide suggestions for improving volunteer tasks or processes?",
    content: "Provide suggestions by using the feedback feature on the platform or contacting the support team. Share your ideas for improvements to help enhance the volunteer experience."
  },
  {
    title: "What should I do if I encounter technical issues while volunteering?",
    content: "Report technical issues to the support team or use the platform’s help section for troubleshooting. Provide details about the problem to ensure a quick resolution."
  },
  {
    title: "Can I suggest improvements to the volunteer platform or its features?",
    content: "Yes, you can suggest improvements by contacting the support team or using the feedback feature on the platform. Your suggestions can help enhance the overall user experience."
  },
  {
    title: "How do I stay motivated and committed to my volunteer tasks?",
    content: "Stay motivated by setting personal goals, celebrating your achievements, and engaging with the volunteer community. Choose tasks that align with your interests and passions."
  },
  {
    title: "How do I address any concerns or complaints about the platform itself?",
    content: "Address concerns or complaints about the platform by using the feedback feature or contacting the support team. Provide detailed information to ensure that your concerns are properly addressed."
  },
  {
    title: "How can I track and manage my volunteer hours effectively?",
    content: "Track and manage your volunteer hours through the platform’s time-tracking features or by maintaining your own records. Regularly update your hours and review them to ensure accuracy."
  }
];

const VolunteerFaqPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  ;

  return (
    <>
      <div className='container section-padding'>
        <h2 className='w-100 text-center'>Find answers to common questions about Sevak Army volunteering.</h2>

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


      <section className="wpo-cta-section section-padding">
        <div className="bg-overlay">
          <div className="container">
            <div className="bg-color">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="cta-wrap">
                    <h2 className='mb-2'>Volunteer FAQs</h2>
                    <p
                      className="text-center pt-2 px-2"
                      style={{ textAlign: "justify", color: "white" }}
                    >
                      Have questions about volunteering with Sevak Army?
                      We're here to help! Whether you're wondering about roles, responsibilities, time commitment, or how to get started, check out our FAQs to find all the answers you need.
                    </p>
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
                      <Link to="/contact-us" onClick={ClickHandler}>
                        <button className="theme-btn" style={{ width: "fit-content" }}>
                          Contact Us for More Info
                        </button>
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
  )
}

export default VolunteerFaqPage