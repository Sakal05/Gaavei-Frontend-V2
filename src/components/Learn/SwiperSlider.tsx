"use client";

import { Box, Grid, Typography } from "@mui/material";
import { IArticle } from "./Article";
import Article from "./Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import {
  Autoplay,
  Navigation,
  Grid as SliderGrid,
  Scrollbar,
  Lazy,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

export default function SwiperSlider({ contents }: { contents: IArticle[] }) {
  const swiperRef = useRef<SwiperType>();
  console.log("n time");
  return (
    // <Swiper
    //   navigation
    //   enabled
    //   mousewheel={{ forceToAxis: true }}
    //   pagination={{ type: "fraction" }}
    //   modules={[Autoplay, Navigation, Scrollbar, SliderGrid, Mousewheel]}
    //   scrollbar={{
    //     draggable: true,
    //   }}
    //   init={false}
    //   // onSwiper={(swiper) => console.log(swiper)}
    //   className="w-full rounded-lg"
    //   slidesPerView={3}
    //   initialSlide={1}
    //   spaceBetween={0}
    //   centeredSlides={true}
    //   grid={{ fill: "column" }}
    //   loop
    //   autoplay={{
    //     delay: 2000,
    //   }}
    //   onBeforeInit={(swiper) => {
    //     swiperRef.current = swiper;
    //   }}
    // >
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        overflowX: "auto", // Enable horizontal scrolling
        display: "flex",
        flexDirection: "row",
        flexShrink: 0,
        alignItems: "flex-start", // Align items to the top
      }}
    >
      {contents.map((content, index) => {
        // console.log(index);
        return (
          // <SwiperSlide key={index}>
          <Article
            key={index}
            title={content.title}
            readTime={content.readTime}
            image={content.image}
            link={content.link}
            description={content.description}
            style={{
              width: "calc(100vw - 20px)", // Set the width based on the viewport width minus padding/margin
              maxWidth: "500px", // Optionally set a maximum width to prevent the article from becoming too wide
            }}
          />
          // </SwiperSlide>
        );
      })}
    </Box>
    // </Swiper>
  );
}
