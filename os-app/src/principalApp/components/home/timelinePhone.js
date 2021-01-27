import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";




const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
export default function TimeLinePhone() {
  const classes = useStyles();
  return (

    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" color="textSecondary">
              <strong> Dipendente a tempo pieno.</strong>
              <br/>
              Exolab S.R.L
              <ul>
                <li>sviluppo software Java.</li>
                <li>Ambienti di sviluppo: Eclipse, Visual Studio code.</li>
                <li> Framework: JSF.</li>
                <li>WEB: bootstrap, JQuery, Css, React.</li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BugReportRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" color="textSecondary">
              <strong> Stage junior Java Dev.</strong>
              <br/>
              Durante lo stage ho avuto modo di approfondire gli argomenti
              trattati al corso, e avere la possibilità di lavorare nei vari
              progetti aziendali, assumendo confidenza con JSF, Oracle, Mybatis,
              PrimeFaces, RestFul, Servizi soap, git, Java ee, Json, Xml.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <CodeRoundedIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" color="textSecondary">
              <strong> Corso formativo Exolab.</strong>
              <br/>
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
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolRoundedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" color="textSecondary">
              <strong>Scuola superiore Giovanni Paolo II.</strong>
              <br/>
              Diploma di scuola secondaria superiore, Informatica.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}