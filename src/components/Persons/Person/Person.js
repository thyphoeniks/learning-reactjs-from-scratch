import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass_0";
import PropTypes from "prop-types";

import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    if (this.props.position === 0) {
      // this.inputElement.focus();
      this.inputElement.current.focus();
    }
  }

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I am authenticated</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I am a {this.props.name} and i am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
