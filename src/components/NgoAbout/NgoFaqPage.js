import React, { Fragment, useEffect, useState } from "react";

import Navbar from "../Navbar/Navbar";
import Logo from "../../../public/assets/images/logo.svg";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import PageTitle from "../pagetitle/PageTitle";
import CtaSection from '../../components/CtaSection/CtaSection';

const accordionData = [
    {
        "title": "Can my NGO post tasks for volunteers in SevakArmy?",
        "content": (
            <>
                Yes, once your NGO is registered and approved, you can post tasks for volunteers directly on the platform through the 'NGO Dashboard'. You can set task requirements, deadlines and track volunteer progress.
            </>
        )
    },
    {
        "title": "How do we ensure our tasks are completed by volunteers?",
        "content": (
            <>
                SevakArmy allows you to track task progress and communicate with volunteers directly through the platform. You can also set deadlines and send reminders to ensure tasks are completed on time.
            </>
        )
    },
    {
        "title": "Can my NGO provide feedback on volunteer performance?",
        "content": (
            <>
                Yes, NGOs can provide feedback on volunteers after they complete the tasks. This feedback helps improve future volunteer experiences and allows volunteers to grow and improve their skills.
            </>
        )
    },
    {
        "title": "How can my NGO track volunteer hours?",
        "content": (
            <>
                Through the NGO dashboard, you can monitor and approve volunteer hours logged for each task. This helps maintain transparency and ensures accurate tracking of volunteer contributions.
            </>
        )
    },
    {
        "title": "Does SevakArmy offer reporting features for NGOs?",
        "content": (
            <>
                Yes, NGOs have access to detailed reports that show volunteer hours, task completion rates and overall impact. These reports can be downloaded and used for internal assessments or external reporting purposes.
            </>
        )
    },
    {
        "title": "How can my NGO communicate with volunteers?",
        "content": (
            <>
                NGOs can communicate with volunteers through the in-platform messaging system. You can send task-specific messages, reminders or general updates directly to volunteers involved in your tasks.
            </>
        )
    },
    {
        "title": "What types of tasks can my NGO post for SevakArmy?",
        "content": (
            <>
                NGOs can post a variety of tasks, including administrative support, community outreach, digital marketing, fundraising and more. Tasks can be virtual or in-person, depending on the NGO's needs and location.
            </>
        )
    },
    {
        "title": "Can my NGO post ongoing or recurring tasks?",
        "content": (
            <>
                Yes, your NGO can post both one-time tasks and recurring tasks. For recurring tasks, you can set up a schedule so that volunteers know the frequency and commitment required.
            </>
        )
    },
    {
        "title": "How do we manage multiple volunteers for a single task?",
        "content": (
            <>
                SevakArmy allows NGOs to assign multiple volunteers to a single task. You can manage each volunteer’s progress individually and communicate with them as a group or separately.
            </>
        )
    },
    {
        "title": "Can our NGO set task qualifications or requirements?",
        "content": (
            <>
                Yes, when creating a task, NGOs can specify the qualifications or skills required for volunteers. This ensures that volunteers who apply are capable of handling the task efficiently.
            </>
        )
    },
    {
        "title": "Is there a cost for NGOs to use SevakArmy?",
        "content": (
            <>
                SevakArmy offers free and premium plans for NGOs. The free plan provides basic access to posting tasks and managing volunteers, while premium plans offer advanced reporting, more volunteer outreach and additional features.
            </>
        )
    },
    {
        "title": "How long does it take for our NGO to get approved by SevakArmy?",
        "content": (
            <>
                After submitting your application, it typically takes 3-5 business days for our team to review and approve your NGO account. If additional information is needed, we will contact you.
            </>
        )
    },
    // {
    //     "title": "Can international NGOs partner with SevakArmy?",
    //     "content": (
    //         <>
    //             Yes, SevakArmy welcomes international NGOs to partner with us. As long as your NGO meets our partnership criteria, you can join the platform and post tasks for volunteers worldwide.
    //         </>
    //     )
    // },
    {
        "title": "How can our NGO promote our tasks to more volunteers?",
        "content": (
            <>
                NGOs can promote their tasks by ensuring detailed and engaging task descriptions, using social media integration and applying for featured task placement through our premium plans.
            </>
        )
    },
    {
        "title": "Can NGOs view volunteer profiles before accepting them for a task?",
        "content": (
            <>
                Yes, NGOs can view volunteer profiles, including their experience, skills and previous volunteer work, before accepting them for a task. This helps ensure a good fit between the volunteer and the task.
            </>
        )
    },
    {
        "title": "What if our NGO needs to cancel a task after posting it?",
        "content": (
            <>
                If your NGO needs to cancel a task, simply go to the task in your dashboard and select 'Cancel Task'. Be sure to notify volunteers as soon as possible if the task is cancelled.
            </>
        )
    },
    {
        "title": "How does SevakArmy support NGOs in rural or remote areas?",
        "content": (
            <>
                SevakArmy supports NGOs in rural or remote areas by offering virtual task options and connecting them with volunteers who are willing to help from anywhere in the world. This expands the reach of NGOs and ensures they get the help they need.
            </>
        )
    },
    {
        "title": "Can NGOs organise events through  SevakArmy?",
        "content": (
            <>
                Yes, NGOs can post events, such as community outreach programmes or fundraising efforts, as tasks to  SevakArmy. Volunteers can register to help with specific roles or responsibilities for these events.
            </>
        )
    },
    {
        "title": "How do NGOs handle volunteer liability or safety concerns?",
        "content": (
            <>
                NGOs are responsible for ensuring that volunteers are aware of any potential risks associated with tasks. We recommend providing clear instructions, safety guidelines, and appropriate training for volunteers to minimise liability.
            </>
        )
    },
    {
        "title": "Can our NGO host training or orientation for volunteers in SevakArmy?",
        "content": (
            <>
                Yes, NGOs can host virtual training or orientation sessions through the platform. You can also upload documents or share resources that volunteers need to complete tasks.
            </>
        )
    },
    {
        "title": "How do we update our NGO’s information or profile on SevakArmy?",
        "content": (
            <>
                To update your NGO profile or information, go to 'NGO Settings' on your dashboard. You can edit your contact details, mission statement, and other relevant information from this section.
            </>
        )
    },
    {
        "title": "How do we report a problem with a volunteer?",
        "content": (
            <>
                If your NGO encounters any issues with a volunteer, you can report the problem by going to the volunteer’s profile and selecting 'Report Issue'. SevakArmy will review the report and take appropriate action.
            </>
        )
    },
    {
        "title": "Can our NGO partner with other organisations in SevakArmy?",
        "content": (
            <>
                Yes, NGOs can collaborate with other organisations through SevakArmy. You can share tasks, volunteers, and resources with partnered organisations to increase your impact.
            </>
        )
    },
    {
        "title": "How do we manage volunteer shifts for our tasks?",
        "content": (
            <>
                NGOs can manage volunteer shifts by setting specific time slots when creating tasks. Volunteers can then select the shifts that suit them, and you can track and adjust the shifts from your dashboard.
            </>
        )
    },
    {
        "title": "Can we set a maximum number of volunteers for a task?",
        "content": (
            <>
                Yes, when creating a task, you can specify the maximum number of volunteers needed. Once the limit is reached, the task will no longer accept additional volunteers.
            </>
        )
    },
    {
        "title": "How can we recognise and reward volunteers through  SevakArmy?",
        "content": (
            <>
                You can recognise and reward volunteers by providing feedback, issuing digital certificates of appreciation, and highlighting their contributions in impact reports. Some premium plans may offer additional tools for recognition.
            </>
        )
    },
    {
        "title": "How do we ensure volunteers are meeting the task requirements?",
        "content": (
            <>
                You can monitor volunteers' progress through the task management features on your dashboard. Regular communication and setting clear task guidelines also help ensure volunteers meet requirements.
            </>
        )
    },
    {
        "title": "How do we handle volunteer no-shows or cancellations?",
        "content": (
            <>
                You can manage no-shows or cancellations by using the task management tools to track attendance and adjust volunteer assignments. It’s helpful to have a backup list of volunteers for such situations.
            </>
        )
    },
    {
        "title": "How can we request additional support or features from SevakArmy?",
        "content": (
            <>
                To request additional support or features, contact our support team through the 'Help' section on your dashboard. Provide details about your request, and we will review and consider it for future updates.
            </>
        )
    },
    {
        "title": "Can we integrate SevakArmy with other tools or platforms our NGO uses?",
        "content": (
            <>
                SevakArmy supports integration with various tools and platforms. Check the 'Integrations' section on our website for a list of supported integrations or contact support for specific requests.
            </>
        )
    },
    {
        "title": "What types of training materials can we provide to volunteers through SevakArmy?",
        "content": (
            <>
                You can provide various training materials, including documents, videos, and links, through the task description or dedicated training sections on the platform.
            </>
        )
    },
    {
        "title": "How can we track the effectiveness of our volunteer programmes?",
        "content": (
            <>
                Use the reporting features on your dashboard to track metrics such as volunteer hours, task completion rates, and impact. Regularly review these reports to assess and improve your programmes.
            </>
        )
    },
    {
        "title": "Can we customise the task posting form for our NGO’s needs?",
        "content": (
            <>
                Yes, SevakArmy allows customisation of task posting forms to include fields relevant to your NGO’s specific needs and requirements. Contact support for assistance with customisation.
            </>
        )
    },
    {
        "title": "How do we handle volunteer data privacy and security?",
        "content": (
            <>
                SevakArmy ensures data privacy and security by following strict protocols for data protection. NGOs should also inform volunteers about how their data will be used and stored.
            </>
        )
    },
    {
        "title": "Can we create and manage sub-tasks for larger projects?",
        "content": (
            <>
                Yes, you can break down larger projects into sub-tasks and assign them to different volunteers. This helps manage complex tasks and ensures all aspects of the project are covered.
            </>
        )
    },
    {
        "title": "How can we collaborate with other NGOs in SevakArmy?",
        "content": (
            <>
                You can collaborate with other NGOs by sharing tasks, resources and volunteer opportunities. Contact other NGOs directly through the platform to explore potential partnerships.
            </>
        )
    },
    {
        "title": "What should we do if we encounter technical issues with the platform?",
        "content": (
            <>
                If you experience technical issues, report them through the 'Technical Support' section on your dashboard. Our support team will assist you in resolving the issues as quickly as possible.
            </>
        )
    },
    {
        "title": "Can we use SevakArmy for fundraising events?",
        "content": (
            <>
                Yes, SevakArmy can be used to organise and manage fundraising events. Post tasks related to the event, such as logistics, outreach and fundraising activities and track volunteer involvement.
            </>
        )
    },
    {
        "title": "How do we ensure our tasks align with our NGO’s mission?",
        "content": (
            <>
                When creating tasks, ensure they are aligned with your NGO’s mission and goals by clearly defining task objectives and how they contribute to your overall mission.
            </>
        )
    },
    {
        "title": "Can we assign tasks to specific volunteers?",
        "content": (
            <>
                Yes, you can assign tasks to specific volunteers or allow them to choose tasks based on their skills and availability. Use the task assignment features in your dashboard to manage this.
            </>
        )
    },
    {
        "title": "How can we update or edit a task after it has been posted?",
        "content": (
            <>
                To update or edit a task, go to the 'Manage Tasks' section on your dashboard, select the task you want to modify and make the necessary changes. Save the updates to apply them.
            </>
        )
    },
    {
        "title": "Are there any guidelines for posting tasks in SevakArmy?",
        "content": (
            <>
                Yes, ensure tasks are clearly defined, include specific requirements and provide all necessary information for volunteers. Follow best practices for task posting to attract and retain volunteers.
            </>
        )
    },
    {
        "title": "Can we track volunteer engagement over time?",
        "content": (
            <>
                Yes, SevakArmy’s reporting features allow you to track volunteer engagement over time, including metrics such as participation rates, task completion and overall impact.
            </>
        )
    },
    {
        "title": "How do we handle disputes or conflicts with volunteers?",
        "content": (
            <>
                Address disputes or conflicts by communicating directly with the volunteers involved and using the reporting tools on the platform if necessary. Seek to resolve issues amicably and fairly.
            </>
        )
    },
    {
        "title": "Can we create custom impact reports for our NGO?",
        "content": (
            <>
                Yes, custom impact reports can be created based on the metrics and data you wish to include. Use the reporting features on your dashboard to generate reports that meet your needs.
            </>
        )
    },
    {
        "title": "How do we integrate our NGO’s branding into SevakArmy platform?",
        "content": (
            <>
                You can customise your NGO profile page with branding elements such as logos and colour schemes. Contact support for assistance with more advanced branding options.
            </>
        )
    },
    {
        "title": "Can we use SevakArmy for virtual volunteer opportunities?",
        "content": (
            <>
                Yes, SevakArmy supports virtual volunteer opportunities. You can post tasks that can be completed remotely and manage virtual engagements through the platform.
            </>
        )
    },
    {
        "title": "How do we handle feedback from volunteers about our tasks?",
        "content": (
            <>
                Encourage volunteers to provide feedback through task reviews and surveys. Use this feedback to improve future tasks and address any issues or concerns raised by volunteers.
            </>
        )
    },
    {
        "title": "Can we limit task visibility to certain volunteers or groups?",
        "content": (
            <>
                Yes, you can set visibility preferences for tasks to ensure they are only visible to specific volunteers or groups based on their qualifications or interests.
            </>
        )
    },
    {
        "title": "How can we ensure our NGO’s tasks are accessible to all volunteers?",
        "content": (
            <>
                Make sure task descriptions are clear and inclusive and provide any necessary accommodations for volunteers with disabilities. Ensure tasks are designed to be accessible to a diverse group of volunteers.
            </>
        )
    },
    {
        "title": "What resources are available for NGOs to enhance their use of SevakArmy?",
        "content": (
            <>
                SevakArmy offers resources such as tutorials, best practice guides, and a dedicated support team to help NGOs enhance their use of the platform and optimise their volunteer management.
            </>
        )
    },
    {
        "title": "How can we verify the identity of volunteers?",
        "content": (
            <>
                SevakArmy provides volunteer profiles with verification features. NGOs can review profiles and request additional verification if needed before assigning tasks.
            </>
        )
    },
    {
        "title": "Can we host webinars or online training sessions for volunteers?",
        "content": (
            <>
                Yes, you can host webinars or online training sessions for volunteers. Use the platform’s communication tools to schedule and manage these sessions.
            </>
        )
    },
    {
        "title": "How do we manage and review volunteer applications for tasks?",
        "content": (
            <>
                Review volunteer applications through the 'Task Management' section on your dashboard. You can accept, decline, or request additional information from volunteers as needed.
            </>
        )
    },
    {
        "title": "Can we track volunteer retention rates?",
        "content": (
            <>
                Yes, SevakArmy’s reporting features allow you to track volunteer retention rates and other engagement metrics. Use this data to assess and improve your volunteer programmes.
            </>
        )
    },
    {
        "title": "How do we promote our NGO’s mission and tasks to a wider audience?",
        "content": (
            <>
                Promote your NGO’s mission and tasks through social media integration, featured tasks, and by engaging with  SevakArmy community. Utilize marketing and outreach tools available on the platform.
            </>
        )
    },
    // {
    //     "title": "Can we set specific criteria for volunteer selection?",
    //     "content": (
    //         <>
    //             Yes, when creating a task, you can set specific criteria or qualifications that volunteers must meet to be considered for the task. This helps ensure that volunteers have the necessary skills and experience.
    //         </>
    //     )
    // },
    {
        "title": "How can we track the effectiveness of our volunteer recruitment efforts?",
        "content": (
            <>
                Track the effectiveness of your recruitment efforts by reviewing metrics such as the number of task applications, volunteer sign-ups, and engagement levels through the reporting features on your dashboard.
            </>
        )
    },
    {
        "title": "Can we use SevakArmy to organise community outreach programs?",
        "content": (
            <>
                Yes, SevakArmy is well-suited for organising community outreach programmes. Post relevant tasks, recruit volunteers, and manage the programmes logistics through the platform.
            </>
        )
    },
    // {
    //     "title": "How can we update our NGO's contact information on the platform?",
    //     "content": (
    //         <>
    //             To update your NGO contact information, go to the 'Settings' section on your dashboard. Make the necessary changes and save the updates to ensure that your contact details are current.
    //         </>
    //     )
    // },
    {
        "title": "Can we add multiple administrators to our NGO account?",
        "content": (
            <>
                Yes, you can add multiple administrators to your NGO account with varying levels of access. This allows different team members to manage tasks, volunteers, and other aspects of the platform.
            </>
        )
    },
    {
        "title": "How do we handle volunteer training and orientation through SevakArmy?",
        "content": (
            <>
                You can handle volunteer training and orientation by uploading training materials, scheduling online sessions, and providing clear instructions within the task descriptions or dedicated training sections.
            </>
        )
    },
    {
        "title": "Are there any best practices for creating effective volunteer tasks?",
        "content": (
            <>
                Best practices include providing clear, detailed task descriptions, setting achievable goals, defining specific requirements, and offering support and feedback throughout the task.
            </>
        )
    },
    {
        "title": "How can we ensure that our NGO’s tasks are completed efficiently?",
        "content": (
            <>
                Ensure efficient task completion by setting clear deadlines, monitoring progress regularly, providing necessary resources and support, and communicating effectively with volunteers.
            </>
        )
    },
    {
        "title": "Can we conduct surveys to gather feedback from volunteers?",
        "content": (
            <>
                Yes, you can conduct surveys to gather feedback from volunteers. Use the platform’s survey tools or integrate external survey tools to collect valuable insights from your volunteers.
            </>
        )
    },
    {
        "title": "How do we manage and resolve issues related to task assignments?",
        "content": (
            <>
                Manage and resolve issues by using the task management features to track assignments, communicate with volunteers, and adjust assignments as needed. Address specific concerns directly with the volunteers involved.
            </>
        )
    },
    {
        title: "Can we set up automated reminders for task deadlines?",
        content: (
            <>
                Yes, you can set up automated reminders for task deadlines. This helps ensure that both your NGO and the volunteers stay on track and are aware of upcoming deadlines.
            </>
        )
    },
    {
        title: "How can we track and report on volunteer impact for specific projects?",
        content: (
            <>
                Use the platform’s reporting tools to track and report on volunteer impact. Include metrics such as hours worked, tasks completed and specific outcomes related to each project.
            </>
        )
    },
    // {
    //     title: "Can we customise the look and feel of our NGO's profile page?",
    //     content: (
    //         <>
    //             Yes, you can customise your NGO profile page by adding branding elements such as logos, banners and colour schemes. Contact support for assistance with advanced customisation options.
    //         </>
    //     )
    // },
    {
        title: "How do we ensure compliance with local regulations for our tasks?",
        content: (
            <>
                Ensure compliance by reviewing local regulations related to volunteer work and incorporating necessary guidelines into your tasks. Consult with legal experts if needed to address specific compliance issues.
            </>
        )
    },
    {
        title: "Can we manage different types of tasks, such as short-term and long-term?",
        content: (
            <>
                Yes, SevakArmy allows you to manage various types of tasks, including short-term and long-term tasks. Set the duration and requirements accordingly when creating tasks on the platform.
            </>
        )
    },
    {
        title: "How do we address volunteers who do not meet task expectations?",
        content: (
            <>
                Address volunteers who do not meet task expectations by providing constructive feedback, discussing the issues directly and offering additional support or training if needed.
            </>
        )
    },
    {
        title: "How do we handle volunteer scheduling conflicts?",
        content: (
            <>
                Manage scheduling conflicts by using the platform’s scheduling tools to adjust volunteer shifts and assignments. Communicate with volunteers to resolve conflicts and find suitable solutions.
            </>
        )
    },
    {
        title: "Can we track the progress of volunteers in real time?",
        content: (
            <>
                Yes, SevakArmy provides real-time tracking of volunteer progress. Use the task management features to monitor ongoing tasks and view updates from volunteers as they work.
            </>
        )
    },
    {
        title: "How can we use SevakArmy to enhance our NGO’s public visibility?",
        content: (
            <>
                Enhance your NGO’s public visibility by featuring your tasks, sharing success stories and using social media integration to promote your activities and attract more volunteers.
            </>
        )
    },
    {
        title: "Can we set up a referral programme to encourage volunteers to invite others?",
        content: (
            <>
                Yes, you can set up a referral programme to encourage existing volunteers to invite others. Use the platform’s features to track referrals and reward volunteers who successfully recruit new members.
            </>
        )
    },
    {
        title: "How can we ensure that our tasks are inclusive and accessible to all volunteers?",
        content: (
            <>
                Ensure inclusivity and accessibility by providing clear instructions, offering support for volunteers with disabilities and designing tasks that accommodate diverse needs and backgrounds.
            </>
        )
    },
    {
        title: "Can we offer virtual or remote tasks for volunteers in different locations?",
        content: (
            <>
                Yes, SevakArmy supports virtual and remote tasks. You can post tasks that can be completed online and manage them through the platform, allowing volunteers from various locations to participate.
            </>
        )
    },
    {
        title: "How do we integrate volunteer feedback into our task planning?",
        content: (
            <>
                Integrate volunteer feedback by reviewing their input regularly, adjusting task requirements and processes based on feedback and continuously improving your task planning and execution.
            </>
        )
    },
    {
        title: "Can we manage volunteer recruitment campaigns through SevakArmy?",
        content: (
            <>
                Yes, you can manage volunteer recruitment campaigns by creating targeted tasks, utilising platform tools for outreach and tracking the success of your recruitment efforts.
            </>
        )
    },
    {
        title: "How do we handle task-related expenses or reimbursements?",
        content: (
            <>
                Handle task-related expenses or reimbursements by setting up a process for volunteers to submit expense claims and review them through your NGO’s administrative features.
            </>
        )
    },
    {
        title: "Can we offer different levels of volunteer roles with varying responsibilities?",
        content: (
            <>
                Yes, you can offer different levels of volunteer roles by defining specific responsibilities and requirements for each role. This helps match volunteers with tasks that suit their skills and interests.
            </>
        )
    },
    {
        title: "How do we provide support and resources to volunteers working on complex tasks?",
        content: (
            <>
                Provide support and resources by offering detailed instructions, access to relevant materials and ongoing communication. Ensure that volunteers have the information and assistance they need to complete complex tasks.
            </>
        )
    },
    {
        title: "Can we set up task-specific guidelines or protocols for volunteers?",
        content: (
            <>
                Yes, you can set up task-specific guidelines or protocols by including them in the task description or providing additional documentation. This helps ensure volunteers follow the required procedures.
            </>
        )
    },
    {
        "title": "How do we measure the success of our volunteer engagement strategies?",
        "content": (
            <>
                Measure success by tracking engagement metrics such as volunteer participation rates,
                task completion rates and overall satisfaction. Use these insights to refine and improve
                your engagement strategies.
            </>
        )
    },
    {
        "title": "How do we handle data privacy for volunteers working on sensitive tasks?",
        "content": (
            <>
                Ensure data privacy by implementing strict protocols for handling sensitive information
                and communicating data protection measures to volunteers. Follow best practices for
                data security and compliance.
            </>
        )
    },
    {
        "title": "Can we track volunteer progress on a task-by-task basis?",
        "content": (
            <>
                Yes, SevakArmy allows you to track volunteer progress on a task-by-task basis. Use the
                task management tools to view updates and monitor the completion of each individual task.
            </>
        )
    },
    {
        "title": "How can we ensure our tasks are engaging and motivating for volunteers?",
        "content": (
            <>
                Make tasks engaging by providing clear objectives, offering opportunities for skill development, and recognising volunteer contributions. Create tasks that are meaningful and align with volunteers’ interests.
            </>
        )
    },
    {
        "title": "Can we collaborate with local businesses for our NGO projects?",
        "content": (
            <>
                Yes, you can collaborate with local businesses for your NGO projects. Reach out to
                potential partners and use the platform to coordinate joint efforts and share resources.
            </>
        )
    },
    {
        "title": "How do we manage and review multiple tasks simultaneously?",
        "content": (
            <>
                Manage and review multiple tasks by using the task management features on your dashboard.
                Monitor progress, assign tasks and track completion across various projects efficiently.
            </>
        )
    },
    {
        "title": "Can we set up a volunteer onboarding process through SevakArmy?",
        "content": (
            <>
                Yes, you can set up a volunteer onboarding process by providing the necessary information,
                training materials and orientation through the platform. Ensure that new volunteers are
                well-prepared for their roles.
            </>
        )
    },
    {
        "title": "How do we handle volunteer performance evaluations?",
        "content": (
            <>
                Handle performance evaluations by providing regular feedback, setting clear expectations
                and reviewing volunteer contributions. Use evaluation results to support volunteer
                development and improve task outcomes.
            </>
        )
    }
];

