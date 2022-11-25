import { useState } from "react";
import "./asset-vertical-card.css";
import DarkMode from "./darkmode";

function AssetVerticalCard(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Clicked");
  }

  const download_asset = () => {
    console.log("Downloaded");
    window.open(
      
      "https://artisfri.onrender.com/download?modelname=" + props.links[0]
    );
  };

  return (
    <div className="asset-item">
      <div className="darkmodebutton">
        <DarkMode />
      </div>
      <div className="asset-image-container">
        {/* Using the props passed from the home page, the image is displayed */}
        <img className="asset-image" src={props.image} alt={props.title} />
      </div>

      {/* Using the props passed from the home page, the title and description is displayed */}
      <h3 className="asset-title">{props.title}</h3>
      <p className="asset-description">{props.description}</p>

      {/* Using the props passed from the home page, the links are displayed, in the future there will be multiple links*/}
      <div className="links-area">
        <div className="asset-links-2">
          <a id="download-button" onClick={download_asset}>
            {"Download"}
          </a>
        </div>

        {/* For future use */}
        {/* <ul className="asset-links">
          {props.links.map((link,index) => (
            <li>
              <a href={link}>{"Download"}</a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default AssetVerticalCard;

//<button onClick={clickHandler}>Click me!</button>
