import React from "react";

const VideoCard = (props) => {
  return (
    <div className="card">
      <div class="inner-wrapper">
        <h3>{props.video.title}</h3>
        <iframe
          width="300"
          height="200"
          frameBorder="0"
          src={`https://www.youtube.com/embed/${props.video.id}`}
          title={props.video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          referrerPolicy="no-referrer"
        ></iframe>
        <div className="buttons-wrapper">
          <div className="votes-wrapper">
            <button>
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button>
              <i class="fas fa-thumbs-down"></i>
            </button>
          </div>
          <button>
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
