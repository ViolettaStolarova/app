import {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  FlexWrap,
} from '../types/flex';

export const justifyClasses: Record<FlexJustify, string> = {
  start: 'justifyStart',
  center: 'justifyCenter',
  end: 'justifyEnd',
  between: 'justifyBetween',
};

export const alignClasses: Record<FlexAlign, string> = {
  start: 'alignStart',
  center: 'alignCenter',
  end: 'alignEnd',
};

export const directionClasses: Record<FlexDirection, string> = {
  row: 'directionRow',
  column: 'directionColumn',
};

export const wrapClasses: Record<FlexWrap, string> = {
  nowrap: 'nowrap',
  wrap: 'wrap',
};

export const gapClasses: Record<FlexGap, string> = {
  4: 'gap_4',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
  32: 'gap_32',
};
