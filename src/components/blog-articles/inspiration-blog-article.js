import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../blog.css";

function InspirationBlogArticle(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      data-isOpen={isOpen}
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card-blog-2"
      style={{ borderRadius: "1rem" }}
    >
      <motion.h2 layout="position" id="cat-header">
        Inspiration
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
          <h3>Inspiration</h3>
          <p>
            The inspiration for Artisfri came from me looking for 3D for a
            personal project. Despite scouring the internet to look for a
            well-reviewed pack of models, I was unable to find one platform that
            I found satisfactory. The platforms providing these models always
            had something that would leave me opening a new tab to try to find
            another. Each of the websites had some of the features I was looking
            for, but never all. Either my web surfing skills were
            disappointingly sub-par or this centralized hub of simple 3D models
            I was looking for simply didn’t exist. Let’s go over what I wanted
            from my ideal platform:{" "}
          </p>
          <br />
          <br />
          <h3>Affordability</h3>
          <p>
            I constantly found awkward pricing schemes and a lack of uniformity.
            Some simple models are overpriced and some intricate works of art
            are given out for free. I wanted to make our models affordable,
            giving users the chance to obtain good quality models at low prices.
            My team and I are yet to discuss and implement a pricing system.
            Therefore, as of writing, all the models on our website are free.
            This may change in the future depending on where the project goes.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/inspiration/article-image-2.svg"
            width="80%"
          />
          <br />
          <br />
          <h3>Simple Models (Low Polygons)</h3>
          <p>
            I was never able to find a hub for basic 3D models. As someone who
            wanted to simply step into the realm of game design and look into 3D
            modelling before hand. The complexity of a lot of pieces displayed
            on website intimidated me. I could not find the minimalistic type of
            model I really wanted and got lost in a swarm of high polygon
            masterpieces. While beautiful to inspect, I definitely did not need
            a high definition dragon head with individual scales for my little
            adventure parkour game.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/inspiration/article-image-3.svg"
            width="80%"
          />
          <br />
          <br />
          <h3>Customer Support</h3>
          <p>
            A major issue I seemed to find across many platforms for obtaining
            3D models was that there was simply no customer support. Often, I
            would see an anonymous user posting their models and not ever
            answering the pleas for help from the poor souls in the review
            section having issues implementing it to their project.
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/inspiration/article-image-4.svg"
            width="80%"
          />

          <br />
          <br />
          <h3>Uniformity</h3>
          <p>
            Clutter was something I constantly ran into. Too many file types,
            too many categories and due to the lack of a “simple to complex”
            filter option, TOO MANY POLYGONS!
          </p>
          <br />
          <br />
          <img
            className="article-image"
            src="./images/blog/inspiration/article-image-5.svg"
            width="50%"
          />
          <br />
          <br />
          <p>
            So, I hope you enjoy my little project, we will keep updating our
            website with models and new features. We have a long way to go but
            with time we hope to be your one-stop shop for all 3D models.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default InspirationBlogArticle;

//<button onClick={clickHandler}>Click me!</button>
