"use client";

import { Box, Grid, Typography } from "@mui/material";
import { IArticle } from "./Article";
import Article from "./Article";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

export default function SwiperSlider({ contents }: { contents: IArticle[] }) {
  const swiperRef = useRef<SwiperType>();
  return (
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
        return (
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
        );
      })}
    </Box>
  );
}
