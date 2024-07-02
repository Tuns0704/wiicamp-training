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
      className={`base:min-h-[73px] min-w-[225px] lg:w-full p-6  flex gap-2 ${settingOption === item.name ? 'bg-primary/25' : ''}`}
      key={item.id}
    >
      <div
        className={`w-4 mt-[2px] ${
          settingOption === item.name ? 'text-primary' : 'text-textlight'
        }`}
      >
        {item.icon}
      </div>
      <div>
        <h2
          className={`text-sm text-start font-medium ${settingOption === item.name ? 'text-primary' : ''}`}
        >
          {item.name}
        </h2>
        <p className="text-xs text-start text-textlight">{item.description}</p>
      </div>
    </button>
  );
}

export default SettingCard;
