import React from "react";
import lantern from "../../assets/img/lantern.png";

class Paragraphs extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <>
        {text}
        <img src={lantern} alt="" />
      </>
    );
  }
}

export default Paragraphs;
