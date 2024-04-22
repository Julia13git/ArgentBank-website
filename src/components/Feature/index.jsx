import React from "react";
import "./feature.css";

function Feature(children) {
  return (
    <div className="feature-item">
      <img src={children.image} alt={children.alt} className="feature-icon" />
      <h3 className="feature-item-title">{children.title}</h3>
      <p>{children.text}</p>
    </div>
  );
}

export default Feature;
