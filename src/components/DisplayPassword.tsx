import React, { useState } from "react";
import CountUp from "react-countup";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EntropyDialogContent from "../contexts/EntropyDialogContent";
import BruteForceTimeDialogContent from "../contexts/BruteForceTimeDialogContent";

type Data = {
  password: string;
  entropy: number;
  bruteForceTime: {
    time: number;
    unit: string;
  };
};

type Props = {
  data: Data | null;
};

const DisplayPassword: React.FC<Props> = ({ data }) => {
  const entropy = data?.entropy || 0;
  const bruteForceTime = data?.bruteForceTime.time || 0;
  const bruteForceUnit = data?.bruteForceTime.unit || "";
  const [openEntropy, setOpenEntropy] = useState(false);
  const [openBruteForceTime, setOpenBruteForceTime] = useState(false);

  const handleClickOpenEntropy = () => {
    setOpenEntropy(true);
  };

  const handleCloseEntropy = () => {
    setOpenEntropy(false);
  };

  const handleClickOpenBruteForceTime = () => {
    setOpenBruteForceTime(true);
  };

  const handleCloseBruteForceTime = () => {
    setOpenBruteForceTime(false);
  };

  const handleClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(data?.password || "");
    } catch (err) {
      console.error("Failed to copy password: ", err);
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box style={{ flex: 1, textAlign: "center" }}>
        <Button onClick={handleClickOpenEntropy}>
          <CountUp start={0} end={entropy} duration={2.75} decimals={2}>
            {({ countUpRef }) => (
              <div>
                <Typography
                  variant={"h1"}
                  component={"span"}
                  ref={countUpRef}
                  style={{
                    color:
                      entropy < 70
                        ? "#DB4437"
                        : entropy >= 76
                        ? "#0F9D58"
                        : "#F4B400",
                  }}
                />
                <Typography
                  variant={"h5"}
                  component={"span"}
                  style={{
                    marginLeft: "5px",
                    color:
                      entropy < 70
                        ? "#DB4437"
                        : entropy >= 76
                        ? "#0F9D58"
                        : "#F4B400",
                  }}
                >
                  {" bits"}
                </Typography>
              </div>
            )}
          </CountUp>
        </Button>
        <Dialog open={openEntropy} onClose={handleCloseEntropy}>
          <DialogTitle>Understanding password entropy</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <EntropyDialogContent />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEntropy}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box style={{ flex: 1, textAlign: "center" }}>
        <TextField
          label={"Password"}
          variant={"outlined"}
          value={data?.password || ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position={"end"}>
                <IconButton edge={"end"} onClick={handleClickCopy}>
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box style={{ flex: 1, textAlign: "center" }}>
        <Button onClick={handleClickOpenBruteForceTime}>
          <CountUp start={0} end={bruteForceTime} duration={2.75} decimals={2}>
            {({ countUpRef }) => (
              <div>
                <Typography
                  variant={"h1"}
                  component={"span"}
                  ref={countUpRef}
                  style={{
                    color:
                      entropy < 70
                        ? "#DB4437"
                        : entropy >= 76
                        ? "#0F9D58"
                        : "#F4B400",
                  }}
                />
                <Typography
                  variant={"h5"}
                  component={"span"}
                  style={{
                    marginLeft: "5px",
                    color:
                      entropy < 70
                        ? "#DB4437"
                        : entropy >= 76
                        ? "#0F9D58"
                        : "#F4B400",
                  }}
                >
                  {` ${bruteForceUnit}`}
                </Typography>
              </div>
            )}
          </CountUp>
        </Button>
        <Dialog open={openBruteForceTime} onClose={handleCloseBruteForceTime}>
          <DialogTitle>Estimating time to crack your password</DialogTitle>
          <DialogContent>
            <BruteForceTimeDialogContent />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseBruteForceTime}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default DisplayPassword;
