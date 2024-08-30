import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { InputBorderRadius, InputSize } from '../types/input';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { mapBorderRadiusToClass, mapSizeToClass } from '../constants/inputMaps';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  size?: InputSize;
  borderRadius?: InputBorderRadius;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    label,
    size = 'm',
    borderRadius = '10',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
  };

  const additionalClasses = [
    className,
    cls[mapSizeToClass[size]],
    cls[mapBorderRadiusToClass[borderRadius]],
  ];

  const input = (
    <div className={classNames(cls.InputWrapper, mods, additionalClasses)}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );

  if (label) {
    return (
      <VStack max gap={8}>
        <Text text={label} />
        {input}
      </VStack>
    );
  }

  return input;
});
