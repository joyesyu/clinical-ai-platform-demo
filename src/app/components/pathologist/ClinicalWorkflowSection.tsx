import svgPaths from "../../../imports/svg-uc5vum2blb";
import svgPathsTest from "../../../imports/svg-i5p6vy1dv5";
import { useState } from "react";

interface UseCase {
  title: string;
  subtitle: string;
}

interface InterpretOutput {
  title: string;
  description: string;
}

interface OperatingMode {
  title: string;
  description: string;
  recommendation: string;
}

interface TestFile {
  name: string;
  status: string;
}

interface ClinicalWorkflowSectionProps {
  useCases: UseCase[];
  interpretOutputs: InterpretOutput[];
  operatingModes: OperatingMode[];
  notUseFor: string[];
}

export function ClinicalWorkflowSection({
  useCases,
  interpretOutputs,
  operatingModes,
  notUseFor
}: ClinicalWorkflowSectionProps) {
  const [files, setFiles] = useState<TestFile[]>([
    { name: "NM888293.PNG", status: "Ready" },
    { name: "NM888294.PNG", status: "Ready" }
  ]);
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'done'>('idle');

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUploadNew = () => {
    alert("Upload new image functionality");
  };

  const handleRunTest = async () => {
    setTestStatus('running');
    await new Promise(r => setTimeout(r, 1800));
    setTestStatus('done');
  };

  const handleDownload = () => {
    alert("Downloading results...");
  };

  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden w-full">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] border-b border-[#d9d9d9] h-[84.5px] px-[21px] flex items-center justify-between">
        <div style={{ gap: '3.5px' }} className="flex flex-col">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-black">
            Clinical Use & Workflow
          </h2>
          <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
            How to use and interpret this model
          </p>
        </div>
        <div className="size-[31.5px] rounded-[4px] flex items-center justify-center">
          
        </div>
      </div>

      {/* Content Wrapper with Padding */}
      <div className="pt-6 px-6 pb-5">
        <div style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
          {/* Recommended Use Cases */}
          <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Recommended Use Cases
            </p>
            <div className="flex gap-[14px]">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex-1 bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]"
                  style={{ gap: '3.5px', display: 'flex', flexDirection: 'column' }}
                >
                  <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] text-center">
                    {useCase.title}
                  </p>
                  <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f] text-center">
                    {useCase.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* How to Interpret Outputs */}
          <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              How to Interpret Outputs
            </p>
            <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
              {interpretOutputs.map((output, index) => (
                <div
                  key={index}
                  className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]"
                  style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}
                >
                  <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                    {output.title}
                  </p>
                  <p className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#525252]">
                    {output.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Suggested Operating Mode */}
          <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Suggested Operating Mode
            </p>
            <div className="flex gap-[14px]">
              {operatingModes.map((mode, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]"
                  style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}
                >
                  <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                    {mode.title}
                  </p>
                  <p className="font-['Roboto'] font-normal text-[12px] leading-[19.5px] text-[#525252]">
                    {mode.description}
                  </p>
                  <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#161616]">
                    {mode.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* What You Should NOT Use This Model For */}
          <div className="bg-white border border-[#ff4d4f] border-[1.5px] rounded-[8px] px-[15.5px] pt-[15.5px] pb-[16.5px]">
            <div className="flex gap-[12px] items-start">
              <svg className="size-[18px] flex-shrink-0 mt-[1.5px]" fill="none" viewBox="0 0 18 18">
                <g>
                  <path d={svgPaths.p37f3ef00} stroke="#FF4D4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M9 6.75V9.75" stroke="#FF4D4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M9 12.75H9.0075" stroke="#FF4D4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
              <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                  What You Should NOT Use This Model For
                </p>
                <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                  {notUseFor.map((item, index) => (
                    <div key={index} className="flex gap-[7px] items-start">
                      <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#ff4d4f]">•</span>
                      <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#525252]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Test Model Section */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Test Model
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
                        <path d={svgPathsTest.p32dd8c80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                        <path d={svgPathsTest.p3ab04900} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
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
                      <path d={svgPathsTest.p21838680} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d={svgPathsTest.p2c2c0a80} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M0.583333 0.583333V4.08333" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M0.583333 0.583333V4.08333" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-[14px]">
              <button
                onClick={handleUploadNew}
                className="bg-transparent border border-[rgba(217,217,217,0.5)] rounded-[8px] h-[43px] w-[160px] flex items-center justify-center hover:border-[#096dd9] transition-colors"
              >
                <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                  Upload New Image
                </span>
              </button>

              <button
                onClick={handleRunTest}
                disabled={testStatus === 'running'}
                className="rounded-[8px] h-[43px] w-[160px] flex items-center justify-center transition-colors"
                style={{ background: '#096dd9', opacity: testStatus === 'running' ? 0.7 : 1, cursor: testStatus === 'running' ? 'not-allowed' : 'pointer' }}
              >
                <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-white">
                  {testStatus === 'running' ? 'Running…' : 'Run Test'}
                </span>
              </button>
            </div>

            {/* Result image */}
            {testStatus === 'done' && (
              <div className="flex flex-col gap-[12px]">
                <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
                  Result
                </p>
                <div className="border border-[#d9d9d9] rounded-[8px] overflow-hidden">
                  {/* Sample result image — heatmap overlay simulation */}
                  <svg width="100%" viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="320" fill="#1a1a2e" />
                    {/* Tissue background */}
                    <rect x="40" y="20" width="520" height="280" rx="4" fill="#2d2d4e" opacity="0.8" />
                    {/* Heatmap blobs */}
                    <ellipse cx="220" cy="140" rx="90" ry="70" fill="rgba(220,17,17,0.55)" />
                    <ellipse cx="260" cy="160" rx="55" ry="40" fill="rgba(220,17,17,0.75)" />
                    <ellipse cx="380" cy="110" rx="60" ry="50" fill="rgba(220,100,17,0.45)" />
                    <ellipse cx="350" cy="200" rx="40" ry="30" fill="rgba(220,17,17,0.35)" />
                    {/* Tissue texture lines */}
                    {[60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510].map((x, i) => (
                      <line key={i} x1={x} y1="30" x2={x + 10} y2="290" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    ))}
                    {/* Score badge */}
                    <rect x="460" y="260" width="110" height="30" rx="4" fill="rgba(220,17,17,0.9)" />
                    <text x="515" y="280" textAnchor="middle" fill="white" fontSize="12" fontFamily="Roboto, sans-serif" fontWeight="600">Score: 0.87</text>
                    {/* Label */}
                    <rect x="40" y="20" width="120" height="24" rx="4" fill="rgba(9,109,217,0.85)" />
                    <text x="100" y="36" textAnchor="middle" fill="white" fontSize="11" fontFamily="Roboto, sans-serif" fontWeight="500">NM888293.PNG</text>
                  </svg>
                  <div className="bg-[#f9f9f9] border-t border-[#d9d9d9] px-[16px] py-[10px] flex items-center justify-between">
                    <div className="flex gap-[24px]">
                      <span className="font-['Roboto'] font-normal text-[12px] text-[#6f6f6f]">Malignancy Score: <span className="font-medium text-[#dc1111]">0.87</span></span>
                      <span className="font-['Roboto'] font-normal text-[12px] text-[#6f6f6f]">Confidence: <span className="font-medium text-[#161616]">94%</span></span>
                      <span className="font-['Roboto'] font-normal text-[12px] text-[#6f6f6f]">Recommendation: <span className="font-medium text-[#dc1111]">Priority Review</span></span>
                    </div>
                  </div>
                </div>

                {/* Download Results button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleDownload}
                    className="rounded-[8px] h-[36px] px-[16px] flex items-center gap-[8px] transition-colors"
                    style={{ background: '#096dd9' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-white whitespace-nowrap">
                      Download Results
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}