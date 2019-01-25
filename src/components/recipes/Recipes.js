import React from "react";
import { Component } from "react";
import "./Recipes.css";
import "./Recipes_Querry.css";

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.recipeData.map((recipeLists, i) => {
            // console.log(recipeLists.recipe.ingredients["length"]);
            let data = recipeLists.recipe;
            let recipe = {
              label: data.label,
              imageURL: data.image,
              ingrediant: data.ingrediants,
              calories: Math.floor(data.calories),
              dietLabels: data.dietLabels,
              url: data.url
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
                      <h5 className="recipes__title">{recipe.label.length < 25 ? recipe.label : recipe.label.substring(0,25) + "..."}</h5>
                      <div className="recipes_sub">
                        <p className="recipes_subtitle">
                          <span>{recipe.calories + " "}</span>
                          <span className="recipes_subtitle_logo">
                            calories
                          </span>
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
                      <button className="recipe_buttons ">View Recipe</button>
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
