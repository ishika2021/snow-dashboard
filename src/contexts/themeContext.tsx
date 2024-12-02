import { createContext, useState, useEffect, ReactNode } from "react";

export interface ThemeContextType {
  theme: string;
  setTheme: (theme:string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}
export const themeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme:()=>{}
});

const ThemeProvider = ({ children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
