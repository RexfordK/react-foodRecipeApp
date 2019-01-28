import React from "react";
import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: {}
  };

  componentDidMount = () => {
    // console.log(this.state)
    this.retrieveData();
  };

  retrieveData = () => {
    const recipe = this.props.location.state.recipe;
    this.setState({ activeRecipe: recipe });
  };

  render() {
    const data = this.state.activeRecipe;
    let displayData = () => {
      console.log(this.state.activeRecipe.length);
      if (this.state.activeRecipe.length !== 0) {
        return (
          <div className="activeRecipe">
            <img
              className="active-recipe__img"
              src={data.imageURL}
              alt={data.label}
            />
            <h3 className="active-recipe_label">{data.label}</h3>
            <h4 className="active-recipe_publisher">Publisher</h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href="#">This si the website</a>
              </span>
            </p>
            <button className="active-recipe__button">
            <Link to="/">
            Back
            </Link>
            </button>
          </div>
        );
      } else {
        return;
      }
    };

    console.log(data);
    // console.log(this.props);
    return <div className="container">{displayData()}</div>;
  }
}

export default Recipe;
