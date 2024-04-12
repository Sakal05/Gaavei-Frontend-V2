'use client';

import * as React from "react";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

export default function RevenueSlider() {
  const [value, setValue] = React.useState<number>(250);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  const PrettoSlider = styled(Slider)({
    color: "primary.main",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&::before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#2F2F85",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&::before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  return (
    <Box
      sx={{
        width: "60%",
        mt: "20px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PrettoSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-label="pretto slider"
        defaultValue={250}
        shiftStep={30}
        step={5}
        marks
        min={0}
        max={500}
      />
      <Box
        sx={{
          backgroundColor: "#E7F8FF",
          width: "100%",
          borderRadius: "12px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          p: "30px",
        }}
      >
        <Typography variant="h3" color="primary.main">
          Est. Revenue
        </Typography>
        <Typography variant="h3" color="primary.main" sx={{ mt: "10px" }}>
          {value*0.002} APY
        </Typography>
      </Box>
    </Box>
  );
}
