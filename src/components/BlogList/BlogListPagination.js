import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };
function BlogListPagination() {
  const [blogs, setBlogs] = useState([]); // Initialize as an empty array
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [blogsPerPage, setBlogsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);

  const fetchOpportunities = async () => {
    const ipResponse = await fetch("https://api.ipify.org/?format=json");
    const ipData = await ipResponse.json();
    console.log("ipData", ipData);
    const ipAddress = ipData.ip;
    const url = `https://api.sevakarmy.com/api/v1/dashboard/getAllOpportunity?type=accept&pageNo=${currentPage}&limit=${blogsPerPage}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ipAddress: ipAddress,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("response", data);
      setTotalPages(Math.floor(data.data.count / blogsPerPage));

      console.log("Opportunities:", data);
      setBlogs(data.data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchOpportunities();
  }, [blogsPerPage, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    blogs && (
      <>
        <SectionTitle title="Opportunities" />
        <div className="blog-wrap mt-5">
          <div className="row">
            {blogs?.length > 0 ? (
              blogs.map((blog, bl) => (
                <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                  <div className="blog-single-card">
                    <div className="image">
                      <Image src={blog.opportunity_image || blog.file || blog?.ngo?.ngo_logo} alt="Blog" />
                      <div className="top-date">
                        {blog.price ? "₹ " + blog.price : "Free"}
                        <div className="shape">
                          <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
                            <path d="M7.99999 9.0001L-9.79769e-05 9.00023L8.00005 0.500149L7.99999 9.0001Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <ul className="top-content">
                        <li>
                          <div className="image-single">
                            <Image src={blog?.ngo?.ngo_logo} alt="Blog" />
                          </div>
                        </li>
                      </ul>
                      <h2>
                        <Link className="blog-title-home" to={`/opportunities/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="blog-btn">
                      <Link to={`/opportunities/${blog.id}`}>
                        <span>Read More...</span>
                        <i className="flaticon-right-arrow-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No opportunities found</p> // Handle no blogs case
            )}
          </div>

          {/* Pagination Controls */}
          <div className="pagination d-flex justify-content-center">
            <style>
              {`
          .custom-select {
            border-color: white; /* Change to orange */
            text-color: #ff8c00; /* Change to orange */
          }
          .custom-select:hover {
            border-color: #fff; /* Change to orange */
          }
          
          .custom-select:focus {
            border-color: #fff; /* Change to orange */
            outline: none;
          }
          
          .custom-select option {
            border-color: #ff8c00; /* Change to orange */
            text-color: #ff8c00; /* Change to orange */
            padding: 10px;
          }
          `}
            </style>
            <select
              className="custom-select"
              onChange={(e) => setBlogsPerPage(Number(e.target.value))} // Ensure value is passed as a number
            >
              <option name="Items Per Page: 6" value="6">
                Items Per Page: 6
              </option>
              <option name="Items Per Page: 9" value="9">
                Items Per Page: 9
              </option>
              <option name="Items Per Page: 12" value="12">
                Items Per Page: 12
              </option>
              <option name="Items Per Page: 15" value="15">
                Items Per Page: 15
              </option>
            </select>

            <Pagination totalPages={totalPages - 1} currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
        </div>
      </>
    )
  );
}

export default BlogListPagination;
