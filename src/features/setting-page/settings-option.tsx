import setting from '@/constants/setting';
import SettingCard from './item/setting';
import { NavLink } from 'react-router-dom';

function SettingOption() {
  return (
    <>
      <div className="flex h-[4.875rem] w-full overflow-x-scroll rounded-lg bg-dark-bg2 scrollbar-none lg:h-full lg:w-[22rem] lg:flex-col base:w-[17.188rem]">
        {setting.map((item) => {
          return (
            <NavLink key={item.id} to={`./${item.path}`}>
              {({ isActive }) => (
                <SettingCard isActive={isActive} item={item} />
              )}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default SettingOption;
