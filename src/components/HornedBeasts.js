import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfClick: 0,
    };
  }

  increseOnClick = () => {
    this.setState({
      numOfClick: this.state.numOfClick + 1,
    });
  };

  render() {
    return (
      <>
        {/* <span>
          {this.props.num} {this.props.title}
        </span>
        <img
          onClick={this.increseOnClick}
          src={this.props.image_url}
          title={this.props.title}
          alt={this.props.title}
          width="300px"
        />
        <p>{this.props.description}</p>
        <p>👉 {this.state.numOfClick}</p> */}

        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={this.increseOnClick}
            variant="top"
            src={this.props.image_url}
            alt={this.props.title}
            width="300px"
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>🙂 {this.props.description}</Card.Text>
            <Card.Text>👉 {this.state.numOfClick}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;
