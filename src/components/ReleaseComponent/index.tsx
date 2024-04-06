// "use client";

// import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReleaseCard from "./ReleaseCard";
import { Typography } from "@mui/material";
import { IReleaseCard } from "./ReleaseCard";

interface IRelease {
  releaseTitle: string;
  content: IReleaseCard[];
}

export default function NewRelease({ releaseTitle, content }: IRelease) {

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        {releaseTitle}
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}
        // justifyContent="center" // Aligns items horizontally to the center
        // alignItems="flex-start" // Aligns items vertically to the center
        sx={{
          width: "100%",
        }}
      >
        {content.map((info, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            key={index}
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <ReleaseCard
              image={info.image}
              title={info.title}
              description={info.description}
              tier={info.tier}
              author={info.author}
              tokenId={info.tokenId}
              available={info.available}
              price={info.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
