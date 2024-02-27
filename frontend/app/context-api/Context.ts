import { createContext } from "react";
import { useState } from "react";

function ToggleDark() {
  const [dark, setDark] = useState<boolean>(false);
  setDark((isDark) => !isDark);
  return dark;
}

export const ThemeContext = createContext(ToggleDark);
