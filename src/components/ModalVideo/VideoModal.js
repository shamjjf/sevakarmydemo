import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const VideoModal = ({ vidId }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={vidId || "AKYDnVE7AYo"}
        onClose={() => setOpen(false)}
      />
      <div className="video-btn">
        <span className="btn-wrap" onClick={() => setOpen(true)}>
          <i className="fi flaticon-play"></i>
        </span>
      </div>
    </React.Fragment>
  );
};

export default VideoModal;
