import React, { Component } from "react";
import "./AppHeader.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="header-title">SeeFood</div>
        <div className="header-name">{this.props.user}</div>
      </div>
    );
  }
}

export default AppHeader;
