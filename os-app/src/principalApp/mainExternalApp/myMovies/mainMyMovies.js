import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/mymovies/navbar";
import CardCustom from "../../components/mymovies/card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const APIKEY = "4175977b";
const APIURL = "https://cors-anywhere.herokuapp.com/http://www.omdbapi.com";

class mainMyMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default_title: [
        "titanic",
        "Superman III",
        "Iron Man",
        "Spider-Man",
        "Avengers",
        "The hunt",
        "Batman Begins",
        "Pulp Fiction",
        "Inception",
      ],
      movies: [],
      totalCount: 0,
      flag: 0,
      searchFilm: "",
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies(search, number) {
    console.log("test -----> " + search + " entro");
    this.setState({
      flag: number,
      searchFilm: search,
    });
    if (this.state.flag === 0) {
      return fetch(APIURL + "?apikey=" + APIKEY + "&t=" + search).then((res) =>
        res.json()
      );
    } else {
      return fetch(APIURL + "?apikey=" + APIKEY + "&s=" + search).then((res) =>
        res.json()
      );
    }
  }

  componentDidMount() {
    this.getFilm();
  }

  componentDidUpdate() {
    if (this.state.flag === 1) {
      this.getFilm();
    }
  }

  getFilm() {
    this.movie = [];
    if (this.state.flag === 0) {
      for (let i = 0; i < this.state.default_title.length; i++) {
        this.fetchMovies(this.state.default_title[i]).then((res) => {
          this.movie.push(res);
          this.setState({
            movies: this.movie,
          });
        });
      }
    } else {
      this.fetchMovies(this.state.searchFilm).then((res) => {
        this.setState({
          movies: res.Search,
        });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar cercaFilm={this.fetchMovies}></NavBar>
        <header className="App-header">
          <br></br>
          <Container>
            <Row>
              {this.state.movies.map((movie) => (
                <Col key={movie.Title}>
                  <CardCustom img={movie.Poster} title={movie.Title} />
                  <br></br>
                </Col>
              ))}
            </Row>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default mainMyMovies;
