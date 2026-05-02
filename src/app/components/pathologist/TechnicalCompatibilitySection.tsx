import svgPaths from "../../../imports/svg-88gnhluhut";

export function TechnicalCompatibilitySection() {
  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden w-full">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] border-b border-[#d9d9d9] h-[84.5px] px-[21px] flex items-center justify-between">
        <div style={{ gap: '3.5px' }} className="flex flex-col">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-black">
            Technical Compatibility
          </h2>
          <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
            Integration requirements and system compatibility
          </p>
        </div>
        
      </div>

      {/* Content */}
      <div className="pt-[20px] px-[24px]">
        <div style={{ gap: '21px', display: 'flex', flexDirection: 'column' }}>
          {/* Input Requirements */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Input Requirements
            </p>
            
            <div style={{ gap: '10.5px', display: 'flex', flexDirection: 'column' }}>
              {/* Supported Image Formats */}
              <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] mb-[7px]">
                  Supported Image Formats
                </p>
                <div className="flex gap-[7px] flex-wrap">
                  {['DICOM', 'SVS', 'NDPI', 'TIFF'].map((format, index) => (
                    <span
                      key={index}
                      className="bg-transparent rounded-[4px] px-[14px] py-[7px] font-['Roboto'] font-medium text-[12px] leading-[20px] text-[rgba(0,0,0,0.85)]"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resolution & Quality */}
              <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] mb-[7px]">
                  Resolution & Quality
                </p>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#525252]">
                  Minimum 0.25 μm/pixel resolution (40x magnification). Images should be properly focused and color-balanced. Scanner-specific color calibration recommended.
                </p>
              </div>

              {/* Slide Type */}
              <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] mb-[7px]">
                  Slide Type
                </p>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#525252]">
                  H&E stained formalin-fixed paraffin-embedded (FFPE) skin tissue sections only. Not compatible with frozen sections or immunohistochemistry stains.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Output Format */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Output Format
            </p>
            
            <div style={{ gap: '10.5px', display: 'flex', flexDirection: 'column' }}>
              {/* Return Type */}
              <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] mb-[7px]">
                  Return Type
                </p>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#525252]">
                  JSON response containing classification probability (0-1 score), heatmap overlay image (PNG), and metadata including processing timestamp and model version.
                </p>
              </div>

              {/* Heatmap Visualization */}
              <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
                <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] mb-[7px]">
                  Heatmap Visualization
                </p>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#525252]">
                  Attention heatmap returned as transparent PNG overlay, compatible with standard digital pathology viewers. Can be toggled on/off in most PACS systems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Prerequisites & System Requirements */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }} className="pb-[20px]">
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Prerequisites & System Requirements
            </p>
            
            <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              {[
                'RESTful API accessible within hospital network (no external internet required)',
                'Compatible with PACS/LIS systems supporting HL7 or DICOM integration',
                'Standard HTTPS/TLS 1.2+ for secure transmission',
                'Average processing time: 30-60 seconds per slide (depends on image size)'
              ].map((item, index) => (
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
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}