import React, { useContext, useState } from "react";
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { ThemeContext } from "./ThemeContext";
import PassGenDialogContent from "../contexts/PassGenDialogContent";

const BarBottom = () => {
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
          <Dialog open={openInfo} onClose={handleCloseInfo}>
            <DialogTitle>
              PassGen - generating passwords and estimating their strength
            </DialogTitle>
            <DialogContent>
              <PassGenDialogContent />
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

export default BarBottom;
