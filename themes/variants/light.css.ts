import { createTheme } from "@vanilla-extract/css";
import { contract, defaultValues } from "../contract.css";

export const lightTheme = createTheme(contract, {
  ...defaultValues,
  colors: {
    primary: "#1E40AF",
    secondary: "#DB2777",
    background: "#EFF6FF",
    text: {
      normal: "#1F2937",
      dimmed: "#6B7280",
    },
  },
});
