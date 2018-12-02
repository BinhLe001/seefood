import React, { Component } from "react";
import "./SingleMeal.css";

class SingleMeal extends Component {
  render() {
    let imageSrc = "/pics/" + this.props.mealName.replace(/\s/g, "") + ".jpeg";
    let mealContent = this.props.isMeal ? (
      <div className="meal">
        <img src={imageSrc} className="meal-pic" alt="" />
        <div className="meal-title">{this.props.mealName}</div>
        <div className="meal-details">
          <div>Calories: {this.props.mealDetails["calories"].toFixed(2)}</div>
          <div>
            Carbs (g): {this.props.mealDetails["carbohydrate"].toFixed(2)}
          </div>
        </div>
        <div className="meal-details">
          <div>Sodium (g): {this.props.mealDetails["sodium"].toFixed(2)}</div>
          <div>Protein (g): {this.props.mealDetails["protein"].toFixed(2)}</div>
        </div>
        <button
          className="remove-button"
          onClick={() => this.props.onRemoveClicked(this.props.index)}
        >
          Remove
        </button>
      </div>
    ) : (
      <div className="rec">
        <img src={imageSrc} className="meal-pic" alt="" />
        <div className="meal-title">{this.props.mealName}</div>
        <div className="meal-details">
          <div>Calories: {this.props.mealDetails["calories"].toFixed(2)}</div>
          <div>
            Carbs (g): {this.props.mealDetails["carbohydrate"].toFixed(2)}
          </div>
        </div>
        <div className="meal-details">
          <div>Sodium (g): {this.props.mealDetails["sodium"].toFixed(2)}</div>
          <div>Protein (g): {this.props.mealDetails["protein"].toFixed(2)}</div>
        </div>
        <div className="link-div">
          <form
            action="https://www.bhg.com/recipe/homemade-vanilla-yogurt/"
            target="_blank"
          >
            <input className="link-form" type="submit" value="Recipe" />
          </form>
        </div>
      </div>
    );
    return mealContent;
  }
}

export default SingleMeal;
