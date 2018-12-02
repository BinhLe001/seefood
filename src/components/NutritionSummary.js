import React, { Component } from "react";
import "./NutritionSummary.css";

const nutrients = [
  "calories",
  "protein",
  "calcium",
  "sodium",
  "fiber",
  "vitaminc",
  "potassium",
  "carbohydrate",
  "sugars",
  "fat",
  "saturated",
  "monounsat",
  "polyunsat"
];

class NutritionSummary extends Component {
  render() {
    return (<div>{this.props.meals}</div>)
    ;
  }
}

export default NutritionSummary;
