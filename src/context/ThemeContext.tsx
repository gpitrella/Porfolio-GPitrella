import { createContext, useState } from "react";
import { IThemeContext, ThemeProviderProps } from "./Theme";

const defaultThemeState = {
  dark: true,
};

export const ThemeContext = createContext<IThemeContext>(defaultThemeState);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState<boolean>(defaultThemeState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
