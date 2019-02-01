import React from "react";
import "./Nav.css";
import "./Nav_Querry.css";

import Form from "../form/Form.js";
import { slide as Menu } from "react-burger-menu";

class Nav extends React.Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    let toggle = this.state.isActive;
    console.log("clicked");
  };

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <h1><i className="fas fa-hamburger"></i>YummyFood</h1>
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExternalLinks"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExternalLinks" className="navbar-menu" onClick={this.toggleNav}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://localhost:4000"
                    target="_blank"
                    href="https://github.com/RexfordK/react-foodRecipeApp"
                  >
                    <span className="icon">
                      <i className="fab fa-github" />
                    </span>
                    <span>View On Github</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://RkDevelopment.org">
                    <span className="icon">
                      <i className="fas fa-download" />
                    </span>
                    <span>RkDevelopment</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        <Form getRecipe={this.props.getRecipe}/>
        </div>
      </nav>
    );
  }
}

export default Nav;
