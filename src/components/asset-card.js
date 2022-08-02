import { useState } from "react";
import "./asset-card.css";

function AssetCard(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Clicked");
  }

  return (
    <div className="asset-item">
      <h3 className="asset-title">{props.title}</h3>
      <div id="asset-info">
        <p className="asset-description">{props.description}</p>
        <img className="asset-image" src={props.image} alt={props.title} />
      </div>
      <div>
        <ul className="asset-links">
          {props.links.map((link) => (
            <li>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default AssetCard;

//<button onClick={clickHandler}>Click me!</button>