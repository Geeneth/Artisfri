import logo from "./logo.svg";
import "./components/database.css";
import AssetVerticalCard from "./components/asset-vertical-card";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function Database() {
  const [query, setQuery] = useState("");
  return (
    <div id="database-page">
      <div className="database-nav-bar">
        <nav className="database-nav">
          {/* <h2 className="full-name">ARTISFRI</h2> */}
          <h2 className="return-home">
            <Link id="database-return" to="/">
              ARTISFRI
            </Link>
          </h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="search-area">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>

        {/* ______________________________________________________________ */}
        <div className="database-content-area">
          {/* categories temp */}

          {/* <div className="categories-list">
            <h2 className="categories-title">Categories</h2>
            <ul>
              <li>Art</li>
              <li>Music</li>
              <li>Photography</li>
              <li>Writing</li>
              <li>Design</li>
              <li>Programming</li>
              <li>Other</li>
            </ul>
          </div> */}
          {/* ______________________________________________________________ */}

          <ul className="list">
            {products
              .filter((products) =>
                products.title.toLowerCase().includes(query)
              )
              .map((product, index) => (
                <div className="vertical-asset-card-block">
                  <AssetVerticalCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    links={product.links}
                  />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Database;
