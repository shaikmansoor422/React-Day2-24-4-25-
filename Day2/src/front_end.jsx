import "./App.css";
import "./cards.css"
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import React from "./assets/React.png";


function Frontend() {
  return (
    <>
      <div id="frontend_container">
        <div id="html">
          <img src={html} alt="HTML Logo" />
          <h3>HTML</h3>
          <p>HTML is the standard markup language for creating web pages and applications.</p>
        </div>

        <div id="css"> 
          <img src={css} alt="CSS Logo" />
          <h3>CSS</h3>
          <p>CSS is used to style and layout web pages, such as changing fonts, colors, and spacing.</p>
        </div>

        <div id="js">
          <img src={js} alt="JavaScript Logo" />
          <h3>JavaScript</h3>
          <p>JavaScript is a programming language used to create dynamic webpages.</p>
        </div>

        <div id="rct">
          <img src={React} alt="React Logo" />
          <h3>React</h3>
          <p>React is a JavaScript library for building user interfaces, especially single-page applications.</p>
        </div>
      </div>
    </>
  );
}

export default Frontend;
