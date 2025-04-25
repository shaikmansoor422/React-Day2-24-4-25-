import "./App.css";
import python from "./assets/pyhton.png";
import java from "./assets/java.png";
import node from "./assets/node.png";
import php from "./assets/php.jpg"; // 

function Backend() {
  return (
    <>
    <div id="backend_container">
        <div id="python">
          <img src={python} alt="Python Logo" />
          <h3>Python</h3>
          <p>Python is a powerful backend language widely used for web development and automation.</p>
        </div>

        <div id="java">
          <img src={java} alt="Java Logo" />
          <h3>Java</h3>
          <p>Java is a versatile backend language commonly used in enterprise-level applications.</p>
        </div>

        <div id="node">
          <img src={node} alt="Node.js Logo" />
          <h3>Node.js</h3>
          <p>Node.js allows JavaScript to run on the server, making it great for backend development.</p>
        </div>

        <div id="php">
          <img src={php} alt="PHP Logo" />
          <h3>PHP</h3>
          <p>PHP is a server-side scripting language mainly used to develop dynamic and interactive websites.</p>
        </div>
      </div>
    </>
  );
}

export default Backend;
