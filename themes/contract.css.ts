import { createThemeContract } from "@vanilla-extract/css";

export const contract = createThemeContract({
  space: {
    small: null,
    medium: null,
    large: null,
    ["x-large"]: null,
  },
  fonts: {
    heading: null,
    body: null,
  },
  colors: {
    primary: null,
    secondary: null,
    background: null,
    text: {
      normal: null,
      dimmed: null,
    },
  },
  shadows: {
    none: null,
    normal: null,
    highlighted: null,
  },
  zIndices: {
    hide: null,
    base: null,
    raised: null,
    dropdown: null,
    sticky: null,
    overlay: null,
    modal: null,
    popover: null,
    skipLink: null,
    toast: null,
    tooltip: null,
  },
});

export const defaultValues = {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
    ["x-large"]: "32px",
  },
  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "system-ui",
  },
  shadows: {
    none: "none",
    normal:
      "0 -1px 4px 0 rgba(26, 26, 26, 0.08), 0 4px 8px 0 rgba(26, 26, 26, 0.12)",
    highlighted:
      "0 -1px 8px 0 rgba(26, 26, 26, 0.12), 0 4px 8px 0 rgba(0, 0, 0, 0.14)",
  },
  zIndices: {
    hide: "-1",
    base: "0",
    raised: "1",
    dropdown: "1000",
    sticky: "1100",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    skipLink: "1600",
    toast: "1700",
    tooltip: "1800",
  },
};
