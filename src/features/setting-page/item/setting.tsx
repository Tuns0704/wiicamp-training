interface SettingCardProps {
  settingOption: string;
  item: {
    name: string;
    icon: JSX.Element;
    description: string;
    id: number;
  };
  handleSettingOption: (value: string) => void;
}

function SettingCard({
  settingOption,
  item,
  handleSettingOption,
}: SettingCardProps) {
  return (
    <button
      onClick={() => handleSettingOption(item.name)}
      aria-label="button"
      type="button"
      className={`relative flex min-w-[245px] gap-2 p-6 lg:w-full base:min-h-[73px] ${settingOption === item.name ? 'bg-primary/25' : ''}`}
      key={item.id}
    >
      {settingOption === item.name && (
        <div className="absolute right-0 h-[40px] w-1 rounded-full bg-primary"></div>
      )}
      <div
        className={`mt-[2px] w-4 ${
          settingOption === item.name ? 'text-primary' : 'text-textlight'
        }`}
      >
        {item.icon}
      </div>
      <div>
        <h2
          className={`text-start text-sm font-medium ${settingOption === item.name ? 'text-primary' : ''}`}
        >
          {item.name}
        </h2>
        <p className="text-start text-xs text-textlight">{item.description}</p>
      </div>
    </button>
  );
}

export default SettingCard;
