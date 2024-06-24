import React from 'react';
import { Suspense, lazy, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppContainer } from '../container/app-container';
import { HomePage } from '../features/home-page';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Waiting</div>}>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
