"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Link from "next/link";
import Chart from "./Chart";

interface IPortfolio {
  balance: string;
  growthRate: string;
  data: number[];
}

export default function Portfolio({ balance, growthRate, data }: IPortfolio) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="primary.main"
          sx={{ marginBottom: "5px" }}
        >
          My Earning
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            opacity: "0.6",
          }}
        >
          Last 30 days
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", margin: "auto" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="green"
            paddingRight="10px"
          >
            + ${balance}
          </Typography>
          <TrendingUpIcon fontSize="large" sx={{ opacity: "0.6" }} />
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ opacity: "0.6" }}
            paddingLeft="10px"
          >
            {growthRate}%
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Link href="/portfolio">
          <Typography variant="button" fontWeight="medium" color="blue">
            View Portfolio
          </Typography>
        </Link>
        <Chart data={data} />
      </Box>
    </Box>
  );
}
