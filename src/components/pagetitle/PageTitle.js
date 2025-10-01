import React from "react";
import { Link } from "react-router-dom";

const PageTitle = (props) => {
  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
              <ol className="wpo-breadcumb-wrap">
                <li className="">
                  <Link to={props.link || '/'}>Home</Link>
                </li>
                {props.pagesub && <li className="">{props.pagesub}</li>}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
