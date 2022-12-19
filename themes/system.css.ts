import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { contract as tokens } from "./contract.css";

import { flattenThemeValues } from "./utils";

const { space } = tokens;
const colors = flattenThemeValues(tokens.colors);

const spacingProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    margin: space,
    marginTop: space,
    marginRight: space,
    marginBottom: space,
    marginLeft: space,
    marginX: space,
    marginY: space,
    padding: space,
    paddingTop: space,
    paddingRight: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingX: space,
    paddingY: space,
    top: space,
    right: space,
    bottom: space,
    left: space,
    gridGap: space,
    gridColumnGap: space,
    gridRowGap: space,
    gap: space,
    columnGap: space,
    rowGap: space,
  },
  shorthands: {
    // Margin Shorthands
    m: ["margin"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    // Padding Shorthands
    p: ["padding"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    // Responsive
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
    // Behaviour
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    tabletHover: {
      "@media": "screen and (min-width: 768px)",
      selector: "&:hover",
    },
  },
  defaultCondition: "mobile",
  properties: {
    color: colors,
    backgroundColor: colors,
    // borderColor: colors,
    // caretColor: colors,
    // outlineColor: colors,
    // textDecorationColor: colors,
    // borderTopColor: colors,
    // borderBottomColor: colors,
    // borderLeftColor: colors,
    // borderRightColor: colors,
    // columnRuleColor: colors,
    fill: colors,
    stroke: colors,
  },
  shorthands: {
    bg: ["backgroundColor"],
  },
});

const otherProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    //   fontFamily: "fonts",
    //   fontSize: "fontSizes",
    //   fontWeight: "fontWeights",
    //   lineHeight: "lineHeights",
    //   letterSpacing: "letterSpacings",
    //   opacity: "opacities",
    //   transition: "transitions",
    //   border: "borders",
    //   borderTop: "borders",
    //   borderRight: "borders",
    //   borderBottom: "borders",
    //   borderLeft: "borders",
    //   borderWidth: "borderWidths",
    //   borderStyle: "borderStyles",
    //   borderRadius: "radii",
    //   borderTopRightRadius: "radii",
    //   borderTopLeftRadius: "radii",
    //   borderBottomRightRadius: "radii",
    //   borderBottomLeftRadius: "radii",
    //   borderTopWidth: "borderWidths",
    //   borderTopStyle: "borderStyles",
    //   borderBottomWidth: "borderWidths",
    //   borderBottomStyle: "borderStyles",
    //   borderLeftWidth: "borderWidths",
    //   borderLeftStyle: "borderStyles",
    //   borderRightWidth: "borderWidths",
    //   borderRightStyle: "borderStyles",
    //   columnRuleWidth: "borderWidths",
    // boxShadow: tokens.shadows,
    // textShadow: tokens.shadows,
    // zIndex: tokens.zIndices,
    //   width: "sizes",
    //   minWidth: "sizes",
    //   maxWidth: "sizes",
    //   columnWidth: "sizes",
    //   height: "sizes",
    //   minHeight: "sizes",
    //   maxHeight: "sizes",
    //   flexBasis: "sizes",
    //   size: "sizes",
    // backgroundColor: "s",
  },
});

const styles = [spacingProperties, colorProperties] as const;

export const system = createSprinkles(...styles);

// It's a good idea to export the Sprinkles type too
export type SystemProps = Parameters<typeof system>[0];
