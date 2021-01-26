import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      start: false,
    };

    this.timer = 0;
  }

  render() {
    let h =
      Math.floor(this.state.seconds / (60 * 60)) < 10
        ? "0" + Math.floor(this.state.seconds / (60 * 60))
        : Math.floor(this.state.seconds / (60 * 60));

    let divisor_for_minutes = this.state.seconds % (60 * 60);
    let m =
      Math.floor(divisor_for_minutes / 60) < 10
        ? "0" + Math.floor(divisor_for_minutes / 60)
        : Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let s =
      Math.ceil(divisor_for_seconds) < 10
        ? "0" + Math.ceil(divisor_for_seconds)
        : Math.ceil(divisor_for_seconds);
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>
          {h} : {m} : {s}
        </h1>
        <div>
          <Container>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  block
                  onClick={this.startTimer}
                >
                  Start
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  block
                  onClick={this.stopTimer}
                >
                  Stop
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  block
                  onClick={this.resetTimer}
                >
                  Reset
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }

  startTimer = () => {
    console.log("### START TIMER ###");
    this.setState({ start: true });
    this.interval = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }, 1000);
  };

  stopTimer = () => {
    console.log("### STOP TIMER ###");
    this.setState({ start: false });
    clearInterval(this.interval);
  };

  resetTimer = () => {
    console.log("### RESET TIMER ###");
    this.setState({ hours: 0, minutes: 0, seconds: 0, start: false });
    clearInterval(this.interval);
  };
}

export default Timer;
