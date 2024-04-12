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
  const [value, setValue] = React.useState<number>(250);
  const [rate, setRate] = React.useState<number>(value * 0.02);

  const handleChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    // console.log("slider event: ", event);
    // console.log("New value: ", newValue);
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

    const handleCommit = (
      event: React.SyntheticEvent | Event,
      newValue: number | number[]
    ) => {
      if (typeof newValue === "number") {
        setValue(newValue);
        setRate(calculateValue(newValue, 0.002));
      }
    };

  const calculateValue = (value: any, rate: number) => {
    const result = value * rate;
    return result;
  };

  const valueLabelFormat = (value: number) => `${value}`;

  // Generate line chart data based on the slider range
  const generateLineChartData = () => {
    const data = [];
    for (let i = 0; i <= 100; i += 5) {
      const rate = calculateValue(i, 0.02);
      data.push(rate);
    }
    return data;
  };

  // Sample line chart data
  const lineChartData = {
    yAxis: [{ data: generateLineChartData() }],
    series: [{ data: generateLineChartData() }],
  };

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
        components={{ Thumb: AirbnbThumbComponent }}
        value={value}
        onChangeCommitted={handleCommit}
        onChange={handleChange}
        valueLabelDisplay="on"
        // aria-valuetext={value.toString()}
        aria-label="pretto slider"
        defaultValue={250}
        shiftStep={30}
        step={5}
        marks
        min={0}
        max={500}
        getAriaValueText={valueLabelFormat}
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
          {rate}% APY
        </Typography>
        <LineChart
          yAxis={lineChartData.yAxis}
          series={lineChartData.series}
          leftAxis={{ disableLine: true }}
          bottomAxis={{ disableTicks: true }}
          width={500}
          height={300}
        />
      </Box>
    </Box>
  );
}
