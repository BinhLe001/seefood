import React, { Component } from "react";
import "./MealsList.css";
import SingleMeal from "./SingleMeal";

class MealsList extends Component {
  render() {
    return (
      <div>
        {this.props.meals.map(meal => {
          return (
            <div key={meal}>
              <SingleMeal meal={meal} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MealsList;
