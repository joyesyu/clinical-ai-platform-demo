import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { PathologistHeader } from "../../components/pathologist/PathologistHeader";
import svgPaths from "../../../imports/svg-16aaucsz0t";

export default function DiagnosisUpload() {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Mock model data
  const model = {
    id: modelId,
    name: "DeepColon Prognosticator",
    taskType: "Classification"
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    }
  };

  const handleStartDiagnosis = () => {
    if (selectedFiles.length === 0) {
      alert("Please select files to upload");
      return;
    }
    // Generate a mock run ID and navigate to run page
    const runId = `run-${Date.now()}`;
    navigate(`/pathologist/diagnosis/${modelId}/run/${runId}`);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="bg-background relative min-h-screen w-full">
      <PathologistHeader />
      
      <div className="pt-[84px] px-[28px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Back Button */}
          <Link to="/pathologist/workspace" className="inline-flex items-center gap-[8px] mb-[32px] group">
            <div className="size-[17.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                <g>
                  <path d={svgPaths.p27370b80} stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" className="group-hover:stroke-[#161616] transition-colors" />
                  <path d="M13.8542 8.75H3.64583" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" className="group-hover:stroke-[#161616] transition-colors" />
                </g>
              </svg>
            </div>
            <span className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#525252] cursor-pointer group-hover:text-[#161616] transition-colors">
              Back to My Models
            </span>
          </Link>

          {/* Header */}
          <div className="mb-[32px]">
            <div className="flex items-center justify-between mb-[8px]">
              <h1 className="font-['Roboto'] font-bold text-[24px] leading-[32px] text-[#000000]">
                Start Diagnosis
              </h1>
              <div className="border border-[#d9d9d9] rounded-[4px] px-[12px] py-[4px]">
                <span className="font-['Roboto'] font-medium text-[12px] leading-[20px] text-[#161616]">
                  {model.taskType}
                </span>
              </div>
            </div>
            <p className="font-['Roboto'] font-normal text-[16px] leading-[24px] text-[#525252]">
              Upload WSI samples for analysis with <span className="text-[#161616] font-medium">{model.name}</span>
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-white border border-[#d9d9d9] rounded-[8px] p-[24px] mb-[24px]">
            <h3 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] text-[#000000] mb-[20px]">
              Upload WSI Files
            </h3>

            <div 
              className={`border-2 border-dashed rounded-[8px] p-[48px] text-center transition-colors ${
                isDragging 
                  ? 'border-[#1890ff] bg-[#1890ff]/5' 
                  : 'border-[#d9d9d9] hover:border-[#525252]'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="mb-[24px]">
                <div className="size-[48px] mx-auto mb-[16px] bg-[#1890ff]/10 rounded-[8px] flex items-center justify-center">
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M7 10L12 15L17 10" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15V3" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 21H4" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-['Roboto'] font-medium text-[16px] leading-[24px] text-[#161616] mb-[8px]">
                  Drag and drop WSI files here
                </p>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#6f6f6f]">
                  or click to browse your files
                </p>
              </div>

              <input
                type="file"
                multiple
                accept=".svs,.ndpi,.tiff,.tif"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label 
                htmlFor="file-upload"
                className="inline-block bg-[#1890ff] text-white rounded-[4px] px-[24px] h-[44px] leading-[44px] cursor-pointer hover:bg-[#1890ff]/90 transition-colors shadow-[0px_10px_15px_0px_rgba(24,144,255,0.2),0px_4px_6px_0px_rgba(24,144,255,0.2)] font-['Roboto'] font-medium text-[16px]"
              >
                Browse Files
              </label>

              <div className="mt-[24px] bg-[#fafafa] border border-[#d9d9d9] rounded-[8px] p-[16px]">
                <p className="font-['Roboto'] font-medium text-[12px] leading-[20px] tracking-[0.3px] uppercase text-[#6f6f6f] mb-[8px]">
                  Supported formats
                </p>
                <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#161616]">
                  .SVS, .NDPI, .TIFF (Whole Slide Images)
                </p>
              </div>
            </div>

            {/* Selected Files */}
            {selectedFiles.length > 0 && (
              <div className="mt-[24px]">
                <h4 className="font-['Roboto'] font-semibold text-[16px] leading-[24px] text-[#161616] mb-[16px]">
                  Selected Files ({selectedFiles.length})
                </h4>
                <div className="space-y-[8px]">
                  {selectedFiles.map((file, index) => (
                    <div 
                      key={index}
                      className="bg-[#fafafa] border border-[#d9d9d9] rounded-[8px] p-[16px] flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <p className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#161616] mb-[4px]">
                          {file.name}
                        </p>
                        <p className="font-['Roboto'] font-normal text-[12px] leading-[20px] text-[#6f6f6f]">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                      <button 
                        onClick={() => setSelectedFiles(files => files.filter((_, i) => i !== index))}
                        className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[#ff4d4f] hover:opacity-75 transition-opacity cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[16px]">
            <Link 
              to="/pathologist/workspace"
              className="bg-white text-[#161616] border border-[#d9d9d9] rounded-[4px] px-[32px] h-[44px] flex items-center hover:bg-[#fafafa] transition-colors font-['Roboto'] font-medium text-[16px] leading-[24px]"
            >
              Cancel
            </Link>
            <button 
              onClick={handleStartDiagnosis}
              disabled={selectedFiles.length === 0}
              className="flex-1 bg-[#1890ff] text-white rounded-[4px] h-[44px] hover:bg-[#1890ff]/90 transition-colors shadow-[0px_10px_15px_0px_rgba(24,144,255,0.2),0px_4px_6px_0px_rgba(24,144,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed font-['Roboto'] font-medium text-[16px] leading-[24px]"
            >
              Start Diagnosis ({selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}