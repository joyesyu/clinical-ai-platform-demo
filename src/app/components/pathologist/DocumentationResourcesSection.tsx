import svgPaths from "../../../imports/svg-1ee1imfcl0";

export function DocumentationResourcesSection() {
  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden w-full">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] border-b border-[#d9d9d9] h-[84.5px] px-[21px] flex items-center justify-between">
        <div style={{ gap: '3.5px' }} className="flex flex-col">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-black">
            Documentation & Resources
          </h2>
          <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
            Supporting materials and references
          </p>
        </div>
        
      </div>

      {/* Content */}
      <div className="pt-[20px] px-[24px] pb-[20px]">
        <div style={{ gap: '21px', display: 'flex', flexDirection: 'column' }}>
          {/* Documentation */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Documentation
            </p>
            
            {/* User Guide Button */}
            <button className="border border-[rgba(9,109,217,0.8)] rounded-[4px] h-[69px] px-[15px] flex items-center justify-between w-full hover:bg-[rgba(9,109,217,0.04)] transition-colors">
              <div className="flex gap-[14px] items-center">
                <svg className="size-[17.5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                  <g>
                    <path d={svgPaths.p32dd8c80} stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d={svgPaths.p3ab04900} stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d="M7.29167 6.5625H5.83333" stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d="M11.6667 9.47917H5.83333" stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d="M11.6667 12.3958H5.83333" stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                  </g>
                </svg>
                <div className="text-left">
                  <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                    User Guide & API Documentation
                  </p>
                  <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                    Complete integration and usage instructions
                  </p>
                </div>
              </div>
              <p className="font-['Roboto'] font-medium text-[14px] leading-[18px] text-[#096dd9]">
                View →
              </p>
            </button>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Release Notes */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Release Notes
            </p>
            
            <div style={{ gap: '10.5px', display: 'flex', flexDirection: 'column' }}>
              {/* Version 2.1.0 */}
              <div className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <div className="flex items-center justify-between mb-[7px]">
                  <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                    Version 2.1.0
                  </p>
                  <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                    Feb 2026
                  </p>
                </div>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#525252]">
                  Improved sensitivity on amelanotic melanoma cases (+5% sensitivity). Added support for NDPI format. Bug fixes for edge artifacts on scanned slides.
                </p>
              </div>

              {/* Version 2.0.0 */}
              <div className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <div className="flex items-center justify-between mb-[7px]">
                  <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                    Version 2.0.0
                  </p>
                  <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                    Oct 2025
                  </p>
                </div>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#525252]">
                  Major update with retrained model on expanded dataset (3,000 → 5,000 cases). External validation at two additional institutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Scientific Publications */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Scientific Publications
            </p>
            
            <div style={{ gap: '10.5px', display: 'flex', flexDirection: 'column' }}>
              {/* Publication 1 */}
              <div className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <div className="flex gap-[14px] items-start">
                  <svg className="size-[17.5px] flex-shrink-0 mt-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                    <g>
                      <path d="M8.75 5.10417V15.3125" stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                      <path d={svgPaths.p3482700} stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    </g>
                  </svg>
                  <div>
                    <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] mb-[3.5px]">
                      Analysis of Virtual H&E on 20 bases of skin lesions
                    </p>
                    <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f] mb-[7px]">
                      Published in: <span className="font-['Roboto'] font-medium text-[12px] leading-[20px]">JAMA Dermatology</span> • 2022
                    </p>
                    <p className="font-['Roboto'] font-normal italic text-[12px] leading-[20px] text-[#6f6f6f]">
                      Authors: L. Loeb, S. Turner
                    </p>
                  </div>
                </div>
              </div>

              {/* Publication 2 */}
              <div className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <div className="flex gap-[14px] items-start">
                  <svg className="size-[17.5px] flex-shrink-0 mt-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                    <g>
                      <path d="M8.75 5.10417V15.3125" stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                      <path d={svgPaths.p3482700} stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    </g>
                  </svg>
                  <div>
                    <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] mb-[3.5px]">
                      Quantifying results from Virtual H&E on minor lesions
                    </p>
                    <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f] mb-[7px]">
                      Published in: <span className="font-['Roboto'] font-medium text-[12px] leading-[20px]">Nature Medicine</span> • 2021
                    </p>
                    <p className="font-['Roboto'] font-normal italic text-[12px] leading-[20px] text-[#6f6f6f]">
                      Authors: L. Loeb, S. Turner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}