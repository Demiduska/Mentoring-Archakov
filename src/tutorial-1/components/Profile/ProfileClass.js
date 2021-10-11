import React from "react";

class ProfileClass extends React.Component {
  render() {
    return (
      <div className="profile">
        <h3>
          Привет, <strong>{this.props.name}!</strong>
        </h3>
        <span>Дата регистрации: {this.props.registredAt}</span>
      </div>
    );
  }
}

export default ProfileClass;