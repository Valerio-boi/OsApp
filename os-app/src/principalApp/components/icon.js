import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import logo from './img/logo.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={logo} className={classes.large}/>
    </div>
  );
}