"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import MusicCover from "../../components/Edition/MusicCover";
import { EDITIONDUMMY } from "@/DummyData/EditionData";
import { useState } from "react";
import RewardCard from "@/components/Edition/RewardCard";

export default function Edition() {
  const DUMMYDATA = EDITIONDUMMY[1];
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto", // Adjusted to center the content
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Box height={"20%"}> */}
      <MusicCover
        image={DUMMYDATA.image}
        type={DUMMYDATA.type}
        title={DUMMYDATA.title}
        author={DUMMYDATA.author}
      />
      {/* </Box> */}
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "20px",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "auto",
            justifyContent: "center",
            pt: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: "auto",
            }}
          >
            <Typography variant="h4" fontWeight="regular" sx={{ pb: "5px" }}>
              Price
            </Typography>
            <Typography variant="h3">{DUMMYDATA.price} BNB</Typography>
          </Box>
          <Button
            sx={{
              border: "0.6px solid",
              borderColor: "primary.dark",
              color: "primary.dark",
              borderRadius: 3,
              // paddingX: '20px',
              width: "20%",
            }}
          >
            <Typography variant="button" sx={{ p: 0 }}>
              BUY NOW
            </Typography>
          </Button>
        </Box>
        <Divider sx={{ my: "30px" }} />
        <Box>
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ whiteSpace: "nowrap" }}
          >
            Description
          </Typography>
          <Typography variant="body1">{DUMMYDATA.description}</Typography>
        </Box>
        <Box sx={{ pt: "30px" }}>
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ whiteSpace: "nowrap" }}
          >
            Reward
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.6,
            }}
          >
            View all rewards and perks for collecting this release.{" "}
          </Typography>
          <Grid
            container
            direction="row"
            sx={{ pt: "15px", justifyContent: "flex-start" }}
            rowSpacing={{ xs: 2, sm: 2, md: 4, lg: 4 }}
            columnSpacing={{ xs: 2, sm: 2, md: 4, lg: 4 }}
          >
            {DUMMYDATA.rewards.map((reward, index) => (
              <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <RewardCard
                  rewardIcon={reward.rewardIcon}
                  rewardDescription={reward.rewardDescription}
                  rewardTitle={reward.rewardTitle}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ pt: "30px" }}>
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ whiteSpace: "nowrap" }}
          >
            Contract Details
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.6,
            }}
          >
            View details of the contracts for this release.{" "}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
