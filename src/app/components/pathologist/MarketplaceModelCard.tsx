import { Link } from "react-router";
import imgHospital1 from "figma:asset/09c9138fae8e42a787af08edb0f8d39b50b3bfe2.png";
import imgResearch1 from "figma:asset/0d5c3c1dd2bc92a8c4b9ed8a23da75a7a6087a26.png";

interface MarketplaceModelCardProps {
  id: string;
  name: string;
  taskType: string;
  clinicalUseOneLine: string;
  applicabilityTags: string[];
  usageStatus: "Clinical-ready" | "Research-only" | "Dual-use" | string;
  accessStatus?: string;
  onRequestAccess?: () => void;
}

export function MarketplaceModelCard({
  id,
  name,
  taskType,
  clinicalUseOneLine,
  applicabilityTags,
  usageStatus,
  accessStatus,
  onRequestAccess
}: MarketplaceModelCardProps) {
  const getTaskTypeBadgeStyles = (taskType: string) => {
    switch (taskType) {
      case "Detection":
        return { backgroundColor: "#f0fdf9", borderColor: "#d2eddb", textColor: "#0f7661" };
      case "Classification":
        return { backgroundColor: "#eff6ff", borderColor: "#bfdbfe", textColor: "#1d4ed8" };
      case "Segmentation":
        return { backgroundColor: "#fffbeb", borderColor: "#fde68a", textColor: "#92400e" };
      case "Grading":
        return { backgroundColor: "#f5f3ff", borderColor: "#ddd6fe", textColor: "#5b21b6" };
      default:
        return { backgroundColor: "#eff6ff", borderColor: "#bfdbfe", textColor: "#1d4ed8" };
    }
  };

  const taskBadgeStyles = getTaskTypeBadgeStyles(taskType);
  const isResearchOnly = usageStatus === "Research-only";
  const statusImage = isResearchOnly ? imgResearch1 : imgHospital1;
  const statusText = isResearchOnly ? "Research" : "Clinical";

  return (
    <Link to={`/pathologist/marketplace/${id}`} className="block">
      <div
        className="bg-white relative w-full h-full flex flex-col border border-[rgba(0,0,0,0.13)] rounded-[12px] p-[24px] cursor-pointer group"
        style={{ transition: 'box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1), border-color 0.2s ease' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.22)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ''; (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.13)'; }}
      >
        {/* Top Badges Row */}
        <div className="flex items-center gap-[8px] mb-[16px] min-h-[26px]">
          {/* Task Type Badge */}
          <div
            className="inline-flex items-center justify-center px-[9px] py-[3px] rounded-[6px] border"
            style={{
              backgroundColor: taskBadgeStyles.backgroundColor,
              borderColor: taskBadgeStyles.borderColor,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px',
                lineHeight: '20px',
                color: taskBadgeStyles.textColor,
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {taskType}
            </span>
          </div>

          {/* Usage Status Badge */}
          <div className="inline-flex items-center gap-[4px] px-[9px] py-[5px] rounded-[6px] border border-[#ebebeb]">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute inset-0 size-full object-cover" src={statusImage} />
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px',
                lineHeight: '16px',
                color: 'rgba(82,82,82,0.85)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                textTransform: 'capitalize',
              }}
            >
              {statusText}
            </span>
          </div>
        </div>

        {/* Model Name and Description */}
        <div className="flex flex-col gap-[4px] mb-[16px] flex-grow">
          <h3
            className="group-hover:text-primary transition-colors"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: 500,
              color: '#000000',
            }}
          >
            {name}
          </h3>
          <div className="overflow-clip" style={{ height: '110px' }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                lineHeight: '22px',
                color: '#525252',
                fontWeight: 400,
                height: '110px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 5,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {clinicalUseOneLine}
            </p>
          </div>
        </div>

        {/* Applicability Tags */}
        <div className="relative" style={{ height: '58px' }}>
          <div className="absolute left-0 top-0 flex flex-wrap gap-[4px] w-full">
            {applicabilityTags.slice(0, 4).map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center px-[9px] py-[3px] rounded-[6px]"
                style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.13)' }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '12px',
                    lineHeight: '20px',
                    color: '#4b5563',
                    fontWeight: 400,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
