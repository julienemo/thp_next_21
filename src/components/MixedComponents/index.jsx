import React from "react";

class MixedComponent extends React.Component {
  render() {
    const { text } = this.props;
    const { title } = this.props;
    const { src } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <p>{text}</p>
        <img src={src} alt={text} />
      </>
    );
  }
}

export default MixedComponent;
