import React from "react";
import Grid from "@material-ui/core/Grid";

export default function GridComponent(props) {
  return (
    <Grid container spacing={3} style={{ padding: "30px" }}>
      <Grid item xs>
        {props.dialogUno}
      </Grid>

      <Grid item xs>
        {props.dialogDue}
      </Grid>

      <Grid item xs>
        {props.dialogTre}
      </Grid>
    </Grid>
  );
}
