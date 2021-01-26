import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const APIKEY = "4175977b";
const APIURL = "http://www.omdbapi.com";

const Dialog = (props) => {
  const [show, setShow] = useState(false);
  const [informazioni, setInformazioni] = useState({
    anno: "",
    attori: "",
    awards: "",
    genere: "",
    trama: "",
  });

  const searchByTitle = (title) => {
    fetch(APIURL + "?apikey=" + APIKEY + "&t=" + title)
      .then((res) => res.json())
      .then((res) => {
          
        var newInformazioni = {
          anno: res.Year,
          attori: res.Actors,
          awards: res.Awards,
          genere: res.Genre,
          trama: res.Plot,
        };
        setInformazioni(newInformazioni);
        setShow(true);
      });
  };

  return (
    <>
      <br />

      <Button variant="primary" onClick={() => searchByTitle(props.titolo)}>
        Informazioni
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Titolo: {props.titolo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <h2>Anno:</h2> {informazioni.anno}
            <h2>Attori:</h2> {informazioni.attori}
            <h2>Awards:</h2> {informazioni.awards}
            <h2>Genere: </h2>
            {informazioni.genere}
            <h2>Trama: </h2> {informazioni.trama}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dialog;
