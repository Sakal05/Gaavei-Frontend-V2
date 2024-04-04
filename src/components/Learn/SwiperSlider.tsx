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
      slidesPerView={3}
      initialSlide={1}
      spaceBetween={0}
      centeredSlides={true}
      grid={{ fill: "column" }}
      loop
      autoplay={{
        delay: 2000,
      }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {contents.map((content, index) => {
        // console.log(index);
        return (
          index !== 1 && (
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
          )
        );
      })}
    </Swiper>
  );
}
