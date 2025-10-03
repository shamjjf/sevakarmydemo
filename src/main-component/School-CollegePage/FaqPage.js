import React, { useState } from 'react'
import CtaSection from '../../components/CtaSection/CtaSection'

const accordionData1 = [
    {
        "title": "What is  SevakArmy Schools/Colleges platform?",
        "content": "This platform enables schools and colleges to register on SevakArmy, encouraging students to engage in structured volunteer activities that align with their interests and skills."
    },
    {
        "title": "Why should schools and colleges join SevakArmy?",
        "content": "By joining SevakArmy, schools and colleges can foster a culture of social responsibility, helping students gain valuable life skills through community service."
    },
    {
        "title": "Is there a fee for schools and colleges to join SevakArmy?",
        "content": "No, registration on SevakArmy is free of charge."
    },
    {
        "title": "What are the main benefits for students participating in SevakArmy?",
        "content": "Students gain real-world experience, build skills, earn digital certificates and contribute positively to society, which enhances their personal and academic growth."
    }
]

const accordionData2 = [
    {
        "title": "How can our school or college register on SevakArmy?",
        "content": "Schools and colleges can register by visiting SevakArmy.com, submitting institutional information and completing the verification process."
    },
    {
        "title": "Will our institution have a specific profile on SevakArmy?",
        "content": "Yes, registered schools/colleges have profiles where they can view student participation, track hours and monitor collective impact."
    },
    {
        "title": "Does our school/college need to renew its registration periodically?",
        "content": "No, registration is generally a one-time process, but institutions may be asked to update information occasionally."
    },
    {
        "title": "Can our institution view students' progress and volunteer hours on SevakArmy?",
        "content": "Yes, institutions have access to a profile on SevakArmy where they can monitor each student’s volunteer hours, task completions and overall contributions."
    }
]

const accordionData3 = [
    {
        "title": "How do students register for SevakArmy under their school/college?",
        "content": "Students can register using a unique referral link provided by their school/college or by selecting their institution during registration."
    },
    {
        "title": "Is there an age requirement for students to volunteer?",
        "content": "SevakArmy welcomes students of all ages, although certain tasks may specify age-related requirements."
    },
    {
        "title": "Can students choose which tasks to volunteer for?",
        "content": "Yes, students can browse available tasks and select ones that match their interests and skills."
    },
    {
        "title": "Is there a minimum time commitment for student volunteers?",
        "content": "Time commitment varies depending on the tasks, allowing students flexibility in managing their schedules."
    },
    {
        "title": "Are there tasks suitable for groups of students?",
        "content": "Some tasks allow for group participation, depending on the requirements specified by the NGO."
    },
    {
        "title": "Can students volunteer on weekends or outside school hours?",
        "content": "Yes, many tasks are flexible, allowing students to volunteer at times that suit their schedules."
    },
    {
        "title": "Are students expected to travel to participate in tasks?",
        "content": "Some tasks may require travel, while others can be completed online; however, it depends on the NGO task requirements. Students can choose tasks based on their availability to travel."
    },
    {
        "title": "Is prior experience necessary for students to volunteer?",
        "content": "No, tasks are designed to be accessible to all skill levels, with some requiring basic skills and others offering learning opportunities. The selection for the task will depend on NGOs."
    },
    {
        "title": "Can students pause or withdraw from a task if needed?",
        "content": "Students should notify the NGO or SevakArmy support if they need to pause or withdraw from a task."
    },
    {
        "title": "How can students track their volunteer hours and achievements?",
        "content": "Each student has a dashboard on SevakArmy where they can view completed tasks, track hours and access certificates."
    }
]

const accordionData4 = [
    {
        "title": "What types of tasks are available for students on SevakArmy?",
        "content": "Tasks range from teaching, community outreach, event support, social media outreach, environmental activities and more."
    },
    {
        "title": "Are there online tasks available for remote volunteering?",
        "content": "Yes, NGOs may offer online tasks that students can complete from anywhere."
    },
    {
        "title": "Can students find tasks based on specific causes they care about?",
        "content": "Yes, students can filter tasks by categories like education, health, environment and social outreach."
    },
    {
        "title": "Do NGOs specify any special skills for certain tasks?",
        "content": "Some tasks may require specific skills, which are clearly mentioned in the task description."
    },
    {
        "title": "What if a student finds a task too challenging after starting?",
        "content": "The student can reach out to the NGO or SevakArmy support for task reassignment if needed."
    },
    {
        "title": "How are tasks matched with students’ interests and skills?",
        "content": "Students can use search filters to find tasks based on interests, skill level and availability."
    },
    {
        "title": "Are there long-term volunteer tasks for students?",
        "content": "Some NGOs may offer long-term projects, allowing students to commit to extended periods if they wish."
    },
    {
        "title": "What happens if a student cannot complete a task due to unforeseen circumstances?",
        "content": "They should inform the NGO or SevakArmy as soon as possible to arrange for task completion by another volunteer."
    },
    {
        "title": "Can students receive mentorship through specific tasks?",
        "content": "Some NGOs may provide mentorship and skill development opportunities as part of certain tasks."
    },
    {
        "title": "Do NGOs provide materials or resources needed for tasks?",
        "content": "NGOs may or may not provide materials, information or guidelines for task completion, depending on the specific requirements of each task."
    }
]

