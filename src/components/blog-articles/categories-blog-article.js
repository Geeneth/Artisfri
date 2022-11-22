import {AnimatePresence, motion} from 'framer-motion';
import { useState } from "react";
import "../blog.css";


function CategoriesBlogArticle(props) {
    const[isOpen,setIsOpen] = useState(false);
  return (
    <motion.div
      data-isOpen={isOpen}
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card-blog-1"
      style={{ borderRadius: "1rem" }}
    >
      <motion.h2 layout="position" id="cat-header">
        Categories
      </motion.h2>
      {isOpen && (
        <motion.div
          data-isOpen={isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="card-expand"
        >
          <br />
          <br />
          <h3>Functionality</h3>
          <p>
            Each model has an attribute within the JavaScript called “Category”
            that stores a string value with the name of the group it belongs to.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/categories/article-image-1"
            width="80%"
          />
          <br />
          <br />
          <p>
            Several buttons were placed on the “Assets” page, each representing
            one category.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/categories/article-image-2.png"
            width="80%"
          />
          <br />
          <br />
          <p>
            When a button is clicked it will call a function with the category’s
            name as the string parameter.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/categories/article-image-3"
            width="80%"
          />
          <br />
          <br />
          <p>
            This function then uses a filter system to return an array of models
            fitting into the desired category.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/categories/article-image-4"
            width="80%"
          />
          <br></br>
          <p>
            When the main rendering of the models for the page takes place, this
            new filtered array is iterated through. This allows for further
            filtering through the use of the search bar while a category is
            selected.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/categories/article-image-5"
            width="80%"
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default CategoriesBlogArticle;

//<button onClick={clickHandler}>Click me!</button>