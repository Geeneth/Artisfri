import logo from "./logo.svg";
import "./components/database.css";
import AssetVerticalCard from "./components/asset-vertical-card";
import { products } from "./components/database-data";
import { arrivals } from "./components/new-arrivals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./components/blog.css";
import BlogSelection from "./components/blog-selection";
import DarkMode from "./components/darkmode";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import CategoriesBlogArticle from "./components/blog-articles/categories-blog-article";
import InspirationBlogArticle from "./components/blog-articles/inspiration-blog-article";
import UpdateLogBlogArticle from "./components/blog-articles/update-log-blog-article";

function Blog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  let isBackground = true;
  const render_article = (title, body, body_2) => {
    //display the article
    document.getElementById("blog-article-display").style.display = "block";
    document.getElementById("blog-article-title").innerHTML = title;
    document.getElementById("blog-article-body").innerHTML = body + body_2;
  };
  useEffect(() => {
    document.body.style.overflow = "scroll";
  }, []);

  return (
    <div className="blog-page">
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
              <Link id="assetsdirect" to="/database">
                Assets
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="blog-article-display-mobile">
        <h1 id="blog-article-title-mobile">Welcome!</h1>
        <p id="blog-article-body-mobile">
          Select any of the articles on the right!
        </p>
      </div>
      <h1 className="blog-sign">B L O G</h1>

      {/* Blog articles */}
      <div id="blog-article-display">
        <h1 id="blog-article-title">Welcome!</h1>
        <p id="blog-article-body">Select any of the articles on the right!</p>
      </div>
      <div className="card-on-mobile">
        <CategoriesBlogArticle />
      </div>
      <div className="card-on-mobile">
        <InspirationBlogArticle />
      </div>
      <div className="card-on-mobile">
        <UpdateLogBlogArticle />
      </div>
      {/* list of BlogSelection items */}
      <div className="blog-article-list">
        <ul>
          <li>
            <BlogSelection
              className="blog-selection"
              onClickFunction={render_article}
              title={"Categories"}
              body={
                "In order to help users navigate through our list of models, we categorized each model and will continue to do so for any further creations. <br/><br/> <h3>Functionality</h3>Each model has an attribute within the JavaScript called “Category” that stores a string value with the name of the group it belongs to.<br/><br/><img className='article-image' src='./images/blog/categories/article-image-1' width=80%/><br/><br/>Several buttons were placed on the “Assets” page, each representing one category.<br/><br/><img className='article-image' src='./images/blog/categories/article-image-2.png' width=80%/><br/><br/>When a button is clicked it will call a function with the category’s name as the string parameter.<br/><br/><img className='article-image' src='./images/blog/categories/article-image-3' width=80%/><br/><br/>This function then uses a filter system to return an array of models fitting into the desired category.<br/><br/><img className='article-image' src='./images/blog/categories/article-image-4' width=80%/><br></br>When the main rendering of the models for the page takes place, this new filtered array is iterated through. This allows for further filtering through the use of the search bar while a category is selected.<br/><br/><img className='article-image' src='./images/blog/categories/article-image-5' width=80%/>"
              }
              body_2={""}
              image={"./images/blog/categories/categories.svg"}
            />
          </li>
          <li>
            <BlogSelection
              className="blog-selection"
              onClickFunction={render_article}
              title={"Inspiration"}
              body={
                "The inspiration for Artisfri came from me looking for 3D for a personal project. Despite scouring the internet to look for a well-reviewed pack of models, I was unable to find one platform that I found satisfactory. The platforms providing these models always had something that would leave me opening a new tab to try to find another. Each of the websites had some of the features I was looking for, but never all. Either my web surfing skills were disappointingly sub-par or this centralized hub of simple 3D models I was looking for simply didn’t exist. Let’s go over what I wanted from my ideal platform: <br/><br/><h3>Affordability</h3>I constantly found awkward pricing schemes and a lack of uniformity. Some simple models are overpriced and some intricate works of art are given out for free. I wanted to make our models affordable, giving users the chance to obtain good quality models at low prices. My team and I are yet to discuss and implement a pricing system. Therefore, as of writing, all the models on our website are free. This may change in the future depending on where the project goes.<br/><br/><img className='article-image' src='./images/blog/inspiration/article-image-2.svg' width=80%/><br/><br/><h3>Simple Models (Low Polygons)</h3>I was never able to find a hub for basic 3D models. As someone who wanted to simply step into the realm of game design and look into 3D modelling before hand. The complexity of a lot of pieces displayed on website intimidated me. I could not find the minimalistic type of model I really wanted and got lost in a swarm of high polygon masterpieces. While beautiful to inspect, I definitely did not need a high definition dragon head with individual scales for my little adventure parkour game.<br/><br/><img className='article-image' src='./images/blog/inspiration/article-image-3.svg' width=80%/><br/><br/><h3>Customer Support</h3>A major issue I seemed to find across many platforms for obtaining 3D models was that there was simply no customer support. Often, I would see an anonymous user posting their models and not ever answering the pleas for help from the poor souls in the review section having issues implementing it to their project.<br/><br/><img className='article-image' src='./images/blog/inspiration/article-image-4.svg' width=80%/>"
              }
              body_2={
                "<br/><br/><h3>Uniformity</h3>Clutter was something I constantly ran into. Too many file types, too many categories and due to the lack of  a “simple to complex” filter option, TOO MANY POLYGONS!<br/><br/><img className='article-image' src='./images/blog/inspiration/article-image-5.svg' width=50%/><br/><br/>So, I hope you enjoy my little project, we will keep updating our website with models and new features. We have a long way to go but with time we hope to be your one-stop shop for all 3D models."
              }
              image={"./images/blog/inspiration/thumbnail.svg"}
            />
          </li>
          <li>
            <BlogSelection
              className="blog-selection"
              onClickFunction={render_article}
              title={"Update Log"}
              body={
                "<h2>Artisfri 1.2</h2><strong>Latest Updates:</strong><p>- Optimized Website for Mobile View <br />- Added Dark Mode <br />- Visual Changes<br />- New Models<br /> - New Blog Article<br /></p><img className='article-image' src='./images/blog/update-log/1.2-1.png' width='100%' style={{ borderRadius: '1rem' }}          />          <img className='article-image'src='./images/blog/update-log/1.2-2.png'width='100%'style={{ borderRadius: '1rem' }}/><img className='article-image'src='./images/blog/update-log/1.2-3.png'width='100%'style={{ borderRadius: '1rem' }}/><img className='article-image'src='./images/blog/update-log/1.2-4.png'width='100%'style={{ borderRadius: '1rem' }}/> <br /><br /><h2>Artisfri 1.1</h2><strong>Latest Updates:</strong><p>  - Search functionality for models <br />  - Categories for models <br />  - Blog Page  <br />  - Visual changes  <br />  - New Artist  <br />  - New Models  <br /></p><img  className='article-image'  src='./images/blog/update-log/1.1-1.png'  width='100%'/><img  className='article-image'  src='./images/blog/update-log/1.1-2.png'  width='100%'/><img  className='article-image'  src='./images/blog/update-log/1.1-3.png'  width='100%'/><img  className='article-image'  src='./images/blog/update-log/1.1-4.png'  width='100%'/><br /><br /> <h2>Artisfri 1.0</h2><strong>Latest Updates:</strong><p>  Contained the Home Page and the Assets page. The assets page had a  small number of models created by our team of artists (Amantha and  Dimantha). A separate JavaScript file was used to store all of the  models in JSON format. I constructed a system to iterate through  this file of models while rendering a card component that contained  information about each model. The home page included a section that  displayed the latest models that our artists added to the database,  along with an “About Us” section to describe what Artisfri provides  to users and an area to display information about Artisfri’s team of  developers and artists.</p><img  className='article-image'  src='./images/blog/update-log/1.0-1.png'  width='100%'/><img  className='article-image'  src='./images/blog/update-log/1.0-2.png'  width='100%'/><img  className='article-image'  src='./images/blog/update-log/1.0-3.png'  width='100%'/>"
              }
              body_2={""}
              image={"./images/blog/update-log/thumbnail.svg"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;
