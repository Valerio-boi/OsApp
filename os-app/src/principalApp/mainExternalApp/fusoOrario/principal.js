import Clock from "../../components/fusoOrario/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import PersonalCard from "../../components/fusoOrario/Card";
import colosseo from "../../img/fusoOrarioImg/colosseo.jpeg";
import london from "../../img/fusoOrarioImg/London.jpg";
import bucharest from "../../img/fusoOrarioImg/Bucharest.jpg";
import moscow from "../../img/fusoOrarioImg/Moscow.jpg";
import dubai from "../../img/fusoOrarioImg/Dubai.jpg";
import male from "../../img/fusoOrarioImg/Male.jpg";

export default function TimeZone() {
  const timeItaly = <Clock timeZone="0" />;
  const timeLondon = <Clock timeZone="-1" />;
  const timeBucharest = <Clock timeZone="1" />;
  const timeMoscow = <Clock timeZone="2" />;
  const timeDubai = <Clock timeZone="3" />;
  const timeMale = <Clock timeZone="4" />;

  const titleAllert = ["primary"].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      <h1 style={{ textAlign: "center" }}>Fusi orari internazionali</h1>
    </Alert>
  ));

  return (
    <>
      <div>
        {titleAllert}
        <hr></hr>

        <Container>
          <Row>
            <Col>
              <PersonalCard
                titolo="LONDON"
                testo={timeLondon}
                national={london}
              />
            </Col>

            <Col>
              <div className="d-flex justify-content-center">
                <PersonalCard
                  titolo="ROME"
                  testo={timeItaly}
                  national={colosseo}
                />
              </div>
            </Col>

            <Col>
              <div className="d-flex justify-content-end">
                <PersonalCard
                  titolo="BUCHAREST"
                  testo={timeBucharest}
                  national={bucharest}
                />
              </div>
            </Col>
          </Row>

          <br></br>

          <hr
            style={{
              borderColor: "cadetblue",
            }}
          />

          <br></br>

          <Row>
            <Col>
              <PersonalCard
                titolo="MOSCOW"
                testo={timeMoscow}
                national={moscow}
              />
            </Col>

            <Col>
              <div className="d-flex justify-content-center">
                <PersonalCard
                  titolo="DUBAI"
                  testo={timeDubai}
                  national={dubai}
                />
              </div>
            </Col>

            <Col>
              <div className="d-flex justify-content-end">
                <PersonalCard titolo="MALE" testo={timeMale} national={male} />
              </div>
            </Col>
          </Row>

          <hr
            style={{
              borderColor: "cadetblue",
            }}
          />
        </Container>
      </div>
    </>
  );
}
