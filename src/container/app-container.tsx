import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar';

function AppContainer() {
  return (
    <div className=" sm:flex bg-darkbg1 max-w-screen min-h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full h-full pt-[100px] sm:pt-0 sm:ml-[104px]">
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
