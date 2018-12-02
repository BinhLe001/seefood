import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import MealsList from "./MealsList";
import RecommendationList from "./RecommendationList";
import "react-datepicker/dist/react-datepicker.css";
import "./DailyView.css";
import NutritionSummary from "./NutritionSummary";
import Loader from "react-loader-spinner";

const url = "https://1ec702e5.ngrok.io";
// const url = "https://plurimi.serveo.net";

const NUTRIENTS = [
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
  "saturated"
];

const BASELINE_CALORIES = 2000;
const BASELINE_VALUES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const BASELINE_SUGGESTIONS = [2000, 50, 1, 2.4, 25, 60, 3.5, 0.3, 50, 65, 20];

class DailyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      meals: [],
      recommendations: [],
      currentNutrients: BASELINE_VALUES,
      suggestedValues: BASELINE_SUGGESTIONS,
      uploadLoading: true
    };
  }

  onRemoveClicked = index => {
    var removedMeal = this.state.meals[index];

    let newMeals = this.state.meals.slice();
    newMeals.splice(index, 1)
    this.setState({
      meals: newMeals
    })

    let newNutrients = this.state.currentNutrients.slice()
    for (var i=0; i< NUTRIENTS.length; i++) {
      newNutrients[i] -= removedMeal[Object.keys(removedMeal)[0]][NUTRIENTS[i]]
      newNutrients[i] = Math.max(0, newNutrients[i].toFixed(2));
    }
    this.setState({
      currentNutrients: newNutrients
    })

    let formData = new FormData();
    formData.append("food_name", Object.keys(removedMeal)[0]);
    formData.append("name", this.props.user);
    formData.append(
      "timestamp",
      removedMeal[Object.keys(removedMeal)[0]]["timestamp"]
    );

    axios({
      method: "delete",
      url: url + "/meal",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        console.log(response)
        // this.updateMeals(this.state.startDate);
      })
      .catch(error => {
        alert("Remove meal failed with " + error);
      });
  };

  onFileChange = files => {
    if (files.length > 0) {
      this.setState({
        uploadLoading: true
      });
      let formData = new FormData();
      formData.append("file", files[0]);
      formData.append("name", this.props.user);
      formData.append("timestamp", new Date());

      axios({
        method: "post",
        url: url + "/meal",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(response => {
          this.updateMeals(this.state.startDate);
        })
        .catch(error => {
          alert("Upload image failed with " + error);
          this.setState({
            uploadLoading: false
          });
        });
    }
  };

  handleDateChange = date => {
    this.setState({
      startDate: date,
      uploadLoading: true,
      meals: [],
      recommendations: []
    });
    this.updateMeals(date);
  };

  updateSuggestions = () => {
    let calorieRatio = this.props.calorieNeeds / BASELINE_CALORIES;
    let newSuggestions = this.state.suggestedValues.slice().map(element => {
      return Number(element * calorieRatio).toFixed(2);
    });
    this.setState({ suggestedValues: newSuggestions });
  };

  updateNutrients = nutrientTotals => {
    let currentValues = [];
    for (var i = 0; i < NUTRIENTS.length; i++) {
      currentValues.push(nutrientTotals[NUTRIENTS[i]].toFixed(2));
    }
    this.setState({
      currentNutrients: currentValues
    });
    this.updateRecommendations(
      currentValues[0] - this.state.suggestedValues[0]
    );
  };

  updateRecommendations = calorieDifference => {
    let formData = new FormData();
    formData.append("calories_needed", calorieDifference);

    axios({
      method: "post",
      url: url + "/recommend",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        let newRecs = [];
        let responseRecs = response.data;
        for (var i = 0; i < responseRecs.length; i++) {
          let currentRec = {};
          currentRec[responseRecs[i].name] = responseRecs[i];
          newRecs.push(currentRec);
        }
        this.setState({
          recommendations: newRecs
        });
      })
      .catch(error => {
        alert("Get recommendations failed with " + error);
      });
  };

  updateMeals = date => {
    let formData = new FormData();
    formData.append("user_name", this.props.user);
    formData.append("timestamp", date);

    axios({
      method: "post",
      url: url + "/getmeals",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        let newMeals = [];
        let responseMeals = response.data.food;
        if (responseMeals.length > 0) {
          for (var i = 0; i < responseMeals.length; i++) {
            let currentMeal = {};
            for (var j = 0; j < Object.keys(responseMeals[i]).length; j++) {
              if (!isNaN(responseMeals[i][Object.keys(responseMeals[i])[j]])){
                responseMeals[i][Object.keys(responseMeals[i])[j]] *= 3;
              }
            }
            currentMeal[responseMeals[i].food_name] = responseMeals[i];

            newMeals.push(currentMeal);
          }
          this.updateNutrients(response.data.nutrition[0]);
        } else {
          this.updateRecommendations(Math.round(this.state.suggestedValues[0]));
          this.setState({
            currentNutrients: BASELINE_VALUES
          });
        }
        this.setState({
          meals: newMeals,
          uploadLoading: false
        });
      })
      .catch(error => {
        alert("Get daily meals failed with " + error);
        this.setState({
          uploadLoading: false
        });
      });
  };

  componentDidMount() {
    this.updateSuggestions();
    this.updateMeals(this.state.startDate);
  }

  render() {
    let addButtonContent = this.state.uploadLoading ? (
      <Loader type="ThreeDots" color="#FFFFFF" height={12} width={30} />
    ) : (
      "+ Add"
    );

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
              disabled={this.uploadLoading}
            />
          </div>
          <div className="meals-body">
            <div className="meals-rec">
              <div className="rec-header">Recommendations</div>
              <RecommendationList
                recommendations={this.state.recommendations}
                onRemoveClicked={this.onRemoveClicked}
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
                    disabled={this.state.uploadLoading}
                  />
                  <button
                    className="add-meal-button"
                    disabled={this.state.uploadLoading}
                  >
                    <label
                      htmlFor="files"
                      className="add-meal-label"
                      disabled={this.state.uploadLoading}
                    >
                      {addButtonContent}
                    </label>
                  </button>
                </div>
              </div>
              <MealsList
                meals={this.state.meals}
                onRemoveClicked={this.onRemoveClicked}
              />
            </div>
          </div>
        </div>
        <div className="daily-nutrition">
          <div className="nutrition-header">Nutrition Statistics</div>
          <div className="nutrition-body">
            <NutritionSummary
              currentNutrients={this.state.currentNutrients}
              suggestedValues={this.state.suggestedValues}
              uploadLoading={this.state.uploadLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DailyView;
