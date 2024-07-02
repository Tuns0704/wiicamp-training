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
      <ul className="block w-full h-full">
        {routes.map((item) => {
          return (
            <li key={item.name} className="w-full sm:ml-2 h-[calc(100%-85%)]">
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <div
                    className={`relative py-3 pl-3 pr-5 ${isActive ? 'bg-dark-linebase rounded-l-xl' : ''}`}
                  >
                    {isActive && (
                      <>
                        <div className="absolute size-4 -top-4 right-0 sm:right-2 bg-dark-linebase before:content-[''] before:size-4 before:bg-dark-bg2 before:w-full before:h-full before:absolute before:rounded-br-full" />
                        <div className="absolute size-4 -bottom-4 right-0 sm:right-2 bg-dark-linebase before:content-[''] before:size-3 before:bg-dark-bg2 before:w-full before:h-full before:absolute before:rounded-tr-full" />
                      </>
                    )}
                    <div
                      className={`p-4 sm:w-fit transition-colors ease-in duration-200  flex items-center rounded-lg gap-3 justify-center ${isActive ? 'text-white bg-primary  font-bold' : 'text-primary'}`}
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
      <div className="flex my-6 sm:mr-2 justify-center sm:mt-auto">
        <div className="sm:p-5 text-primary flex items-center justify-center gap-3 font-bold">
          <LogoutIcon />
        </div>
      </div>
    </>
  );
}

function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <aside className="w-screen sm:w-[104px] fixed top-0 left-0 overflow-hidden px-4 sm:px-0 flex flex-row-reverse sm:flex-col justify-between items-center sm:rounded-r-2xl sm:h-screen bg-dark-bg2 z-50">
      <Link to="/" className="sm:py-6 w-12 sm:mr-2">
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
          <SheetContent
            side="left"
            className="bg-dark-bg2 p-0 border-none w-fit"
          >
            <SheetHeader>
              <SheetTitle className="hidden" />
              <SheetDescription className="hidden" />
            </SheetHeader>
            <div className="flex flex-col h-full items-center">
              <SheetClose className="my-4 p-2 size-10 text-primary rounded-xl bg-primary/25">
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
