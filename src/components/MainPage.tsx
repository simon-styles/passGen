import React from "react";

import AppBarTop from "./AppBarTop";
import AppBanner from "./AppBanner";
import AppBarBottom from "./AppBarBottom";
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
  return (
    <div>
      <AppBarTop />
      <AppBanner />
      <AppBarBottom />
    </div>
  );
};

export default MainPage;
