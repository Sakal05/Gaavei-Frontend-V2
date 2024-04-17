// "use client";

// import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TrendingCard from "./TrendingCard";
import { Typography } from "@mui/material";
import { ICard } from "@/components/interface/ICard";
import { NoSsr } from "@mui/base/NoSsr";
import Loading from "../Loading";

export default function Trending({ contents }: { contents: ICard[] }) {
  return (
    <Box
      sx={{
        // flexGrow: 1,
        width: "100%",
        margin: "auto",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Typography variant="h3" fontWeight='bold' color="primary.main" sx={{ marginBottom: "20px" }}>
        Trending
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 4, lg: 4 }}
        columnSpacing={{ xs: 2, sm: 2, md: 4, lg: 6 }}
        // justifyContent="center" // Aligns items horizontally to the center
        // alignItems="flex-start" // Aligns items vertically to the center
        sx={{
          margin: "auto",
          width: "100%",
        }}
      >
        {contents.map((info, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center", // Centers items horizontally
              alignItems: "center", // Centers items vertically
              width: "100%",
            }}
          >
            <TrendingCard
              image={info.image}
              title={info.title}
              type={info.type}
              author={info.author}
              description={info.description}
              tokenId={info.tokenId}
              available={info.available}
              price={info.price}
              tier={info.tier}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    // )
  );
}
