import React from "react";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.targetLink = this.props;
  }
  onClick = () => {
    console.log("this clicked");
    window.location = this.targetLink;
  };
  render() {
    const { text } = this.props;
    const { className } = this.props;
    return (
      <button class={className} onclick={this.onclick}>
        {text}
      </button>
    );
  }
}
