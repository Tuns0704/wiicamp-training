import { useState } from 'react';
import setting from '@/constants/setting';
import ProductsManagement from './product-management';
import SettingCard from './item/setting';

function SettingPage() {
  const [settingOption, setSettingOption] = useState(setting[0].name);

  const handleSettingOption = (name: string) => {
    setSettingOption(name);
  };

  return (
    <div className="overflow-hidden p-6 sm:h-screen sm:max-h-screen sm:w-[calc(100vw-104px)]">
      <h1 className="mb-6 hidden text-[28px] font-semibold leading-10 text-white lg:block">
        Settings
      </h1>
      <div className="flex flex-col gap-4 text-white lg:h-[calc(100vh-112px)] lg:flex-row base:gap-6">
        <div className="flex h-[78px] w-full overflow-x-scroll rounded-lg bg-dark-bg2 scrollbar-none lg:h-full lg:w-[350px] lg:flex-col base:min-w-[275px]">
          {setting.map((item) => (
            <SettingCard
              key={item.id}
              item={item}
              handleSettingOption={handleSettingOption}
              settingOption={settingOption}
            />
          ))}
        </div>
        <div className="h-[calc(100vh-226px)] w-full rounded-lg bg-dark-bg2 p-6 sm:h-[calc(100vh-142px)] lg:h-full">
          {settingOption === 'Products Management' && <ProductsManagement />}
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
