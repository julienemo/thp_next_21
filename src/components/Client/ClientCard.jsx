import React from "react";
import { CallClient, WriteToClient } from "../UI/index";

class ClientCard extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props;
  }

  fullName = () => {
    return `${this.client.firstName} ${this.client.lastName}`;
  };

  render() {
    return (
      <div className="row my-1">
        <div>
          <img
            src={require(`assets/img/${this.client.photo_id}.png`)}
            alt={`${this.fullName()}'s profile`}
          />
        </div>
        <div className="card-detail">
          <p>
            {this.fullName()}, {this.client.profession}
          </p>

          <CallClient {...this.client} />
          <WriteToClient {...this.client} />
        </div>
      </div>
    );
  }
}

export default ClientCard;
