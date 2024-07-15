import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import setting from '@/constants/setting';
import SettingCard from './items/setting-item';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function SettingOption() {
  const [selectedSetting, setSelectedSetting] = useState(
    window.location.pathname.split('/')[2] || '',
  );

  const navigate = useNavigate();
  const device = useMediaQuery('(max-width: 640px)');

  return (
    <div>
      {device ? (
        <Select
          value={selectedSetting}
          onValueChange={(value) => {
            navigate(`./${value}`);
            setSelectedSetting(value);
          }}
        >
          <SelectTrigger className="border border-dark-linebase bg-dark-bg2 py-4 font-medium text-white focus:ring-0">
            <SelectValue placeholder="Settings" />
          </SelectTrigger>
          <SelectContent className="z-[999] border border-dark-linebase bg-dark-bg2 font-medium text-white">
            {setting.map((item) => (
              <SelectItem key={item.name} value={item.path}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <div className="flex h-[4.875rem] w-full overflow-x-scroll rounded-lg bg-dark-bg2 scrollbar-none md:flex lg:h-full lg:w-[22rem] lg:flex-col base:w-[17.188rem]">
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
      )}
    </div>
  );
}

export default SettingOption;
