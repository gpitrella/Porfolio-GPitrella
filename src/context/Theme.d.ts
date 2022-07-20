export interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void ;
}

export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}