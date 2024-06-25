import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar';

function AppContainer() {
  return (
    <div className="sm:flex bg-darkbg1 w-screen min-h-screen">
      <Sidebar />
      <div className="w-full p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
