import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import StartForm from "./components/StartForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Binh Le"
    };
  }

  render() {
    return (
      <div className="App">
        <AppHeader user={this.state.user} />
        <div className="App-body">
          <div className="Start-title">PERSONALIZED FOR YOU</div>
          <div className="Start-form">
            <StartForm user={this.state.user} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
