import { style } from "@vanilla-extract/css";
import { tokens } from "@theme";

export const globalStyles = style({
  padding: tokens.space.large,
  fontFamily: tokens.fonts.body,
  background: tokens.colors.background,
  color: tokens.colors.text.normal,
  minHeight: "100vh",
});
