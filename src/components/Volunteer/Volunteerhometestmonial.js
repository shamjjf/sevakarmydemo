import blog1 from "../../../public/assets/images1/team/sevak-army-team-7.jpg";
import blog2 from "../../../public/assets/images1/team/sevak-army-team-3.jpg";
import blog3 from "../../../public/assets/images1/team/sevak-army-team-8.jpg";

import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };

const blogs = [
  {
    id: "1",
    title: "I found a perfect way to give back through SevakArmy.",
    slug: "1",
    subtitle:
      "As a software professional, I didn’t know how I could contribute to social work. Through SevakArmy, I found an NGO that needed website development support. I’ve now completed three projects for different NGOs and it’s so fulfilling to know that my skills are making a real difference.",
    bsing: blog1,
    athor: "Anjali P., Volunteer",
  },
  {
    id: "2",
    title:
      "SevakArmy made it easy for me to volunteer even with a busy schedule.",
    slug: "2",
    subtitle:
      "I work long hours and I thought volunteering would be difficult to fit into my schedule. However, SevakArmy offers flexible options and I was able to find short-term tasks that fit perfectly into my weekends. The satisfaction of helping others is something I hadn’t experienced before.",
    bsing: blog2,
    athor: "Rakesh S., Working Professional",
  },
  {
    id: "3",
    title:
      "Through SevakArmy, I taught underprivileged kids while managing my college studies.",
    slug: "3",
    subtitle:
      "As a student, I wanted to help but didn’t know where to start. SevakArmy connected me with a tutoring programme where I help children improve their education. It’s a rewarding experience and I can do it in my free time without it affecting my studies.",
    bsing: blog3,
    athor: "Priya R., College Student",
  },
  {
    id: "4",
    title:
      "As a retired teacher, SevakArmy gave me a way to continue helping others.",
    slug: "4",
    subtitle:
      "After retiring, I was looking for ways to stay active and contribute to society. SevakArmy connected me to an NGO that needed help with education programmes for underprivileged children. It’s been wonderful to use my experience in a meaningful way.",
    bsing: blog3,
    athor: "Sunita K., Retiree",
  },
  {
    id: "5",
    title: "Volunteering helped me grow professionally and personally.",
    slug: "5",
    subtitle:
      "SevakArmy matched me with an NGO that needed digital marketing support. This not only allowed me to give back but also helped me sharpen my marketing skills. It’s been a win-win experience for me and the community I serve.",
    bsing: blog3,
    athor: "Vikram J., Marketing Professional",
  },
  {
    id: "6",
    title: "I felt truly valued as a volunteer with SevakArmy.",
    slug: "6",
    subtitle:
      "I’ve been part of several volunteering projects before, but SevakArmy’s system of logging hours and rewarding efforts really motivated me. Earning e-certificates and seeing my name on the leaderboard made me feel appreciated for my efforts.",
    bsing: blog3,
    athor: "Meera D., Volunteer",
  },
];

const Volunteerhometestmonial = (props) => {
  return (
    <section className={props.hclass}>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-12 col-12">
            <SectionTitle subtitle="Real Impact, Real Stories" title="Volunteer Stories and Testimonials" />
          </div>
        </div>
        <div className="blog-wrap pt-3">
          <div className="row align-items-stretch gy-4">
            {blogs.map((blog, bl) => (
              <div className="col col-lg-4 col-md-6 col-12" key={bl} style={{minHeight:'100%'}}>
                <div
                  className="blog-single-card d-flex flex-wrap"
                  style={{ position: "relative", minHeight:'100%' }}
                >
                  <div className="content p-3">
                    <h2 className="blog-title-home mt-2">
                      <a className="blog-title-home mt-2">{blog.title}</a>
                    </h2>
                    <p>{blog.subtitle}</p>
                    <ul
                      className="top-content mb-1"
                      style={{ position: "", bottom: "15px", paddingLeft:'0px' }}
                    >
                      <li className="mb-0">
                        {/* <div className="image-single">
                          <Image src={blog.bsing} alt="Volunteer Home" />
                        </div> */}
                        - {blog.athor}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteerhometestmonial;
