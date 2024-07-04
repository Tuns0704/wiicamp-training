import SettingOption from './settings-option';
import SettingContent from './settings-content';

function SettingPage() {
  return (
    <div className="overflow-hidden p-4 sm:h-screen sm:max-h-screen sm:w-[calc(100vw-6.5rem)] sm:p-6">
      <h1 className="mb-6 hidden text-[1.75rem] font-semibold leading-10 text-white lg:block">
        Settings
      </h1>
      <div className="flex flex-col gap-4 text-white lg:h-[calc(100vh-7rem)] lg:flex-row base:gap-6">
        <SettingOption />
        <SettingContent />
      </div>
    </div>
  );
}

export default SettingPage;
