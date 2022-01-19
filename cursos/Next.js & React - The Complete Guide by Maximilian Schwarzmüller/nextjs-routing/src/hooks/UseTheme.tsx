import { useContext } from "react";
import { ThemeContext } from "store/ThemeContex";

export function useTheme() {
  const value = useContext(ThemeContext);
  return value;
}
