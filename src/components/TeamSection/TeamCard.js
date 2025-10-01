import React from "react";

import Image from "next/image";

const TeamCard = ({ Timg, Ttitle, Tsubtitle }) => {
  return (
    <div className="volunteer-single">
      <div className="image">
        <Image src={Timg} alt="volunteer" />
      </div>
      <div className="content">
        <h2>{Ttitle}</h2>
        <ul>
          {/* <span>{Tsubtitle}</span> */}
          {/* <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                    <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                    <li><Link to="/"><i className="ti-linkedin"></i></Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
