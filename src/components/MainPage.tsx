import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#202124",
    },
    primary: {
      main: "#bdc1c6",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff",
    },
    primary: {
      main: "#4d5156",
    },
  },
});

const MainPage: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar position={"absolute"} style={{ boxShadow: "none" }}>
        <Toolbar
          style={{
            minHeight: "50px",
            backgroundColor: theme === "dark" ? "#202124" : "#fff",
          }}
        >
          <Typography
            style={{
              flexGrow: 1,
              textAlign: "center",
              fontSize: "14px",
              color: theme === "dark" ? "#999da2" : "#70757a",
            }}
          >
            PassGen - Generating passwords and estimating their strength
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position={"absolute"} style={{ top: "auto", bottom: 0 }}>
        <Toolbar
          style={{
            minHeight: "50px",
            backgroundColor: theme === "dark" ? "#171717" : "#f2f2f2",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              order: 1,
              justifyContent: "flex-start",
              minWidth: "30%",
              display: "flex",
            }}
          ></div>

          <div
            style={{
              order: 2,
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography
              style={{
                flexGrow: 1,
                textAlign: "center",
                color: theme === "dark" ? "#999da2" : "#70757a",
                fontSize: "14px",
              }}
            >
              Craft your passwords locally, powered by your browser
            </Typography>
          </div>

          <div
            style={{
              order: 3,
              justifyContent: "flex-end",
              minWidth: "30%",
              display: "flex",
            }}
          >
            <IconButton
              color="inherit"
              style={{
                color: theme === "dark" ? "#999da2" : "#70757a",
                display: "block",
              }}
            >
              <InfoIcon />
            </IconButton>

            <IconButton
              color="inherit"
              style={{
                color: theme === "dark" ? "#999da2" : "#70757a",
                display: "block",
              }}
              onClick={toggleTheme}
            >
              <Brightness4Icon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default MainPage;
