import React, { Component } from "react";
import SingleMeal from "./SingleMeal";

class RecommendationList extends Component {
  render() {
    return (
      <div>
        {this.props.recommendations.map((rec, index) => {
          return (
            <div key={index}>
              <SingleMeal mealName={Object.keys(rec)[0]} mealDetails={rec[Object.keys(rec)[0]]} isMeal={false} onRemoveClicked={this.props.onRemoveClicked} index={index}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RecommendationList;
