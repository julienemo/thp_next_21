import "assets/styles/general.scss";

import React from "react";
import ReactDOM from "react-dom";
import MixedComponent from "./components/MixedComponents";

class App extends React.Component {
  render() {
    const components = [
      {
        title: "Cat",
        text: "View of a cat sitting on the balcony",
        src: "cat_on_balcony",
      },
      {
        title: "Food",
        text:
          "Cooked green asperges on the plate with chopped garlic over them",
        src: "asperges",
      },
      {
        title: "Craft",
        text: "Hand made Jack o Lantern on a glowing light bulb",
        src: "lantern",
      },
    ];
    const content = components.map((el) => (
      <MixedComponent
        text={el.text}
        title={el.title}
        src={require(`assets/img/${el.src}.png`)}
      />
    ));
    return content;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
