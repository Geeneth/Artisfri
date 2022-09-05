import logo from "./logo.svg";
import "./components/database.css";
import AssetCard from "./components/asset-card";
import AssetVerticalCard from "./components/asset-vertical-card";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Database() {
  return (
    <div id="database-page">
      <h3 className="return-home">
        <Link id="database-return" to="/">
          Return to home page
        </Link>
      </h3>

      <div className="database-products">
        {products.map((product, index) => (
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
  );
}

export default Database;