function NgoFaqPage({path}) {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header"} />
            <PageTitle pageTitle={'FAQs'} pagesub={'FAQs'} link={"/ngo"} />

            <section className="wpo-service-single-section mt-0 mb-md-5 mb-4 section-padding pb-5">
                <div className="container">
                    <div className="row mb-0">
                        <div className="col-lg-12 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-benefits-section pt-0">
                                    <h2 className="text-center">Common Questions from Our Registered NGOs</h2>
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="wpo-benefits-item">
                                                <div className="accordion" id="accordionExample">
                                                    {accordionData.map((item, index) => (
                                                        <div className="accordion-item" key={index}>
                                                            <h3 className="accordion-header" id={`heading${index}`}>
                                                                <button
                                                                    className={`accordion-button ${activeAccordion === index ? "" : "collapsed"}`}
                                                                    type="button"
                                                                    onClick={() => toggleAccordion(index)}
                                                                    aria-expanded={activeAccordion === index ? "true" : "false"}
                                                                    aria-controls={`collapse${index}`}
                                                                >
                                                                    {item.title}
                                                                </button>
                                                            </h3>
                                                            <div
                                                                id={`collapse${index}`}
                                                                className={`accordion-collapse collapse ${activeAccordion === index ? "show" : ""}`}
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
            
            <CtaSection/>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default NgoFaqPage;
