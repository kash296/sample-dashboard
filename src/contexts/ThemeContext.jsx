import { createContext, useState, useContext } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#30C8C8",
      },
      secondary: {
        main: "#272D4C",
      },
      background: {
        default: "#f7fafc",
        paper: "#f7fafc",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#30C8C8",
      },
      secondary: {
        main: "#1F2733",
      },
      background: {
        default: "#1F2733",
        paper: "#1F2733",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
