import svgPaths from "./svg-0ovovbjrbk";

export default function ModelCard() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="model card">
      <div className="content-stretch flex items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[23px] items-center justify-center p-[4px] relative shrink-0 w-[554px]">
          <div className="content-stretch flex flex-col h-[98px] items-start justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[174px] items-start justify-end relative shrink-0 w-full">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[24px] text-[rgba(22,22,22,0.85)] w-[285px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                DeepColon Prognosticator
              </p>
              <div className="content-stretch flex items-start justify-end relative shrink-0 w-[90px]" data-name="Container">
                <div className="flex-[1_0_0] min-h-px min-w-px relative">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
                    <div className="bg-[rgba(82,196,26,0.1)] h-[23px] relative rounded-[4px] shrink-0 w-[52.391px]" data-name="span">
                      <div aria-hidden="true" className="absolute border border-[rgba(82,196,26,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[14px] left-[11.5px] text-[#237804] text-[10.5px] top-[4.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Active
                      </p>
                    </div>
                    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="button">
                      <div className="absolute left-[7px] size-[18px] top-[7px]" data-name="MoreVertical">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g id="MoreVertical">
                            <path d={svgPaths.p3f4e600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.5" />
                            <path d={svgPaths.p2aca4e80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.5" />
                            <path d={svgPaths.p10b1cef0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(82,82,82,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Version v2.1.3
            </p>
            <div className="h-[28px] relative rounded-[4px] shrink-0 w-[90px]" data-name="span">
              <div aria-hidden="true" className="absolute border border-[rgba(111,111,111,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[8px] text-[#6f6f6f] text-[12px] top-[4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Classification
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0 w-full">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#525252] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              Predict the prognosis of colon cancer from biopsy images, helping oncologists tailor treatment plans.
            </p>
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[72px]">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-[rgba(111,111,111,0.75)] tracking-[0.2625px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Error Rate
                </p>
                <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-[rgba(22,22,22,0.85)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  2.1%
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[268px]">
                <div className="content-stretch flex flex-col gap-[6px] items-start justify-end relative shrink-0">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-[rgba(111,111,111,0.75)] tracking-[0.2625px] uppercase w-[82px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Errors (24h)
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[32px] text-[rgba(22,22,22,0.85)] w-[82px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}