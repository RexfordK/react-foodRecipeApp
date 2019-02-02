import React from "react";
import "./form.css";

class Form extends React.Component {

  setFirst = () => {
    this.props.setFirst(true);
  }

  render() {
    return (
      <form onSubmit={this.props.getRecipe} className="formStyle">
        <input type="text" name="recipeName" className="form__input" />
        <button className="form__button" onClick={this.props.closeNav}>
          Search
        </button>
      </form>
    );
  }
}

export default Form;
