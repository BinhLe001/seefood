import React, { Component } from "react";
import "./NutritionSummary.css";
import Loader from "react-loader-spinner";

const NUTRIENT_LABELS = [
  "Calories",
  "Protein (g)",
  "Calcium (g)",
  "Sodium (g)",
  "Fiber (g)",
  "Vitamin C (g)",
  "Potassium (g)",
  "Carbohydrate (g)",
  "Sugars (g)",
  "Total Fat (g)",
  "Saturated Fat (g)"
];

class NutritionSummary extends Component {
  getTableContent = () => {
    return (
      <tbody>
        {NUTRIENT_LABELS.map((nutrient, index) => {
          return (
            <tr key={nutrient} className="table-body-row">
              <td>{nutrient}</td>
              <td>{this.props.currentNutrients[index]}</td>
              <td>{this.props.suggestedValues[index]}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  render() {
    let tableContent = this.props.uploadLoading
      ? null
      : this.getTableContent();

    let summaryContent = this.props.uploadLoading ? (
      <div className="summary-loading">
        <Loader type="ThreeDots" color="#4484ce" height={20} width={100} />
      </div>
    ) : (
      <table className="summary-table">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Current</th>
            <th>Suggested</th>
          </tr>
        </thead>
        {tableContent}
      </table>
    );
    return summaryContent;
  }
}

export default NutritionSummary;
