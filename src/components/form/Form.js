import React from "react";
import "./form.css";

class Form extends React.Component {
  setFirst = () => {
    this.props.setFirst(true);
  };

  render() {
    return (
      <form onSubmit={this.props.getRecipe} className="formStyle">
        <input type="text" name="recipeName" className="form__input" />
        <button
          className="form__button"
          onClick={e => {
            if (this.props.closeNav) {
              this.props.closeNav();
              this.props.smoothScroll();
            }
          }}
        >
          Search
        </button>
      </form>
    );
  }
}

export default Form;
