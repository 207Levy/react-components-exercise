import Spam from "./Spam";
import React, { Component } from "react";

class Spamalot extends Component {
  render() {
    return new Array(500).fill(<Spam />);
  }
}

export default Spamalot;
