import React, { Component } from "react";
import "./StartForm.css";

class StartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderAnswer: "",
      ageAnswer: "",
      activeAnswer: ""
    };
  }

  onChange = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmitForm = () => {
    const ageNumber = Number(this.state.ageAnswer);
    // Check if age is a number
    if (isNaN(ageNumber) || ageNumber < 2) {
      alert("Please enter a valid number for age (at least 2).");
    } else {
      if (this.state.genderAnswer === "" || this.state.activeAnswer === "") {
        alert("Please select an option for each question.");
      } else {
        // Send user info to the back-end
        alert(
          "User: " +
            this.props.user +
            "\nGender: " +
            this.state.genderAnswer +
            "\nAge: " +
            ageNumber +
            "\nActivity: " +
            this.state.activeAnswer
        );
        this.props.onStartFormSubmit()
      }
    }
  };

  render() {
    return (
      <div className="form">
        <div className="form-header">Calculating Your Nutritional Needs</div>
        <div className="form-body">
          <div className="form-question">Gender</div>
          <div className="form-answer">
            <form className="genderForm">
              <div>
                <input
                  type="radio"
                  name="genderAnswer"
                  value="Male"
                  onChange={e => this.onChange("genderAnswer", e)}
                />{" "}
                Male
              </div>
              <div>
                <input
                  type="radio"
                  name="genderAnswer"
                  value="Female"
                  onChange={e => this.onChange("genderAnswer", e)}
                />{" "}
                Female
              </div>
              <div>
                <input
                  type="radio"
                  name="genderAnswer"
                  value="Other"
                  onChange={e => this.onChange("genderAnswer", e)}
                />
                Other
              </div>
            </form>
          </div>
          <div className="form-question">Age</div>
          <div className="form-answer">
            <input
              name="ageAnswer"
              onChange={event => this.onChange("ageAnswer", event)}
              value={this.state.ageAnswer}
              type="number"
              className="answer-input"
            />
          </div>
          <div className="form-question">Physical Activity Level</div>
          <div className="form-answer">
            <form className="activeForm">
              <div>
                <input
                  type="radio"
                  name="activeAnswer"
                  value="Sedentary"
                  onChange={e => this.onChange("activeAnswer", e)}
                />
                Sedentary
              </div>
              <div>
                <input
                  type="radio"
                  name="activeAnswer"
                  value="Moderately Active"
                  onChange={e => this.onChange("activeAnswer", e)}
                />
                Moderately Active
              </div>
              <div>
                <input
                  type="radio"
                  name="activeAnswer"
                  value="Active"
                  onChange={e => this.onChange("activeAnswer", e)}
                />
                Active
              </div>
            </form>
          </div>
          <div className="button-div">
            <button onClick={this.onSubmitForm} className="form-button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StartForm;
