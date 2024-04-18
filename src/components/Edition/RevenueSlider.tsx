"use client";

import * as React from "react";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";
import { Divider } from "@mui/material";

interface AirbnbThumbProps {
  children?: React.ReactNode;
}

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
    backgroundColor: "transparent",
  },
  //   lineHeight: 1.2,
  //   fontSize: 12,
  //   background: "unset",
  //   padding: 10,
  //   width: 32,
  //   height: 32,
  //   borderRadius: "50% 50% 50% 0",
  //   // backgroundColor: "#2F2F85",
  //   transformOrigin: "bottom left",
  //   transform: "translate(50%, -100%) rotate(-90deg) scale(0)",
  //   "&::before": { display: "none" },
  //   "&.MuiSlider-valueLabelOpen": {
  //     transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
  //   },
  //   "& > *": {
  //     transform: "rotate(45deg)",
  //   },
  // },
});

function AirbnbThumbComponent(props: AirbnbThumbProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

export default function RevenueSlider() {
  const [value, setValue] = React.useState<number>(5);
  const [rate, setRate] = React.useState<number>(value * 0.8);

  const handleChange = (event: Event, newValue: number | number[]) => {
    // console.log("slider event: ", event);
    // console.log("New value: ", newValue);
    if (typeof newValue === "number") {
      setValue(newValue);
      setRate(calculateValue(newValue, 0.8));
    }
  };

  // const handleCommit = (
  //   event: React.SyntheticEvent | Event,
  //   newValue: number | number[]
  // ) => {
  //   if (typeof newValue === "number") {
  //     setValue(newValue);
  //     setRate(calculateValue(newValue, 0.002));
  //   }
  // };

  const calculateValue = (value: any, rate: number) => {
    const result = value * rate;
    return result;
  };

  const valueLabelFormat = (value: number) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        gap: "3px",
      }}
    >
      <Typography variant="h3" fontWeight="bold" color="primary.main">
        ${`${rate.toFixed(2)}$`}
      </Typography>
      <Typography variant="h5" color="primary.main" sx={{ opacity: 0.6 }}>
        Annualized Incentive Est.
      </Typography>
      <Typography variant="h4" color="primary.main" sx={{ opacity: 0.6 }}>
        {`${value}M`}
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          width: "1px",
          background: "rgba(0, 0, 0, 0.5)",
          margin: "0 auto",
        }}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        width: "60%",
        mt: "80px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PrettoSlider
        components={{ Thumb: AirbnbThumbComponent }}
        value={value}
        // onChangeCommitted={handleCommit}
        onChange={handleChange}
        valueLabelDisplay="on"
        // aria-valuetext={value.toString()}
        aria-label="pretto slider"
        defaultValue={250}
        shiftStep={30}
        step={0.5}
        marks
        min={0}
        max={10}
        valueLabelFormat={valueLabelFormat}
      />
      <Box
        sx={{
          // backgroundColor: "#E7F8FF",
          width: "100%",
          borderRadius: "12px",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          pt: "10px",
        }}
      >
        <Typography variant="h5" color="primary.main" sx={{ opacity: 0.6 }}>
          +0
        </Typography>
        <Typography variant="h5" color="primary.main" sx={{ opacity: 0.6 }}>
          STREAMS
        </Typography>
        <Typography variant="h5" color="primary.main" sx={{ opacity: 0.6 }}>
          +10M
        </Typography>
      </Box>
    </Box>
  );
}
