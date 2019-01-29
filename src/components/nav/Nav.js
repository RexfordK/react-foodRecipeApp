import React from "react";
import "./Nav.css";
import Form from "../form/Form.js";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="nav-content container">
          <header className="App-header">
            <h1 className="App-title" href="#top">Recipe Search</h1>
          </header>
          <Form/>
          <ul className="nav-content-lists">
              <li><a href="https://rkdevelopment.org/#about">About Me</a></li>
              <li><a href="https://rkdevelopment.org/#portfolio">Portfolio</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
