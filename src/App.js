import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import StartForm from "./components/StartForm";
import DailyView from "./components/DailyView";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Jian Yang",
      calorieNeeds: 0
    };
  }

  updateCalorieNeeds = calories => {
    this.setState({
      calorieNeeds: calories
    });
  };

  render() {
    const bodyContent = this.state.calorieNeeds ? (
      <div>
        <DailyView
          user={this.state.user}
          calorieNeeds={this.state.calorieNeeds}
        />
      </div>
    ) : (
      <div>
        <div className="Start-title">PERSONALIZED FOR YOU</div>
        <div className="Start-form">
          <StartForm
            user={this.state.user}
            updateCalorieNeeds={this.updateCalorieNeeds}
          />
        </div>
      </div>
    );
    return (
      <div className="App">
        <AppHeader user={this.state.user} />
        <div className="App-body">{bodyContent}</div>
      </div>
    );
  }
}

export default App;
