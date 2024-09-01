import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  FlexWrap,
} from '../../types/flex';
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses,
  wrapClasses,
} from '../../constants/flexMaps';

import cls from './Flex.module.scss';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type FlexProps = DivProps & {
  className?: string;
  children?: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  wrap?: FlexWrap;
};

export const Flex: FC<FlexProps> = forwardRef((props, ref) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'start',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    max,
    ...otherProps
  } = props;

  const additionalClasses = [
    className,
    cls[justifyClasses[justify]],
    cls[alignClasses[align]],
    cls[directionClasses[direction]],
    cls[wrapClasses[wrap]],
    gap && cls[gapClasses[gap]],
  ];

  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <div
      className={classNames(cls.Flex, mods, additionalClasses)}
      {...otherProps}
      ref={ref}
    >
      {children}
    </div>
  );
});
