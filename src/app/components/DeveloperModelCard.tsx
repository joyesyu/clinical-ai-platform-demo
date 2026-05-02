import { Trash2, MoreVertical, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { Model } from './ModelCard';
import { useState } from 'react';

interface DeveloperModelCardProps {
  model: Model;
  onDelete: (modelId: string) => void;
}

export function DeveloperModelCard({ model, onDelete }: DeveloperModelCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const statusConfig = {
    active: {
      label: 'Active',
      className: 'bg-[#247804]/10 text-[#247804] border-[#247804]/20',
    },
    in_diagnosis: {
      label: 'Active',
      className: 'bg-[#247804]/10 text-[#247804] border-[#247804]/20',
    },
    review: {
      label: 'In Review',
      className: 'bg-[#AA5907]/10 text-[#AA5907] border-[#AA5907]/20',
    },
    disabled: {
      label: 'Disabled',
      className: 'bg-[#8c8c8c]/10 text-[#8c8c8c] border-[#8c8c8c]/20',
    },
  };

  const status = model.status || 'active';
  const taskType = model.taskType || 'Classification';
  const version = model.version || 'v1.0.0';
  const isReviewStatus = status === 'review';
  const isDisabledStatus = status === 'disabled';
  const isActiveOrInDiagnosis = status === 'active' || status === 'in_diagnosis';
  const reviewProgress = model.reviewProgress || '0 / 5 checks completed';
  const lastUpdated = model.lastUpdated || 'N/A';
  const disabledDate = model.disabledDate || 'N/A';
  const openTickets = model.openTickets ?? 0;
  const failedCases24h = model.failedCases24h ?? 0;
  const usage24h = model.usage24h || 0;

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(model.id);
    setShowMenu(false);
  };

  return (
    <Link to={`/developer/model/${model.id}`} className="block">
      <div className="bg-white border border-[#d9d9d9] rounded-[8px] transition-shadow duration-200 group h-[244px]" style={{ boxShadow: 'none' }} onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)')} onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
        <div className="px-[24px] pt-[24px] pb-[24px] flex flex-col gap-0 h-full">

          {/* Header row: name+version / badge+menu */}
          <div className={`flex items-start justify-between gap-2 ${isActiveOrInDiagnosis ? 'mb-[18px]' : 'mb-[24px]'}`}>
            <div className="flex flex-col gap-[4px] min-w-0 flex-1">
              <h3 className="font-bold text-[20px] leading-[28px] text-[rgba(22,22,22,0.85)] truncate">
                {model.title}
              </h3>
              <div className="flex items-center gap-[7px]">
                <span className="text-[14px] font-normal leading-[22px] text-[rgba(82,82,82,0.85)] whitespace-nowrap">Version {version}</span>
                <span className="text-[14px] font-normal leading-[22px] text-[rgba(82,82,82,0.85)]">·</span>
                <span className="text-[14px] font-medium leading-[22px] text-[#6f6f6f] whitespace-nowrap">{taskType}</span>
              </div>
            </div>
            <div className="flex items-center gap-[8px] shrink-0">
              <span className={`h-[27px] px-[10.5px] flex items-center rounded-[4px] text-[12px] font-medium border whitespace-nowrap ${statusConfig[status]?.className}`}>
                {statusConfig[status]?.label}
              </span>
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                  }}
                  className="size-[32px] flex items-center justify-center hover:bg-[#f5f5f5] rounded-[8px] transition-colors"
                >
                  <MoreVertical className="size-[18px] text-[#6f6f6f]" />
                </button>
                {showMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowMenu(false); }}
                    />
                    <div className="absolute right-0 top-full mt-1 bg-white border border-[#d9d9d9] rounded-[8px] shadow-lg py-1 min-w-[160px] z-20">
                      {isDisabledStatus ? (
                        <button
                          onClick={handleDelete}
                          className="w-full px-4 py-2 text-left text-[14px] text-[#ff4d4f] hover:bg-[#fff1f0] transition-colors flex items-center gap-2"
                        >
                          <Trash2 className="size-[16px]" />
                          Delete Model
                        </button>
                      ) : (
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowMenu(false); }}
                          className="w-full px-4 py-2 text-center text-[14px] text-[#161616] hover:bg-[#f5f5f5] transition-colors"
                        >
                          Disable Model
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Description
              Active:   gap after = 18px, 2 lines (top-103→151, stats at top-169)
              InReview: gap after = 24px, 2 lines (top-103→151, stats at top-175)
              Disabled: gap after = 22px, 3 lines (top-103→175, footer at top-197) */}
          <p className={`text-[16px] font-normal leading-[24px] text-[rgba(82,82,82,0.8)] ${
            isDisabledStatus ? 'h-[72px] overflow-hidden mb-[22px]' :
            isActiveOrInDiagnosis ? 'line-clamp-2 mb-[16px]' :
            'line-clamp-2 mb-[24px]'
          }`}>
            {model.description}
          </p>

          {/* Metrics */}
          {isDisabledStatus ? (
            <p className="text-[14px] font-normal leading-[22px] text-[rgba(111,111,111,0.9)] text-right">
              Disabled since {disabledDate}
            </p>
          ) : isActiveOrInDiagnosis ? (
            <div className="flex" style={{ gap: '21px' }}>
              <div className="flex flex-col gap-[4px] flex-1">
                <p className="text-[12px] font-medium leading-[14px] text-[rgba(111,111,111,0.75)] uppercase tracking-[0.2625px]">
                  {openTickets > 0 ? 'Open Tickets' : '24H Usage'}
                </p>
                <span className="text-[24px] font-bold leading-[32px]" style={{ color: openTickets > 0 ? '#dc1111' : 'rgba(22,22,22,0.85)' }}>
                  {openTickets > 0 ? openTickets : usage24h}
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1">
                <p className="text-[12px] font-medium leading-[14px] text-[rgba(111,111,111,0.75)] uppercase tracking-[0.2625px]">
                  Failed Cases (24H)
                </p>
                <span className="text-[24px] font-bold leading-[32px] text-[rgba(22,22,22,0.85)]">{failedCases24h}</span>
              </div>
            </div>
          ) : isReviewStatus ? (
            <div className="flex">
              <div className="flex flex-col gap-[6px] flex-1">
                <p className="text-[12px] font-medium leading-[20px] text-[rgba(111,111,111,0.85)] uppercase tracking-[0.2625px]">
                  Progress
                </p>
                <div className="flex items-center gap-[4px]">
                  <span
                    className="text-[16px] font-semibold leading-[24px]"
                    style={{ color: reviewProgress === 'Needs Revision' ? '#dc1111' : 'rgba(22,22,22,0.85)' }}
                  >
                    {reviewProgress}
                  </span>
                  {reviewProgress === 'Needs Revision' && (
                    <AlertCircle className="size-[15px] text-[#dc1111]" />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[6px] flex-1">
                <p className="text-[12px] font-medium leading-[20px] text-[#858585] uppercase tracking-[0.2625px]">
                  Last Updated
                </p>
                <span className="text-[16px] font-semibold leading-[24px] text-[rgba(22,22,22,0.85)]">
                  {lastUpdated}
                </span>
              </div>
            </div>
          ) : null}

        </div>
      </div>
    </Link>
  );
}