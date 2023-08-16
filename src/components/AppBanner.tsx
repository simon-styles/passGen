import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "./ThemeContext";

const AppBanner: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box
      style={{
        height: "20vh",
        minHeight: "142px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: darkMode ? "#303134" : "#e0e0e0",
      }}
    >
      <Typography style={{ fontSize: "68px" }}>PassGen</Typography>
    </Box>
  );
};

export default AppBanner;
