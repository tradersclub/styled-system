import { createStyleFunction, createParser } from '../core';
// v4 api shims
import animation from '../animation';
import background from '../background';
import border from '../border';
import color from '../color';
import flexbox from '../flexbox';
import grid from '../grid';
import layout from '../layout';
import listStyle from '../list-style';
import position from '../position';
import space from '../space';
import transition from '../transition';
import typography from '../typography';

export { get, createParser, createStyleFunction, compose, system } from '../core';

export { animation } from '../animation';
export { background } from '../background';
export { border } from '../border';
export { color } from '../color';
export { cursor } from '../cursor';
export { flexbox } from '../flexbox';
export { grid } from '../grid';
export { layout } from '../layout';
export { listStyle } from '../list-style';
export { objectFit } from '../object-fit';
export { position } from '../position';
export { shadow, default as boxShadow, default as textShadow } from '../shadow';
export { space } from '../space';
export { transition } from '../transition';
export { typography } from '../typography';

export { variant, buttonStyle, textStyle, colorStyle } from '../variant';

const {
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
} = space;
const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
} = layout;
const { textColor, opacity, backgroundColor, fill: fillColor } = color;
const {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textIndent,
  textTransform,
  textDecoration,
  textOverflow,
  whiteSpace,
  textAlign,
  fontStyle,
} = typography;

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox;
const {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} = grid;
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border;
const { backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat } = background;
const { zIndex, top, right, bottom, left } = position;
const {
  animationName,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationDirection,
  animationIterationCount,
  animationFillMode,
  animationPlayState,
} = animation;
const { motion } = transition;
const { listStyleImage, listStylePosition, listStyleType } = listStyle;
export { default as borders } from '../border';
export {
  // space
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  // layout
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  textColor,
  backgroundColor,
  opacity,
  fillColor,
  // typography
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textIndent,
  textTransform,
  textDecoration,
  textOverflow,
  whiteSpace,
  textAlign,
  fontStyle,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
  // animation
  animationName,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationDirection,
  animationIterationCount,
  animationFillMode,
  animationPlayState,
  // transition
  motion,
  // list style
  listStyleImage,
  listStylePosition,
  listStyleType,
};

// v4 style API shim
export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {};
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  });
  if (alias) config[alias] = config[prop];
  const parse = createParser(config);

  return parse;
};
