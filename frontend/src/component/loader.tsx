import { Grid } from "@mui/material";
import { FallingLines, InfinitySpin } from "react-loader-spinner";

export const UILoader = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid item>
        <InfinitySpin
          color="#4fa94d"
          // height="250"
          width="300"
          // visible={true}
          // ariaLabel="falling-lines-loading"
        />
      </Grid>
    </Grid>
  );
};
