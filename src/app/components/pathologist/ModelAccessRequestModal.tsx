import svgPaths from "../../../imports/svg-yhkqsmn7mh";
import { useState } from "react";

interface ModelAccessRequestModalProps {
  modelName: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function ModelAccessRequestModal({
  modelName,
  onClose,
  onSubmit
}: ModelAccessRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    intendedUseCase: "",
    estimatedCases: "",
    startDate: "",
    endDate: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-[8px] w-[670px] max-h-[90vh] overflow-y-auto shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-[#d9d9d9] px-[21px] py-[21px]">
          <div className="flex items-start justify-between">
            <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <h2 className="font-['Roboto'] font-semibold text-[38px] leading-[46px] text-[rgba(0,0,0,0.85)]">
                Model Access Request
              </h2>
              <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[rgba(0,0,0,0.25)]">
                Fill out the form below to request access to this model
              </p>
            </div>
            <button
              onClick={onClose}
              className="size-[31.5px] rounded-[4px] flex items-center justify-center hover:bg-gray-100"
            >
              <svg className="size-[17.5px]" fill="none" viewBox="0 0 17.5 17.5">
                <g>
                  <path d="M13.125 4.375L4.375 13.125" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                  <path d="M4.375 4.375L13.125 13.125" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.45833" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="px-[21px] pt-[21px] pb-[21px]" style={{ gap: '21px', display: 'flex', flexDirection: 'column' }}>
          {/* Requested Model */}
          <div className="border border-[#d9d9d9] rounded-[8px] px-[18.5px] py-[18.5px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] tracking-[0.3px] uppercase text-[#6f6f6f]">
              Requested Model
            </p>
            <p className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-[#161616]">
              {modelName}
            </p>
          </div>

          {/* Requester Information */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <div className="flex items-center gap-[7px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <g>
                  <path d={svgPaths.p100e7280} stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={svgPaths.p38a00300} stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
              </svg>
              <h3 className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                Requester Information
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-[14px]">
              {/* Name */}
              <div className="border border-[#d9d9d9] rounded-[8px] px-[15px] py-[15px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                <label className="font-['Roboto'] font-medium text-[12px] leading-[20px] tracking-[0.3px] uppercase text-[#6f6f6f]">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#161616] bg-transparent border-none outline-none p-0"
                  placeholder="Enter your name"
                />
              </div>

              {/* Organization */}
              <div className="border border-[#d9d9d9] rounded-[8px] px-[15px] py-[15px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                <label className="font-['Roboto'] font-medium text-[12px] leading-[20px] tracking-[0.3px] uppercase text-[#6f6f6f]">
                  Organization
                </label>
                <div className="flex items-center gap-[7px]">
                  <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_152_3405)">
                      <path d={svgPaths.p38014980} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d={svgPaths.pb95800} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d={svgPaths.p1914c880} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M5.83333 3.5H8.16667" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M5.83333 5.83333H8.16667" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M5.83333 8.16667H8.16667" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M5.83333 10.5H8.16667" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_3405">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => handleChange('organization', e.target.value)}
                    className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#161616] bg-transparent border-none outline-none p-0 flex-1"
                    placeholder="Enter organization"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="border border-[#d9d9d9] rounded-[8px] px-[15px] py-[15px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
              <label className="font-['Roboto'] font-medium text-[12px] leading-[20px] tracking-[0.3px] uppercase text-[#6f6f6f]">
                Email
              </label>
              <div className="flex items-center gap-[7px]">
                <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                  <g>
                    <path d={svgPaths.p5c184f0} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.p2a640080} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </g>
                </svg>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#161616] bg-transparent border-none outline-none p-0 flex-1"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Intended Use Case */}
          <div style={{ gap: '10.5px', display: 'flex', flexDirection: 'column' }}>
            <div className="flex items-center gap-[7px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <g>
                  <path d={svgPaths.pd1f0180} stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={svgPaths.p1c197ec0} stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M5.83333 5.25H4.66667" stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M9.33333 7.58333H4.66667" stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M9.33333 9.91667H4.66667" stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
              </svg>
              <h3 className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                Intended Use Case
              </h3>
            </div>

            <div className="border border-[#d9d9d9] rounded-[8px] px-[15px] py-[15px]">
              <textarea
                required
                value={formData.intendedUseCase}
                onChange={(e) => handleChange('intendedUseCase', e.target.value)}
                className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#161616] bg-transparent border-none outline-none p-0 w-full resize-none"
                placeholder="Describe how you plan to use this model..."
                rows={3}
              />
            </div>
          </div>

          {/* Usage Details */}
          <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
            <div className="flex items-center gap-[7px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <g>
                  <path d={svgPaths.p1977ee80} stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={svgPaths.p3471a100} stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
              </svg>
              <h3 className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                Usage Details
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-[14px]">
              {/* Estimated Cases */}
              <div className="border border-[#d9d9d9] rounded-[8px] px-[15px] py-[15px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                <label className="font-['Roboto'] font-medium text-[12px] leading-[20px] tracking-[0.3px] uppercase text-[#6f6f6f]">
                  Estimated Cases
                </label>
                <input
                  type="number"
                  required
                  value={formData.estimatedCases}
                  onChange={(e) => handleChange('estimatedCases', e.target.value)}
                  className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#161616] bg-transparent border-none outline-none p-0"
                  placeholder="Enter number"
                />
              </div>

              {/* Time Window */}
              <div className="border border-[#d9d9d9] rounded-[8px] px-[15px] py-[15px]" style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                <label className="font-['Roboto'] font-medium text-[12px] leading-[20px] tracking-[0.3px] uppercase text-[#6f6f6f]">
                  Time Window
                </label>
                <div style={{ gap: '7px', display: 'flex', flexDirection: 'column' }}>
                  <div className="flex items-center gap-[7px]">
                    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                      <g>
                        <path d="M4.66667 1.16667V3.5" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        <path d="M9.33333 1.16667V3.5" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        <path d={svgPaths.p24a2b500} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        <path d="M1.75 5.83333H12.25" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      </g>
                    </svg>
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => handleChange('startDate', e.target.value)}
                      className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#161616] bg-transparent border-none outline-none p-0 flex-1"
                    />
                  </div>
                  <div className="flex items-center gap-[7px]">
                    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                      <g clipPath="url(#clip0_152_3377)">
                        <path d={svgPaths.pc012c00} stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        <path d="M7 3.5V7L9.33333 8.16667" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_3377">
                          <rect fill="white" height="14" width="14" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                      type="date"
                      required
                      value={formData.endDate}
                      onChange={(e) => handleChange('endDate', e.target.value)}
                      className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#161616] bg-transparent border-none outline-none p-0 flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div style={{ gap: '10.5px', display: 'flex', flexDirection: 'column' }}>
            <div className="flex items-center gap-[7px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <g>
                  <path d={svgPaths.pff358a0} stroke="#2F54EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
              </svg>
              <h3 className="font-['Roboto'] font-semibold text-[14px] leading-[22px] text-[#161616]">
                Additional Notes
              </h3>
            </div>

            <div className="border border-[#d9d9d9] rounded-[8px] px-[15px] py-[15px]">
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleChange('additionalNotes', e.target.value)}
                className="font-['Roboto'] font-normal text-[14px] leading-[22.75px] text-[#6f6f6f] bg-transparent border-none outline-none p-0 w-full resize-none"
                placeholder="Any additional information..."
                rows={2}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-[14px] pt-[7px]">
            <button
              type="button"
              onClick={onClose}
              className="bg-white border border-[#d9d9d9] rounded-[8px] h-[42px] px-[20px] flex items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-['Roboto'] font-medium text-[16px] leading-[24px] text-[rgba(0,0,0,0.85)]">
                Cancel
              </span>
            </button>
            <button
              type="submit"
              className="bg-[#1890ff] rounded-[8px] h-[42px] px-[20px] flex items-center gap-[10px] shadow-[0px_10px_15px_0px_rgba(24,144,255,0.2),0px_4px_6px_0px_rgba(24,144,255,0.2)] hover:bg-[#1890ff]/90 transition-colors"
            >
              <svg className="size-[17.5px]" fill="none" viewBox="0 0 17.5 17.5">
                <g>
                  <path d={svgPaths.p54e5800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                  <path d={svgPaths.p25e4fc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                </g>
              </svg>
              <span className="font-['Roboto'] font-medium text-[16px] leading-[24px] text-white">
                Submit Request
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
