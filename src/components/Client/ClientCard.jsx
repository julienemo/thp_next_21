import React from "react";
import { Button } from "../UI/index";

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
      <div>
        <div>
          <img
            src={require(`assets/img/${this.client.photo_id}.png`)}
            alt={`${this.fullName()}'s profile`}
          />
        </div>
        <div>
          <p>
            {this.fullName()}, {this.client.profession}
          </p>
          <p>{this.client.phoneNumber}</p>
          <p>{this.client.email}</p>
        </div>
        <div>
          <Button
            text={this.fullName()}
            className="ui_btn"
            targetLink="http://www.google.com"
          />
        </div>
      </div>
    );
  }
}

export default ClientCard;
