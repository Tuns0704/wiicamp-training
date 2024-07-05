interface SettingCardProps {
  isActive: boolean;
  item: {
    name: string;
    icon: JSX.Element;
    description: string;
    id: number;
    path: string;
  };
}

function SettingCard({ item, isActive }: SettingCardProps) {
  return (
    <div
      className={`relative flex w-[15.313rem] gap-2 p-6 lg:w-full base:min-h-[4.875rem] ${isActive ? 'bg-primary/25' : ''}`}
      key={item.id}
    >
      {isActive && (
        <div className="absolute right-0 h-[2.5rem] w-1 rounded-full bg-primary" />
      )}
      <div
        className={`mt-[0.125rem] w-4 ${
          isActive ? 'text-primary' : 'text-textlight'
        }`}
      >
        {item.icon}
      </div>
      <div>
        <h2
          className={`text-start text-sm font-medium ${isActive ? 'text-primary' : ''}`}
        >
          {item.name}
        </h2>
        <p className="text-start text-xs text-textlight">{item.description}</p>
      </div>
    </div>
  );
}

export default SettingCard;
