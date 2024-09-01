import { classNames } from 'shared/lib/classNames/classNames';

import { getRouteMain } from 'shared/constants/router';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { HStack } from 'shared/ui/Stack';
import { User } from 'entities/User';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  userAuthData?: User;
  onLoginButtonClick: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const { className, onLoginButtonClick, userAuthData } = props;

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <AppLink variant="primaryInverted" to={getRouteMain()}>
        <Text bold variant="accent" size="m" title="Best Application" />
      </AppLink>

      <HStack className={cls.controlsContainer} gap={16} align="center">
        <ThemeSwitcher />
        <Button size="l" variant="primary" onClick={onLoginButtonClick}>
          {userAuthData ? 'Log Out' : 'Sign In'}
        </Button>
      </HStack>
    </header>
  );
};
