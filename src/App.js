import React, { Component } from "react";
import "./App.css";
import Form from "./components/form/Form.js";
import es6_promise from "es6-promise";
import isomorphic_fetch from "isomorphic-fetch";
import Recipes from "./components/recipes/Recipes.js";

// https://www.food2fork.com/api/search?key=397927fba082a77b5a8b29291cfc676a&q=shredded%20chicken
const APP_ID = "47953d16";
const APP_KEY = "f77c1ab3af8bd112915bad3fd3b00119";

class App extends Component {
  state = {
    recipeArray: []
  };

  getRecipe = e => {
    e.preventDefault();
    let recipeName = e.target.elements.recipeName.value;
    if (!recipeName) {
      recipeName = "rice";
    }
    let request =
      "https://api.edamam.com/search?q=" +
      recipeName +
      "&app_id=" +
      APP_ID +
      "&app_key=" +
      APP_KEY +
      "&from=0&to=10&count=0";

    if (!recipeName) {
      recipeName = "fish";
    }

    const api_call =  fetch(request)
      .then(response => {
        if (response.status != 200) {
          throw new Error(response.status + " Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ recipeArray: data.hits });
        console.log(this.state.recipeArray)
      });
  };

  handleData = () => {
    var data = this.state.recipeArray;
    var temp = [];
    for (var x = 0; x < data.length; x++) {
      console.log(data[x].recipe);
      temp.push(data[x].recipe);
    }
    return temp;
  };

  createNumArr = arr => {
    let num = [];
    for (let x = 0; x < arr.length; x++) {
      num.push(x);
    }
    return num;
  };

  render() {
    const arr = this.state.recipeArray;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipeData={this.state.recipeArray}/>
      </div>
    );
  }
}

export default App;
