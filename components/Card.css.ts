import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const base = style({
  margin: "10px",
  border: "2px solid green",
  "@media": {
    "screen and (min-width: 768px)": {
      border: "2px solid blue",
    },
    "screen and (min-width: 980px)": {
      border: "2px solid yellow",
    },
  },
});

export const disabled = style({
  opacity: "0.3",
});

export const container = style([
  base,

  {
    ":hover": {
      borderColor: "pink",
    },
  },
]);

export const box = recipe({
  base: {
    borderRadius: 6,
  },

  variants: {
    color: {
      neutral: { background: "whitesmoke" },
      brand: { background: "blueviolet" },
      accent: { background: "slateblue" },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        color: "neutral",
        size: "large",
      },
      style: {
        background: "ghostwhite",
      },
    },
  ],

  defaultVariants: {
    color: "accent",
    size: "medium",
  },
});
