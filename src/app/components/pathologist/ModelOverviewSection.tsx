import svgPaths from "../../../imports/svg-ndf13z7z2n";

interface ModelOverviewSectionProps {
  modelName: string;
  clinicalProblem: string;
  applicableScenarios: string[];
  requiredInput: string;
  output: string;
  applicabilityTags: string[];
}

export function ModelOverviewSection({
  modelName,
  clinicalProblem,
  applicableScenarios,
  requiredInput,
  output,
  applicabilityTags
}: ModelOverviewSectionProps) {
  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden w-full">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] border-b border-[#d9d9d9] h-[84.5px] px-[21px] flex items-center justify-between">
        <div style={{ gap: '3.5px' }} className="flex flex-col">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-black">
            Model Overview
          </h2>
          <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
            Clinical context and application scope
          </p>
        </div>
        <div className="size-[31.5px] rounded-[4px] flex items-center justify-center">
          
        </div>
      </div>

      {/* Content Wrapper with Padding */}
      <div className="pt-6 px-6 pb-5">
        <div style={{ gap: '21px', display: 'flex', flexDirection: 'column' }}>
          {/* Model Name */}
          <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Model Name
            </p>
            <p className="font-['Roboto'] font-semibold text-[16px] leading-[24px] text-[#161616]">
              {modelName}
            </p>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Clinical Problem Statement */}
          <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Clinical Problem Statement
            </p>
            <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#161616]">
              {clinicalProblem}
            </p>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Applicable Scenarios */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Applicable Scenarios
            </p>
            <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              {applicableScenarios.map((scenario, index) => (
                <div key={index} className="flex gap-[7px] items-start">
                  <svg className="size-[14px] flex-shrink-0 mt-[3.5px]" fill="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_1_5521)">
                      <path d={svgPaths.pc012c00} stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d={svgPaths.p24f94f00} stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5521">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#161616]">
                    {scenario}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Required Input / Output */}
          <div className="flex gap-[21px]">
            <div className="flex-1" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
                Required Input
              </p>
              <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#161616]">
                {requiredInput}
              </p>
            </div>
            <div className="flex-1" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
                Output
              </p>
              <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#161616]">
                {output}
              </p>
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Supported Scenario Tags */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Supported Scenario Tags
            </p>
            <div className="flex gap-[7px] flex-wrap">
              {applicabilityTags?.map((tag, index) => (
                <div key={index} className="border border-[#d9d9d9] rounded-[4px] px-[14px] py-[7px]">
                  <span className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[rgba(0,0,0,0.85)]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}