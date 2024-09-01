import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { getUserAuthData, initAuthData, logoutUser } from 'entities/User';
import { getRouteLogin } from 'shared/constants/router';

import './styles/index.scss';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  const userAuthData = useSelector(getUserAuthData);

  const onLoginButtonClick = useCallback(() => {
    if (userAuthData) {
      dispatch(logoutUser());
    } else {
      navigate(getRouteLogin());
    }
  }, [dispatch, navigate, userAuthData]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar
        userAuthData={userAuthData}
        onLoginButtonClick={onLoginButtonClick}
      />
      <AppRouter />
    </div>
  );
}

export default App;
