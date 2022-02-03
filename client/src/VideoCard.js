import React from "react";

const VideoCard = (props) => {
  return (
    <div className="card">
      <div className="inner-wrapper">
        <h3>{props.video.title}</h3>

        <iframe
          width="300"
          height="200"
          src={`https://www.youtube.com/embed/${props.video.id}`}
          title={props.video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="no-referrer"
        ></iframe>

        <div className="buttons-wrapper">
          <div className="votes-wrapper">
            <button className="transparent-btn">
              <i className="fas fa-thumbs-up"></i>
            </button>
            <button className="transparent-btn">
              <i className="fas fa-thumbs-down"></i>
            </button>
          </div>
          <button className="transparent-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
