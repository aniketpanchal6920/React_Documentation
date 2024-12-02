import React, { createContext, useState, useContext, ReactNode } from "react";

// Create the context with a default value
const ThemeContext = createContext<
  { theme: string; toggleTheme: () => void } | undefined
>(undefined);

// Define the type for the props of the provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Create a provider component that will wrap the parts of your app where you need access to the theme
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
const useTheme = (): { theme: string; toggleTheme: () => void } => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
