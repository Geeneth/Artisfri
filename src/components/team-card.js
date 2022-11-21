import "./team-card.css";
import DarkMode from "./darkmode"
import React, { useState } from "react";

function TeamCard(props) {
return (
    <div className="artist-card">
      <div className="darkmodebutton">
        <DarkMode />
      </div>
      <img className="artist-image" src={props.image} alt={props.name} />
      <div className="artist-card-info">
        <h2 id={props.id} className="artist-name">{props.name}</h2>
        <p className="artist-bio">{props.bio}</p>
      </div>
      <a
          className="artist-link"
          target={"_blank"}
          href={props.link}
        >
          <img className="link-image" src={props.link_image} alt={props.name} />
        </a>
    </div>
  );
}

export default TeamCard;
