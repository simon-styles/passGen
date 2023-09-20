import React, { useContext } from "react";

import BarTop from "./BarTop";
import Banner from "./Banner";
import BarBottom from "./BarBottom";
import { Divider } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import GeneratePassword from "./GeneratePassword";

const MainPage: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <BarTop />
      <Banner />
      <Divider
        style={{
          backgroundColor: darkMode
            ? "rgba(112, 117, 122, 0.25)"
            : "rgba(153, 157, 162, 0.25)",
        }}
      />
      <GeneratePassword />
      <BarBottom />
    </div>
  );
};

export default MainPage;
