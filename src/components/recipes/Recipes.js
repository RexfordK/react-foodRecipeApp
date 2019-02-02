import React from "react";
import { Component } from "react";
import "./Recipes.css";
import "./Recipes_Querry.css";

import { Link } from "react-router-dom";

class Recipes extends Component {
  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  spliceRecipeName = recipe => {
    let screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth > 776) {
      if (recipe.label.length < 22) {
        return recipe.label;
      } else {
        return recipe.label.substring(0, 22) + "...";
      }
    } else {
      return recipe.label;
    }
  };

  render() {
    return (
      <div className="container-fluid recipe__con">
        <div className="row">
          {this.props.recipeData.map((recipeLists, i) => {
            let data = recipeLists.recipe;
            let recipe = {
              ID: data.uri.substring(51, data.uri.length - 1),
              label: data.label,
              imageURL: data.image,
              healthLabels: data.healthLabels,
              ingredient: data.ingredientLines,
              calories: data.calories,
              numberOfServings: data.yield,
              dietLabels: data.dietLabels,
              prepareMeal: data.url,
              prepareMeal2: data.uri
            };

            return (
              <div key={i} className="recipes__box">
                <div key={i}>
                  <img
                    className="recipe__box-img"
                    src={recipe.imageURL}
                    alt={recipe.label}
                  />
                  <div className="recipe__text">
                    <h5 className="recipes__title">
                      {this.spliceRecipeName(recipe)}
                    </h5>
                    <div className="recipes_sub">
                      <p className="recipes_subtitle">
                        <span>
                          {this.numberWithCommas(Math.floor(recipe.calories)) +
                            " "}
                        </span>
                        <span className="recipes_subtitle_logo">calories</span>
                      </p>
                      <p className="recipes_subtitle">
                        <span>
                          {recipeLists.recipe.ingredients["length"] + " "}
                        </span>
                        <span className="recipes_subtitle_logo">
                          ingrediants
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <Link
                      to={{
                        pathname: "/recipe/" + recipe.ID,
                        state: { recipe: recipe, fish: true }
                      }}
                      className="recipe_buttons recipe_btn_link"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recipes;
