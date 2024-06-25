import React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppContainer from '../container/app-container';
const HomePage = lazy(() => import('../features/home-page/index'));
import { routes } from './../constants/app-routes';

export const AppRouter = () => {
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
};
