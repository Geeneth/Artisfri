import logo from "./logo.svg";
import "./App.css";
import AssetCard from "./components/asset-card";
import AssetVerticalCard from "./components/asset-vertical-card";
import AboutUs from "./components/about-us";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import Database from "./components/page-components/database";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
    
    <div className="App" id="app">
      <div className="nav-bar">
        <nav>
          <h2 className="full-name">ARTISFRI</h2>
          <ul>
            <li>
              <a href="#database">Assets</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#">Socials</a>
            </li>
            <li>
              <a href="#">Artists</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-box">
        <div className="home-headers">
          <h1>AFFORDABLE</h1>
          <h1>ART</h1>
          <h1>ASSETS</h1>
          <a href="#new-arrivals">
            <button className="btn">Get Them Now!</button>
          </a>
        </div>
        <img src="images/home-image.svg" className="App-logo" alt="logo" />
      </div>

      <div id="new-arrivals">
        <h1 className="assets-section-title" style={{color: "black"}}>NEW ARRIVALS</h1>
        <div className="assets-table-container">
        <div className="sections3">
      {/* Map through products array and create cards */}
      {arrivals.map((arrivals,index) => (
        <div className="vertical-asset-card-block">
          <AssetVerticalCard
            title={arrivals.title}
            description={arrivals.description}
            image={arrivals.image}
            links={arrivals.links}
          />
        </div>
        ))}
        </div>
         
        </div>
        <h4 style={{color: "black"}}>Our art asset discounts change on a bi-weekly basis.</h4>
      </div>
      <div id="about-us">
        <AboutUs />
      </div>

      <div>
      <div id="database" className="sections2">
      {/* <h1 className="assets-section-title">DATABASE</h1> */}
      {/* Map through products array and create cards */}
      
      {products.map((product,index) => (
        <div className="vertical-asset-card-block">
          <AssetVerticalCard
            title={product.title}
            description={product.description}
            image={product.image}
            links={product.links}
          />
        </div>
        ))}
        </div>
        </div>


    </div>
  );
}

export default App;
