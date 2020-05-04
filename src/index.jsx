import "assets/styles/general.scss";

import React from "react";
import ReactDOM from "react-dom";
import ClientCard from "./components/Client/ClientCard";

import { allClients } from "./components/Client/ClientList";

class App extends React.Component {
  render() {
    console.log(allClients());
    const content = allClients().map((el) => {
      console.log(el.firstName);
      return <ClientCard {...el} />;
    });
    return content;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
