import { Grid, Typography } from "@mui/material";
import { isError } from "lodash";

export function Message(props: { message: string; isError: Boolean }) {
  const color = props.isError ? "#F44336" : "#4BB543";
  return (
    <Grid item sx={{ border: `1px solid ${color}`, padding: 1.5 }}>
      <Typography variant="body1" sx={{ color }}>
        {props.message}
      </Typography>
    </Grid>
  );
}
