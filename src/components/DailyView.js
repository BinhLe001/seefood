import React, { Component } from "react";
import DatePicker from "react-datepicker";
import MealsList from "./MealsList";
import RecommendationList from "./RecommendationList";
import "react-datepicker/dist/react-datepicker.css";
import "./DailyView.css";
import NutritionSummary from "./NutritionSummary";

class DailyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      meals: [
        "Apple Pie",
        "Mac and Cheese",
        "Burger",
        "Salad",
        "Milk",
        "Coffee"
      ],
      recommendations: ["Celery", "Vegetable", "Bubble Tea"],
      selectedFile: null
    };
  }

  onFileChange = files => {
    this.uploadHandler(files[0]);
    this.setState({
      selectedFile: files[0]
    });
  };

  uploadHandler = file => {
    var newMeals = this.state.meals.slice();
    newMeals.unshift(file.name);
    this.setState({ meals: newMeals });
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="daily-view">
        <div className="daily-meals">
          <div className="meals-header">
            Daily Tracker
            <DatePicker
              className="daily-date"
              selected={this.state.startDate}
              onChange={this.handleDateChange}
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div className="meals-body">
            <div className="meals-rec">
              <div className="rec-header">Recommendations</div>
              <RecommendationList
                recommendations={this.state.recommendations}
              />
            </div>
            <div className="meals-list">
              <div className="list-header">
                Meals
                <div>
                  <input
                    onChange={e => this.onFileChange(e.target.files)}
                    type="file"
                    id="files"
                    className="hidden"
                  />
                  <button className="add-meal-button">
                    <label htmlFor="files" className="add-meal-label">
                      + Add Meal
                    </label>
                  </button>
                </div>
              </div>
              <MealsList meals={this.state.meals} />
            </div>
          </div>
        </div>
        <div className="daily-nutrition">
          <div className="nutrition-header">Nutrition Statistics</div>
          <div className="nutrition-summary">
            <NutritionSummary meals={this.state.meals} />
          </div>
        </div>
      </div>
    );
  }
}

export default DailyView;
