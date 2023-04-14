import React, { Component } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
class Report extends Component {
  constructor(props) {
    super(props);
    this.showError = this.showError.bind(this);
  }
  showError(value) {
    this.props.showError(value);
  }
  render() {
    return /*#__PURE__*/_jsx("div", {
      className: "container-fluid",
      style: {
        "paddingRight": "0px"
      }
    });
  }
}
export default Report;