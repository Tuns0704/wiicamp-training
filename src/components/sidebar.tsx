import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import routes from '@/constants/app-routes';

import LogoutIcon from './icons/logout';

function RenderSideItem() {
  return (
    <>
      <ul className="block h-fit w-full">
        {routes.map((item) => {
          return (
            <li key={item.name} className="h-[calc(100vh-90vh)] w-full sm:ml-2">
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <div
                    className={`relative py-3 pl-3 pr-5 ${isActive ? 'rounded-l-xl bg-dark-linebase' : ''}`}
                  >
                    {isActive && (
                      <>
                        <div className="absolute -top-4 right-0 size-4 bg-dark-linebase before:absolute before:size-4 before:h-full before:w-full before:rounded-br-full before:bg-dark-bg2 before:content-[''] sm:right-2" />
                        <div className="absolute -bottom-4 right-0 size-4 bg-dark-linebase before:absolute before:size-3 before:h-full before:w-full before:rounded-tr-full before:bg-dark-bg2 before:content-[''] sm:right-2" />
                      </>
                    )}
                    <div
                      className={`flex items-center justify-center gap-3 rounded-lg p-4 transition-colors duration-200 ease-in sm:w-fit ${isActive ? 'bg-primary font-bold text-white' : 'text-primary'}`}
                    >
                      <div className="flex gap-2">{item.icon}</div>
                    </div>
                  </div>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="my-6 flex justify-center sm:mr-2 sm:mt-auto">
        <div className="flex items-center justify-center gap-3 font-bold text-primary sm:p-5">
          <LogoutIcon />
        </div>
      </div>
    </>
  );
}

function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <aside className="fixed left-0 top-0 z-50 flex w-screen flex-row-reverse items-center justify-between overflow-hidden bg-dark-bg2 px-4 sm:h-screen sm:w-[6.5rem] sm:flex-col sm:rounded-r-2xl sm:px-0">
      <Link to="/" className="w-12 sm:mr-2 sm:py-6">
        <img
          className="rounded-xl bg-primary/25 p-2"
          src="/assets/home-logo.svg"
          alt=""
        />
      </Link>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <div className="py-6">
              <MenuIcon className="size-10 rounded-xl bg-primary/25 p-2 text-primary" />
            </div>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-fit border-none bg-dark-bg2 p-0"
          >
            <SheetHeader>
              <SheetTitle className="hidden" />
              <SheetDescription className="hidden" />
            </SheetHeader>
            <div className="flex h-full flex-col items-center">
              <SheetClose className="my-4 size-10 rounded-xl bg-primary/25 p-2 text-primary">
                <X />
              </SheetClose>
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
