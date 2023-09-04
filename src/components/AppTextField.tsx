import React, {useContext} from "react";
import {Box, TextField} from "@mui/material";
import {ThemeContext} from "./ThemeContext";

const AppTextField: React.FC = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <Box
      style={{
        height: "20vh",
        minHeight: "142px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: darkMode? "#303134" : "#e0e0e0",
      }}
    >
      <TextField style={{ marginTop: "20px" }}></TextField>
    </Box>
  )
};

export default AppTextField;