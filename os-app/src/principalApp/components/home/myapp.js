import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DialogR from "./responsiveDialog";
import Calcolatrice from "../calcolatrice/calcolatrice";
import calcolatrice from "../../img/calcolatrice.png";
import timer from "../../img/chronometer.png";
import SystemGrid from "./systemgrid";
import Timer from "../timer/timer";
import GoogleMaps from '../../components/maps/components/googleMap';
import fusiOrari from "../../img//time-zone.png";
import Timezone from "../../mainExternalApp/fusoOrario/principal";
import cinema from "../../img/movie.png";
import MyMovies from "../../mainExternalApp/myMovies/mainMyMovies";
import meteo from "../../img/cloudy.png";
import SystemGridPhone from "../../components/home/systemGridPhone";
import news from "../../img/newspaper.png";
import java from "../../img/java.png";
import Java from "../../components/codewarJava/javaCodeWars";
import python from "../../img/file.png";
import Python from "../../components/codewarPython/pythonCodeWar";
import maps from "../../img/map.png";
import Meteo from "../../components/weather/weatherCom";
import News from "../../components/news/newsSection";
import FulDialog from '../../components/home/fullDialog';
import TimeLinePhone from "../../components/home/timelinePhone"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  if (props.dimesion > 1218) {
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs style={{ paddingTop: "40px" }}>
            {props.timeline}
          </Grid>
          <Grid item xs style={{ paddingTop: "40px" }}>
            <div
              style={{
                textAlign: "center",
                fontFamily: "fantasy",
                color: "#e0e0e0",
              }}
            >
              <h1>IL MIO PASSATEMPO</h1>
            </div>

            <SystemGrid
              dialogUno={
                <DialogR
                  contenuto={<Calcolatrice />}
                  title={"Calcolatrice"}
                  icon={calcolatrice}
                />
              }
              dialogDue={
                <DialogR contenuto={<Timer />} title={"Timer"} icon={timer} />
              }
              dialogTre={
                <DialogR
                  contenuto={<Timezone />}
                  title={"Time zone"}
                  icon={fusiOrari}
                />
              }
            />

            <SystemGrid
              dialogUno={
                <DialogR
                  contenuto={<MyMovies />}
                  title={"Cinema"}
                  icon={cinema}
                />
              }
              dialogDue={
                <DialogR
                  contenuto={<Meteo weather={props.weather} />}
                  title={"Meteo"}
                  icon={meteo}
                />
              }
              dialogTre={
                <DialogR
                  contenuto={<News news={props.news} />}
                  title={"news"}
                  icon={news}
                />
              }
            />

            <SystemGrid
              dialogUno={
                <DialogR
                  contenuto={<Java />}
                  title={"Java"}
                  icon={java}
                  url={"https://www.codewars.com/users/Restorm12/badges/large"}
                  flag={true}
                />
              }
              dialogDue={
                <FulDialog contenuto={<GoogleMaps />} title={"Maps"} icon={maps} />
              }
              dialogTre={
                <DialogR
                  contenuto={<Python />}
                  title={"Time zone"}
                  icon={python}
                  url={"https://www.codewars.com/users/Restorm12/badges/large"}
                  flag={true}
                />
              }
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs>


          </Grid>
          <Grid item xs style={{ textAlign: 'center' }}>
            {props.link}
          </Grid>
          <Grid item xs>
            {props.clock}
          </Grid>
        </Grid>
      </div>
    );
  } else {

    return (
      <div className={classes.root}>
        <h1 style={{
          paddingTop: '22px',
          textAlign: 'center', textAlign: 'center',
          fontFamily: 'fantasy',
          color: 'rgb(224, 224, 224)'
        }}>Percorso</h1>
        <Grid container spacing={2}>
          <Grid item xs style={{ paddingTop: "20px" }}>
            {/*props.timeline*/}
            <TimeLinePhone />
          </Grid>
          <Grid item xs style={{ paddingTop: "40px" }}>

            <h1 style={{
              textAlign: 'center', textAlign: 'center',
              fontFamily: 'fantasy',
              color: 'rgb(224, 224, 224)'
            }}>Il mio passatempo</h1>

            <SystemGridPhone
              dialogUno={
                <DialogR
                  contenuto={<Calcolatrice />}
                  title={"Calcolatrice"}
                  icon={calcolatrice}
                />
              }
              dialogDue={
                <DialogR contenuto={<Timer />} title={"Timer"} icon={timer} />
              }
            />
            <SystemGridPhone
              dialogUno={
                <DialogR
                  contenuto={<MyMovies />}
                  title={"Cinema"}
                  icon={cinema}
                />
              }
              dialogDue={
                <DialogR
                  contenuto={<Meteo weather={props.weather} />}
                  title={"Meteo"}
                  icon={meteo}
                />}
            />
            <SystemGridPhone
              dialogUno={
                <DialogR
                  contenuto={<Java />}
                  title={"Java"}
                  icon={java}
                  url={"https://www.codewars.com/users/Restorm12/badges/large"}
                  flag={true}
                />
              }
              dialogDue={
                <DialogR
                  contenuto={<Python />}
                  title={"Time zone"}
                  icon={python}
                  url={"https://www.codewars.com/users/Restorm12/badges/large"}
                  flag={true}
                />}
            />

            <SystemGridPhone
              dialogUno={
                <DialogR
                  contenuto={<News news={props.news} />}
                  title={"news"}
                  icon={news}
                />
              }
              dialogDue={
                <FulDialog contenuto={<GoogleMaps />} title={"Maps"} icon={maps} />}
            />
          </Grid>
        </Grid>
        <h1 style={{
          textAlign: 'center', textAlign: 'center',
          fontFamily: 'fantasy',
          color: 'rgb(224, 224, 224)',
          paddingTop: "40px"
        }}>Contatti</h1>
        <Grid container spacing={2}>
          <Grid item xs style={{ textAlign: 'center' }}>
            {props.link}
          </Grid>
        </Grid>
      </div>
    )
  }
}
