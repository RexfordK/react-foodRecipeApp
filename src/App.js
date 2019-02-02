import React, { Component } from "react";
import "./App.css";
import "./App_Querry.css";
import Form from "./components/form/Form.js";
import Nav from "./components/nav/Nav.js";
import Page404 from "./components/page404/Page404.js";

import es6_promise from "es6-promise";
import isomorphic_fetch from "isomorphic-fetch";
import Recipes from "./components/recipes/Recipes.js";

// https://www.food2fork.com/api/search?key=397927fba082a77b5a8b29291cfc676a&q=shredded%20chicken
const APP_ID = "47953d16";
const APP_KEY = "f77c1ab3af8bd112915bad3fd3b00119";
class App extends Component {
  state = {
    recipeArray: [],
    search: ""
  };

  getRecipe = e => {
    let recipeName;
    if (e) {
      e.preventDefault();
      recipeName = e.target.elements.recipeName.value;
      this.setState({search: recipeName},function() {
        if (this.state.search === "") {
          recipeName = "pizza";
        } else {
          recipeName = this.state.search;
        }
      })
    } else {
      recipeName = "pie";
    }
   
    let request =
      "https://api.edamam.com/search?q=" +
      recipeName +
      "&app_id=" +
      APP_ID +
      "&app_key=" +
      APP_KEY +
      "&from=0&to=24&count=0";


    const api_call = fetch(request)
      .then(response => {
        if (response.status != 200) {
          throw new Error(response.status + " Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        // this.componentDidMount();
        this.setState({ recipeArray: data.hits });
        console.log(this.state.recipeArray);
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

  componentDidMount() {
    const json = localStorage.getItem("recipes");
    if (json) {
      const recipes = JSON.parse(json);
      this.setState({ recipeArray: recipes });
    } else {
      this.getRecipe();
    }
  }

  componentDidUpdate = () => {
    const recipesData = JSON.stringify(this.state.recipeArray);
    localStorage.setItem("recipes", recipesData);
  };

  render() {
    const arr = this.state.recipeArray;
    return (
      <div className="App">
        <Nav getRecipe={this.getRecipe}/>
        <section className="section">
          <Form getRecipe={this.getRecipe}/>
          {this.state.recipeArray.length === 0 && localStorage.getItem("recipes") ? <Page404/> : <Recipes recipeData={this.state.recipeArray} /> }
        </section>  
      </div>
    );
  }
}

export default App;
