import { useState } from "react";
import "./asset-vertical-card.css";

function AssetVerticalCard(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Clicked");
  }

  return (
    <div className="asset-item">
        <div className="asset-image-container">
        <img className="asset-image" src={props.image} alt={props.title} />
        </div>
        
      <h3 className="asset-title">{props.title}</h3>
        <p className="asset-description">{props.description}</p>

      <div className="links-area">
        <ul className="asset-links">
          
          {props.links.map((link,index) => (
            <li>
              <a href={link}>{"Download"}</a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default AssetVerticalCard;

//<button onClick={clickHandler}>Click me!</button>