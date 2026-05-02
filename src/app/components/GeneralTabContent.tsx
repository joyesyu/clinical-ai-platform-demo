import { DollarSign, Clock, WifiOff, Shield, AlertCircle, Users, Calendar, Building2, CreditCard, Tag, GitBranch, User, Settings, Activity, AlertTriangle, Trash2, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { ErrorDiagnosticsSection } from './ErrorDiagnosticsSection';
import { useState, useMemo } from 'react';

interface GeneralTabContentProps {
  revenueData: {
    '7D': number[];
    '4W': number[];
    '6M': number[];
    '12M': number[];
  };
  selectedPeriod: '7D' | '4W' | '6M' | '12M';
  setSelectedPeriod: (period: '7D' | '4W' | '6M' | '12M') => void;
  currentRevenue: number;
  maxRevenue: number;
  errorPeriod: '24h' | '7d';
  setErrorPeriod: (period: '24h' | '7d') => void;
  usagePeriod: 'daily' | 'weekly' | 'monthly';
  setUsagePeriod: (period: 'daily' | 'weekly' | 'monthly') => void;
  showDisableConfirm: boolean;
  setShowDisableConfirm: (show: boolean) => void;
  showDeleteConfirm: boolean;
  setShowDeleteConfirm: (show: boolean) => void;
  isHighErrorRate?: boolean;
  modelStatus?: 'active' | 'in_diagnosis' | 'review' | 'disabled';
}

export function GeneralTabContent({
  revenueData,
  selectedPeriod,
  setSelectedPeriod,
  currentRevenue,
  maxRevenue,
  errorPeriod,
  setErrorPeriod,
  usagePeriod,
  setUsagePeriod,
  showDisableConfirm,
  setShowDisableConfirm,
  showDeleteConfirm,
  setShowDeleteConfirm,
  isHighErrorRate = false,
  modelStatus = 'active',
}: GeneralTabContentProps) {
  // State for Usage Analytics navigation
  const [selectedMonth, setSelectedMonth] = useState(new Date(2026, 2, 1)); // March 2026
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedDayOffset, setSelectedDayOffset] = useState(0);

  // Memoized usage data to prevent duplicate keys in Recharts
  const usageData = useMemo(() => {
    if (usagePeriod === 'monthly') {
      const months = ['Oct 2025', 'Nov 2025', 'Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026'];
      return months.map((month, idx) => ({
        period: month,
        cases: Math.floor(Math.random() * 2000) + 3000, // 3000-5000 cases
        id: `monthly-${idx}`, // Add unique id for stable keys
      }));
    }
    if (usagePeriod === 'weekly') {
      return [1, 2, 3, 4].map((week, idx) => ({
        period: `Week ${week}`,
        cases: Math.floor(Math.random() * 500) + 800, // 800-1300 cases
        id: `weekly-${selectedMonth.getTime()}-${idx}`, // Add unique id for stable keys
      }));
    }
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day, idx) => ({
      period: day,
      cases: Math.floor(Math.random() * 80) + 120, // 120-200 cases
      id: `daily-${selectedDayOffset}-${idx}`, // Add unique id for stable keys
    }));
  }, [usagePeriod, selectedMonth, selectedDayOffset]);

  const totalCases = useMemo(() => usageData.reduce((sum, item) => sum + item.cases, 0), [usageData]);

  // Mock institution data
  const institutionsData = [
    { name: 'Mayo Clinic', users: 12, cases: 1847 },
    { name: 'Johns Hopkins Hospital', users: 8, cases: 1523 },
    { name: 'Cleveland Clinic', users: 6, cases: 982 },
    { name: 'Massachusetts General Hospital', users: 5, cases: 876 },
    { name: 'Stanford Health Care', users: 4, cases: 654 },
    { name: 'UCSF Medical Center', users: 3, cases: 543 },
    { name: 'Mount Sinai Hospital', users: 2, cases: 421 },
    { name: 'NYU Langone Health', users: 2, cases: 398 },
    { name: 'Cedars-Sinai Medical Center', users: 2, cases: 312 },
    { name: 'UCLA Health', users: 1, cases: 267 },
    { name: 'University of Chicago Medicine', users: 1, cases: 189 },
    { name: 'Northwestern Memorial Hospital', users: 1, cases: 142 },
  ];
  
  const totalInstitutionUsers = institutionsData.reduce((sum, inst) => sum + inst.users, 0);
  const totalInstitutionCases = institutionsData.reduce((sum, inst) => sum + inst.cases, 0);

  // Navigation handlers
  const handlePrevMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 1));
  };

  const handlePrevWeek = () => {
    if (selectedWeek > 0) setSelectedWeek(selectedWeek - 1);
  };

  const handleNextWeek = () => {
    if (selectedWeek < 3) setSelectedWeek(selectedWeek + 1);
  };

  const handlePrevDay = () => {
    setSelectedDayOffset(selectedDayOffset + 7);
  };

  const handleNextDay = () => {
    if (selectedDayOffset > 0) setSelectedDayOffset(Math.max(0, selectedDayOffset - 7));
  };

  return (
    <div className="space-y-6">
      {/* Error Diagnostics Section (Conditional) - Hide for review status */}
      {isHighErrorRate && modelStatus !== 'review' && <ErrorDiagnosticsSection />}

      {/* A. Operational Health & Scheduled Usage Tracking - Hide for review status */}
      {modelStatus !== 'review' && (
        <div className="grid grid-cols-2 gap-6">
          {/* A. Operational Health */}
          <div className="bg-card border border-border rounded-[8px] overflow-hidden">
            <div className="p-[24px] border-b border-border bg-card/50">
              <h2 className="text-[18px] font-semibold text-[#000000]">Operational Health</h2>
              <p className="text-[12px] text-[#6F6F6F] mt-1">Live health signals and operational trends</p>
            </div>
            <div className="p-[24px] space-y-6">
              {/* Health Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 bg-white border border-border rounded-[8px]">
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-2">Uptime</p>
                  <p className="text-[24px] font-bold text-[#161616] leading-[32px]">99.8%</p>
                  <p className="text-[12px] text-[#6F6F6F] mt-2 leading-[20px]">Last 30 days</p>
                </div>
                <div className="p-4 bg-white border border-border rounded-[8px]">
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-2">Error/WARNING Rate</p>
                  <div className="flex items-center gap-1">
                    <p className={`text-[24px] font-bold leading-[32px] ${isHighErrorRate ? 'text-[rgba(22,22,22,0.85)]' : 'text-[#161616]'} text-[#e17100]`}>
                      {isHighErrorRate ? '5.2%' : '0.4%'}
                    </p>
                    {isHighErrorRate && (
                      <svg className="size-6 shrink-0" fill="none" viewBox="0 0 20 20">
                        <path d="M10 3.33334L17.5 16.6667H2.5L10 3.33334Z" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M10 7.5V10.8333" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M10 14.1667H10.0075" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                  <p className={`text-[12px] mt-2 leading-[20px] ${isHighErrorRate ? 'text-[#6F6F6F] font-medium' : 'text-[#6F6F6F]'}`}>
                    {isHighErrorRate ? 'Above 1% threshold' : 'Below 1% threshold'}
                  </p>
                </div>
                <div className="p-4 bg-white border border-border rounded-[8px]">
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-2">Latency (p95)</p>
                  <p className="text-[24px] font-bold text-[#161616] leading-[32px]">42ms</p>
                  <p className="text-[12px] text-[#6F6F6F] mt-2 leading-[20px]">95th percentile</p>
                </div>
              </div>

              <div className="h-px bg-border"></div>

              {/* Recent Errors */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[14px] font-semibold text-[#161616]">Recent Alerts & Warnings</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setErrorPeriod('24h')}
                      className={`px-3 py-1 rounded-[8px] text-[12px] font-medium transition-all ${
                        errorPeriod === '24h'
                          ? 'bg-[#2f54eb]/10 text-[#2f54eb] border border-[#2f54eb]/20'
                          : 'text-[#6F6F6F] hover:text-[#161616]'
                      }`}
                    >24h</button>
                    <button
                      onClick={() => setErrorPeriod('7d')}
                      className={`px-3 py-1 rounded-[8px] text-[12px] font-medium transition-all ${
                        errorPeriod === '7d'
                          ? 'bg-[#2f54eb]/10 text-[#2f54eb] border border-[#2f54eb]/20'
                          : 'text-[#6F6F6F] hover:text-[#161616]'
                      }`}
                    >
                      7d
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-white border border-border rounded-[8px]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        
                        <p className="text-[14px] font-semibold text-[#161616]">Authentication Errors</p>
                      </div>
                      <span className="bg-[rgba(254,154,0,0.1)] text-[#e17100] border border-[#e17100] rounded-[3.5px] text-[12px] font-medium w-[24px] h-[24px] inline-flex items-center justify-center">
                        {errorPeriod === '24h' ? '3' : '18'}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6F6F6F] leading-[20px]">Invalid or expired API keys</p>
                  </div>

                  <div className="p-4 bg-white border border-border rounded-[8px]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        
                        <p className="text-[14px] font-semibold text-[#161616]">Network Errors</p>
                      </div>
                      <span className="bg-[rgba(254,154,0,0.1)] text-[#e17100] border border-[#e17100] rounded-[3.5px] text-[12px] font-medium w-[24px] h-[24px] inline-flex items-center justify-center">
                        {errorPeriod === '24h' ? '1' : '5'}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6F6F6F] leading-[20px]">Connection timeouts or interruptions</p>
                  </div>

                  <div className="p-4 bg-white border border-border rounded-[8px]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        
                        <p className="text-[14px] font-semibold text-[#161616]">Schema/Contract Errors</p>
                      </div>
                      <span className="bg-[rgba(254,154,0,0.1)] text-[#e17100] border border-[#e17100] rounded-[3.5px] text-[12px] font-medium w-[24px] h-[24px] inline-flex items-center justify-center">
                        {errorPeriod === '24h' ? '2' : '11'}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6F6F6F] leading-[20px]">Invalid request format or missing required fields</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border"></div>

              {/* Lightweight Logs */}
              <div>
                <p className="text-[14px] font-semibold text-[#161616] mb-3">Recent Operational Events</p>
                <div className="bg-background border border-border rounded-[8px] p-4 space-y-2 max-h-48 overflow-y-auto">
                  <div className="flex items-start gap-3 text-[12px]">
                    <span className="text-[#6F6F6F] shrink-0">14:32:15</span>
                    <span className="text-[#096] font-mono shrink-0">INFO</span>
                    <span className="text-[#161616]">Model inference completed successfully (v2.1.0)</span>
                  </div>
                  <div className="flex items-start gap-3 text-[12px]">
                    <span className="text-[#6F6F6F] shrink-0">14:31:42</span>
                    <span className="text-[#e17100] font-mono shrink-0">WARN</span>
                    <span className="text-[#161616]">API rate limit approaching for institution_id: inst_***</span>
                  </div>
                  <div className="flex items-start gap-3 text-[12px]">
                    <span className="text-[#6F6F6F] shrink-0">14:29:08</span>
                    <span className="text-[#096] font-mono shrink-0">INFO</span>
                    <span className="text-[#161616]">Preprocessing complete for request_id: req_***</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[12px]">
                    <span className="text-[#6F6F6F] shrink-0">14:25:19</span>
                    <span className="text-[#096] font-mono shrink-0">INFO</span>
                    <span className="text-[#161616]">Model inference completed successfully (v2.1.0)</span>
                  </div>
                </div>
                <p className="text-[12px] text-[#6F6F6F] mt-2">
                  No PII or patient data is logged. Only high-level operational events are recorded.
                </p>
              </div>
            </div>
          </div>

          {/* B. Scheduled Usage Tracking */}
          <div className="bg-card border border-border rounded-[8px] overflow-hidden">
            <div className="p-[24px] border-b border-border bg-card/50">
              <h2 className="text-[18px] font-semibold text-[#000000]">Scheduled Usage Tracking</h2>
              <p className="text-[12px] text-[#6F6F6F] mt-1">Monitor reserved runs and plan deployment capacity</p>
            </div>
            <div className="p-[24px] space-y-6">
              {/* Current Reservation */}
              <div>
                <p className="text-[14px] font-semibold text-[#161616] mb-4">
                  {modelStatus === 'active' ? 'Next Reservation' : 'Current Reservation'}
                </p>
                {modelStatus === 'active' ? (
                  // Show upcoming reservation for active models
                  <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[14px] font-semibold text-[#161616]">Mayo Clinic - Morning Diagnostics</p>
                      <span className="px-2 py-2 bg-secondary text-secondary-foreground rounded-[4px] text-[12px] font-medium">
                        Scheduled
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Start Time</p>
                        <p className="text-[14px] font-semibold text-[#161616]">6:00 AM</p>
                        <p className="text-[12px] text-[#6F6F6F]">Today</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Expected Volume</p>
                        <p className="text-[14px] font-semibold text-[#161616]">~450 cases</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Est. Duration</p>
                        <p className="text-[14px] font-semibold text-[#161616]">3h 30m</p>
                      </div>
                    </div>

                    {/* Time Until Start */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-[12px] text-[#525252]">
                        Starts in <span className="font-semibold text-[#161616]">15 minutes</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  // Show in-progress reservation for other model statuses
                  <div className="p-4 border border-[#2f54eb]/20 rounded-[8px] bg-[#2f54eb00]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-[#2f54eb] animate-pulse"></div>
                        <p className="text-[14px] font-semibold text-[#161616]">Johns Hopkins Hospital - Overnight Batch</p>
                      </div>
                      <span className="text-[12px] font-medium text-[#161616d9]">
                        In Progress
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Time Remaining</p>
                        <p className="text-[20px] leading-[28px] font-bold text-[#161616]">2h 14m</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Expected Finish</p>
                        <p className="text-[20px] leading-[28px] font-bold text-[#161616]">5:45 AM</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Current Throughput</p>
                        <p className="text-[14px] font-semibold text-[#161616]">127 cases/hour</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Progress</p>
                        <p className="text-[14px] font-semibold text-[#161616]">584 / 862 cases</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#2f54eb] rounded-full transition-all"
                          style={{ width: '67.7%' }}
                        ></div>
                      </div>
                      <p className="text-[12px] text-[#6F6F6F] mt-2">67.7% complete</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-px bg-border"></div>

              {/* Next Reservations */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[14px] font-semibold text-[#161616]">Upcoming Reservations</p>
                  <button className="text-[14px] font-medium text-[#2f54eb] hover:text-[#1d39c4] transition-colors">
                    View All Reservations
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {/* For active models, skip the first reservation (already shown in Next Reservation) */}
                  {modelStatus !== 'active' && (
                    <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[14px] font-semibold text-[#161616]">Mayo Clinic - Morning Diagnostics</p>
                        <span className="px-2 py-2 bg-secondary text-secondary-foreground rounded-[4px] text-[12px] font-medium">
                          Scheduled
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-[12px] text-[#6F6F6F] mb-1">Start Time</p>
                          <p className="text-[14px] font-semibold text-[#161616]">6:00 AM</p>
                          <p className="text-[12px] text-[#6F6F6F]">Today</p>
                        </div>
                        <div>
                          <p className="text-[12px] text-[#6F6F6F] mb-1">Expected Volume</p>
                          <p className="text-[14px] font-semibold text-[#161616]">~450 cases</p>
                        </div>
                        <div>
                          <p className="text-[12px] text-[#6F6F6F] mb-1">Est. Duration</p>
                          <p className="text-[14px] font-semibold text-[#161616]">3h 30m</p>
                        </div>
                      </div>

                      {/* Time Until Start */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-[12px] text-[#525252]">
                          Starts in <span className="font-semibold text-[#161616]">15 minutes</span>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Next Reservation 2 */}
                  <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[14px] font-semibold text-[#161616]">Stanford Health - Research Batch</p>
                      <span className="px-2 py-2 bg-secondary text-secondary-foreground rounded-[4px] text-[12px] font-medium">
                        Scheduled
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Start Time</p>
                        <p className="text-[14px] font-semibold text-[#161616]">10:00 AM</p>
                        <p className="text-[12px] text-[#6F6F6F]">Today</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Expected Volume</p>
                        <p className="text-[14px] font-semibold text-[#161616]">~280 cases</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Est. Duration</p>
                        <p className="text-[14px] font-semibold text-[#161616]">2h 15m</p>
                      </div>
                    </div>

                    {/* Time Until Start */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-[12px] text-[#525252]">
                        Starts in <span className="font-semibold text-[#161616]">4 hours 15 minutes</span>
                      </p>
                    </div>
                  </div>

                  {/* Next Reservation 3 */}
                  <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[14px] font-semibold text-[#161616]">Cleveland Clinic - Afternoon Run</p>
                      <span className="px-2 py-2 bg-secondary text-secondary-foreground rounded-[4px] text-[12px] font-medium">
                        Scheduled
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Start Time</p>
                        <p className="text-[14px] font-semibold text-[#161616]">2:00 PM</p>
                        <p className="text-[12px] text-[#6F6F6F]">Today</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Expected Volume</p>
                        <p className="text-[14px] font-semibold text-[#161616]">~320 cases</p>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6F6F6F] mb-1">Est. Duration</p>
                        <p className="text-[14px] font-semibold text-[#161616]">2h 45m</p>
                      </div>
                    </div>

                    {/* Time Until Start */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-[12px] text-[#525252]">
                        Starts in <span className="font-semibold text-[#161616]">8 hours</span>
                      </p>
                    </div>
                  </div>

                  {/* View All Button */}
                  
                </div>
              </div>

              <div className="h-px bg-border"></div>

              {/* Capacity Summary */}
              <div>
                <p className="text-[14px] font-semibold text-[#161616] mb-4">Capacity Planning</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                    <p className="text-[12px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-2">Peak Throughput</p>
                    <p className="text-[20px] leading-[28px] font-bold text-[#161616]">185 cases/hr</p>
                    <p className="text-[12px] text-[#6F6F6F] mt-1">Maximum observed</p>
                  </div>
                  <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                    <p className="text-[12px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-2">Avg Queue Time</p>
                    <p className="text-[20px] leading-[28px] font-bold text-[#161616]">8 minutes</p>
                    <p className="text-[12px] text-[#6F6F6F] mt-1">Last 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* C. Usage Analytics */}
      <div className="bg-card border border-border rounded-[8px] overflow-hidden">
        <div className="p-[24px] border-b border-border bg-card/50">
          <h2 className="text-[18px] font-semibold text-[#000000]">Usage Analytics</h2>
          <p className="text-[12px] text-[#6F6F6F] mt-1">How your model is being used</p>
        </div>
        <div className="p-[24px] space-y-6">
          {/* Cases Processed - Chart First */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[14px] font-semibold text-[#161616]">Cases Processed</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setUsagePeriod('daily');
                    setSelectedDayOffset(0);
                  }}
                  className={`px-3 py-1 rounded-[8px] text-[12px] font-medium transition-all ${
                    usagePeriod === 'daily'
                      ? 'bg-[#2f54eb]/10 text-[#2f54eb] border border-[#2f54eb]/20'
                      : 'text-[#6F6F6F] hover:text-[#161616]'
                  }`}
                >
                  Daily
                </button>
                <button
                  onClick={() => {
                    setUsagePeriod('weekly');
                    setSelectedWeek(0);
                  }}
                  className={`px-3 py-1 rounded-[8px] text-[12px] font-medium transition-all ${
                    usagePeriod === 'weekly'
                      ? 'bg-[#2f54eb]/10 text-[#2f54eb] border border-[#2f54eb]/20'
                      : 'text-[#6F6F6F] hover:text-[#161616]'
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => {
                    setUsagePeriod('monthly');
                    setSelectedDayOffset(0);
                  }}
                  className={`px-3 py-1 rounded-[8px] text-[12px] font-medium transition-all ${
                    usagePeriod === 'monthly'
                      ? 'bg-[#2f54eb]/10 text-[#2f54eb] border border-[#2f54eb]/20'
                      : 'text-[#6F6F6F] hover:text-[#161616]'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {usagePeriod === 'monthly' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevMonth}
                      className="p-1.5 hover:bg-secondary rounded-[8px] transition-colors"
                    >
                      <ChevronLeft className="size-4 text-[#6F6F6F]" />
                    </button>
                    <span className="text-[14px] font-medium text-[#161616] min-w-[120px] text-center">
                      Oct 2025 - Mar 2026
                    </span>
                    <button
                      onClick={handleNextMonth}
                      className="p-1.5 hover:bg-secondary rounded-[8px] transition-colors"
                    >
                      <ChevronRight className="size-4 text-[#6F6F6F]" />
                    </button>
                  </div>
                )}
                {usagePeriod === 'weekly' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevWeek}
                      disabled={selectedWeek === 0}
                      className="p-1.5 hover:bg-secondary rounded-[8px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="size-4 text-[#6F6F6F]" />
                    </button>
                    <span className="text-[14px] font-medium text-[#161616] min-w-[160px] text-center">
                      {selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                    <button
                      onClick={handleNextWeek}
                      disabled={selectedWeek === 3}
                      className="p-1.5 hover:bg-secondary rounded-[8px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="size-4 text-[#6F6F6F]" />
                    </button>
                  </div>
                )}
                {usagePeriod === 'daily' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevDay}
                      className="p-1.5 hover:bg-secondary rounded-[8px] transition-colors"
                    >
                      <ChevronLeft className="size-4 text-[#6F6F6F]" />
                    </button>
                    <span className="text-[14px] font-medium text-[#161616] min-w-[140px] text-center">
                      {selectedDayOffset === 0 ? 'Last 7 Days' : `${selectedDayOffset}-${selectedDayOffset + 7} days ago`}
                    </span>
                    <button
                      onClick={handleNextDay}
                      disabled={selectedDayOffset === 0}
                      className="p-1.5 hover:bg-secondary rounded-[8px] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="size-4 text-[#6F6F6F]" />
                    </button>
                  </div>
                )}
              </div>
              <div className="text-right">
                <p className="text-[12px] text-[#6F6F6F]">Total Cases</p>
                <p className="text-[24px] font-bold text-[#161616]">{totalCases.toLocaleString()}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-background/50 border border-border rounded-[8px] p-4">
              <div className="w-full h-[280px] flex items-end gap-2 px-4 py-8">
                {usageData.map((item, index) => {
                  const maxCases = Math.max(...usageData.map(d => d.cases));
                  const heightPercent = (item.cases / maxCases) * 100;
                  
                  return (
                    <div key={item.id} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex items-end justify-center" style={{ height: '220px' }}>
                        <div 
                          className="w-full max-w-[40px] rounded-t-[4px] transition-all hover:opacity-80 cursor-pointer group relative"
                          style={{ 
                            height: `${heightPercent}%`,
                            backgroundColor: '#91d5ff',
                            minHeight: '20px'
                          }}
                          title={`${item.period}: ${item.cases} cases`}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-card border border-border rounded-[4px] px-2 py-1 text-[12px] font-medium text-[#161616] whitespace-nowrap shadow-sm">
                            {item.cases.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <p className="text-[12px] text-[#6F6F6F]">{item.period}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="h-px bg-border"></div>

          {/* Active Sites/Institutions */}
          <div>
            <p className="text-[14px] font-semibold text-[#161616] mb-4">Active Sites & Institutions</p>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="size-4 text-primary" />
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Active Institutions</p>
                </div>
                <p className="text-[24px] font-bold text-[#161616]">{institutionsData.length}</p>
                <p className="text-[12px] text-[#6F6F6F] mt-1">Across 6 countries</p>
              </div>
              <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="size-4 text-primary" />
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Active Users</p>
                </div>
                <p className="text-[24px] font-bold text-[#161616]">{totalInstitutionUsers}</p>
                <p className="text-[12px] text-[#6F6F6F] mt-1">Last 30 days</p>
              </div>
            </div>

            {/* Institution Listing */}
            <div className="bg-background/50 border border-border rounded-[8px] overflow-hidden">
              <div>
                <table className="w-full">
                  <thead className="bg-background/80 backdrop-blur-sm border-b border-border">
                    <tr>
                      <th className="px-4 py-2 text-left">
                        <p className="text-[14px] font-medium text-[#6F6F6F] uppercase tracking-wide">Institution</p>
                      </th>
                      <th className="px-4 py-2 text-right">
                        <p className="text-[14px] font-medium text-[#6F6F6F] uppercase tracking-wide">Active Users</p>
                      </th>
                      <th className="px-4 py-2 text-right">
                        <p className="text-[14px] font-medium text-[#6F6F6F] uppercase tracking-wide">Cases Processed</p>
                      </th>
                      <th className="px-4 py-2 text-right">
                        <p className="text-[14px] font-medium text-[#6F6F6F] uppercase tracking-wide">% of Total</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {institutionsData.map((inst, index) => (
                      <tr key={index} className="border-b border-border last:border-0 hover:bg-card/50 transition-colors">
                        <td className="px-4 py-3">
                          <p className="text-[14px] text-[#161616]">{inst.name}</p>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <p className="text-[14px] text-[#161616]">{inst.users}</p>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <p className="text-[14px] font-medium text-[#161616]">{inst.cases.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <p className="text-[14px] text-[#6F6F6F]">
                            {((inst.cases / totalInstitutionCases) * 100).toFixed(1)}%
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* D. Business & Licensing */}
      <div className="bg-card border border-border rounded-[8px] overflow-hidden">
        <div className="p-[24px] border-b border-border bg-card/50">
          <h2 className="text-[18px] font-semibold text-[#000000]">Business & Licensing</h2>
          <p className="text-[12px] text-[#6F6F6F] mt-1">Revenue and contract information</p>
        </div>
        <div className="p-[24px] space-y-6">
          {/* Revenue */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[14px] font-semibold text-[#161616]">Revenue Overview</p>
              <div className="flex items-center gap-2">
                {(['7D', '4W', '6M', '12M'] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1.5 rounded-[8px] text-[12px] font-semibold transition-all ${
                      selectedPeriod === period
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-[#6F6F6F] hover:text-[#161616]'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4">
                <p className="text-[12px] text-[#6F6F6F] mb-2">Average Revenue</p>
                <p className="text-[20px] leading-[28px] font-bold text-[#161616]">${currentRevenue.toLocaleString()}</p>
                <p className="text-[12px] text-[#6F6F6F] mt-1">for {selectedPeriod}</p>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="relative h-48 flex items-end gap-3">
              {revenueData[selectedPeriod].map((value, index) => {
                const height = (value / maxRevenue) * 100;
                const isHighest = value === maxRevenue;
                
                // Generate labels based on period
                let label = '';
                if (selectedPeriod === '7D') {
                  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                  label = days[index] || '';
                } else if (selectedPeriod === '4W') {
                  label = `W${index + 1}`;
                } else if (selectedPeriod === '6M') {
                  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
                  label = months[index] || '';
                } else if (selectedPeriod === '12M') {
                  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
                  label = months[index] || '';
                }
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end justify-center" style={{ height: '180px' }}>
                      <div className="flex flex-col items-center gap-6 max-w-[40px]">
                        <p className="text-[12px] font-semibold text-[#161616] whitespace-nowrap">${(value / 1000).toFixed(1)}k</p>
                        <div 
                          className="w-full transition-all hover:opacity-80 rounded-t-[4px] rounded-b-[0px]"
                          style={{ 
                            height: `${height * 1.4}px`,
                            backgroundColor: '#91d5ff'
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-[12px] text-[#6F6F6F]">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-border"></div>

          {/* Billing & Contract */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background/50 border border-border rounded-[8px]">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="size-4 text-primary" />
                <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Billing Model</p>
              </div>
              <p className="text-[14px] font-semibold text-[#161616]">Per-inference</p>
              <p className="text-[12px] text-[#6F6F6F] mt-1">$2.50 per API call</p>
            </div>
            <div className="p-4 bg-background/50 border border-[#d9d9d9] rounded-[8px]">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Contract Status</p>
              </div>
              <p className="text-[14px] font-semibold text-emerald-600">Active</p>
              <p className="text-[12px] text-[#6F6F6F] mt-1">Renews on Mar 15, 2027</p>
            </div>
          </div>
        </div>
      </div>

      {/* E. Versioning & Deprecation and F. Audit & Admin - Side by Side */}
      <div className="grid grid-cols-2 gap-6">
        {/* E. Versioning & Deprecation */}
        <div className="bg-card border border-border rounded-[8px] overflow-hidden">
          <div className="p-[24px] border-b border-border bg-card/50">
            <h2 className="text-[18px] font-semibold text-[#000000]">Versioning & Deprecation</h2>
            <p className="text-[12px] text-[#6F6F6F] mt-1">Version history and lifecycle management</p>
          </div>
          <div className="p-[24px] space-y-6">
            {/* Current Version */}
            <div className="p-4 border border-border rounded-[8px]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch className="size-[14px] text-[#2f54eb]" />
                  <p className="text-[14px] font-semibold text-[#161616]">Current Version</p>
                </div>
                <span className="px-3 py-1 bg-[#2f54eb]/10 text-[#2f54eb] rounded-[3.5px] text-[12px] font-medium">
                  v2.1.0
                </span>
              </div>
              <p className="text-[12px] text-[#6F6F6F]">Released on Feb 15, 2026</p>
            </div>

            {/* Version History */}
            <div>
              <p className="text-[14px] font-semibold text-[#161616] mb-3">Version History</p>
              <div className="space-y-3">
                <div className="p-4 bg-[rgba(248,248,248,0.5)] border border-border rounded-[8px]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 text-[rgba(22,22,22,0.85)] rounded-[3.5px] text-[12px] font-mono">v2.1.0</span>
                      <span className="text-[12px] text-[#6F6F6F]">Feb 15, 2026</span>
                    </div>
                    <span className="px-2 py-1 bg-[rgba(0,188,125,0.1)] text-[#237804] rounded-[3.5px] text-[12px] font-medium">
                      Active
                    </span>
                  </div>
                  <p className="text-[14px] text-[#161616] leading-[22.75px]">
                    Improved sensitivity on amelanotic melanoma cases. Added NDPI format support. Performance optimizations.
                  </p>
                </div>

                <div className="p-4 bg-[rgba(248,248,248,0.5)] border border-border rounded-[8px]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 text-[rgba(22,22,22,0.85)] rounded-[3.5px] text-[12px] font-mono">v2.0.0</span>
                      <span className="text-[12px] text-[#6F6F6F]">Oct 10, 2025</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#161616] leading-[22.75px]">
                    Major update with retrained model on expanded dataset. External validation completed.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#e17100] rounded-[8px]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-[rgba(254,154,0,0.1)] text-[#e17100] rounded-[3.5px] text-[12px] font-mono">v1.5.2</span>
                      <span className="text-[12px] text-[#6F6F6F]">Jun 3, 2025</span>
                    </div>
                    <span className="px-2 py-1 bg-[rgba(254,154,0,0.1)] text-[#e17100] rounded-[3.5px] text-[12px] font-medium flex items-center gap-2">
                      <AlertTriangle className="size-[10.5px]" />
                      Deprecated
                    </span>
                  </div>
                  <p className="text-[14px] text-[#161616] leading-[22.75px] mb-2">
                    Initial production release. Bug fixes and stability improvements.
                  </p>
                  <p className="text-[12px] text-[#e17100]">
                    <span className="font-bold">Sunset date:</span> May 1, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* F. Audit & Admin */}
        <div className="bg-card border border-border rounded-[8px] overflow-hidden">
          <div className="p-[24px] border-b border-border bg-card/50">
            <h2 className="text-[18px] font-semibold text-[#000000]">Audit & Admin</h2>
            <p className="text-[12px] text-[#6F6F6F] mt-1">Model metadata and administrative controls</p>
          </div>
          <div className="px-[24px] py-[16px] flex flex-col gap-[24px]">
            {/* Model Metadata */}
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[8px]">
              <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="size-4 text-[#6F6F6F]" />
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Created Date</p>
                </div>
                <p className="text-[14px] font-semibold text-[#161616]">Jan 10, 2025</p>
              </div>
              <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                <div className="flex items-center gap-2 mb-2">
                  <User className="size-4 text-[#6F6F6F]" />
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Owner</p>
                </div>
                <p className="text-[14px] font-semibold text-[#161616]">Dr. Sarah Chen</p>
              </div>
              <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                <div className="flex items-center gap-2 mb-2">
                  <User className="size-4 text-[#6F6F6F]" />
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Added By</p>
                </div>
                <p className="text-[14px] font-semibold text-[#161616]">Dr. Sarah Chen</p>
              </div>
              <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="size-4 text-[#6F6F6F]" />
                  <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide">Last Modified</p>
                </div>
                <p className="text-[14px] font-semibold text-[#161616]">Feb 15, 2026</p>
                <p className="text-[12px] text-[#6F6F6F] mt-1">by Dr. Sarah Chen</p>
              </div>
            </div>

            {/* Permissions & Roles */}
            <div className="flex flex-col gap-4">
              <p className="text-[14px] font-semibold text-[#161616]">Permissions & Roles</p>
              <div className="space-y-2">
                <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[14px] font-semibold text-[#161616]">Dr. Sarah Chen</p>
                      <p className="text-[12px] text-[#6F6F6F]">sarah.chen@hospital.edu</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-[4px] text-[12px] font-medium text-[#1063b1]">Owner</span>
                  </div>
                </div>
                <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[14px] font-semibold text-[#161616]">Dr. Michael Rodriguez</p>
                      <p className="text-[12px] text-[#6F6F6F]">m.rodriguez@hospital.edu</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-[8px] text-[12px] font-medium">
                      Editor
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[14px] font-semibold text-[#161616]">IT Team (Mayo Clinic)</p>
                      <p className="text-[12px] text-[#6F6F6F]">it-team@mayoclinic.org</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-[8px] text-[12px] font-medium">
                      Viewer
                    </span>
                  </div>
                </div>
              </div>
              <button className="mt-3 w-full px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-[8px] text-[14px] font-medium hover:bg-secondary transition-all flex items-center justify-center gap-2">
                <Settings className="size-4" />
                Manage Permissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}