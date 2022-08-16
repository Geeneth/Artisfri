import logo from "./logo.svg";
import "./App.css";
import AssetCard from "./components/asset-card";
import AssetVerticalCard from "./components/asset-vertical-card";
import AboutUs from "./components/about-us";
import { products } from "./components/database-data";

function App() {
  return (
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

      <div id="sections">
        <h1 className="assets-section-title">ASSETS</h1>
        <img
          src="images/collection-banner.svg"
          className="collection-banner"
          alt="logo"
        />
        <div className="assets-table-container">
          <table className="assets-table">
            <tr>
              <td>
                <AssetVerticalCard
                  title="Chair"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
              <td>
                <AssetVerticalCard
                  title="Chair"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
              <td>
                <AssetVerticalCard
                  title="Chair"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
              <td>
                <AssetVerticalCard
                  title="Project 1"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <AssetVerticalCard
                  title="Chair"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
              <td>
                <AssetVerticalCard
                  title="Chair"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
              <td>
                <AssetVerticalCard
                  title="Chair"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
              <td>
                <AssetVerticalCard
                  title="Chair"
                  description="This is a very basic 3D chair to add to your collection. It can serve very well in creating a set of a room."
                  image="./images/chair.svg"
                  links={["link", "link2"]}
                />
              </td>
            </tr>
            <tr>
              {/* For every prodcut in the database-data create a <td> element */}
              {products.map((product) => (
                <td>
                  <AssetCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    links={product.links}
                  />
                </td>
              ))}
            </tr>
          </table>
        </div>
        <h4>Our art asset discounts change on a bi-weekly basis.</h4>
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
