import logo from "./logo.svg";
import "./components/database.css";
import AssetVerticalCard from "./components/asset-vertical-card";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";
import DarkMode from "./components/darkmode"
import { Input, Grid, css, Text, Dropdown  } from "@nextui-org/react";
import { useEffect } from 'react'
import React from "react";



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
    document.getElementById(button).style.backgroundColor = "#121212";
    // document.getElementById(button).style.border = "thin solid #ffc371";
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
      setData(filtered);
    }
  };
  useEffect(() => {
            document.body.style.overflow = "scroll";
          }, [])
  
          
  const [selected, setSelected] = React.useState(new Set(["Categories"]));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
        
  return (
    <div id="database-page"> 
       
      <div className="darkmodebutton">
        <DarkMode />
      </div>  
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
          <Input
            weight="bold"
            className="search-bar"         
            width="100%"
            clearable
            labelPlaceholder="Search"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            helperText="Search for an asset."
            css={{  $$inputColor: '#262626',
                    $$inputPlaceholderColor: '#ffc371',
                    $$inputFontSize: "17px", 
                    $$inputHelperColor: "#ffc371",
                    $$inputTextColor: "#ffc371",
                    $$inputHoverBorderColor: "#ffc371",
                    $$inputFontWeight: "800",
                    
                  }}  
          />
        </div>
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Button css={{ 
              tt: "capitalize",
              display:"flex",
              backgroundColor:"#ffc371",
              color:"black", 
            }}>
              {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color="warning"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
              onAction={(key) => filter(key)}
              css={{
              }}
            >
              <Dropdown.Item key="All" >All</Dropdown.Item>
              <Dropdown.Item key="Furniture">Furniture</Dropdown.Item>
              <Dropdown.Item key="Environment" >Environment</Dropdown.Item>
              <Dropdown.Item key="Medieval" >Medieval</Dropdown.Item>
              <Dropdown.Item key="Industrial" >Industrial</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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