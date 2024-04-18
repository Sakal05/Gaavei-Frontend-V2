"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useEffect, useState } from "react";
import MusicCover from "../../../components/Edition/MusicCover";
import { EDITIONDUMMY } from "@/DummyData/EditionData";
import RewardCard from "@/components/Edition/RewardCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RevenueSlider from "@/components/Edition/RevenueSlider";
import MusicPlayerSlider from "@/components/MusicPlayer";
import Checkout from "@/components/PopUpModal/Checkout";
import { useRouter } from "next/router";

type EditionParam = {
  id: string;
};

interface Props {
  params: EditionParam;
}
const Edition: React.FC<Props> = ({ params }) => {
  if (!params || typeof params.id !== "string") {
    return <div>Error: Invalid parameters</div>;
  }

  console.log(params.id);
  const id = params.id;
  const DUMMYDATA = EDITIONDUMMY[parseInt(id)];
  // Check if data exists
  if (isNaN(parseInt(id))) {
    console.log("here");
    return (
      <Box
        sx={{
          width: "100%",
          margin: "auto", // Adjusted to center the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "65px",
        }}
      >
        <Typography variant="h4" fontWeight="medium" sx={{ pt: "15px" }}>
          Data not found
        </Typography>
      </Box>
    );
  }

  if (!DUMMYDATA) {
    return (
      <Box
        sx={{
          width: "100%",
          margin: "auto", // Adjusted to center the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "65px",
        }}
      >
        <Typography variant="h4" fontWeight="medium" sx={{ pt: "15px" }}>
          Data not found
        </Typography>
      </Box>
    );
  }
  const DUMMYDETAIL = DUMMYDATA.details;
  const [expanded, setExpanded] = useState<string | false>(false);
  const [musicPlay, setMusicPlay] = useState(false);
  const [isCheckOut, setCheckOut] = useState(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
      <MusicCover
        image={DUMMYDATA.image}
        type={DUMMYDATA.type}
        title={DUMMYDATA.title}
        author={DUMMYDATA.author}
        setMusicPlay={setMusicPlay}
        musicPlayed={musicPlay}
      />
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
              borderColor: "primary.main",
              color: "primary.dark",
              borderRadius: 3,
              // paddingX: '20px',
              width: "30%",
            }}
            onClick={() => setCheckOut(!isCheckOut)}
          >
            <Typography variant="button" sx={{ p: 0, color: "primary.main" }}>
              BUY NOW
            </Typography>
          </Button>
        </Box>
        <Divider sx={{ my: "30px" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              fontWeight={{
                xs: "bold",
                sm: "bold",
                md: "bold",
                lg: "bold",
              }}
              fontSize={{
                xs: "h4",
                sm: "h4",
                md: "h2",
                lg: "h2",
              }}
              color="primary.main"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Description
            </Typography>
            <Typography
              fontWeight={{
                xs: "light",
                sm: "light",
                md: "light",
                lg: "light",
              }}
              fontSize={{
                xs: "h5",
                sm: "h5",
                md: "h4",
                lg: "h4",
              }}
            >
              {DUMMYDATA.description}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              fontWeight={{
                xs: "bold",
                sm: "bold",
                md: "bold",
                lg: "bold",
              }}
              fontSize={{
                xs: "h4",
                sm: "h4",
                md: "h3",
                lg: "h3",
              }}
              color="primary.main"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Reward
            </Typography>
            <Typography variant="h5" fontWeight="light">
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              fontWeight={{
                xs: "bold",
                sm: "bold",
                md: "bold",
                lg: "bold",
              }}
              fontSize={{
                xs: "h4",
                sm: "h4",
                md: "h3",
                lg: "h3",
              }}
              color="primary.main"
              sx={{ whiteSpace: "nowrap" }}
            >
              Incentive Forecast
            </Typography>
            <Typography variant="h5" fontWeight="light">
              Calculate your incentive
            </Typography>
            <Box
              sx={{
                width: "100%",
                margin: "auto",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RevenueSlider />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              fontWeight={{
                xs: "bold",
                sm: "bold",
                md: "bold",
                lg: "bold",
              }}
              fontSize={{
                xs: "h4",
                sm: "h4",
                md: "h3",
                lg: "h3",
              }}
              color="primary.main"
              sx={{ whiteSpace: "nowrap" }}
            >
              Contract Details
            </Typography>
            <Typography variant="h5" fontWeight="light">
              View details of the contracts for this release.{" "}
            </Typography>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ mb: "0px", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  m: 0,
                }}
              >
                <Typography variant="h4">Release Date</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h4" sx={{ opacity: 0.8 }}>
                  {DUMMYDETAIL.releaseDate}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ mb: "0px", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                  m: 0,
                }}
              >
                <Typography variant="h4">Contract Address</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: "0px 16px" }}>
                <Typography variant="h4" sx={{ opacity: 0.8 }}>
                  {DUMMYDETAIL.contractAddress}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ mb: "0px", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                sx={{
                  m: 0,
                }}
              >
                <Typography variant="subtitle1">Blockchain</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: "0px 16px" }}>
                <Typography variant="h4" sx={{ opacity: 0.8 }}>
                  {DUMMYDETAIL.blockchain}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ mb: "0px", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
                sx={{
                  m: 0,
                }}
              >
                <Typography variant="subtitle1">Token Standard</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: "0px 16px" }}>
                <Typography variant="h4" sx={{ opacity: 0.8 }}>
                  {DUMMYDETAIL.tokenStandard}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              sx={{ mb: "0px", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
                sx={{
                  m: 0,
                }}
              >
                <Typography variant="subtitle1">Resale Royalty</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: "0px 16px" }}>
                <Typography variant="h4" sx={{ opacity: 0.8 }}>
                  {DUMMYDETAIL.resaleRoyalty}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
      <Box
        display={musicPlay ? "block" : "none"}
        sx={{
          position: "fixed",
          bottom: { xs: "260px", sm: "20px", md: "20px", lg: "20px" },
          right: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
          zIndex: 1000, // Adjust as needed
        }}
      >
        <MusicPlayerSlider
          image={DUMMYDATA.image}
          type={DUMMYDATA.type}
          title={DUMMYDATA.title}
          author={DUMMYDATA.author}
          setMusicPlay={setMusicPlay}
          musicPlayed={musicPlay}
        />
      </Box>
      <Checkout
        image={DUMMYDATA.image}
        title={DUMMYDATA.title}
        author={DUMMYDATA.author}
        price={DUMMYDATA.price}
        setCheckOut={setCheckOut}
        isCheckOut={isCheckOut}
      />
    </Box>
  );
};

export default Edition;
