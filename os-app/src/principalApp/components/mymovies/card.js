import React from "react";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import Dialog from "./dialog.js";

class CardCustom extends Component {
  render() {
    const mystyle = {
      height: "148px",
    };
    return (
      <React.Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.img}
            style={{ height: "300px" }}
          />
          <Card.Body style={mystyle}>
            <h5>
              <Card.Text>{this.props.title}</Card.Text>
            </h5>
            <Dialog titolo={this.props.title} />
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default CardCustom;
