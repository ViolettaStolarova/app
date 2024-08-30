import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { TextAlign, TextSize, TextVariant } from '../types/text';
import { mapSizeToClass, mapSizeToHeaderTag } from '../constants/textMaps';

import cls from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  size?: TextSize;
  align?: TextAlign;
  bold?: boolean;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    size = 'm',
    align = 'left',
    bold,
  } = props;

  const additionalClasses = [
    className,
    cls[variant],
    cls[mapSizeToClass[size]],
    cls[align],
  ];

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(cls.Text, { [cls.bold]: bold }, additionalClasses)}
    >
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
