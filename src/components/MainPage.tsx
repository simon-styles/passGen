import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import AppBarBottom from "./AppBarBottom";
import { ThemeContext } from "./ThemeContext";


const MainPage: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
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
            PassGen - Generating passwords and estimating their strength
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBarBottom />
    </div>
  );
};

export default MainPage;
