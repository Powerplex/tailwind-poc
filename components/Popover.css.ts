import { style } from "@vanilla-extract/css";

import { tokens } from "@theme";

export const content = style({
  border: "1px solid",
  borderColor: tokens.colors.text.normal,
  backgroundColor: tokens.colors.background,
  padding: "10px",
});