const accordionData5 = [
    {
        "title": "Do students receive certificates for volunteering?",
        "content": "Yes, students receive digital certificates for each completed task, which they can download and share."
    },
    {
        "title": "What is  SevakArmy points system?",
        "content": "Students earn points for each completed task, which accumulate toward leaderboard rankings."
    },
    {
        "title": "Can students see their total points and task history?",
        "content": "Yes, students have a profile where they can view total points, task history and achievements."
    },
    {
        "title": "What is the leaderboard feature?",
        "content": "The leaderboard ranks students and institutions based on points, fostering friendly competition."
    },
    {
        "title": "Are there separate leaderboards for schools and colleges?",
        "content": "Yes, SevakArmy has separate leaderboards for schools/colleges."
    },
    {
        "title": "How often are leaderboards updated?",
        "content": "Leaderboards are updated weekly, monthly and annually to reflect ongoing participation."
    },
    {
        "title": "Are there awards for top-ranked students?",
        "content": "Top-ranked students are recognised with digital certificates and leaderboard rankings on  SevakArmy website."
    },
    {
        "title": "Do institutions also get recognised on the platform?",
        "content": "Schools/colleges with high participation levels receive special recognition on SevakArmy’s platform and have a chance to appear on the top of the leaderboard."
    },
    {
        "title": "Can students share their achievements on social media?",
        "content": "Yes, students are encouraged to share their certificates and achievements on social media."
    },
    {
        "title": "Can institutions track the overall impact of their students' volunteer work?",
        "content": "Yes, SevakArmy provides institutions with access to a dashboard where they can view collective volunteer hours and students' completed tasks, helping them assess their social impact."
    }
]

const accordionData6 = [
    {
        "title": "How can institutions track their students’ overall volunteer hours?",
        "content": "Registered institutions have access to a dashboard that summarises total volunteer hours and completed tasks."
    }
]

const accordionData7 = [
    {
        "title": "How does SevakArmy measure the impact of students' volunteer work?",
        "content": "SevakArmy tracks volunteer hours and completed tasks, generating reports that reflect the total social impact of students’ contributions."
    },
    {
        "title": "Can SevakArmy volunteering hours count towards students’ academic credit?",
        "content": "Institutions can decide if SevakArmy volunteer hours qualify for academic credit based on their internal policies."
    },
    {
        "title": "How does SevakArmy encourage students to continue volunteering?",
        "content": "SevakArmy uses a leaderboard, digital certificates and recognition to keep students engaged and motivated."
    },
    {
        "title": "Does SevakArmy provide personalised feedback on student tasks?",
        "content": "NGOs offer constructive feedback to students, helping them improve in future tasks."
    },
    {
        "title": "Can SevakArmy help students build a volunteer portfolio?",
        "content": "Students can maintain a record of completed tasks, certificates and impact reports, creating a robust volunteer portfolio."
    },
    {
        "title": "Are there long-term benefits for students who volunteer regularly?",
        "content": "Regular volunteers gain valuable experience, build a strong portfolio and develop skills useful for college and career applications."
    },
    {
        "title": "What is the vision of SevakArmy Schools/Colleges initiative for the future?",
        "content": "SevakArmy aims to make volunteerism a core value in educational institutions across India, inspiring millions of students to engage in social service."
    },
    {
        "title": "Can schools/colleges use SevakArmy’s impact in their annual reports?",
        "content": "Yes, institutions can include SevakArmy volunteer hours and impact statistics in their annual reports and publications."
    },
    {
        "title": "Does SevakArmy plan to expand to more schools and colleges in India?",
        "content": "Yes, SevakArmy is committed to reaching educational institutions across the country to maximise social impact."
    },
    {
        "title": "How can our institution stay updated on SevakArmy’s latest features?",
        "content": "SevakArmy sends regular updates and newsletters to registered institutions, keeping them informed about new features and initiatives."
    },
    {
        "title": "Can institutions set specific volunteer goals for their students on SevakArmy?",
        "content": "Institutions can encourage their students to participate in volunteer tasks and set informal goals, though students are free to select tasks based on their personal interests and schedules."
    }
]



