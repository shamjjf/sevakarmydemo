import React from "react";
import { Link } from "react-router-dom";
import Image from "next/image";
// import about from "../../../public/assets/images/blog-details/author.jpg";
// import blogs from "../../api/blogs";

// instagram
import insta1 from "../../../public/assets/images/instragram/img-1.jpg";
import insta2 from "../../../public/assets/images/instragram/img-2.jpg";
import insta3 from "../../../public/assets/images/instragram/img-3.jpg";
import insta4 from "../../../public/assets/images/instragram/img-4.jpg";
import insta5 from "../../../public/assets/images/instragram/img-5.jpg";
import insta6 from "../../../public/assets/images/instragram/img-6.jpg";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

const BlogSidebar = (props) => {
  const BlogDetails = props.BlogDetails;
  return (
    <div className={`col col-lg-5 col-12 ${props.blLeft}`}>
      <div className="blog-sidebar">
        {/* <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt="About" />
                    </div>
                    <h4>Bernard Rodgers</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
        {
          <style jsx>
            {`
              .widget category-widget {
                span {
                  "width": "auto";
                }
              }
            `}
          </style>
        }
        <div className="widget category-widget">
          <h3>Basic Info:</h3>
          <ul>
            <li>
              <Link to="">
                <strong>Volunteering Type:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.volunteering_type?.replace("_", " ")}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Opportunity Type:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.opportunity_type}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Duration:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.days}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Days:</strong>
                <span style={{ width: "auto" }} className="capitalize">
                  {/* {formatDate(BlogDetails.start_date)} - {formatDate(BlogDetails.end_date)} */}
                  {/* {formatDate(BlogDetails.start_date)} - {formatDate(BlogDetails.end_date)} */}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Count:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.count}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Price:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.price}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Perks:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.perks}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Points:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.points}
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <strong>Age:</strong>{" "}
                <span style={{ width: "auto" }} className="capitalize">
                  {BlogDetails.age_range}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.recent} alt="About" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Link to="/event-single/1" onClick={ClickHandler} ><Image src={insta1}
                            alt=Blog1"" /></Link></li>
                        <li><Link to="/event-single/1" onClick={ClickHandler} ><Image src={insta2}
                            alt="Blog2" /></Link></li>
                        <li><Link to="/event-single/1" onClick={ClickHandler} ><Image src={insta3}
                            alt="Blog3" /></Link></li>
                        <li><Link to="/event-single/1" onClick={ClickHandler} ><Image src={insta4}
                            alt="Blog4" /></Link></li>
                        <li><Link to="/event-single/1" onClick={ClickHandler} ><Image src={insta5}
                            alt="Blog5" /></Link></li>
                        <li><Link to="/event-single/1" onClick={ClickHandler} ><Image src={insta6}
                            alt="Blog6" /></Link></li>
                    </ul>
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
                </div> */}
      </div>
    </div>
  );
};

export default BlogSidebar;
