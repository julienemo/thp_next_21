import React from "react";

export class CallClient extends React.Component {
  render() {
    const text = `Call ${this.props.firstName}`;
    return (
      <a
        className="btn btn-outline-warning"
        target="_blank"
        rel="noopener noreferrer"
        href={`callto:${this.props.phoneNumber}`}
        title={text}
      >
        {text}
      </a>
    );
  }
}

export class WriteToClient extends React.Component {
  render() {
    const text = `Write to ${this.props.firstName}`;
    return (
      <a
        className="btn btn-outline-warning"
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:${this.props.email}`}
        title={text}
      >
        {text}
      </a>
    );
  }
}
