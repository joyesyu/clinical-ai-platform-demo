import { useState } from "react";
import svgPaths from "../../../imports/svg-565guu6zd1";

interface TestImage {
  id: string;
  name: string;
  status: "ready" | "processing" | "completed";
}

export function ModelTestPanel() {
  const [testImages, setTestImages] = useState<TestImage[]>([
    { id: "1", name: "NM888293.PNG", status: "ready" },
    { id: "2", name: "NM888294.PNG", status: "ready" }
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handleUploadImage = () => {
    // Mock upload functionality
    const newImage: TestImage = {
      id: Date.now().toString(),
      name: `NM${Date.now()}.PNG`,
      status: "ready"
    };
    setTestImages([...testImages, newImage]);
  };

  const handleRemoveImage = (id: string) => {
    setTestImages(testImages.filter(img => img.id !== id));
  };

  const handleRunTest = () => {
    setIsRunning(true);
    // Simulate test running
    setTimeout(() => {
      setIsRunning(false);
      setHasResults(true);
    }, 2000);
  };

  const handleDownloadResults = () => {
    alert("Results downloaded!");
  };

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.5)] border-b border-border px-6 py-5">
        <h2 className="font-['Roboto'] text-foreground mb-1" style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.4' }}>
          Test Model
        </h2>
        <p className="font-['Roboto'] text-[rgba(0,0,0,0.45)]" style={{ fontSize: '12px' }}>
          Upload images and run diagnostics
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Upload Section */}
        <div>
          <label className="font-['Roboto'] text-[rgba(0,0,0,0.45)] block mb-3" style={{ fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Upload Test Images
          </label>
          
          <div className="space-y-2 mb-4">
            {testImages.map((image) => (
              <div key={image.id} className="bg-[rgba(255,255,255,0.5)] border border-border rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="bg-[rgba(0,0,0,0)] size-9 flex items-center justify-center">
                  <svg className="size-[17.5px]" fill="none" viewBox="0 0 17.5 17.5">
                    <path d={svgPaths.p32dd8c80} stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d={svgPaths.p3ab04900} stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d="M7.29167 6.5625H5.83333" stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d="M11.6667 9.47917H5.83333" stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    <path d="M11.6667 12.3958H5.83333" stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Roboto'] font-medium text-foreground" style={{ fontSize: '12px' }}>
                    {image.name}
                  </p>
                  <p className="font-['Roboto'] text-[rgba(0,0,0,0.25)]" style={{ fontSize: '12px' }}>
                    {image.status === "ready" && "Ready"}
                    {image.status === "processing" && "Processing..."}
                    {image.status === "completed" && "Completed"}
                  </p>
                </div>
                <button 
                  onClick={() => handleRemoveImage(image.id)}
                  className="size-[24.5px] flex items-center justify-center hover:bg-[rgba(0,0,0,0.04)] rounded transition-colors"
                >
                  <svg className="size-3.5" fill="none" viewBox="0 0 14 14">
                    <path d="M0.583333 0.583333H11.0833" stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d="M0.583333 4.08333V9.33333C0.583333 9.59348 0.686577 9.84305 0.870971 10.0274C1.05536 10.2118 1.30493 10.3151 1.56508 10.3151H7.31508C7.57523 10.3151 7.8248 10.2118 8.00919 10.0274C8.19359 9.84305 8.29683 9.59348 8.29683 9.33333V4.08333" stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d="M2.91667 4.08333V2.33333C2.91667 2.07319 3.01991 1.82362 3.2043 1.63922C3.3887 1.45483 3.63826 1.35159 3.89842 1.35159H5.64842C5.90857 1.35159 6.15814 1.45483 6.34253 1.63922C6.52693 1.82362 6.63017 2.07319 6.63017 2.33333V4.08333" stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleUploadImage}
            className="w-full border border-[rgba(217,217,217,0.5)] bg-white hover:bg-[rgba(0,0,0,0.02)] rounded-lg h-11 flex items-center justify-center gap-2 transition-colors font-['Roboto'] font-medium text-foreground"
            style={{ fontSize: '14px' }}
          >
            <svg className="size-3.5" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p34aacb00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              <path d={svgPaths.p2ed38dc0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              <path d="M7 1.75V8.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            Upload New Image
          </button>
        </div>

        {/* Run Test Button */}
        <div className="border-t border-border pt-4">
          <button
            onClick={handleRunTest}
            disabled={isRunning || testImages.length === 0}
            className="w-full bg-primary hover:bg-[#096dd9] disabled:bg-[rgba(0,0,0,0.04)] disabled:text-[rgba(0,0,0,0.25)] text-primary-foreground rounded-lg h-[42px] flex items-center justify-center gap-2 transition-all shadow-[0_2px_8px_rgba(24,144,255,0.2)] hover:shadow-[0_4px_12px_rgba(24,144,255,0.3)] disabled:shadow-none font-['Roboto'] font-medium"
            style={{ fontSize: '14px' }}
          >
            <svg className="size-[17.5px]" fill="none" viewBox="0 0 17.5 17.5">
              <path d={svgPaths.p23b046f0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
            </svg>
            {isRunning ? "Running Test..." : "Run Test"}
          </button>
        </div>

        {/* Results Section */}
        {hasResults && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="font-['Roboto'] text-[rgba(0,0,0,0.45)]" style={{ fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Latest Results
              </label>
              <div className="bg-[rgba(24,144,255,0.1)] border border-[rgba(24,144,255,0.2)] rounded px-3 py-1">
                <span className="font-['Roboto'] font-medium text-primary" style={{ fontSize: '11px' }}>
                  100%
                </span>
              </div>
            </div>

            {/* Result Visualization Placeholder */}
            <div className="bg-white border border-border rounded-lg h-[215px] flex items-center justify-center">
              <div className="text-center">
                <div className="size-12 rounded-full bg-[rgba(24,144,255,0.1)] mx-auto mb-3 flex items-center justify-center">
                  <svg className="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-['Roboto'] font-medium text-foreground mb-1" style={{ fontSize: '14px' }}>
                  Analysis Complete
                </p>
                <p className="font-['Roboto'] text-[rgba(0,0,0,0.45)]" style={{ fontSize: '12px' }}>
                  Test result visualization would appear here
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[rgba(0,0,0,0.45)]">
              <svg className="size-3.5 text-primary" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.pc012c00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p24f94f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
              <span className="font-['Roboto']" style={{ fontSize: '12px' }}>
                Analysis completed successfully
              </span>
            </div>

            <button
              onClick={handleDownloadResults}
              className="w-full bg-primary hover:bg-[#096dd9] text-primary-foreground rounded-lg h-[42px] flex items-center justify-center gap-2 transition-all shadow-[0_2px_8px_rgba(24,144,255,0.2)] hover:shadow-[0_4px_12px_rgba(24,144,255,0.3)] font-['Roboto'] font-medium"
              style={{ fontSize: '14px' }}
            >
              <svg className="size-3.5" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.p34aacb00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p27169580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M7 8.75V1.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
              Download Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
