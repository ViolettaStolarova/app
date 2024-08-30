import { FC } from 'react';
import { HStack, HStackProps } from '../../Stack/ui/HStack/HStack';
import { VStack, VStackProps } from '../../Stack/ui/VStack/VStack';
import { CardBorder, CardPadding, CardStack } from '../type/card';

export const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
  '32': 'gap_32',
};

export const mapBorderToClass: Record<CardBorder, string> = {
  0: 'border_0',
  10: 'border_10',
  15: 'border_15',
  20: 'border_20',
  25: 'border_25',
};

export const mapStackToRootElement: Record<
  CardStack,
  FC<HStackProps | VStackProps>
> = {
  horizontal: HStack,
  vertical: VStack,
};
