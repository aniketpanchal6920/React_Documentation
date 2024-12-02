

import React from 'react'
import { ThemeProvider, useTheme } from "./ThemeProvider"; // Assuming ThemeContext is in a file named ThemeContext.tsx


const ThemedComponent: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
        <p>The current theme is {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };
  

const MainContextFile = () => {
  return (
    <div>MainContextFile
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>


    </div>
  )
}

export default MainContextFile