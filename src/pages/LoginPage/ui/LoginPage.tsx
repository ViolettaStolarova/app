import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LoginForm } from 'features/AuthByUsername';
import { Page } from 'widgets/Page';
import { getRouteMain } from 'shared/constants/router';
import { getUserAuthData } from 'entities/User';

import cls from './LoginPage.module.scss';

interface LoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => {
  const navigate = useNavigate();
  const userAuthData = useSelector(getUserAuthData);

  useEffect(() => {
    if (userAuthData) {
      navigate(getRouteMain());
    }
  }, [navigate, userAuthData]);

  return (
    <Page className={classNames(cls.LoginPage, {}, [className])}>
      <LoginForm />
    </Page>
  );
};

export default LoginPage;
