import logo from "./logo.svg";
import "./App.css";
import AssetVerticalCard from "./components/asset-vertical-card";
import AboutUs from "./components/about-us";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import Database from "./database";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomePage() {
  return (

    //Navigation bar
    <div className="App" id="app">
      <div className="nav-bar">
        <nav>
          <h2 className="full-name">ARTISFRI</h2>
          <ul>
            <li>
              <Link to="/database">Assets</Link>
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

      {/* The home headers and image */}
      <div className="flex-box">
        <div className="home-headers">
          <h1>AFFORDABLE</h1>
          <h1>ART</h1>
          <h1>ASSETS</h1>
          <a href="#new-arrivals">

            {/* Button to scroll down to the "New Arrivals" section */}
            <button className="btn">NEW ARRIVALS!</button>
          </a>
        </div>
        <img src="images/home-image.svg" className="App-logo" alt="logo" />
      </div>

      <div id="new-arrivals">
        <h1 className="assets-section-title" style={{ color: "black" }}>
          NEW ARRIVALS
        </h1>
        <div className="assets-table-container">
          <div className="sections3">

            {/* Mapping through the array of new arrivals and creating cards for each*/}
            {arrivals.map((arrivals, index) => (
              <div className="vertical-asset-card-block">

                {/* passing the props to the vertical asset card component */}
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

        {/* <h4 style={{color: "black"}}>Our art asset discounts change on a bi-weekly basis.</h4> */}
      </div>
      <div id="about-us">
        <AboutUs />
      </div>

    </div>
  );
}

export default HomePage;
