import React from "react";
import { Component } from "react";

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.recipeData.map((recipeLists, i) => {
            console.log(recipeLists);
            let data = recipeLists.recipe;
            let recipe = {
              label: data.label,
              imageURL: data.image,
              ingrediants: data.ingrediants,
              calories: data.calories,
              dietLabels: data.dietLabels,
              url: data.url
            };
            return (
              <div className="col-md-4">
                <div className="recipe__box">
                  <div key={i}>
                    <img
                      className="recipe__box-img"
                      src={recipe.imageURL}
                      alt={recipe.label}
                    />
                    <div className="recipe__text">
                      <p>{recipe.label}</p>
                    </div>
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
