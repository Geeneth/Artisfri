import logo from "./logo.svg";
import "./components/database.css";
import AssetVerticalCard from "./components/asset-vertical-card";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function Database() {
  const [data, setData] = useState(products);
  const [query, setQuery] = useState("");

  const filter = (button, e) => {
    //making the colors of the buttons uniform
    let elements = document.getElementsByClassName("btn");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#ffc371";
      elements[i].style.color = "black";
    }
    //changing the color of the button that was clicked
    document.getElementById(button).style.backgroundColor = "#000";
    document.getElementById(button).style.color = "#FFF";
    if (button === "All") {
      //if the button clicked is "All", then show all the data
      setData(products);
    } else {
      //if the button clicked is not "All", then filter the data
      const filtered = products.filter((sorted) => {
        return sorted.category.includes(button);
      });
      //set the filtered array to the state variable "data"
      console.log(filtered);
      setData(filtered);
    }
  };
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
              <Link to="/blog">Blog</Link>
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

        {/* table to store categories section and the models */}
        <table className="database-table-view">
          <tr>
            <td className="categories">
              <div className="categories-list">
                {/* creating a button for each category */}
                {/* each button uses the "filter" method defined at the top */}
                <button id="All" style={{color: "white", backgroundColor: "black"}} className="btn" onClick={() => filter("All")}>
                  All
                </button>
                <button
                  id="Furniture"
                  className="btn"
                  onClick={() => filter("Furniture")}
                >
                  Furniture
                </button>
                <button
                  id="Environment"
                  className="btn"
                  onClick={() => filter("Environment")}
                >
                  Environment
                </button>
                <button
                  id="Medieval"
                  className="btn"
                  onClick={() => filter("Medieval")}
                >
                  Medieval
                </button>
                <button
                  id="Industrial"
                  className="btn"
                  onClick={() => filter("Industrial")}
                >
                  Industrial
                </button>
              </div>
            </td>
            <td className="model-list">
              <div className="list">
                {data
                  //filtering the data based on the query from the search bar
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
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Database;
