import { classNames } from 'shared/lib/classNames/classNames';

import { ToastVariant } from '../types/toast';
import { VStack } from '../../Stack';
import { Text } from '../../Text';

import cls from './Toast.module.scss';

interface ToastProps {
  className?: string;
  title?: string;
  message?: string;
  variant?: ToastVariant;
}

export const Toast = (props: ToastProps) => {
  const { className, message, title = 'Success', variant = 'success' } = props;

  const additionalClasses = [className, cls[variant]];

  return (
    <VStack
      className={classNames(cls.Toast, {}, additionalClasses)}
      align="center"
      justify="center"
      gap={8}
    >
      <Text size="m" title={title} />
      <Text size="m" text={message} />
    </VStack>
  );
};
