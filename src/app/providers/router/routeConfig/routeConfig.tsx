import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/const/router';

import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
