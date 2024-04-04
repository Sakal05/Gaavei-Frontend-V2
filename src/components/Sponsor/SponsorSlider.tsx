"use client";

import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import {
  Autoplay,
  Navigation,
  Grid as SliderGrid,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
import HeaderCard from "./Card";
import { ISponsorCard } from "./Card";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const SponsorCard = ({ contents }: { contents: ISponsorCard[] }) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <Box
      sx={{
        width: "100%",
        height: "230px",
        margin: "0",
      }}
    >
      <Swiper
        navigation
        enabled
        mousewheel={{ forceToAxis: true }}
        pagination={{ type: "fraction" }}
        modules={[Autoplay, Navigation, Scrollbar, SliderGrid, Mousewheel]}
        scrollbar={{
          draggable: true,
        }}
        init={false}
        // onSwiper={(swiper) => console.log(swiper)}
        className="w-full rounded-lg relative"
        slidesPerView={1}
        initialSlide={1}
        spaceBetween={0}
        centeredSlides={true}
        grid={{ fill: "column" }}
        loop
        autoplay={{
          delay: 5000,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {contents.map((content, index) => {
          return (
            <SwiperSlide key={index}>
              <HeaderCard
                title={content.title}
                image={content.image}
                author={content.author}
                available={content.available}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SponsorCard;
