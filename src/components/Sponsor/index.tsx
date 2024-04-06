import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SponsorCard from "./SponsorSlider";
import { NEWRELEASEDATA } from "@/DummyData/NewReleaseData";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Sponsor = () => {
  return <SponsorCard contents={NEWRELEASEDATA} />;
};

export default Sponsor;
