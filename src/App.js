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
    <Router>
    <div className="App" id="app">
      <div className="nav-bar">
        <nav>
          <h2 className="full-name">ARTISFRI</h2>
          <ul>
            <li>
              <a href="#sections">Assets</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#">Socials</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-box">
        <div className="home-headers">
          <h1>FREE</h1>
          <h1>ART</h1>
          <h1>ASSETS</h1>
          <a href="#sections">
            <button className="btn">Get Them Now!</button>
          </a>
        </div>
        <img src="images/home-image.svg" className="App-logo" alt="logo" />
      </div>

      <div id="new-arrivals">
        <h1 className="assets-section-title">NEW ARRIVALS</h1>
        {/* <img
          src="images/collection-banner.svg"
          className="collection-banner"
          alt="logo"
        /> */}
        <div className="assets-table-container">
        <div className="sections2">
      {/* Map through products array and create cards */}
      {products.map((arrivals,index) => (
        <div className="asset-card-block">
          <AssetCard
            title={arrivals.title}
            description={arrivals.description}
            image={arrivals.image}
            links={arrivals.links}
          />
        </div>
        ))}
        </div>
         
        </div>
        <h4>Our art asset discounts change on a bi-weekly basis.</h4>
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      
      <div className="sections2">
      <h1 className="assets-section-title">DATABASE</h1>
      {/* Map through products array and create cards */}
      {products.map((product,index) => (
        <div className="asset-card-block">
          <AssetCard
            title={product.title}
            description={product.description}
            image={product.image}
            links={product.links}
          />
        </div>
        ))}
        </div>


    </div>
    </Router>
  );
}

export default App;
