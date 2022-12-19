import { createTheme } from "@vanilla-extract/css";
import { contract, defaultValues } from "../contract.css";

export const darkTheme = createTheme(contract, {
  ...defaultValues,
  colors: {
    primary: "#60A5FA",
    secondary: "#F472B6",
    background: "#1F2937",
    text: {
      normal: "#F9FAFB",
      dimmed: "#D1D5DB",
    },
  },
});
