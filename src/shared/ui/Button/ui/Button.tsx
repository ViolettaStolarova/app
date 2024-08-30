import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { ButtonBorderRadius, ButtonSize, ButtonVariant } from '../types/button';
import {
  mapBorderRadiusToClass,
  mapSizeToClass,
} from '../constants/buttonMaps';

import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  borderRadius?: ButtonBorderRadius;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      variant = 'filled',
      size = 'm',
      borderRadius = '10',
      disabled,
      fullWidth,
      children,
      ...otherProps
    } = props;

    const mods: Mods = {
      [cls.disabled]: disabled,
      [cls.fullWidth]: fullWidth,
    };

    const additionalClasses = [
      className,
      cls[variant],
      cls[mapSizeToClass[size]],
      cls[mapBorderRadiusToClass[borderRadius]],
    ];

    return (
      <button
        type="button"
        className={classNames(cls.Button, mods, additionalClasses)}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
