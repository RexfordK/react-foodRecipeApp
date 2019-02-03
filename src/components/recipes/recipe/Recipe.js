import React from "react";
import "./Recipe.css";
import "./Recipe_Querry.css";
import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: {}
  };

  componentWillMount = () => {
    this.retrieveData();
  };

  retrieveData = () => {
    const recipe = this.props.location.state.recipe;
    this.setState({ activeRecipe: recipe });
  };

  stringToInt = str => {
    var s = str;
    var answer = Number(s);
    return answer;
  };

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  renderIngredientList = () => {
    const ingredientList = this.state.activeRecipe.ingredient;
    let tags = [];
    for(let x = 0; x < ingredientList.length; x++) {
      tags.push(<li key={x}>{ingredientList[x]}</li>)
    }
    return tags;
  }

  render() {
    const data = this.state.activeRecipe;
    let caloriesPerSeving = this.stringToInt(
      Math.floor(Number(data.calories / data.numberOfServings)
    ));

    let displayData = () => {
      if (this.state.activeRecipe.length !== 0) {
        return (
          <div className="activeRecipe" id="top">
            <div className="activeRecipe-row1">
              <div className="row1-imgCon">
                <img
                  className="active-recipe__img"
                  src={data.imageURL}
                  alt={data.label}
                />
              </div>
              <div className="row1-recipeInfo">
                <h3 className="active-recipe_label">{data.label}</h3>
                <div className="recipeInfo-details">
                  <p>
                    {caloriesPerSeving}
                    <br /> Calories/Serving
                  </p>
                  <hr className="board"></hr>
                  <p>
                   {Math.floor((caloriesPerSeving/2000)*100) + "%"}
                    <br /> Daily Value*
                  </p>
                  <hr className="board"></hr>
                  <p>
                    {data.numberOfServings}
                    <br /> Servings
                  </p>
                </div>
                <div className="recipeInfo-btns">
                <Link to="/" className="active-recipe__button">
                  Back
                </Link>
                  <a href={data.prepareMeal ? data.prepareMeal : data.prepareMeal2} className="prepareBtn" target="_blank"  rel="noopener noreferrer">Prepare Meal</a>
                </div>
                <p className="calorie-disclaimer">
                  *Percent Daily Values are based on a 2,000 calorie diet. Your
                  daily values may be higher or lower based on your calorie
                  needs.
                </p>
              </div>
            </div>
            <div className="activeRecipe-row2">
              <div className="recipe-info2">
                <h4>{data.ingredient.length} Ingredients</h4>
                <ul className="ingredientList-con">
                {this.renderIngredientList()}
                </ul>
              </div>
              <div />
            </div>
          </div>
        );
      } else {
        return;
      }
    };

    // console.log(data);
    // console.log(this.props);
    return (
      <div className="container">
        <div className="recipe-con">{displayData()}</div>
      </div>
    );
  }
}

export default Recipe;
