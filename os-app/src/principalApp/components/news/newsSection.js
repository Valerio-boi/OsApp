import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NewsSection(props) {
  return (
    <div>
      <h1>News</h1>
      {props.news.map((news, index) => {
        return (
          <ListGroup>
            <ListGroup.Item key={news.url}>
              <strong>{news.title}</strong>
              <p>{news.description}</p>
              <Row>
                <Col>
                  <a href={news.url} target="_blank">
                    leggi ancora...
                  </a>
                </Col>
                <Col>
                  <strong style={{ float: "right" }}>
                    Autore:{" "}
                    {news.source.name != null &&
                    news.source.name != "" &&
                    news.source.name.length < 20
                      ? news.source.name
                      : "Non specificato"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
}
