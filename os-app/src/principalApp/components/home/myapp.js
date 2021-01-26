import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DialogR from "./responsiveDialog";
import Calcolatrice from "../calcolatrice/calcolatrice";
import calcolatrice from "../../img/calcolatrice.png";
import timer from "../../img/chronometer.png";
import SystemGrid from "./systemgrid";
import Timer from "../timer/timer";
import fusiOrari from "../../img//time-zone.png";
import Timezone from "../../mainExternalApp/fusoOrario/principal";
import cinema from "../../img/movie.png";
import MyMovies from "../../mainExternalApp/myMovies/mainMyMovies";
import meteo from "../../img/cloudy.png";
import news from "../../img/newspaper.png";
import java from "../../img/java.png";
import Java from "../../components/codewarJava/javaCodeWars";
import python from "../../img/file.png";
import cmd from "../../img/command-line.png";
import Meteo from "../../components/weather/weatherCom";
import News from "../../components/news/newsSection";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
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
              <DialogR contenuto={<Timer />} title={"Timer"} icon={cmd} />
            }
            dialogTre={
              <DialogR
                contenuto={<Timezone />}
                title={"Time zone"}
                icon={python}
              />
            }
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs>
          <div
            style={{
              bottom: "-50px",
              position: "relative",
              textAlign: "center",
            }}
          >
            {props.link}
          </div>
          <div
            style={{
              textAlign: "right",
              color: "#e0e0e0",
              fontFamily: "fantasy",
              bottom: "-50px",
              position: "relative",
            }}
          >
            {props.clock}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
