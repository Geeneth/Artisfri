import logo from "./logo.svg";
import "./App.css";
import AssetVerticalCard from "./components/asset-vertical-card";
import AboutUs from "./components/about-us";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import Database from "./database";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArtistCard from "./components/team-card";
import { team_info } from "./components/team-info";
import Team from "./components/team";
import DarkMode from "./components/darkmode";
import { Input, Grid, css, Text, Navbar, Dropdown } from "@nextui-org/react";
import { useState, useEffect } from "react";

function HomePage() {
  return (
    //Navigation bar
    <div className="App" id="app">
      <div className="darkmodebutton">{/* <DarkMode /> */}</div>
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
              <a href="#team-section">Team</a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <DarkMode />
            </li>
          </ul>
        </nav>
      </div>
      <Navbar
        disableShadow
        disableBlur
        maxWidth="md"
        variant="sticky"
        css={{
          padding: "$0",
          $$navbarTextColor: "#f5f5f5",
          $$navbarTextWeight: "800",
          $$navbarBackgroundColor: "transparent",
          $$navbarBlurBackgroundColor: "transparent",
          bg: "none",
          "@media only screen and (min-width: 672px)": {
            display: "none",
          },
        }}
      >
        <Navbar.Brand
          css={{
            marginLeft: "-0.5%",
          }}
        >
          <img
            src="white-transparent-logo-large.ico"
            className="navbar-app-logo"
            alt="logo"
            width="25px"
            height="24px"
          />
          <Text b color="inherit" ShowIn="xs" size="$3xl">
            ARTISFRI
          </Text>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse
          css={{
            paddingLeft: "$0",
            $$navbarBackgroundColor: "transparent",
            $$navbarBlurBackgroundColor: "transparent",
            bg: "#262626",
          }}
        >
          <Navbar.CollapseItem
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Link to="/database">Assets</Link>
            <Link to="/blog">Blog</Link>
            <DarkMode />
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
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
        <h1 className="assets-section-title">NEW ARRIVALS</h1>
        <div className="assets-table-container">
          <div className="sections3">
            {/* Mapping through the array of new arrivals and creating cards for each*/}
            {arrivals.map((arrivals, index) => (
              <div className="vertical-asset-card-block">
                {/* Passing the props to the vertical asset card component */}
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

      {/* Footer with socials */}
      <div id="footer">
        <div className="teamtitletext">
          <h2 id="team-section">Team</h2>
        </div>
        <div className="teamcalled">
          <Team />
        </div>
        <div id="contact">
          <h2 className="contactus">Contact Us</h2>
          {/* email contact info */}
          <div className="contact-content">
            <a href="mailto:kulatungegeeneth@gmail.com">
              <h3>kulatungegeeneth@gmail.com</h3>
            </a>
            <h3>+1-514-677-7720</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
