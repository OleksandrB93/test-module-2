import React, { Component } from "react";
import Value from "./Value";
import Controls from "./Controls";
 
 
export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
 
  static propTypes = {
    //
  };
 
  state = {
    value: this.props.initialValue,
  };
 
  handelIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
 
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div>
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handelIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
