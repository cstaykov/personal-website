import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <a className="timeline-marker is-image is-32x32" href={props.website} target="_blank" rel="noopener noreferrer">
        <img src={props.picture} alt="" />
      </a>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4">{props.company}</h1>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
