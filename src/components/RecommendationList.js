import React, { Component } from "react";
import "./RecommendationList.css";

class RecommendationList extends Component {
  render() {
    return (
        <div className="rec-list">
          {this.props.recommendations.map(rec => {
            return <div key={rec}>{rec}</div>;
          })}
        </div>
    );
  }
}

export default RecommendationList;
