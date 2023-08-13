import { useState } from "react";
import { createContext } from "react";

export const SettingsContext = createContext({});

const SettingsProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(0.25);
  const [breakMinutes, setBreakMinutes] = useState(0.25);
  
  const value = {
    showSettings,
    setShowSettings,
    workMinutes,
    setWorkMinutes,
    breakMinutes,
    setBreakMinutes,
    startTimer,
    setStartTimer
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
