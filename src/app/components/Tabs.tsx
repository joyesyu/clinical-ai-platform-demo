interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 text-[14px] font-medium transition-all border-b-2 ${
        isActive
          ? 'border-primary text-primary'
          : 'border-transparent text-[#525252] hover:text-[#161616] hover:border-border'
      }`}
    >
      {label}
    </button>
  );
}

interface TabsProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className = '' }: TabsProps) {
  return (
    <div className={`flex items-center border-b border-border ${className}`}>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          isActive={activeTab === tab.value}
          onClick={() => onChange(tab.value)}
        />
      ))}
    </div>
  );
}
