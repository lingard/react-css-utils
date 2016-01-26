var R = require('ramda');

var breakpoints = {
  '--palm': '(min-width: 0) and (max-width: 320px)',
  '--lap': '(min-width: 320px) and (max-width: 960px)',
  '--desk': '(min-width: 960px)'
};

var lineHeight = {
  lineHeightBase: '26px',
  lineHeightBaseRatio: '1.5',
  lineHeightTitleRatio: '1.1'
};

var fontWeight = {
  fontWeightLight: '100',
  fontWeightNormal: '400',
  fontWeightSemibold: '600',
  fontWeightBold: '700'
};

var fontSize = {
  fontSizeBase: '16px',
  fontSizeXXLarge: '54px',
  fontSizeXLarge: '36px',
  fontSizeLarge: '28px',
  fontSizeMedium: '20px',
  fontSizeSmall: '14px',
  fontSizeXSmall: '13px',
  fontSizeXXSmall: '11px'
};

var easing = {
  easingBase: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)'
};

var borderRadius = {
  borderRadiusBase: '3px'
};

// default theme

var defaultTheme = {
  // color
  colorTextBase: '#161d2a',
  colorTextEmphasized: '#111',
  colorTextMuted: '#bfbfbf',
  colorTextAccent: 'green',
  colorTextWarning: 'yellow',
  colorTextError: 'red',
  colorTextSuccess: 'green',
  colorTextInfo: 'blue',

  // background
  backgroundBase: '#efefef',
  backgroundEmphasized: '#161d2a',
  backgroundMuted: '#fff',
  backgroundAccent: '#ffff00',
  backgroundBrand: '#4ec472',
  backgroundBrandDark: '#42a660',

  // border color
  borderColorBase: '#d5dbe5'
}

// dark theme
var darkTheme = {
  // color
  darkColorTextBase: '#fff',
  darkColorTextEmphasized: '#fff',
  darkColorTextMuted: 'rgba(0, 0, 0, 0.75)',

  // background
  darkBackgroundBase: '#161d2a',
  darkBackgroundEmphasized: '#0d121a',
  darkBackgroundMuted: '#fff',

  // border color
  darkBorderColorBase: '#1a1a1a'

};

module.exports = {
  variables: R.mergeAll([
    lineHeight,
    fontWeight,
    fontSize,
    easing,
    borderRadius,
    defaultTheme,
    darkTheme
  ]),
  lineHeight: lineHeight,
  fontWeight: fontWeight,
  fontSize: fontSize,
  easing: easing,
  breakpoints: breakpoints,
  borderRadius: borderRadius,
  defaultTheme,
  darkTheme
}
