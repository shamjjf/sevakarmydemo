import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../../public/assets/images/logo.svg'
import events from '../../api/events';
import Blog from '../../api/blogs';
import ContactForm from './ContactForm'
import Image from "next/image";



const EventSinglePage = () => {
    const { slug } = useParams()

    const EventDetails = events.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'}  />
            <PageTitle pageTitle={'Event Single'} pagesub={'Event'} />
            <div className="wpo-event-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-event-item">
                                <div className="wpo-event-img">
                                    <Image src={EventDetails.psimg} alt="Events" />
                                </div>
                                <div className="wpo-event-details-text">
                                    <h2>{EventDetails.title}</h2>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                                        beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                                        desire, that they cannot foresee the pain and trouble that are bound to ensue and
                                        equal blame belongs to those who fail in their duty through weakness of will, which
                                        is the same as saying through shrinking from toil and pain.</p>
                                </div>
                                <div className="wpo-event-details-wrap">
                                    <div className="wpo-event-details-tab">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a className={activeTab === 0 ? 'nav-link active' : "nav-link"} onClick={() => handleTabClick(0)} >Event Schedule</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeTab === 1 ? 'nav-link active' : "nav-link"} onClick={() => handleTabClick(1)} >Map Location</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeTab === 2 ? 'nav-link active' : "nav-link"} onClick={() => handleTabClick(2)} >Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="wpo-event-details-content">
                                        <div className="tab-content">
                                            <div className={activeTab === 0 ? 'active' : 'hidden'}>
                                                <div id="Schedule" className="tab-pane active">
                                                    <p>These cases are perfectly simple and easy to distinguish. In a free hour,
                                                        when our power of choice is untrammelled and when nothing prevents our
                                                        being able to do what we like best, every pleasure is to be welcomed and
                                                        every pain avoided.</p>
                                                    <ul>
                                                        <li>The wise man therefore in these matters.</li>
                                                        <li>In a free hour, when our power of choice and when nothing.</li>
                                                        <li>Else he pains to avoid pains.</li>
                                                        <li>We denounce with righteous indignation dislike men. </li>
                                                        <li>Which is the same as saying through.</li>
                                                        <li>The wise man therefore always holds in these matters.</li>
                                                        <li>Power of choice and when nothing.</li>
                                                        <li>Pains to avoid worse pains.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={activeTab === 1 ? 'active' : 'hidden'}>
                                                <div id="Map" className="tab-pane">
                                                    <div className="contact-map">
                                                    <iframe
              title="comtact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.300180275144!2d73.76044731268452!3d18.61569405507691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b909d331ee29%3A0x14a8ae0caf64c564!2sThergaon%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727685250723!5m2!1sen!2sin"
            ></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeTab === 2 ? 'active' : 'hidden'}>
                                                <div id="Contact" className="tab-pane">
                                                    <div className="event-contact">
                                                        <div className="wpo-donations-details">
                                                            <ContactForm />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="blog-sidebar">
                                <div className="widget search-widget">
                                    <form onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Search Post.." />
                                            <button type="submit"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="widget recent-post-widget">
                                    <h3>Related Posts</h3>
                                    <div className="posts" >
                                        {Blog.slice(0, 3).map((blog, bitem) => (
                                            <div className='post' key={bitem}>
                                                <div className="img-holder">
                                                    <Image src={blog.recent} alt="Events" />
                                                </div>
                                                <div className="details">
                                                    <h4>
                                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h4>
                                                    <span className="date">{blog.create_at}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="widget tag-widget">
                                    <h3>Tags</h3>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Charity</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Planning</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Helping</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Education</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Medical</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Wildlife</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Donation</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">Help</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event-single/1">World Pandamic</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default EventSinglePage;