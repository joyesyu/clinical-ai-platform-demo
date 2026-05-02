import { useState } from "react";
import svgPaths from "../../../imports/svg-p6stgxrqkv";
import { ROCCurveChart } from "./ROCCurveChart";

interface PerformanceMetrics {
  sensitivity: string;
  specificity: string;
  precision: string;
  auc: string;
}

interface ValidationData {
  trainingCases: string;
  validationCases: string;
  dataCollectionPeriod: string;
  multiInstitutional: string;
  externalValidation: string;
  validationSummary: string;
}

interface Limitation {
  text: string;
}

interface EvidencePerformanceSectionProps {
  performance: PerformanceMetrics;
  validation: ValidationData;
  limitations: Limitation[];
}

export function EvidencePerformanceSection({
  performance,
  validation,
  limitations
}: EvidencePerformanceSectionProps) {
  const [isROCExpanded, setIsROCExpanded] = useState(false);

  return (
    <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden w-full" style={{ minHeight: '826.5px' }}>
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] border-b border-[#d9d9d9] h-[84.5px] px-[21px] flex items-center justify-between">
        <div style={{ gap: '3.5px' }} className="flex flex-col">
          <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-black">
            Evidence & Performance
          </h2>
          <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
            Clinical validation and model performance data
          </p>
        </div>
        
      </div>

      {/* Content Wrapper with Padding */}
      <div className="pt-6 px-6 pb-5">
        <div style={{ gap: '21px', display: 'flex', flexDirection: 'column' }}>
          {/* Performance Metrics */}
          <div className="grid grid-cols-4 gap-[14px]">
            <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase text-center">
                Sensitivity
              </p>
              <p className="font-['Roboto'] font-bold text-[24px] leading-[32px] text-[#161616] text-center">
                {performance.sensitivity}
              </p>
            </div>
            <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase text-center">
                Specificity
              </p>
              <p className="font-['Roboto'] font-bold text-[24px] leading-[32px] text-[#161616] text-center">
                {performance.specificity}
              </p>
            </div>
            <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase text-center">
                Precision
              </p>
              <p className="font-['Roboto'] font-bold text-[24px] leading-[32px] text-[#161616] text-center">
                {performance.precision}
              </p>
            </div>
            <div className="bg-[rgba(248,248,248,0.5)] border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase text-center">
                AUC
              </p>
              <p className="font-['Roboto'] font-bold text-[24px] leading-[32px] text-[#161616] text-center">
                {performance.auc}
              </p>
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* ROC Curve Analysis - Collapsible */}
          <div 
            className="bg-[rgba(24,144,255,0.05)] border border-[rgba(24,144,255,0.2)] rounded-[4px] h-[56px] px-[15px] flex items-center justify-between cursor-pointer hover:bg-[rgba(24,144,255,0.08)] transition-colors"
            onClick={() => setIsROCExpanded(!isROCExpanded)}
          >
            <div className="flex items-center gap-[14px]">
              <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616] text-center">
                ROC Curve Analysis
              </p>
              <div className="bg-[rgba(24,144,255,0.1)] rounded-[3.5px] px-[8px] py-[4px]">
                <span className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#1890ff] text-center">
                  AUC: {performance.auc}
                </span>
              </div>
            </div>
            <svg 
              className="size-[17.5px] transition-transform" 
              fill="none" 
              viewBox="0 0 17.5 17.5"
              style={{ transform: isROCExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <g>
                <path d={svgPaths.p2a8a6e80} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
              </g>
            </svg>
          </div>

          {isROCExpanded && (
            <div className="mt-[-8px]">
              <ROCCurveChart auc={performance.auc} />
            </div>
          )}

          <div className="bg-[#d9d9d9] h-px" />

          {/* Validation Summary */}
          <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#6f6f6f] tracking-[0.3px] uppercase">
              Validation Summary
            </p>
            
            <div className="grid grid-cols-2 gap-[14px]">
              <div className="bg-white border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '3.5px', display: 'flex', flexDirection: 'column' }}>
                <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                  Training/Validation Cases
                </p>
                <p className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-[#161616]">
                  {validation.trainingCases} / {validation.validationCases}
                </p>
              </div>
              <div className="bg-white border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '3.5px', display: 'flex', flexDirection: 'column' }}>
                <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                  Data Collection Period
                </p>
                <p className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-[#161616]">
                  {validation.dataCollectionPeriod}
                </p>
              </div>
              <div className="bg-white border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '3.5px', display: 'flex', flexDirection: 'column' }}>
                <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                  Multi-institutional
                </p>
                <p className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-[#161616]">
                  {validation.multiInstitutional}
                </p>
              </div>
              <div className="bg-white border border-[#d9d9d9] rounded-[8px] px-[15px] pt-[15px] pb-[16px]" style={{ gap: '3.5px', display: 'flex', flexDirection: 'column' }}>
                <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                  External Validation
                </p>
                <p className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-[#161616]">
                  {validation.externalValidation}
                </p>
              </div>
            </div>

            <p className="font-['Roboto'] font-normal text-[12px] leading-[19.5px] text-[#525252]">
              {validation.validationSummary}
            </p>
          </div>

          <div className="bg-[#d9d9d9] h-px" />

          {/* Known Failure Modes & Limitations */}
          <div className="bg-white border border-[#e17100] rounded-[8px] px-[15px] pt-[15px] pb-[16px]">
            <div className="flex gap-[14px] items-start">
              <svg className="size-[17.5px] flex-shrink-0 mt-[1.5px]" fill="none" viewBox="0 0 17.5 17.5">
                <g>
                  <path d={svgPaths.p2af3c200} stroke="#FAAD14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                  <path d="M8.75 6.5625V9.47917" stroke="#FAAD14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                  <path d="M8.75 12.3958H8.75729" stroke="#FAAD14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                </g>
              </svg>
              <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
                <p className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                  Known Failure Modes & Limitations
                </p>
                <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                  {limitations.map((limitation, index) => (
                    <div key={index} className="flex gap-[7px] items-start">
                      <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#faad14]">•</span>
                      <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#525252]">
                        {limitation.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}