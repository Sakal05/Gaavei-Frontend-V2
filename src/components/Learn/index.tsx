// "use client";

import { Suspense } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { IArticle } from "./Article";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import SwiperSlider from "./SwiperSlider";
import Chip from "@mui/material/Chip";



function Learn({ contents }: { contents: IArticle[] }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto", // Enable horizontal scrolling
        // padding: "20px 0", // Add padding for better appearance
        position: "relative", // Set position relative for absolute positioning of buttons
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
        Learn
      </Typography>
      <Chip
        sx={{
          bgcolor: "primary.dark",
          color: "primary.light",
          padding: "5px",
          marginLeft: "10px",
        }}
        label="Trending News"
      />
      <Suspense fallback={<CircularProgress />}>
        <SwiperSlider contents={contents}/>
      </Suspense>
    </Box>
  );
}

export default Learn;
