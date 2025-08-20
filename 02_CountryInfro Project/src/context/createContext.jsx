import React, { createContext } from "react";

 export const ThemeContext = createContext();


 export function ThemeProvider({ children }) {
    const [isDarkMode, setMode] = React.useState(JSON.parse(localStorage.getItem('isDarkMode')));
    return (
        <ThemeContext.Provider value={[isDarkMode, setMode]}>
            {children}
        </ThemeContext.Provider>
    );
}
