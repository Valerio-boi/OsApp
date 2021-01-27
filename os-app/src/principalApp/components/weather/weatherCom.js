import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Termometro from "./termometro";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Progress from "./ProgressBar";
import Alert from "react-bootstrap/Alert";

export default function Weather(props) {
  const [weather, setWeather] = useState(props.weather);
  const [citta, setCitta] = useState("Roma");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Meteo italia</h1>
      <br />
      {weather && (
        <Container>
          <br />
          <Row md={4}>
            <Col style={{ textAlign: "-webkit-center" }}>
              <div style={{ width: "180px" }}>
                <h4>Umidita</h4>
                <Progress umidita={weather.main.humidity} />
                <br />
                <h4>Nuvole</h4>
                <Progress umidita={weather.clouds.all} />
              </div>
            </Col>
            <Col style={{ textAlign: "-webkit-center" }}>
              <h4>Temperatura</h4>
              <br />
              <Termometro temp={weather.main.temp} />
              <br />
            </Col>
            <Col style={{ textAlign: "-webkit-center" }}>
              <h4>Generali</h4>
              <Alert variant={"success"}>
                <div
                  style={{ textAlign: "center", backgroundColor: "#f0f8ff00" }}
                >
                  <img
                    style={{
                      backgroundColor: "#f593b9",
                      borderRadius: "40px",
                    }}
                    src={
                      "http://openweathermap.org/img/wn/" +
                      weather.weather[0].icon +
                      "@2x.png"
                    }
                  />
                </div>

                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  style={{ marginTop: "10px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <strong>Citta:</strong>
                      </td>
                      <td>{weather.name}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Visibilita:</strong>
                      </td>
                      <td>{Math.round(weather.visibility / 1000)} km</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Nazione:</strong>
                      </td>
                      <td>{weather.sys.country}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Vento:</strong>
                      </td>
                      <td>{weather.wind.speed} kph</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Alba:</strong>
                      </td>
                      <td>
                        {new Date(weather.sys.sunrise * 1000).getHours()}:
                        {new Date(
                          weather.sys.sunrise * 1000
                        ).getMinutes()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Tramonto:</strong>
                      </td>
                      <td>
                        {new Date(weather.sys.sunset * 1000).getHours()}:
                        {new Date(weather.sys.sunset * 1000).getMinutes()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Max:</strong>
                      </td>
                      <td>{Math.round(weather.main.temp_max)} °C</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Min:</strong>
                      </td>
                      <td>{Math.round(weather.main.temp_min)} °C</td>
                    </tr>
                  </tbody>
                </Table>
              </Alert>
            </Col>
            <Col style={{ textAlign: "-webkit-center" }}>
              <h4>Ricerca</h4>
              <br />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="inserisci citta"
                    value={citta}
                    onChange={(evt) => setCitta(evt.target.value)}
                  />
                </Form.Group>
              </Form>
              <Button
                variant="primary"
                onClick={() => {
                  fetch(
                    "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" +
                      citta +
                      ",it&units=metric&lang=it&appid=4f188f6387e39a4dbabd5d915e951903"
                  )
                    .then((res) => res.json())
                    .then((res) => setWeather(res));
                }}
              >
                Ricerca
              </Button>
            </Col>
          </Row>
        </Container>
      )}
      <br />
    </div>
  );

  return Weather;
}
