import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { AppBar, Toolbar, Typography } from "@mui/material";

const AppBarTop: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <AppBar position={"absolute"} style={{ boxShadow: "none" }}>
      <Toolbar
        style={{
          minHeight: "50px",
          backgroundColor: darkMode ? "#202124" : "#fff",
        }}
      >
        <Typography
          style={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "14px",
            color: darkMode ? "#999da2" : "#70757a",
          }}
        >
          PassGen - Generating passwords and estimating their strength (browser version)
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTop;
