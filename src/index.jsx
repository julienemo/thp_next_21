import React from "react";
import ReactDOM from "react-dom";
import Paragraphs from "./components/Paragraphs";
import "./assets/styles/general.scss";
class App extends React.Component {
  render() {
    return (
      <div>
        <Paragraphs text="a" />
        <h1>Hello world</h1>
        <Paragraphs text="b" />
        <p>How are you</p>
        <Paragraphs text="c" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
