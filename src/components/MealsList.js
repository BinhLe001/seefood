import React, { Component } from "react";
import SingleMeal from "./SingleMeal";

class MealsList extends Component {
  render() {
    return (
      <div>
        {this.props.meals.map((meal, index) => {
          return (
            <div key={index}>
              <SingleMeal mealName={Object.keys(meal)[0]} mealDetails={meal[Object.keys(meal)[0]]} isMeal={true} onRemoveClicked={this.props.onRemoveClicked} index={index}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MealsList;
