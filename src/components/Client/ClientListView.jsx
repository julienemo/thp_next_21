import React from "react";
import ClientList from "./ClientList";
import ClientCard from "./ClientCard";

class ClientListView extends React.Component {
  render() {
    const content = ClientList().map((el) => {
      return <ClientCard {...el} />;
    });
    return content;
  }
}

export default ClientListView;
