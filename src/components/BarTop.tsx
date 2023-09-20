import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { AppBar, Toolbar, Typography } from "@mui/material";

const BarTop: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <AppBar position={"absolute"} style={{ boxShadow: "none" }}>
      <Toolbar
        style={{
          minHeight: "50px",
          backgroundColor: darkMode ? "#171717" : "#f2f2f2",
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
          PassGen - generating passwords and estimating their strength (browser
          version)
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BarTop;
