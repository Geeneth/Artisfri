import logo from "./logo.svg";
import AssetCard from "./components/asset-card";
import AssetVerticalCard from "./components/asset-vertical-card";
import AboutUs from "./components/about-us";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import HomePage from "./home-page";
import Database from "./database";

function App() {
  return (
    //use react router to create a single page application
    <Router>
      <div className="App" id="app">
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/database" element={<Database />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//v=spf1 include:spf.efwd.registrar-servers.com ~all