"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Link from "next/link";
import Graph from "./Graph";

interface IPortfolio {
  balance: string;
  growthRate: string;
  data: { earning: number; month: string }[];
}

export default function Header({ balance, growthRate, data }: IPortfolio) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ marginBottom: "5px", color: "primary.main" }}
        >
          PORTFOLIO ANALYSIS
        </Typography>
        <Typography
          variant="h4"
          fontWeight="regular"
          sx={{
            marginBottom: "20px",
            opacity: "0.6",
          }}
        >
          Last 30 days
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            paddingRight="10px"
            color="green"
          >
            +${balance}
          </Typography>
          <Box sx={{ display: "flex", opacity: 0.6 }}>
            <TrendingUpIcon
              fontSize="medium"
              fontWeight="bold"
              sx={{ opacity: "1", color: "green" }}
              color="inherit"
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ opacity: "1" }}
              color="green"
              paddingLeft="10px"
            >
              {growthRate}%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Graph data={data} />
      </Box>
    </Box>
  );
}
