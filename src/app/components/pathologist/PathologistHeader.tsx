import { useNavigate, useLocation } from 'react-router';

export function PathologistHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const isMarketplace = location.pathname.includes('/marketplace');
  const isWorkspace = location.pathname.includes('/workspace');

  return (
    <header className="sticky top-0 z-50 h-[56px] bg-white shadow-[0px_2px_6px_0px_rgba(114,114,114,0.25)]">
      <div className="h-full px-6 grid items-center" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
        {/* Logo & Brand */}
        <div className="flex items-center gap-[10.5px] cursor-pointer" onClick={() => navigate('/pathologist/marketplace')}>
          <h1 className="font-semibold leading-[32px] text-[24px] text-[#2280c9]">PIXCELL</h1>
          <p className="font-bold leading-[26px] text-[18px] text-[rgba(58,77,90,0.85)]">Model Management</p>
        </div>

        {/* Navigation Tabs — centered */}
        <div className="flex items-end gap-[16px] h-full pt-[16px]">
          <button
            onClick={() => navigate('/pathologist/marketplace')}
            className="flex flex-col items-center gap-[12px]"
          >
            <span className={`font-medium leading-[26px] text-[18px] whitespace-nowrap px-[16px] ${isMarketplace ? 'text-[#161616]' : 'text-[#525252]'}`}>
              Marketplace
            </span>
            <div className={`h-[2px] w-full rounded-full ${isMarketplace ? 'bg-[#1890ff]' : 'bg-transparent'}`} />
          </button>
          <button
            onClick={() => navigate('/pathologist/workspace')}
            className="flex flex-col items-center gap-[12px]"
          >
            <span className={`font-medium leading-[26px] text-[18px] whitespace-nowrap px-[16px] ${isWorkspace ? 'text-[#161616]' : 'text-[#525252]'}`}>
              Workspace
            </span>
            <div className={`h-[2px] w-full rounded-full ${isWorkspace ? 'bg-[#1890ff]' : 'bg-transparent'}`} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-[16px] justify-end">

<div
            className="size-[32px] rounded-[4px] flex items-center justify-center text-white text-[12px] font-medium cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #1890ff 0%, #ffffff 100%)' }}
          >
            PA
          </div>
        </div>
      </div>
    </header>
  );
}
