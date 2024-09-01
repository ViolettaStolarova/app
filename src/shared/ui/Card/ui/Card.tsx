import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { CardBorder, CardPadding, CardStack, CardVariant } from '../type/card';
import {
  mapBorderToClass,
  mapPaddingToClass,
  mapStackToRootElement,
} from '../constants/cardMaps';
import { FlexProps } from '../../Stack/ui/Flex/Flex';

import cls from './Card.module.scss';

type CardProps = {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  border?: CardBorder;
  stack?: CardStack;
  fullWidth?: boolean;
  fullHeight?: boolean;
} & FlexProps;

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'filled',
    stack = 'vertical',
    padding = 0,
    border = 0,
    fullWidth,
    fullHeight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fullHeight]: fullHeight,
    [cls.fullWidth]: fullWidth,
  };

  const RootElement = mapStackToRootElement[stack];

  const additionalClasses = [
    className,
    cls[variant],
    cls[mapPaddingToClass[padding]],
    cls[mapBorderToClass[border]],
  ];

  return (
    <RootElement
      className={classNames(cls.Card, mods, additionalClasses)}
      {...otherProps}
    >
      {children}
    </RootElement>
  );
});
