import React from "react";
import { ThemeContext } from "../context/createContext";

 export  function useTheme() {
    const [isDarkMode, setMode] = React.useContext(ThemeContext);
    return [isDarkMode, setMode];
 }