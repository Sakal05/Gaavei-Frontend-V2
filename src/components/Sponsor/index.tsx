import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Suspense } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import SponsorCard from "./SponsorSlider";
import { NEWRELEASEDATA } from "@/DummyData/NewReleaseData";


import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Sponsor = () => {
  
  return (
    <Suspense fallback={<CircularProgress />}>
      <SponsorCard contents={NEWRELEASEDATA}/>
    </Suspense>
  );
};

export default Sponsor;
