import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <div>
          <a
            className="navbar-brand"
            onClick={() => this.props.history.push("/")}
          >
            Space History
          </a>
          <a
            className="navbar-brand"
            onClick={() => this.props.history.push("/spaceAddress")}
          >
            Space Address
          </a>
        </div>
      </nav>
    );
  }
}

export default withRouter(HeaderComponent);
