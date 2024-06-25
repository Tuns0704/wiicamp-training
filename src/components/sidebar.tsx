import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import routes from '../constants/app-routes';
import useDeviceStore from '../stores/device';

import LogoutIcon from './icons/logout';

function RenderSideItem() {
  return (
    <>
      <ul className="block">
        {routes.map((item, index) => {
          return (
            <li key={index} className="min-h-[102px]">
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <div
                    className={`py-3 px-3 ${isActive ? 'bg-darkbgbase rounded-xl' : ''}`}
                  >
                    <div
                      className={`p-4 flex items-center gap-3 justify-center ${isActive ? 'text-white bg-primary rounded-lg font-bold' : 'text-primary'}`}
                    >
                      <div className="flex gap-2 w-full">
                        {item.icon} <p className="sm:hidden">{item.name}</p>
                      </div>
                    </div>
                  </div>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="p-6 sm:mt-auto">
        <button className="p-3 sm:p-4 text-primary flex items-center gap-3 font-bold">
          <LogoutIcon /> <p className="sm:hidden text-white">Logout</p>
        </button>
      </div>
    </>
  );
}

function Sidebar() {
  const { isMobile, handleResize } = useDeviceStore();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <aside className="sm:w-[104px] px-4 sm:px-0 flex sm:flex-col justify-between items-center rounded-r-2xl sm:min-h-screen bg-darkbg2">
      <Link to="/" className="py-6">
        <img
          className="p-2 rounded-xl bg-primary/25"
          src="assets/home-logo.svg"
          alt=""
        />
      </Link>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <div className="py-6">
              <MenuIcon className="p-2 size-10 text-primary rounded-xl bg-primary/25" />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-darkbg2 px-1">
            <SheetHeader>
              <SheetTitle className="text-primary text-center">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-10">
              <RenderSideItem />
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <RenderSideItem />
      )}
    </aside>
  );
}

export default Sidebar;
