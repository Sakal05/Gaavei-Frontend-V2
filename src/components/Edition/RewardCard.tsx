import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { useState } from "react";

interface IRewardCard {
  rewardIcon: React.ElementType<any>;
  rewardTitle: string;
  rewardDescription: string;
}

export default function RewardCard({
  rewardIcon: RewardIcon,
  rewardTitle,
  rewardDescription,
}: IRewardCard) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Align content vertically in center
        border: "1px solid rgba(0, 0, 0, 0.1)", // Add border
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow
        padding: "20px", // Add padding
      }}
    >
      <RewardIcon
        color="inherit"
        sx={{
          color: "primary.main",
          fontSize: "3rem",
        }}
      />
      <Typography
        variant="h4"
        color="primary.main"
        fontWeight={"bold"}
        sx={{ pt: "5px" }}
      >
        {rewardTitle}
      </Typography>
      {rewardDescription.length > 150 ? (
        <Box sx={{ width: "100%", alignItems: "flex-start" }}>
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
            sx={{ pt: "5px", pl: "6px" }}
          >
            {expanded
              ? rewardDescription
              : rewardDescription.slice(0, 150) +
                (rewardDescription.length > 150 && !expanded ? "..." : "")}
          </Typography>
          {!expanded && (
            <Button
              variant="text"
              sx={{ fontWeight: "bold", fontSize: "h6" }}
              color="primary"
              onClick={() => setExpanded(true)}
            >
              See more
            </Button>
          )}
          {expanded && (
            <Button
              variant="text"
              sx={{ fontWeight: "bold", fontSize: "h6" }}
              color="primary"
              onClick={() => setExpanded(false)}
            >
              See less
            </Button>
          )}
        </Box>
      ) : (
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
          sx={{ pt: "5px" }}
        >
          {rewardDescription}
        </Typography>
      )}
    </Box>
  );
}
