const COLOR = {
  primary: {
    100: "#FFD1D1",
    200: "#FF9494",
    300: "#F87474",
    400: "#FF3647",
  },
  subColor: "#FFECEC",
  hover: "#db2e3d",
  fontColor: {
    100: "#FFFFFF",
    200: "#646F7C",
    300: "#181D1F",
  },
  error: "#FF0000",
  success: "#028202",
  white: "#FFFFFF",
  black: "#000000",
  bg: "rgb(238, 241, 245)",
  gray: {
    100: "#E9E9E9",
    200: "#D9D9D9",
    300: "#656565",
    400: "#333",
  },
};

const FONT_SIZE = {
  micro: "6px",
  es: "10px",
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "20px",
  big: "24px",
  lg: "28px",
  xl: "32px",
};

const FONT_WEIGHT = {
  light: "300",
  regular: "400",
  bold: "700",
  bolder: "900",
};

const deviceWidth = {
  // mobile: 350,
  mobile: 414,
  tablet: 768,
  laptop: 1000,
  pc: 1440,
};

const device = {
  mobile: `screen and (max-width: ${deviceWidth.mobile}px)`,
  tablet: `screen and (max-width: ${deviceWidth.tablet}px)`,
  laptop: `screen and (max-width: ${deviceWidth.laptop}px)`,
  pc: `screen and (max-width: ${deviceWidth.pc}px)`,
};

export const theme = {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  device,
};
