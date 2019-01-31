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
    this.setState(previousState => ({
      isActive: !previousState.isActive
    }));

    (function() {
      var burger = document.querySelector(".burger");
      var nav = document.querySelector("#" + burger.dataset.target);

      burger.addEventListener("click", function() {
        burger.classList.toggle("is-active");
        nav.classList.toggle("is-active");
      });
    })();
  };

  // nav1 = (
  //   <nav className="nav-container">
  //     <div className="nav-content container">
  //       <header className="App-header">
  //         <h1 className="App-title" href="#top">
  //           Recipe Search
  //         </h1>
  //       </header>
  //       <Form />
  //       <ul className="nav-content-lists">
  //         <li>
  //           <a href="https://rkdevelopment.org/#about">About Me</a>
  //         </li>
  //         <li>
  //           <a href="https://rkdevelopment.org/#portfolio">Portfolio</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );

  render() {
    return (
      <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu is-active">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.2/bulma-0.7.2.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
    );
  }
}

export default Nav;
