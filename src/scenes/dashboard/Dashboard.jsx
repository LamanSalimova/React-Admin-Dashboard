import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />;
      </Box>
    </Box>
  );
}
