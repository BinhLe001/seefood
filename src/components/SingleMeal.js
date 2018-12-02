import React, { Component } from "react";
import "./SingleMeal.css";

class SingleMeal extends Component {
  render() {
    return (
      <div className="meal">
        {this.props.meal}
      </div>
    );
  }
}

export default SingleMeal
