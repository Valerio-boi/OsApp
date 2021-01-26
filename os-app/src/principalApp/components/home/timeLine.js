import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Settembre 2020/Presente
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Dipendente a tempo pieno.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            gen 2020 – set 2020 · 9 mesi
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BugReportRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Stage junior Java Developer
            </Typography>
            <Typography>
              BDurante lo stage ho avuto modo di approfondire gli argomenti
              trattati al corso, e avere la possibilità di lavorare nei vari
              progetti aziendali, assumendo confidenza con JSF, Oracle, Mybatis,
              PrimeFaces, RestFul, Servizi soap, git, Java ee, Json, Xml.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            ott 2019 – gen 2020 · 4 mesi
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <CodeRoundedIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Corso formativo
            </Typography>
            <Typography>
              Concluso percorso di formazione in ambiente java, della durata di
              tre mesi (Ottobre 2019-Gennaio 2020) presso la societa Exolab
              S.R.L, successivamente nel mese di gennaio 2020 ho iniziato lo
              stage presso tale societa'. Il corso mi ha permesso di acquisire
              competenze in: Java fondamenti, OOP, SQL, JDBC, HTML/CSS,
              JavaScript/Jquery, Servlet/JSP, JPA, Hibernate, Spring, RESTful.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            sett 2014 – giu 2019 · 5 anni
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolRoundedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Scuola superiore Giovanni Paolo II
            </Typography>
            <Typography>
              Diploma di scuola secondaria superiore, Informatica.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
