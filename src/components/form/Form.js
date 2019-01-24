import React from "react";
import "./form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipe} className="formStyle">
      <input type="text" name="recipeName" className="form__input"/>
      <button className="form__button">Search</button>
    </form>
  );
};

export default Form;
