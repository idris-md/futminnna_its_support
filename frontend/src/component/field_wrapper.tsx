import { Grid, Typography } from "@mui/material";

export const FieldsWrapper = ({ label, children }:{ label?:string, children:React.ReactNode }) => {
  const rowStyles = {
    marginBottom: 1,
    // justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <Grid item direction="row" spacing={1} container sx={rowStyles}>
     
      <Grid item sx={{ width: "120px" }}>
        <Typography variant="body1" color="initial">
          {label}
        </Typography>
      </Grid>
      <Grid container xs item direction="row" spacing={1}>
        {children}
      </Grid>

    </Grid>
  );
};
