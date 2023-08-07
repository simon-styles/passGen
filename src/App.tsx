import React, { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MainPage from "./components/MainPage";
import { ThemeContext } from "./components/ThemeContext";

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

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
          <MainPage />
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
