"use client";

import { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { IArticle } from "./Article";
import Article from "./Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";

import "swiper/css";
import "swiper/css/autoplay";

function Learn({ contents }: { contents: IArticle[] }) {
  const chunkSize = 3; // Number of articles to display in each slide
  const swiperRef = useRef<SwiperType>();

  // Split the contents array into chunks of size 'chunkSize'
  const chunks = contents.reduce<IArticle[][]>(
    (acc, _, i) =>
      i % chunkSize ? acc : [...acc, contents.slice(i, i + chunkSize)],
    []
  );
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto", // Enable horizontal scrolling
        padding: "20px 0", // Add padding for better appearance
        position: "relative", // Set position relative for absolute positioning of buttons
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Learn
      </Typography>
      <Chip sx={{ bgcolor: "primary.dark", color: "primary.light", padding: "5px" }} label="Trending New" />
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Autoplay, Navigation]}
        // onSwiper={(swiper) => console.log(swiper)}
        className="w-full rounded-lg relative"
        slidesPerView={3}
        loop
        autoplay={{
          delay: 2000,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "-10px", // Adjust as needed
            transform: "translateY(-50%)",
            zIndex: 1, // Ensure buttons are above slider
          }}
        >
          <IconButton onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px", // Adjust as needed
            transform: "translateY(-50%)",
            zIndex: 1, // Ensure buttons are above slider
          }}
        >
          <IconButton onClick={() => swiperRef.current?.slideNext()}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        {contents.map((content, index) => (
          <SwiperSlide key={index}>
            <Article
              key={index}
              title={content.title}
              readTime={content.readTime}
              image={content.image}
              link={content.link}
              description={content.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Learn;
