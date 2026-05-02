import { useNavigate, useLocation } from 'react-router';
import svgPaths from '../../imports/svg-zz5s8yh7wy';
import settingsSvgPaths from '../../imports/svg-dh7oh5ja29';

interface HeaderProps {
  onNotificationsClick?: () => void;
  notificationCount?: number;
}

export function Header({ onNotificationsClick, notificationCount = 0 }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isJobsPage = location.pathname === '/developer/jobs';
  const isDashboardPage = location.pathname === '/developer/models';
  
  return (
    <header className="sticky top-0 z-50 h-[56px] bg-white shadow-[0px_2px_6px_0px_rgba(114,114,114,0.25)]">
      <div className="h-full px-6 grid items-center" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
        {/* Logo & Brand */}
        <div className="flex items-center gap-[10.5px] cursor-pointer" onClick={() => navigate('/developer/models')}>
          <h1 className="font-semibold leading-[32px] text-[24px] text-[#2280c9]">PIXCELL</h1>
          <p className="font-bold leading-[26px] text-[18px] text-[rgba(58,77,90,0.85)]">Model Management</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/developer/jobs')}
            className="h-[56px] flex flex-col items-center justify-between pt-[16px]"
          >
            <span className={`font-medium leading-[26px] text-[18px] whitespace-nowrap ${isJobsPage ? 'text-[#161616]' : 'text-[#525252]'}`}>
              Jobs
            </span>
            <div className={`h-[2px] w-full rounded-full ${isJobsPage ? 'bg-[#1890ff]' : 'bg-transparent'}`} />
          </button>
          <button
            onClick={() => navigate('/developer/models')}
            className="h-[56px] flex flex-col items-center justify-between pt-[16px]"
          >
            <span className={`font-medium leading-[26px] text-[18px] whitespace-nowrap ${isDashboardPage ? 'text-[#161616]' : 'text-[#525252]'}`}>
              My Models
            </span>
            <div className={`h-[2px] w-full rounded-full ${isDashboardPage ? 'bg-[#1890ff]' : 'bg-transparent'}`} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-[16px] justify-end">
          <button
            className="relative rounded-[4px] size-[32px] flex items-center justify-center"
            aria-label="Notifications"
            onClick={onNotificationsClick}
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p369f8680} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p21b0a2c0} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            {notificationCount > 0 && (
              <div className="absolute bg-[#ff4d4f] flex items-center justify-center rounded-full size-[18px] top-0 left-[11.5px]">
                <span className="font-semibold text-[10px] text-white leading-[15px]">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              </div>
            )}
          </button>

          <button
            className="size-[32px] flex items-center justify-center rounded-[4px]"
            aria-label="Settings"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={settingsSvgPaths.p38ffec00} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={settingsSvgPaths.p3cccb600} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>

          <div
            className="size-[32px] rounded-[4px] flex items-center justify-center text-white text-[12px] font-medium cursor-pointer"
            style={{ background: '#4e7da9' }}
          >
            DS
          </div>
        </div>
      </div>
    </header>
  );
}