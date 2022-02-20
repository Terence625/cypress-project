import React from "react";

interface IToggleProps {}

interface IToggleState {
  isToggleOn: boolean;
}

export default class Toggle extends React.Component<IToggleProps, IToggleState> {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>{this.state.isToggleOn ? "ON" : "OFF"}</button>;
  }
}