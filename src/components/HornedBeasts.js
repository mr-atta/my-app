import React from "react";

class HornedBeasts extends React.Component {
  render() {
    return (
      <div>
        <span>
          {this.props.num} {this.props.title}
        </span>
        <br></br>
        <img src={this.props.imageUrl} title={this.props.title} width="500px" />
        <br></br>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
