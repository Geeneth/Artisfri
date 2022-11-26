import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../blog.css";

function UpdateLogBlogArticle(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      data-isOpen={isOpen}
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card-blog-3"
      style={{ borderRadius: "1rem" }}
    >
      <motion.h2 layout="position" id="cat-header">
        Update Log
      </motion.h2>
      {isOpen && (
        <motion.div
          data-isOpen={isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="card-expand"
        >
          <h2>Artisfri 1.2</h2>
          <strong>Latest Updates:</strong>
          <p>
            - Optimized Website for Mobile View <br />
            - Added Dark Mode <br />
            - Visual Changes
            <br />
            - New Models
            <br />
            - New Blog Article
            <br />
          </p>
          <img
            className="article-image"
            src="./images/blog/update-log/1.2-1.png"
            width="100%"
            style={{ borderRadius: "1rem" }}
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.2-2.png"
            width="100%"
            style={{ borderRadius: "1rem" }}
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.2-3.png"
            width="100%"
            style={{ borderRadius: "1rem" }}
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.2-4.png"
            width="100%"
            style={{ borderRadius: "1rem" }}
          />
          {/* <img
            className="article-image"
            src="./images/blog/update-log/test/1.2-1.png"
            width="100%"
            // style={{borderRadius: "1rem"}}
          /> */}

          <br />
          <br />
          <h2>Artisfri 1.1</h2>
          <strong>Latest Updates:</strong>
          <p>
            - Search functionality for models <br />
            - Categories for models <br />
            - Blog Page
            <br />
            - Visual changes
            <br />
            - New Artist
            <br />
            - New Models
            <br />
          </p>
          <img
            className="article-image"
            src="./images/blog/update-log/1.1-1.png"
            width="100%"
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.1-2.png"
            width="100%"
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.1-3.png"
            width="100%"
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.1-4.png"
            width="100%"
          />
          <br />
          <br />
          <h2>Artisfri 1.0</h2>
          <strong>Latest Updates:</strong>
          <p>
            Contained the Home Page and the Assets page. The assets page had a
            small number of models created by our team of artists (Amantha and
            Dimantha). A separate JavaScript file was used to store all of the
            models in JSON format. I constructed a system to iterate through
            this file of models while rendering a card component that contained
            information about each model. The home page included a section that
            displayed the latest models that our artists added to the database,
            along with an “About Us” section to describe what Artisfri provides
            to users and an area to display information about Artisfri’s team of
            developers and artists.
          </p>
          <img
            className="article-image"
            src="./images/blog/update-log/1.0-1.png"
            width="100%"
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.0-2.png"
            width="100%"
          />
          <img
            className="article-image"
            src="./images/blog/update-log/1.0-3.png"
            width="100%"
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default UpdateLogBlogArticle;

//<button onClick={clickHandler}>Click me!</button>