const FaqPage = () => {
    const [activeAccordion1, setActiveAccordion1] = useState(null);
    const [activeAccordion2, setActiveAccordion2] = useState(null);
    const [activeAccordion3, setActiveAccordion3] = useState(null);
    const [activeAccordion4, setActiveAccordion4] = useState(null);
    const [activeAccordion5, setActiveAccordion5] = useState(null);
    const [activeAccordion6, setActiveAccordion6] = useState(null);
    const [activeAccordion7, setActiveAccordion7] = useState(null);

    const toggleAccordion1 = (index) => {
        setActiveAccordion1(activeAccordion1 === index ? null : index);
    };
    const toggleAccordion2 = (index) => {
        setActiveAccordion2(activeAccordion2 === index ? null : index);
    };
    const toggleAccordion3 = (index) => {
        setActiveAccordion3(activeAccordion3 === index ? null : index);
    };
    const toggleAccordion4 = (index) => {
        setActiveAccordion4(activeAccordion4 === index ? null : index);
    };
    const toggleAccordion5 = (index) => {
        setActiveAccordion5(activeAccordion5 === index ? null : index);
    };
    const toggleAccordion6 = (index) => {
        setActiveAccordion6(activeAccordion6 === index ? null : index);
    };
    const toggleAccordion7 = (index) => {
        setActiveAccordion7(activeAccordion7 === index ? null : index);
    };

    return (
        <>
            <section className='wpo-about-section pt-0'>
                <div className='container section-padding'>
                    <h2 className='w-100 text-center about-heading-second text-titleeee'>Frequently Asked Questions</h2>

                    <section className="wpo-service-single-section">
                        <h2 className='w-100 text-center pt-3 mb-0 mt-md-3'>General Overview of SevakArmy Schools/Colleges</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData1.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion1 === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion1(index)}
                                                                            aria-expanded={activeAccordion1 === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion1 === index ? 'show' : ''}`}
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

                    <section className="wpo-service-single-section">
                        <h2 className='w-100 text-center pt-3 pt-md-5 mb-0 mt-md-3'>Institutional Registration and Setup </h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData2.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion2 === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion2(index)}
                                                                            aria-expanded={activeAccordion2 === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion2 === index ? 'show' : ''}`}
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

                    <section className="wpo-service-single-section">
                        <h2 className='w-100 text-center pt-3 pt-md-5 mb-0 mt-md-3'>Student Registration and Involvement </h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData3.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion3 === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion3(index)}
                                                                            aria-expanded={activeAccordion3 === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion3 === index ? 'show' : ''}`}
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

                    <section className="wpo-service-single-section">
                        <h2 className='w-100 text-center pt-3 pt-md-5 mb-0 mt-md-3'>Types of Volunteer Tasks</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData4.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion4 === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion4(index)}
                                                                            aria-expanded={activeAccordion4 === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion4 === index ? 'show' : ''}`}
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

                    <section className="wpo-service-single-section">
                        <h2 className='w-100 text-center pt-3 pt-md-5 mb-0 mt-md-3'>Digital Certificates, Points and Recognition</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData5.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion5 === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion5(index)}
                                                                            aria-expanded={activeAccordion5 === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion5 === index ? 'show' : ''}`}
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

                    <section className="wpo-service-single-section">
                        <h2 className='w-100 text-center pt-3 pt-md-5 mb-0 mt-md-3'>Institutional Involvement and Engagement</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData6.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion6 === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion6(index)}
                                                                            aria-expanded={activeAccordion6 === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion6 === index ? 'show' : ''}`}
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

                    <section className="wpo-service-single-section">
                        <h2 className='w-100 text-center pt-3 pt-md-5 mb-0 mt-md-3'>Impact and Future Goals</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData7.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion7 === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion7(index)}
                                                                            aria-expanded={activeAccordion7 === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion7 === index ? 'show' : ''}`}
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
            </section>
            <CtaSection/>
        </>
    )
}

export default FaqPage