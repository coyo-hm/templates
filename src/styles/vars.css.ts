import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    primaryYellow: "#FFC833",
    primaryGreen: "#2CAB0C",
  },
  borderRadius: "0.5rem",
});

export default vars;

export const whFull = style({
  width: "100%",
  height: "100%",
});
