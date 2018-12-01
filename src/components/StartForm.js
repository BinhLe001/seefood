import React, { Component } from "react";
import "./StartForm.css";

class StartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexAnswer: "",
      ageAnswer: "",
      activeAnswer: ""
    };
  }

  onChange = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  onClick = () => {
    // Send user info to the back-end
    console.log(this.props.user);
  };

  render() {
    return (
      <div className="form">
        <div className="form-header">User Information</div>
        <div className="form-body">
          <div className="form-question">Sex</div>
          <div className="form-answer">
            <input
              name="sexAnswer"
              onChange={event => this.onChange("sexAnswer", event)}
              value={this.state.sexAnswer}
              type="text"
              className="answer-input"
            />
          </div>
          <div className="form-question">Age</div>
          <div className="form-answer">
            <input
              name="ageAnswer"
              onChange={event => this.onChange("ageAnswer", event)}
              value={this.state.ageAnswer}
              type="text"
              className="answer-input"
            />
          </div>
          <div className="form-question">Physical Activity Level</div>
          <div className="form-answer">
            <input
              name="activeAnswer"
              onChange={event => this.onChange("activeAnswer", event)}
              value={this.state.activeAnswer}
              type="text"
              className="answer-input"
            />
          </div>
          <div className="button-div">
            <button onClick={this.onClick()} className="form-button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StartForm;
