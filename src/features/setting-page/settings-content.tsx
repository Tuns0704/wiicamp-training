import { Outlet } from 'react-router-dom';

function SettingContent() {
  return (
    <div className="h-[calc(100vh-13.25rem)] w-full rounded-lg bg-dark-bg2 p-2 sm:h-[calc(100vh-8.875rem)] sm:p-6 lg:h-full">
      <Outlet />
    </div>
  );
}

export default SettingContent;
