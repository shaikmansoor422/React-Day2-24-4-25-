import "./App.css";
import mysql from "./assets/mysql.png";
import mongodb from "./assets/mongodb.png";
import postgresql from "./assets/postgresql.png";
import oracle from "./assets/oracle.png";

function Database() {
  return (
    <>
      <div id="database_container">
        <div id="mysql">
          <img src={mysql} alt="MySQL Logo" />
          <h3>MySQL</h3>
          <p>MySQL is a popular open-source relational database known for its speed and reliability.</p>
        </div>

        <div id="mongodb">
          <img src={mongodb} alt="MongoDB Logo" />
          <h3>MongoDB</h3>
          <p>MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.</p>
        </div>

        <div id="postgresql">
          <img src={postgresql} alt="PostgreSQL Logo" />
          <h3>PostgreSQL</h3>
          <p>PostgreSQL is a powerful open-source object-relational database system.</p>
        </div>

        <div id="oracle">
          <img src={oracle} alt="Oracle Logo" />
          <h3>Oracle</h3>
          <p>Oracle Database is a multi-model database management system widely used in enterprise environments.</p>
        </div>
      </div>
    </>
  );
}

export default Database;
