import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

const AppRouter = () => (
  <Suspense fallback="">
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-content">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
