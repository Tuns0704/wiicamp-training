import { Outlet } from 'react-router-dom';

import Sidebar from '@/components/sidebar';

function AppContainer() {
  return (
    <div className="max-w-screen max-h-screen overflow-hidden bg-dark-bg1 sm:flex">
      <Sidebar />
      <div className="h-full max-h-screen min-h-screen w-full pt-[5.5rem] sm:ml-[6.5rem] sm:pt-0">
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
