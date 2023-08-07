import React, { useContext, useState } from "react";
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { ThemeContext } from "./ThemeContext";

const AppBarBottom = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [openInfo, setOpenInfo] = useState(false);

  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  return (
    <AppBar position={"absolute"} style={{ top: "auto", bottom: 0 }}>
      <Toolbar
        style={{
          minHeight: "50px",
          backgroundColor: darkMode ? "#171717" : "#f2f2f2",
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
              color: darkMode ? "#999da2" : "#70757a",
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
              color: darkMode ? "#999da2" : "#70757a",
              display: "block",
            }}
            onClick={handleClickOpenInfo}
          >
            <InfoIcon />
          </IconButton>
          <Dialog
            open={openInfo}
            onClose={handleCloseInfo}
            PaperProps={{
              style: {
                backgroundColor: darkMode ? "#303134" : "#f8f9fa",
              },
            }}
          >
            <DialogTitle style={{ color: darkMode ? "#FFFFFF" : "#202124" }}>
              PassGen - Generating passwords and estimating their strength
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography
                  paragraph
                  style={{
                    color: darkMode ? "#e8eaed" : "#5f6368",
                  }}
                >
                  Welcome to 'PassGen'! Here's a tool that doesn't just create
                  secure passwords, but it also educates you about the strength
                  of those passwords in the face of potential attacks.
                </Typography>
                <Typography
                  paragraph
                  style={{
                    color: darkMode ? "#e8eaed" : "#5f6368",
                  }}
                >
                  You can generate robust passwords using PassGen, and it tells
                  you how long it might take for a sophisticated computer system
                  to crack them. This system, for the sake of illustration, can
                  make an astonishing 1 quadrillion guesses every second!
                </Typography>
                <Typography
                  paragraph
                  style={{
                    color: darkMode ? "#e8eaed" : "#5f6368",
                  }}
                >
                  What makes PassGen unique is its ability to check the strength
                  of your existing passwords without requiring you to share
                  them. You just input the length of your password and the types
                  of characters you've used (lowercase, uppercase, numbers, or
                  symbols). Since PassGen is a browser-based tool, there's no
                  data being sent or stored anywhere – your information always
                  remains confidential and secure in your own browser.
                </Typography>
                <Typography
                  paragraph
                  style={{
                    color: darkMode ? "#e8eaed" : "#5f6368",
                  }}
                >
                  Our application also educates you about 'password entropy',
                  which is a measure of password complexity. The higher the
                  entropy, the harder your password is to crack. When we
                  calculate the time it would take to brute force your password,
                  we give you a real sense of your password's strength.
                </Typography>
                <Typography
                  paragraph
                  style={{
                    color: darkMode ? "#e8eaed" : "#5f6368",
                  }}
                >
                  Remember, PassGen is entirely free to use. Our goal is to make
                  strong cybersecurity accessible to everyone. Enjoy using
                  PassGen - we hope it answers all your security queries. It's
                  like the '42' of password generators, a seemingly simple
                  answer to complex online security questions!
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseInfo}>Close</Button>
            </DialogActions>
          </Dialog>
          <IconButton
            color="inherit"
            style={{
              color: darkMode ? "#999da2" : "#70757a",
              display: "block",
            }}
            onClick={toggleDarkMode}
          >
            <Brightness4Icon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarBottom;
