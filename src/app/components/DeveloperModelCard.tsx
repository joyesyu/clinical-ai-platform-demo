import { MoreVertical, AlertCircle, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { Model } from './ModelCard';
import { useState } from 'react';

interface DeveloperModelCardProps {
  model: Model;
  onDelete: (modelId: string) => void;
}

const STATUS_CONFIG = {
  active: {
    label: 'Active',
    bg: '#f0fdf4',
    border: '#d4f5e0',
    color: '#15803d',
  },
  in_diagnosis: {
    label: 'Active',
    bg: '#f0fdf4',
    border: '#d4f5e0',
    color: '#15803d',
  },
  review: {
    label: 'In Review',
    bg: '#fffbeb',
    border: '#fde68a',
    color: '#92400e',
  },
  disabled: {
    label: 'Disabled',
    bg: 'rgba(140,140,140,0.1)',
    border: 'rgba(140,140,140,0.2)',
    color: '#8c8c8c',
  },
};

export function DeveloperModelCard({ model, onDelete }: DeveloperModelCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const status = (model.status || 'active') as keyof typeof STATUS_CONFIG;
  const taskType = model.taskType || 'Classification';
  const version = model.version || 'v1.0.0';
  const isReview   = status === 'review';
  const isDisabled = status === 'disabled';
  const isActive   = status === 'active' || status === 'in_diagnosis';
  const reviewProgress = model.reviewProgress || 'In Progress';
  const lastUpdated    = model.lastUpdated || 'N/A';
  const disabledDate   = model.disabledDate || 'N/A';
  const openTickets    = model.openTickets ?? 0;
  const failedCases24h = model.failedCases24h ?? 0;
  const usage24h       = model.usage24h || 0;

  const cfg = STATUS_CONFIG[status];

  return (
    <Link to={`/developer/model/${model.id}`} className="block">
      <div
        className="bg-white rounded-[8px] flex flex-col"
        style={{
          border: '1px solid rgba(0,0,0,0.13)',
          padding: '24px',
          height: '244px',
          opacity: isDisabled ? 0.5 : 1,
          transition: 'box-shadow 0.25s cubic-bezier(0.22,1,0.36,1), border-color 0.2s, opacity 0.25s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
          el.style.borderColor = 'rgba(0,0,0,0.22)';
          if (isDisabled) el.style.opacity = '1';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = '';
          el.style.borderColor = 'rgba(0,0,0,0.13)';
          if (isDisabled) el.style.opacity = '0.5';
        }}
      >
        {/* Header: name+version / badge+menu — h:56px matching Figma */}
        <div className="flex items-start justify-between gap-2 mb-[24px]" style={{ minHeight: '56px' }}>
          <div className="flex flex-col gap-[4px] min-w-0 flex-1">
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '30px', color: 'rgba(22,22,22,0.85)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {model.title}
            </h3>
            <div className="flex items-center gap-[7px]" style={{ height: '22px' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>
                Version {version}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>·</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>
                {taskType}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[8px] shrink-0">
            {/* Status badge */}
            <span
              className="flex items-center gap-[4px] px-[8px] py-[2px] rounded-[4px]"
              style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: '12px', lineHeight: '20px', color: cfg.color, whiteSpace: 'nowrap' }}
            >
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: cfg.color, flexShrink: 0 }} />
              {cfg.label}
            </span>

            {/* Menu */}
            <div className="relative">
              <button
                onClick={e => { e.preventDefault(); e.stopPropagation(); setShowMenu(!showMenu); }}
                className="size-[32px] flex items-center justify-center hover:bg-[rgba(0,0,0,0.04)] rounded-[6px] transition-colors"
              >
                <MoreVertical className="size-[16px] text-[#6f6f6f]" />
              </button>
              {showMenu && (
                <>
                  <div className="fixed inset-0 z-10" onClick={e => { e.preventDefault(); e.stopPropagation(); setShowMenu(false); }} />
                  <div className="absolute right-0 top-full mt-1 bg-white border border-[rgba(0,0,0,0.13)] rounded-[8px] shadow-lg py-1 min-w-[160px] z-20">
                    {isDisabled ? (
                      <button onClick={e => { e.preventDefault(); e.stopPropagation(); onDelete(model.id); setShowMenu(false); }} className="w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-[rgba(255,77,79,0.06)] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ff4d4f' }}>
                        <Trash2 className="size-[14px]" /> Delete Model
                      </button>
                    ) : (
                      <button onClick={e => { e.preventDefault(); e.stopPropagation(); setShowMenu(false); }} className="w-full px-4 py-2 text-center hover:bg-[rgba(0,0,0,0.02)] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#161616' }}>
                        Disable Model
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'rgba(82,82,82,0.8)',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: isDisabled ? 4 : 3,
            WebkitBoxOrient: 'vertical',
            marginBottom: isDisabled ? 'auto' : '24px',
            flex: isDisabled ? 1 : 'none',
          }}
        >
          {model.description}
        </p>

        {/* Metrics */}
        {isDisabled ? (
          <p className="text-right mt-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: 'rgba(111,111,111,0.9)' }}>
            Disabled since {disabledDate}
          </p>
        ) : isActive ? (
          <div className="flex gap-[21px]">
            <div className="flex flex-col gap-[4px] flex-1">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '11px', lineHeight: '14px', color: 'rgba(111,111,111,0.75)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                {openTickets > 0 ? 'Open Tickets' : 'Usage (24H)'}
              </p>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: openTickets > 0 ? '#dc1111' : 'rgba(22,22,22,0.85)' }}>
                {openTickets > 0 ? openTickets : usage24h}
              </span>
            </div>
            <div className="flex flex-col gap-[4px] flex-1">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '11px', lineHeight: '14px', color: 'rgba(111,111,111,0.75)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Failed Cases (24H)
              </p>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px', color: 'rgba(22,22,22,0.85)' }}>
                {failedCases24h}
              </span>
            </div>
          </div>
        ) : isReview ? (
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-[6px] flex-1">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '11px', lineHeight: '14px', color: 'rgba(111,111,111,0.75)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Progress
              </p>
              <div className="flex items-center gap-[4px]">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '14px', lineHeight: '22px', color: reviewProgress === 'Needs Revision' ? '#dc1111' : 'rgba(22,22,22,0.85)' }}>
                  {reviewProgress}
                </span>
                {reviewProgress === 'Needs Revision' && <AlertCircle className="size-[14px] text-[#dc1111]" />}
              </div>
            </div>
            <div className="flex flex-col gap-[6px] flex-1">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '11px', lineHeight: '14px', color: 'rgba(111,111,111,0.75)', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Last Updated
              </p>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>
                {lastUpdated}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  );
}
