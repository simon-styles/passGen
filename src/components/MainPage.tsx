import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import AppBarBottom from "./AppBarBottom";
import { ThemeContext } from "./ThemeContext";
import { generatePassword } from "../services/passwordService";
import { computeEntropy } from "../services/entropyService";
import { computeBruteForceTime } from "../services/bruteForceTimeService";

/**
 * -----------------------------------------------
 */
const length = 8;
const categories = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
];
const password = generatePassword(length, categories);
const entropy = computeEntropy(password);
const bruteForceTime = computeBruteForceTime(entropy);
console.log(`Password is: ${password}`);
console.log(`Entropy of the password is: ${entropy}`);
console.log(
  `Brute force time is: ${bruteForceTime.time} ${bruteForceTime.unit}`,
);
/**
 * -----------------------------------------------
 */

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
