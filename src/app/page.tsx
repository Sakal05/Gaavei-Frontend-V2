import Image from "next/image";
import Sponsor from "@/components/Sponsor";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "@/components/NavBar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Sponsor />
        <Grid
          container
          rowSpacing={3}
          // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            width: "80%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} lg={12}>
            <Trending/>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            kdmv1
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            kdmv2
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            kdmv3
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
