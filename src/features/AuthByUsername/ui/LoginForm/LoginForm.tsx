import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import { useAuthByUsername } from '../../model/hooks/useAuthByUsername';
import { VStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const {
    username,
    onLoginClick,
    onChangeUsername,
    isLoginButtonActive,
    alerts,
  } = useAuthByUsername();

  return (
    <VStack
      className={classNames(cls.LoginForm, {}, [className])}
      max
      align="center"
      justify="center"
      gap={32}
    >
      <Text bold size="l" title="Sign In" />
      <Input
        autoFocus
        type="text"
        placeholder="Username"
        onChange={onChangeUsername}
        value={username}
      />

      <Button
        variant="primaryInverted"
        size="l"
        disabled={!isLoginButtonActive()}
        onClick={onLoginClick}
      >
        Send
      </Button>
      {alerts}
    </VStack>
  );
});
