import React from 'react';
import { Outlet } from 'react-router-dom';

export const AppContainer = () => {
  return (
    <div className="bg-white bg-opacity-95">
      <div className="sm:mx-20 mx-5 font-opensans">
        <Outlet />
      </div>
    </div>
  );
};
