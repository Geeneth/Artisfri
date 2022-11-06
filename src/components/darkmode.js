import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  let buttonImage = "./images/button-icons/lightTheme.png"

  if (localStorage) {
    theme = localStorage.getItem("theme");
    buttonImage = "./images/button-icons/"+theme+"Theme.png"
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      document.getElementById('darkMode').src="./images/button-icons/lightTheme.png";
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      document.getElementById('darkMode').src="./images/button-icons/darkTheme.png";
    }
  };

  return (
    // <button
    //   className={theme === "dark" ? clickedClass : ""}
    //   id="darkMode"
    //   onClick={(e) => switchTheme(e)}
    // >
    //   <img
    //     src="./images/button-icons/sun-white.png"
    //     alt="file-format"
    //     width={20}
    //   />
    // </button>
      <img
        src={buttonImage}
        alt="file-format"
        width={25}
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      />
  );
};

export default DarkMode;
