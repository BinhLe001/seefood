import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import StartForm from "./components/StartForm";
import DailyView from "./components/DailyView";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Binh Le",
      startFormSubmitted: true,
    };
  }

  onStartFormSubmit = () => {
    this.setState({
      startFormSubmitted: true
    });
  };

  render() {
    const bodyContent = this.state.startFormSubmitted ? (
      <div>
        <DailyView user={this.state.user} />
      </div>
    ) : (
      <div>
        <div className="Start-title">PERSONALIZED FOR YOU</div>
        <div className="Start-form">
          <StartForm
            user={this.state.user}
            onStartFormSubmit={this.onStartFormSubmit}
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
