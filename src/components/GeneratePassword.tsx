import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  SelectChangeEvent,
  Menu,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import { generatePassword } from "../services/passwordService";
import { computeEntropy } from "../services/entropyService";
import { computeBruteForceTime } from "../services/bruteForceTimeService";
import { SelectedCategories } from "../interfaces";
import DisplayPassword from "./DisplayPassword";

const menuItems = Array.from({ length: 45 }, (_, i) => i + 4).map((item) => (
  <MenuItem key={item} value={item}>
    {item}
  </MenuItem>
));

const GeneratePassword: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [length, setLength] = useState<number>(12);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategories>({
      useNumbers: false,
      useLowerCase: false,
      useUpperCase: false,
      useSymbols: false,
    });
  const [generatedData, setGeneratedData] = useState<{
    password: string;
    entropy: number;
    bruteForceTime: {
      time: number;
      unit: string;
    };
  } | null>(null);

  const handleSetLength = (event: SelectChangeEvent<number>) => {
    setLength(event.target.value as number);
  };

  const handleClickCharacters = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleCloseCharacters = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (category: keyof SelectedCategories) => () => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  function handleClickGenerate() {
    const password = generatePassword(length, selectedCategories);
    const entropy = computeEntropy(password);
    const bruteForceTime = computeBruteForceTime(entropy);
    setGeneratedData({ password, entropy, bruteForceTime });
  }

  return (
    <>
      <Box
        style={{
          height: "20vh",
          minHeight: "142px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: darkMode ? "#303134" : "#e0e0e0",
        }}
      >
        <Button
          variant="contained"
          style={{ marginTop: "20px" }}
          onClick={handleClickGenerate}
        >
          Generate Password
        </Button>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "15px",
            gap: "20px",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="Length">Length</InputLabel>
            <Select
              id={"Length"}
              value={length}
              onChange={handleSetLength}
              label={"Length"}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5,
                  },
                },
              }}
            >
              {menuItems}
            </Select>
          </FormControl>
          <Button
            aria-controls={"checkbox-menu"}
            aria-haspopup={true}
            onClick={handleClickCharacters}
          >
            Characters
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted={true}
            open={Boolean(anchorEl)}
            onClose={handleCloseCharacters}
          >
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategories.useNumbers}
                    onChange={handleCheckboxChange("useNumbers")}
                  />
                }
                label={"Numbers"}
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategories.useLowerCase}
                    onChange={handleCheckboxChange("useLowerCase")}
                  />
                }
                label={"Lowercase"}
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategories.useUpperCase}
                    onChange={handleCheckboxChange("useUpperCase")}
                  />
                }
                label={"Uppercase"}
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategories.useSymbols}
                    onChange={handleCheckboxChange("useSymbols")}
                  />
                }
                label={"Symbols"}
              />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        style={{
          height: "32vh",
          minHeight: "142px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <DisplayPassword data={generatedData} />
      </Box>
    </>
  );
};

export default GeneratePassword;
