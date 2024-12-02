import { createContext, useState, ReactNode } from "react";

interface NavContextType {
  activeView: string;
  setActiveView: (activeView:string) => void;
}

interface NavigationProviderProps {
  children: ReactNode;
}

export const navContext = createContext<NavContextType>({
  activeView: 'dashboard',
  setActiveView: () => {}
});

const NavigationProvider = ({ children }:NavigationProviderProps) => {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <navContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </navContext.Provider>
  );
};

export default NavigationProvider;
