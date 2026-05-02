import svgPaths from "../../../imports/svg-8x943xkbgb";
import { useState } from "react";

interface TestFile {
  name: string;
  status: string;
}

export function TestModelSection() {
  const [files, setFiles] = useState<TestFile[]>([
    { name: "NM888293.PNG", status: "Ready" },
    { name: "NM888294.PNG", status: "Ready" }
  ]);

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUploadNew = () => {
    alert("Upload new image functionality");
  };

  const handleRunTest = () => {
    alert("Run test functionality");
  };

  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden w-full">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] border-b border-[#d9d9d9] h-[84.5px] px-[21px] flex items-center justify-between">
        <div style={{ gap: '3.5px' }} className="flex flex-col">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-black">
            Test Model
          </h2>
          <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
            Upload images and run diagnostics
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="pt-[20px] px-[24px] pb-[20px]">
        <div style={{ gap: '17.5px', display: 'flex', flexDirection: 'column' }}>
          {/* Upload Test Images Section */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Upload Test Images
            </p>
            
            {/* File List */}
            <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[11px] py-px h-[58px] flex items-center gap-[10.5px]"
                >
                  {/* File Icon */}
                  <div className="size-[35px] rounded-[8px] flex items-center justify-center">
                    <svg className="size-[17.5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                      <g>
                        <path d={svgPaths.p32dd8c80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                        <path d={svgPaths.p3ab04900} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                        <path d="M7.29167 6.5625H5.83333" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                        <path d="M11.6667 9.47917H5.83333" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                        <path d="M11.6667 12.3958H5.83333" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                      </g>
                    </svg>
                  </div>
                  
                  {/* File Info */}
                  <div className="flex-1">
                    <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#161616]">
                      {file.name}
                    </p>
                    <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                      {file.status}
                    </p>
                  </div>
                  
                  {/* Delete Button */}
                  <button 
                    onClick={() => handleRemoveFile(index)}
                    className="size-[28px] rounded-[8px] flex items-center justify-center hover:bg-gray-100"
                  >
                    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                      <path d="M0.583333 0.583333H11.0833" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d={svgPaths.p21838680} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d={svgPaths.p2c2c0a80} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M0.583333 0.583333V4.08333" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M0.583333 0.583333V4.08333" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-[#d9d9d9] pt-[15px] flex flex-col items-center gap-[14px]">
            {/* Upload New Image Button */}
            <button
              onClick={handleUploadNew}
              className="bg-transparent border border-[rgba(217,217,217,0.5)] rounded-[8px] h-[43px] w-[160px] flex items-center justify-center hover:border-[#096dd9] hover:text-[#096dd9] transition-colors"
            >
              <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                Upload New Image
              </span>
            </button>

            {/* Run Test Button */}
            <button
              onClick={handleRunTest}
              className="rounded-[8px] h-[43px] w-[160px] flex items-center justify-center transition-colors"
              style={{ background: '#096dd9' }}
            >
              <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-white">
                Run Test
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}