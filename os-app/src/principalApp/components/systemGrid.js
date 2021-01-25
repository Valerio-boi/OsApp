import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DialogR from './responsiveDialog'
import Calcolatrice from '../calcolatrice/components/calcolatrice'
import calcolatrice from '../img/calcolatrice.png'



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
                <Grid item xs style={{paddingTop: '40px'}}>
                    {props.timeline}
                </Grid>
                <Grid item xs style={{paddingTop: '40px'}}>

                    <div style={{textAlign: 'center', fontFamily: 'fantasy', color: '#e0e0e0'}}>
                        <h1>IL MIO PASSATEMPO</h1>
                    </div>
                    <DialogR contenuto={<Calcolatrice />} title={'Calcolatrice'} icon={calcolatrice} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs >
                    <div style={{bottom: '-50px',
                    position: 'relative',
                    textAlign: 'center'}}>
                    {props.link}
                    </div>
                    <div style={{ textAlign: "right", color: '#e0e0e0', fontFamily: 'fantasy', bottom: '-50px', position: 'relative'}}>
                        {props.clock}
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}