import { useNavigate, useLocation } from 'react-router';

import imgLogoIcon2 from '../../../assets/logo-icon.png';
import imgIconHelp1 from '../../../assets/icon_help.png';
import imgIconNotifications1 from '../../../assets/icon_notifications.png';
import avatarSarah from '../../../assets/avatar-sarah.jpg';

const imgEllipse3 = avatarSarah;

export interface NavTab {
  label: string;
  path: string;
  isActive: (pathname: string) => boolean;
}

const PATHOLOGIST_TABS: NavTab[] = [
  {
    label: 'Marketplace',
    path: '/pathologist/marketplace',
    isActive: (p) => p.includes('/marketplace'),
  },
  {
    label: 'Workspace',
    path: '/pathologist/workspace',
    isActive: (p) => p.includes('/workspace'),
  },
];

export const DEVELOPER_TABS: NavTab[] = [
  {
    label: 'Jobs',
    path: '/developer/jobs',
    isActive: (p) => p.includes('/jobs'),
  },
  {
    label: 'My Models',
    path: '/developer/models',
    isActive: (p) => p.includes('/models') || p === '/',
  },
];

export const DEVELOPER_HOME_ROUTE = '/developer/models';

interface PathologistHeaderProps {
  tabs?: NavTab[];
  homeRoute?: string;
  onNotificationsClick?: () => void;
}

export function PathologistHeader({
  tabs = PATHOLOGIST_TABS,
  homeRoute = '/pathologist/marketplace',
  onNotificationsClick,
}: PathologistHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 h-[56px] bg-white drop-shadow-[0px_2px_3px_rgba(114,114,114,0.25)]">
      <div className="h-full flex items-center justify-between px-[24px]">

        {/* Left: logo group + nav tabs */}
        <div className="flex items-center gap-[48px]">

          {/* Logo group */}
          <div
            className="flex items-center gap-[16px] cursor-pointer"
            onClick={() => navigate(homeRoute)}
          >
            <div className="flex items-center">
              <div className="relative shrink-0 size-[40px]">
                <img alt="" className="absolute inset-0 size-full object-contain pointer-events-none" src={imgLogoIcon2} />
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '16px', lineHeight: '24px', color: '#161616', whiteSpace: 'nowrap' }}>
                Pixcell
              </p>
            </div>

            {/* Vertical divider */}
            <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.15)', flexShrink: 0 }} />

            {/* AI Model Management */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '14px', lineHeight: '16px', color: 'rgba(103,103,103,0.9)', whiteSpace: 'nowrap' }}>
              AI Model Management
            </p>
          </div>

          {/* Nav tabs */}
          <div className="flex items-start gap-[16px] justify-center pt-[16px]" style={{ height: '60px' }}>
            {tabs.map((tab) => {
              const isActive = tab.isActive(location.pathname);
              return (
                <div key={tab.label} className="relative shrink-0 h-[44px]">
                  <button
                    onClick={() => navigate(tab.path)}
                    className="h-[26px] flex items-center justify-center px-[16px]"
                  >
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '26px', color: isActive ? '#161616' : '#525252', whiteSpace: 'nowrap' }}>
                      {tab.label}
                    </span>
                  </button>
                  <div
                    className="absolute rounded-full"
                    style={{
                      background: '#229f90',
                      height: '3px',
                      left: '16px',
                      right: '16px',
                      top: '41px',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1)',
                      transformOrigin: 'center',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: icons + user */}
        <div className="flex items-center gap-[24px]">

          {/* Help + Notifications */}
          <div className="flex items-center gap-[24px]">
            <img src={imgIconHelp1} alt="Help" style={{ width: '25px', height: '25px', objectFit: 'contain', opacity: 0.85 }} />
            <img
              src={imgIconNotifications1}
              alt="Notifications"
              onClick={onNotificationsClick}
              style={{ width: '25px', height: '25px', objectFit: 'contain', opacity: 0.85, cursor: onNotificationsClick ? 'pointer' : 'default' }}
            />
          </div>

          {/* User avatar + name */}
          <div className="flex items-center gap-[8px]">
            <div
              className="relative shrink-0 size-[28px] rounded-full overflow-hidden"
              style={{ boxShadow: '0 0 0 2px white, 0 0 0 4px #229f90' }}
            >
              <img alt="" className="absolute inset-0 size-full object-cover block" src={imgEllipse3} />
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>
              Sarah
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
