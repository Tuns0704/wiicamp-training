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
    <div className="p-6 sm:w-[calc(100vw-104px)]">
      <h1 className="text-white text-[28px] font-semibold leading-8 mb-6">
        Settings
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 base:gap-6 text-white">
        <div className="lg:w-[350px] base:min-w-[275px] lg:min-h-[calc(100vh-104px)] flex lg:flex-col rounded-lg bg-dark-bg2 w-full overflow-x-scroll">
          {setting.map((item) => (
            <SettingCard
              key={item.id}
              item={item}
              handleSettingOption={handleSettingOption}
              settingOption={settingOption}
            />
          ))}
        </div>
        <div className="w-full bg-dark-bg2 rounded-lg p-6">
          {settingOption === 'Products Management' && <ProductsManagement />}
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
