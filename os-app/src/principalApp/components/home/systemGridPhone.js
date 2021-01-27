import React from "react";
import Grid from "@material-ui/core/Grid";

export default function GridComponent(props) {
  return (
    <Grid container spacing={3} style={{ padding: "20px", textAlign: 'center'}}>
      <Grid item xs={6} >
        {props.dialogUno}
      </Grid>

      <Grid item xs={6} >
        {props.dialogDue}
      </Grid>
    </Grid>
  );
}
