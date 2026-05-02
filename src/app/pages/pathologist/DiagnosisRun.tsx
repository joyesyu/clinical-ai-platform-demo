import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { PathologistHeader } from "../../components/pathologist/PathologistHeader";

type RunState = 'uploading' | 'queued' | 'running' | 'returning-results' | 'completed' | 'failed';

export default function DiagnosisRun() {
  const { modelId, runId } = useParams();
  const [runState, setRunState] = useState<RunState>('uploading');
  const [progress, setProgress] = useState(0);
  const [casesProcessed, setCasesProcessed] = useState(0);
  const [totalCases] = useState(5);
  const [speed, setSpeed] = useState(0);
  const [eta, setEta] = useState(0);

  // Mock model data
  const model = {
    name: "DeepColon Prognosticator",
    taskType: "Classification"
  };

  // Simulate real-time progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Update run state based on progress
  useEffect(() => {
    if (progress < 10) {
      setRunState('uploading');
      setSpeed(2.5);
      setEta(240);
    } else if (progress < 15) {
      setRunState('queued');
      setSpeed(0);
      setEta(220);
    } else if (progress < 90) {
      setRunState('running');
      const processed = Math.floor((progress - 15) / (75 / totalCases));
      setCasesProcessed(Math.min(processed, totalCases));
      setSpeed(1.2);
      setEta(Math.max(0, 180 - Math.floor(progress * 1.8)));
    } else if (progress < 98) {
      setRunState('returning-results');
      setCasesProcessed(totalCases);
      setSpeed(3.0);
      setEta(10);
    } else {
      setRunState('completed');
      setCasesProcessed(totalCases);
      setSpeed(0);
      setEta(0);
    }
  }, [progress, totalCases]);

  const getStateColor = (state: RunState) => {
    switch (state) {
      case 'uploading':
      case 'queued':
        return 'var(--chart-4)';
      case 'running':
      case 'returning-results':
        return 'var(--primary)';
      case 'completed':
        return 'var(--chart-2)';
      case 'failed':
        return 'var(--destructive)';
      default:
        return 'var(--muted-foreground)';
    }
  };

  const getStateLabel = (state: RunState) => {
    switch (state) {
      case 'uploading':
        return 'Uploading';
      case 'queued':
        return 'Queued';
      case 'running':
        return 'Running';
      case 'returning-results':
        return 'Returning Results';
      case 'completed':
        return 'Completed';
      case 'failed':
        return 'Failed';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-background relative min-h-screen w-full">
      <PathologistHeader />
      
      <div className="pt-[84px] px-[28px] pb-[100px]">
        <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="bg-card border border-border rounded-[14px] p-[29px] mb-[28px]">
            <div className="flex items-center justify-between mb-[14px]">
              <div>
                <h1 className="text-foreground mb-[7px]">
                  Diagnosis in Progress
                </h1>
                <p className="text-muted-foreground">
                  Running analysis with <span className="text-foreground font-medium">{model.name}</span>
                </p>
              </div>
              <div className="text-right">
                <label className="text-muted-foreground block mb-[3.5px]">
                  Run ID
                </label>
                <p className="text-foreground font-medium text-sm">
                  {runId}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Status */}
          <div className="bg-card border border-border rounded-[14px] p-[29px] mb-[28px]">
            {/* Current State */}
            <div className="flex items-center gap-[14px] mb-[21px]">
              <div 
                className="size-[42px] rounded-[var(--radius)] flex items-center justify-center"
                style={{ backgroundColor: `${getStateColor(runState)}15` }}
              >
                <div className="size-[21px] rounded-full" style={{ backgroundColor: getStateColor(runState) }}>
                  {runState === 'completed' && (
                    <svg className="size-full" viewBox="0 0 21 21" fill="none">
                      <path d="M6 10.5L9 13.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-foreground mb-[3.5px]" style={{ color: getStateColor(runState) }}>
                  {getStateLabel(runState)}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {runState === 'uploading' && 'Uploading WSI files to cloud storage...'}
                  {runState === 'queued' && 'Waiting for available compute resources...'}
                  {runState === 'running' && 'AI model is analyzing your samples...'}
                  {runState === 'returning-results' && 'Finalizing and packaging results...'}
                  {runState === 'completed' && 'Analysis complete! Results are ready to view.'}
                  {runState === 'failed' && 'An error occurred during processing.'}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            {runState !== 'completed' && runState !== 'failed' && (
              <div className="mb-[21px]">
                <div className="flex items-center justify-between mb-[7px]">
                  <label className="text-muted-foreground">
                    Overall Progress
                  </label>
                  <p className="text-foreground font-medium">
                    {Math.round(progress)}%
                  </p>
                </div>
                <div className="bg-background/50 border border-border rounded-[var(--radius-badge)] h-[14px] overflow-hidden">
                  <div 
                    className="h-full transition-all duration-500 rounded-[var(--radius-badge)]"
                    style={{ 
                      width: `${progress}%`,
                      backgroundColor: getStateColor(runState)
                    }}
                  />
                </div>
              </div>
            )}

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-[14px]">
              <div className="bg-background/50 border border-border rounded-[var(--radius)] p-[14px]">
                <label className="text-muted-foreground block mb-[7px]">
                  Cases Processed
                </label>
                <p className="text-foreground font-medium">
                  {casesProcessed} / {totalCases}
                </p>
              </div>
              <div className="bg-background/50 border border-border rounded-[var(--radius)] p-[14px]">
                <label className="text-muted-foreground block mb-[7px]">
                  Processing Speed
                </label>
                <p className="text-foreground font-medium">
                  {speed.toFixed(1)} cases/min
                </p>
              </div>
              <div className="bg-background/50 border border-border rounded-[var(--radius)] p-[14px]">
                <label className="text-muted-foreground block mb-[7px]">
                  Estimated Time
                </label>
                <p className="text-foreground font-medium">
                  {eta > 0 ? formatTime(eta) : 'Complete'}
                </p>
              </div>
            </div>
          </div>

          {/* State Timeline */}
          <div className="bg-card border border-border rounded-[14px] p-[29px] mb-[28px]">
            <h3 className="text-foreground mb-[21px]">
              Processing Pipeline
            </h3>
            <div className="space-y-[14px]">
              {(['uploading', 'queued', 'running', 'returning-results', 'completed'] as RunState[]).map((state, index) => {
                const isActive = state === runState;
                const isPast = (['uploading', 'queued', 'running', 'returning-results', 'completed'] as RunState[]).indexOf(runState) > index;
                
                return (
                  <div key={state} className="flex items-center gap-[14px]">
                    <div 
                      className={`size-[28px] rounded-full flex items-center justify-center transition-all ${
                        isPast 
                          ? 'bg-[var(--chart-2)]' 
                          : isActive 
                            ? 'bg-primary' 
                            : 'bg-muted/20 border border-border'
                      }`}
                    >
                      {isPast ? (
                        <svg className="size-[14px]" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7L5.5 9.5L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : isActive ? (
                        <div className="size-[10px] rounded-full bg-primary-foreground" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <label className={`block ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                        {getStateLabel(state)}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results Actions */}
          {runState === 'completed' && (
            <div className="bg-card border border-border rounded-[14px] p-[29px]">
              <div className="flex items-center gap-[14px] mb-[21px]">
                <div className="size-[42px] bg-[var(--chart-2)]/10 rounded-[var(--radius)] flex items-center justify-center">
                  <svg className="size-[21px]" viewBox="0 0 21 21" fill="none">
                    <path d="M6 10.5L9 13.5L15 7.5" stroke="var(--chart-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-foreground mb-[3.5px]">
                    Results Ready
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Your diagnosis results are now available
                  </p>
                </div>
              </div>

              <div className="flex gap-[14px]">
                <button className="flex-1 bg-primary text-primary-foreground rounded-[var(--radius-button)] h-[42px] hover:opacity-90 transition-opacity shadow-[var(--elevation-sm)]">
                  <label className="cursor-pointer font-medium">View Results</label>
                </button>
                <button className="bg-primary text-primary-foreground rounded-[var(--radius-button)] px-[28px] h-[42px] flex items-center hover:bg-primary/90 transition-colors shadow-[0_2px_8px_rgba(24,144,255,0.2)] hover:shadow-[0_4px_12px_rgba(24,144,255,0.3)]">
                  <label className="cursor-pointer font-medium">Download Results</label>
                </button>
                <Link 
                  to="/pathologist/workspace"
                  className="bg-secondary text-secondary-foreground border border-border rounded-[var(--radius-button)] px-[28px] h-[42px] flex items-center hover:bg-muted/10 transition-colors"
                >
                  <label className="cursor-pointer font-medium">Back to Workspace</label>
                </Link>
              </div>
            </div>
          )}

          {/* Cancel/Back Button for In-Progress */}
          {runState !== 'completed' && (
            <div className="flex justify-center">
              <Link 
                to="/pathologist/workspace"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <label className="cursor-pointer">Cancel and return to Workspace</label>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}