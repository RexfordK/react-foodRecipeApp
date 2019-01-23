import React, { Component } from "react";
import "./App.css";
import Form from "./components/form/Form.js";
import es6_promise from "es6-promise";
import isomorphic_fetch from "isomorphic-fetch";

// https://www.food2fork.com/api/search?key=397927fba082a77b5a8b29291cfc676a&q=shredded%20chicken
const APP_ID = "47953d16";
const APP_KEY = "f77c1ab3af8bd112915bad3fd3b00119";

class App extends Component {
  state = {
    recipeArray: []
  };

  getRecipe = async e => {
    e.preventDefault();
    let recipeName = e.target.elements.recipeName.value;
    const request =
      "https://api.edamam.com/search?q=chicken&app_id=" +
      APP_ID +
      "&app_key=" +
      APP_KEY +
      "&from=0&to=5&count=0";

    if (!recipeName) {
      recipeName = "fish";
    }

    const api_call = await fetch(request)
      .then(response => {
        if (response.status != 200) {
          throw new Error(response.status + " Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ recipeArray: data.recipes });
        console.log("data");
        console.log(this.state);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
