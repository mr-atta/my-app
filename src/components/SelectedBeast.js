import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// class App
class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={() => {
            this.props.passFunhandleClose();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title> {this.props.passFundataOfModle.title} </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card.Img
              src={this.props.passFundataOfModle.image_url}
              alt={this.props.passFundataOfModle.title}
              width="300px"
            />
            {this.props.passFundataOfModle.description}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.props.passFunhandleClose();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
