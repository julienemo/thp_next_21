import "bootstrap/dist/css/bootstrap.css";
import "assets/styles/general.scss";

import React from "react";
import ReactDOM from "react-dom";
import ClientListView from "./components/Client/ClientListView";

class App extends React.Component {
  render() {
    return <ClientListView />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
