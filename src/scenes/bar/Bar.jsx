import React from "react";
import { Box } from "@mui/material";
import BarCharts from "../../components/BarCharts";
import Header from "../../components/Header";

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarCharts />
      </Box>
    </Box>
  );
}
