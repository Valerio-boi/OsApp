import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      ricerca: "",
    };
  }

  handleChange(event) {
    this.setState({
      ricerca: event.target.value,
    });
  }

  search() {
    this.props.cercaFilm(this.state.ricerca, 1);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Filmissimo</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.ricerca}
              onChange={this.handleChange}
            />
            <Button variant="outline-success" onClick={this.search}>
              Search
            </Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
