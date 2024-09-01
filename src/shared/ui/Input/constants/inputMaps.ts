import { InputBorderRadius, InputSize } from '../types/input';

export const mapSizeToClass: Record<InputSize, string> = {
  s: 'size_s',
  m: 'size_m',
  l: 'size_l',
};

export const mapBorderRadiusToClass: Record<InputBorderRadius, string> = {
  5: 'border_5',
  10: 'border_10',
  15: 'border_15',
  20: 'border_20',
};
