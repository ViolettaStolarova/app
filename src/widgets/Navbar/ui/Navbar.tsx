import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getUserAuthState, userActions } from 'entities/User';
import { getRouteLogin, getRouteMain } from 'shared/const/router';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { AppLink } from 'shared/ui/AppLink/ui/AppLink';
import { HStack } from 'shared/ui/Stack';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userAuthData = useSelector(getUserAuthState);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const onLoginButtonClick = useCallback(() => {
    if (userAuthData) {
      onLogout();
    } else {
      navigate(getRouteLogin());
    }
  }, [navigate, onLogout, userAuthData]);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <AppLink variant="primaryInverted" to={getRouteMain()}>
        <Text bold variant="accent" size="m" title="Best Application" />
      </AppLink>
      <HStack className={cls.controlsContainer} gap={16}>
        <ThemeSwitcher />
        <Button size="l" variant="primary" onClick={onLoginButtonClick}>
          {userAuthData ? 'Log Out' : 'Sign In'}
        </Button>
      </HStack>
    </header>
  );
};
