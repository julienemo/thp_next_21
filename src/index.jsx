import "assets/styles/general.scss";

import React from "react";
import ReactDOM from "react-dom";
import MixedComponent from "./components/MixedComponents";

import cat_on_balcony from "assets/img/cat_on_balcony.png";
import asperges from "assets/img/asperges.png";
import lantern from "assets/img/lantern.png";

class App extends React.Component {
  render() {
    return (
      <div>
        <MixedComponent text="cat" title="Cat" src={cat_on_balcony} />
        <MixedComponent text="food" title="Food" src={asperges} />
        <MixedComponent text="lantern" title="Lantern" src={lantern} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
