import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routes from '../constants/app-routes';
import AppContainer from '../container/app-container';

const HomePage = lazy(() => import('../features/home-page/index'));

function AppRouter() {
  return (
    <Suspense fallback={<div>Waiting...</div>}>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="" element={<HomePage />} />
          {routes.map((item) => (
            <Route key={item.name} path={item.path} element={item.path} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
