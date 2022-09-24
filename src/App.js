import logo from "./logo.svg";
import AssetVerticalCard from "./components/asset-vertical-card";
import AboutUs from "./components/about-us";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import HomePage from "./home-page";
import Database from "./database";

//temp
import DatabaseTrial from "./database";

function App() {
  return (
    //Using react router to navigate between pages
    <Router>
      <div className="App" id="app">
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/database" element={<DatabaseTrial />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;