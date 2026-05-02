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
        return {
          backgroundColor: "rgba(217, 247, 190, 0.45)",
          borderColor: "rgba(19, 82, 0, 0.4)",
          textColor: "#135200"
        };
      case "Classification":
        return {
          backgroundColor: "rgba(208, 231, 255, 0.45)",
          borderColor: "rgba(0, 58, 140, 0.4)",
          textColor: "#003a8c"
        };
      case "Segmentation":
        return {
          backgroundColor: "rgba(255, 241, 184, 0.45)",
          borderColor: "rgba(135, 77, 0, 0.4)",
          textColor: "#874d00"
        };
      case "Grading":
        return {
          backgroundColor: "rgba(249, 240, 255, 0.85)",
          borderColor: "rgba(57, 16, 133, 0.4)",
          textColor: "#391085"
        };
      default:
        return {
          backgroundColor: "rgba(208, 231, 255, 0.45)",
          borderColor: "rgba(0, 58, 140, 0.4)",
          textColor: "#003a8c"
        };
    }
  };

  const taskBadgeStyles = getTaskTypeBadgeStyles(taskType);
  const isResearchOnly = usageStatus === "Research-only";
  const statusImage = isResearchOnly ? imgResearch1 : imgHospital1;
  const statusText = isResearchOnly ? "RESEARCH-ONLY" : "CLINICAL-READY";

  return (
    <Link to={`/pathologist/marketplace/${id}`} className="block">
      <div
        className="bg-white relative w-full h-full flex flex-col border border-[#dfdfdf] rounded-[12px] p-[24px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer group"
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
              className="font-['Roboto_Flex'] whitespace-nowrap"
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                color: taskBadgeStyles.textColor,
                fontWeight: 400,
                fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100"
              }}
            >
              {taskType}
            </span>
          </div>

          {/* Usage Status Badge */}
          <div className="inline-flex items-center gap-[4px] px-[9px] py-[5px] rounded-[6px] border border-[#ebebeb]">
            <div className="relative shrink-0 size-[20px]">
              <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                src={statusImage}
              />
            </div>
            <span
              className="font-['Roboto_Flex'] uppercase whitespace-nowrap"
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                color: '#525252',
                fontWeight: 400,
                fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100"
              }}
            >
              {statusText}
            </span>
          </div>
        </div>

        {/* Model Name and Description */}
        <div className="flex flex-col gap-[4px] mb-[16px] flex-grow">
          <h3
            className="font-['Roboto'] group-hover:text-primary transition-colors"
            style={{
              fontSize: '18px',
              lineHeight: '26px',
              fontWeight: 500,
              color: '#000000'
            }}
          >
            {name}
          </h3>
          <div className="overflow-clip" style={{ height: '110px' }}>
            <p
              className="font-['Roboto']"
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: '#525252',
                fontWeight: 400,
                height: '110px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 5,
                WebkitBoxOrient: 'vertical'
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
                className="inline-flex items-center bg-white px-[9px] py-[3px] rounded-[6px] border border-[rgba(82,82,82,0.4)]"
              >
                <span
                  className="font-['Roboto_Mono'] whitespace-nowrap"
                  style={{
                    fontSize: '12px',
                    lineHeight: '20px',
                    color: '#6f6f6f',
                    fontWeight: 400
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
