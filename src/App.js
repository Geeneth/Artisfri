import logo from "./logo.svg";
import AssetVerticalCard from "./components/asset-vertical-card";
import AboutUs from "./components/about-us";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import HomePage from "./home-page";
import Database from "./database";
import DatabaseTrial from "./database";
import Blog from "./blog";

function App() {
  return (
    //Using react router to navigate between pages
    <HashRouter>
      <div className="App" id="app">
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/database" element={<Database />}/>
        <Route path="/blog" element={<Blog />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;