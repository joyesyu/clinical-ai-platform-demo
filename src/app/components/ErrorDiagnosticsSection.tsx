import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Shield, 
  WifiOff, 
  FileWarning, 
  Zap, 
  ChevronRight, 
  Activity, 
  Clock, 
  GitBranch, 
  Hash, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  ExternalLink, 
  Ticket, 
  Search, 
  LayoutList,
  MessageSquare,
  Users,
  Server,
  Database,
  Globe,
  CheckCircle2,
  TrendingUp,
  Eye
} from 'lucide-react';

// Helper component to avoid Fragment prop issues with Figma's instrumentation
function LogRow({ log, expandedLogId, setExpandedLogId }: { 
  log: any; 
  expandedLogId: string | null; 
  setExpandedLogId: (id: string | null) => void;
}) {
  const isExpanded = expandedLogId === log.id;
  
  return (
    <>
      <tr className="hover:bg-[rgba(0,0,0,0.02)] transition-colors text-[12px] group">
        <td className="px-3 py-2 font-mono text-[#6F6F6F] whitespace-nowrap">{log.timestamp}</td>
        <td className="px-3 py-2 font-mono text-[rgba(22,22,22,0.85)]">{log.code}</td>
        <td className="px-3 py-2 text-[#161616] w-32">{log.component}</td>
        <td className="px-3 py-2 text-[#161616] max-w-md">
          <p className="text-[12px] line-clamp-2" title={log.message}>{log.message}</p>
        </td>
        <td className="px-3 py-2">
          <button
            onClick={() => setExpandedLogId(isExpanded ? null : log.id)}
            className="font-mono text-[12px] hover:underline flex items-center gap-1"
          >
            {log.traceId}
            <ExternalLink className="size-[14px]" />
          </button>
        </td>
      </tr>
      
      {/* Expanded Trace Details */}
      {isExpanded && (
        <tr className="bg-[rgba(0,0,0,0.02)]">
          <td colSpan={5} className="px-3 py-3">
            <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-4">
              <h4 className="text-[12px] font-bold text-[rgba(22,22,22,0.85)] uppercase tracking-wide mb-3 flex items-center gap-2">
                <Activity className="size-[14px]" /> Trace Details: {log.traceId}
              </h4>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-[10px] text-[#6F6F6F] uppercase font-bold mb-1">Request ID</div>
                  <div className="text-[12px] font-mono text-[#161616]">{log.id}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#6F6F6F] uppercase font-bold mb-1">Version</div>
                  <div className="text-[12px] font-mono text-[#161616]">{log.version}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#6F6F6F] uppercase font-bold mb-1">Error Type</div>
                  <div className="text-[12px] text-[#161616]">{log.type}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#6F6F6F] uppercase font-bold mb-1">Severity</div>
                  <div className="text-[12px] font-mono text-[#161616]">{log.severity}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-[10px] text-[#6F6F6F] uppercase font-bold mb-1">Stack Trace</div>
                <div className="bg-[rgba(0,0,0,0.02)] border border-[#D9D9D9] rounded-[4px] p-3 font-mono text-[12px] text-[#161616] overflow-x-auto">
                  <div>at inferenceHandler (src/handlers/inference.py:145)</div>
                  <div>at processRequest (src/core/processor.py:89)</div>
                  <div>at handleHTTPRequest (src/server/routes.py:234)</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-white border border-[#D9D9D9] rounded-[4px] text-[12px] font-medium hover:bg-[rgba(0,0,0,0.02)] flex items-center gap-1">
                  <Copy className="size-[14px]" /> Copy Trace ID
                </button>
                <button className="px-3 py-1.5 bg-white border border-[#D9D9D9] rounded-[4px] text-[12px] font-medium hover:bg-[rgba(0,0,0,0.02)] flex items-center gap-1">
                  <ExternalLink className="size-[14px]" /> Open in Log Viewer
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

// Helper component for error rows to avoid Fragment prop issues
function ErrorRow({ error, expandedErrorId, setExpandedErrorId }: {
  error: any;
  expandedErrorId: number | null;
  setExpandedErrorId: (id: number | null) => void;
}) {
  const getWorkflowImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'text-[#CF1322] bg-[rgba(207,19,34,0.1)]';
      case 'High': return 'text-[#E17100] bg-[rgba(225,113,0,0.1)]';
      case 'Medium': return 'text-[#2770DF] bg-[rgba(39,112,223,0.1)]';
      case 'Low': return 'text-[#52C41A] bg-[rgba(82,196,26,0.1)]';
      default: return 'text-[#6F6F6F] bg-[rgba(111,111,111,0.1)]';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-[#FF4D4F]';
      case 'Monitoring': return 'text-[#FE9A00]';
      case 'Resolved': return 'text-[#52C41A]';
      default: return 'text-[#6F6F6F]';
    }
  };

  return (
    <>
      <tr 
        className={`hover:bg-[rgba(0,0,0,0.02)] transition-colors ${expandedErrorId === error.id ? 'bg-[rgba(0,0,0,0.02)]' : ''}`}
      >
        <td className="px-3 py-3">
          <div className="flex items-center gap-2">
            <p className="text-[14px] text-[#161616] line-clamp-2 max-w-md" title={error.message}>
              {error.message}
            </p>
            {error.isNew && (
              <span className="px-1.5 py-0.5 bg-[rgba(43,127,255,0.1)] rounded text-[10px] font-bold uppercase border border-[rgba(43,127,255,0.2)] shrink-0 text-[#0d68eb]">New</span>
            )}
          </div>
        </td>
        <td className="px-3 py-3">
          <div className="flex items-center gap-1">
            <Users className="size-[14px] text-[#6F6F6F]" />
            <span className="text-[14px] font-bold text-[rgba(22,22,22,0.85)]">{error.affectedUsers}</span>
            <span className="text-[12px] text-[#6F6F6F]">users</span>
          </div>
          <div className="text-[12px] text-[#6F6F6F] mt-0.5">
            {error.affectedRuns} runs
          </div>
        </td>
        <td className="px-3 py-3">
          <div className="flex items-center gap-1">
            <TrendingUp className="size-[14px] text-[#6F6F6F]" />
            <span className="text-[14px] font-medium text-[#161616]">
              {error.trend}
            </span>
          </div>
        </td>
        <td className="px-3 py-3"><span className={`px-2 py-1 rounded text-[12px] font-medium ${getWorkflowImpactColor(error.workflowImpact)}`}>{error.workflowImpact}</span></td>
        <td className="px-3 py-3">
          <div className="text-[12px] text-[#6F6F6F]">
            First: {error.firstSeen}
          </div>
          <div className={`text-[12px] font-medium mt-0.5 text-[#161616]`}>
            {error.status}
          </div>
        </td>
        <td className="px-3 py-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setExpandedErrorId(expandedErrorId === error.id ? null : error.id);
            }}
            className="px-3 py-1.5 bg-white border border-[#D9D9D9] rounded-[4px] text-[12px] font-medium hover:bg-[rgba(0,0,0,0.02)] flex items-center gap-1.5"
          >
             Investigate
          </button>
        </td>
      </tr>
      
      {/* Expanded Detail View - Playbook */}
      {expandedErrorId === error.id && (
        <tr className="bg-[rgba(0,0,0,0.02)]">
          <td colSpan={6} className="px-3 py-3">
            <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-4">
              <h4 className="text-[12px] font-bold text-[rgba(22,22,22,0.85)] uppercase tracking-wide mb-3 flex items-center gap-2">
                <Activity className="size-[14px]" /> Suggested Checks (Playbook)
              </h4>
              <div className="space-y-2 mb-4">
                {error.suggestedChecks.map((check: string, i: number) => (
                  <label key={i} className="flex items-center gap-2 text-[14px] text-[rgba(22,22,22,0.85)] cursor-pointer hover:text-[#161616]">
                    <input type="checkbox" className="rounded border-[#D9D9D9] text-primary focus:ring-primary/20" />
                    {check}
                  </label>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#D9D9D9]">
                <button className="flex-1 py-1.5 px-3 bg-white border border-[#D9D9D9] rounded-[4px] text-[12px] font-medium hover:bg-[rgba(0,0,0,0.02)] flex items-center justify-center gap-2">
                  <Ticket className="size-[14px]" /> Create Jira Ticket
                </button>
                <button className="flex-1 py-1.5 px-3 bg-white border border-[#D9D9D9] rounded-[4px] text-[12px] font-medium hover:bg-[rgba(0,0,0,0.02)] flex items-center justify-center gap-2">
                  <Search className="size-[14px]" /> Search Logs
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export function ErrorDiagnosticsSection() {
  const [timeRange, setTimeRange] = useState<'1h' | '24h' | '7d'>('24h');
  const [activeTab, setActiveTab] = useState<'system' | 'user'>('system');
  const [expandedErrorId, setExpandedErrorId] = useState<number | null>(null);
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [logSearchText, setLogSearchText] = useState('');
  const [logComponentFilter, setLogComponentFilter] = useState<string>('all');
  const [logCodeFilter, setLogCodeFilter] = useState<string>('all');
  const [groupByCluster, setGroupByCluster] = useState(false);
  const [selectedErrorSource, setSelectedErrorSource] = useState<string | null>(null);
  const [errorSourceTimeRange, setErrorSourceTimeRange] = useState<'1h' | '24h' | '7d'>('24h');

  // Mock data for error breakdown with sparkline data
  const errorStats = [
    { 
      label: 'Runtime', 
      count: 842, 
      total: 2000, 
      percentage: 42, 
      icon: Zap, 
      iconColor: '#FF4D4F',
      bg: 'bg-[rgba(255,77,79,0.1)]', 
      trend: [40, 65, 50, 80, 45, 90, 42],
      trendDirection: 'up' as const,
      trendPercentage: '+15%',
      topIssues: [
        { message: 'CUDA out of memory during inference', count: 234, traceIds: ['trace_88293', 'trace_22671', 'trace_88227'] },
        { message: 'Timeout waiting for upstream service', count: 189, traceIds: ['trace_55902'] },
        { message: 'Model checkpoint load failed', count: 156, traceIds: ['trace_22671'] },
      ],
      affectedVersions: ['v2.1.0 (68%)', 'v2.0.0 (22%)', 'v1.5.2 (10%)'],
      affectedComponents: ['Inference (75%)', 'Preprocess (15%)', 'Router (10%)'],
      affectedSites: ['Mayo Clinic (45%)', 'General Hospital (30%)', 'Kaiser (25%)'],
      affectedEndpoints: ['/api/v2/inference (60%)', '/api/v2/batch (25%)', '/api/v1/predict (15%)']
    },
    { 
      label: 'Network', 
      count: 701, 
      total: 2000, 
      percentage: 35, 
      icon: WifiOff, 
      iconColor: '#FE9A00',
      bg: 'bg-[rgba(254,154,0,0.1)]', 
      trend: [20, 30, 25, 40, 35, 30, 35],
      trendDirection: 'stable' as const,
      trendPercentage: '+2%',
      topIssues: [
        { message: 'Connection reset by peer', count: 312, traceIds: ['trace_77123'] },
        { message: 'Database connection pool exhausted', count: 245, traceIds: ['trace_11560'] },
        { message: 'Gateway timeout', count: 144, traceIds: ['trace_88291'] },
      ],
      affectedVersions: ['v2.1.0 (80%)', 'v2.0.0 (20%)'],
      affectedComponents: ['Network (70%)', 'Database (30%)'],
      affectedSites: ['General Hospital (55%)', 'Mayo Clinic (30%)', 'Kaiser (15%)'],
      affectedEndpoints: ['/api/v2/upload (50%)', '/api/v2/inference (30%)', '/api/v2/status (20%)']
    },
    { 
      label: 'Schema', 
      count: 300, 
      total: 2000, 
      percentage: 15, 
      icon: FileWarning, 
      iconColor: '#2B7FFF',
      bg: 'bg-[rgba(43,127,255,0.1)]', 
      trend: [10, 15, 12, 10, 18, 15, 15],
      trendDirection: 'down' as const,
      trendPercentage: '-8%',
      topIssues: [
        { message: 'Missing required field in input JSON', count: 156, traceIds: ['trace_66541'] },
        { message: 'Invalid DICOM metadata', count: 89, traceIds: ['trace_33782'] },
        { message: 'Image dimensions exceed maximum size', count: 55, traceIds: ['trace_99338'] },
      ],
      affectedVersions: ['v2.1.0 (65%)', 'v2.0.0 (35%)'],
      affectedComponents: ['Schema (60%)', 'Preprocess (40%)'],
      affectedSites: ['Mayo Clinic (60%)', 'General Hospital (25%)', 'Kaiser (15%)'],
      affectedEndpoints: ['/api/v2/validate (55%)', '/api/v2/inference (30%)', '/api/v2/upload (15%)']
    },
    { 
      label: 'Auth', 
      count: 160, 
      total: 2000, 
      percentage: 8, 
      icon: Shield, 
      iconColor: '#AD46FF',
      bg: 'bg-[rgba(173,70,255,0.1)]', 
      trend: [5, 8, 6, 5, 7, 9, 8],
      trendDirection: 'up' as const,
      trendPercentage: '+25%',
      topIssues: [
        { message: 'Invalid bearer token signature', count: 78, traceIds: ['trace_44891'] },
        { message: 'Rate limit exceeded for API key', count: 52, traceIds: ['trace_00449'] },
        { message: 'API Key quota exceeded', count: 30, traceIds: ['trace_11234'] },
      ],
      affectedVersions: ['v2.1.0 (90%)', 'v2.0.0 (10%)'],
      affectedComponents: ['Auth Gateway (85%)', 'Auth (15%)'],
      affectedSites: ['Kaiser (50%)', 'Mayo Clinic (30%)', 'General Hospital (20%)'],
      affectedEndpoints: ['/api/v2/auth (60%)', '/api/v2/inference (30%)', '/api/v2/upload (10%)']
    },
  ];

  // Mock data for top user-facing errors
  const topErrors = [
    { 
      id: 1,
      message: "Connection timeout waiting for model inference", 
      affectedUsers: 12,
      affectedRuns: 543,
      trend: "+12%", 
      isNew: false,
      workflowImpact: "Critical",
      firstSeen: "2h ago",
      status: "Investigating",
      affected: { cases: 156, users: 12, sites: 3 },
      component: "Inference",
      version: "v1.3.2",
      suggestedChecks: [
        "Check model service uptime in last 15 min",
        "Check queue length / GPU utilization",
        "Check recent deploys",
        "Sample failed requests"
      ]
    },
    { 
      id: 2,
      message: "Invalid input shape: expected (224, 224, 3) but got (512, 512, 3)", 
      affectedUsers: 8,
      affectedRuns: 312,
      trend: "-5%", 
      isNew: true,
      workflowImpact: "High",
      firstSeen: "45m ago",
      status: "New",
      affected: { cases: 89, users: 8, sites: 2 },
      component: "Preprocess",
      version: "v2.1.0",
      suggestedChecks: [
        "Verify client-side image resizing logic",
        "Check for new scanner types sending raw images",
        "Review recent API contract changes"
      ]
    },
    { 
      id: 3,
      message: "API Key quota exceeded for tier 'starter'", 
      affectedUsers: 15,
      affectedRuns: 156,
      trend: "+2%", 
      isNew: false,
      workflowImpact: "Medium",
      firstSeen: "3d ago",
      status: "Mitigated",
      affected: { cases: 45, users: 15, sites: 1 },
      component: "Auth Gateway",
      version: "v2.1.0",
      suggestedChecks: [
        "Check usage limits for 'starter' tier",
        "Review rate limiting configuration",
        "Notify customer success team"
      ]
    },
    { 
      id: 4,
      message: "Model version 'v1.5.2' is deprecated and unavailable", 
      affectedUsers: 5,
      affectedRuns: 89,
      trend: "+45%", 
      isNew: false,
      workflowImpact: "High",
      firstSeen: "1d ago",
      status: "Monitoring",
      affected: { cases: 32, users: 5, sites: 1 },
      component: "Router",
      version: "v1.5.2",
      suggestedChecks: [
        "Identify clients still requesting v1.5.2",
        "Send deprecation notice email",
        "Check backward compatibility layer"
      ]
    },
  ];

  // Mock data for recent error logs
  const errorLogs = [
    { id: "req_9f8a7b6c", timestamp: "14:45:22", severity: "P1", code: "500", component: "Inference", version: "v2.1.0", type: "Runtime", message: "CUDA out of memory during inference batch processing", traceId: "trace_88293" },
    { id: "req_3d2e1f0a", timestamp: "14:42:10", severity: "P2", code: "503", component: "Network", version: "v2.1.0", type: "Network", message: "Connection reset by peer while reading request body", traceId: "trace_77123" },
    { id: "req_5c4b3a2d", timestamp: "14:38:55", severity: "P2", code: "400", component: "Schema", version: "v2.0.0", type: "Schema", message: "Missing required field 'patient_age' in input JSON", traceId: "trace_66541" },
    { id: "req_1b0e9f8c", timestamp: "14:35:12", severity: "P1", code: "504", component: "Inference", version: "v2.1.0", type: "Runtime", message: "Timeout waiting for upstream service 'image-preprocessor'", traceId: "trace_55902" },
    { id: "req_7a6b5c4d", timestamp: "14:30:05", severity: "P0", code: "401", component: "Auth", version: "v2.1.0", type: "Auth", message: "Invalid bearer token signature", traceId: "trace_44891" },
    { id: "req_2c3d4e5f", timestamp: "14:28:33", severity: "P2", code: "422", component: "Schema", version: "v2.1.0", type: "Schema", message: "Invalid DICOM metadata: StudyInstanceUID missing", traceId: "trace_33782" },
    { id: "req_6g7h8i9j", timestamp: "14:25:47", severity: "P1", code: "500", component: "Inference", version: "v2.1.0", type: "Runtime", message: "Model checkpoint load failed: file corrupted", traceId: "trace_22671" },
    { id: "req_0k1l2m3n", timestamp: "14:22:19", severity: "P2", code: "503", component: "Network", version: "v2.0.0", type: "Network", message: "Database connection pool exhausted", traceId: "trace_11560" },
    { id: "req_4o5p6q7r", timestamp: "14:19:05", severity: "P1", code: "429", component: "Auth Gateway", version: "v2.1.0", type: "Auth", message: "Rate limit exceeded for API key 'sk_prod_xyz'", traceId: "trace_00449" },
    { id: "req_8s9t0u1v", timestamp: "14:15:58", severity: "P2", code: "400", component: "Preprocess", version: "v2.1.0", type: "Schema", message: "Image dimensions exceed maximum size 4096x4096", traceId: "trace_99338" },
    { id: "req_2w3x4y5z", timestamp: "14:12:41", severity: "P0", code: "500", component: "Inference", version: "v2.1.0", type: "Runtime", message: "Critical: Model server unresponsive for 30+ seconds", traceId: "trace_88227" },
    { id: "req_6a7b8c9d", timestamp: "14:09:27", severity: "P2", code: "404", component: "Router", version: "v1.5.2", type: "Runtime", message: "Model version 'v1.5.2' not found in registry", traceId: "trace_77116" },
  ];

  const userReports = [
    { id: "rpt_1", user: "Dr. Smith", site: "Mayo Clinic", type: "Clinical Feedback", message: "Diagnosis for case #1290 seems overly aggressive on benign nevus.", status: "Open", time: "2h ago" },
    { id: "rpt_2", user: "Nurse Joy", site: "General Hospital", type: "Bug", message: "Upload button unresponsive on iPad Mini.", status: "Investigating", time: "5h ago" },
    { id: "rpt_3", user: "Admin", site: "Kaiser Permanente", type: "Question", message: "Why did the confidence score drop for this batch?", status: "Resolved", time: "1d ago" },
  ];

  const filteredErrors = showNewOnly ? topErrors.filter(e => e.isNew) : topErrors;

  // Filter and search logs
  const filteredLogs = errorLogs.filter(log => {
    const matchesSearch = logSearchText === '' || 
      log.message.toLowerCase().includes(logSearchText.toLowerCase()) ||
      log.traceId.toLowerCase().includes(logSearchText.toLowerCase()) ||
      log.id.toLowerCase().includes(logSearchText.toLowerCase());
    
    const matchesComponent = logComponentFilter === 'all' || log.component === logComponentFilter;
    const matchesCode = logCodeFilter === 'all' || log.code === logCodeFilter;
    
    return matchesSearch && matchesComponent && matchesCode;
  });

  // Get unique values for filters
  const uniqueComponents = ['all', ...Array.from(new Set(errorLogs.map(log => log.component)))];
  const uniqueCodes = ['all', ...Array.from(new Set(errorLogs.map(log => log.code)))];

  // Helper to generate sparkline path
  const getSparklinePath = (data: number[], width: number, height: number) => {
    if (data.length === 0) return "";
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const stepX = width / (data.length - 1);

    return data.map((val, i) => {
      const x = i * stepX;
      const y = height - ((val - min) / range) * height;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="bg-white border border-[#D9D9D9] rounded-[8px] overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-white flex items-center justify-between px-[24px] py-[16px]">
        <div>
          <div className="flex items-start gap-1">
            
            <h2 className="text-[18px] font-semibold text-black leading-[26px]">Error Diagnostics</h2>
          </div>
          <p className="text-[12px] text-[#6F6F6F] leading-[20px]">Investigate active failures and user-impacting issues</p>
        </div>
        
        {/* Time Range Selector */}
        
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#D9D9D9] flex items-center px-[24px] gap-[28px]">
        <button
          onClick={() => setActiveTab('system')}
          className={`flex flex-col gap-[12.25px] h-[35px] transition-all ${
            activeTab === 'system' ? 'text-[rgba(22,22,22,0.85)]' : 'text-[#6F6F6F]'
          }`}
        >
          <div className="h-[21px] flex items-center gap-[7px]">
            <Server className="size-[14px]" style={{ strokeOpacity: activeTab === 'system' ? 0.85 : 1 }} />
            <span className="text-[14px] font-medium leading-[22px]">System Errors</span>
          </div>
          {activeTab === 'system' && (
            <div className="bg-[rgba(111,111,111,0.75)] h-[1.75px] rounded-t-full w-full" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('user')}
          className={`flex flex-col gap-[12.25px] h-[35px] transition-all ${
            activeTab === 'user' ? 'text-[rgba(22,22,22,0.85)]' : 'text-[#6F6F6F]'
          }`}
        >
          <div className="h-[21px] flex items-center gap-[7px] relative">
            <MessageSquare className="size-[14px]" style={{ strokeOpacity: activeTab === 'user' ? 0.85 : 1 }} />
            <span className="text-[14px] font-medium leading-[22px]">User Reports</span>
            <div className="absolute left-[113.09px] top-[1.25px] h-[18.5px] w-[16.188px] rounded-full flex items-center justify-center bg-[#ff4d4f]">
              <span className="text-[10px] font-medium leading-[15px] text-[#ffffff]">3</span>
            </div>
          </div>
          {activeTab === 'user' && (
            <div className="bg-[rgba(111,111,111,0.75)] h-[1.75px] rounded-t-full w-full" />
          )}
        </button>
      </div>

      <div className="px-[24px] py-[20px]">
        {activeTab === 'system' ? (
          <div className="space-y-8">
            {/* 1. Error Sources */}
            <div>
              <div className="flex items-center justify-between mb-[14px]">
                <div className="h-[21px] flex items-center gap-[7px]">
                  <Activity className="size-[14px] text-[#6F6F6F]" />
                  <h3 className="text-[14px] font-semibold text-[#161616] leading-[22px]">Error Sources</h3>
                </div>
                
                {/* Time Range Selector */}
                <div className="flex items-center gap-2 bg-white border border-[#D9D9D9] rounded-[4px] p-1">
                  {(['1h', '24h', '7d'] as const).map((range) => (
                    <button
                      key={range}
                      onClick={() => setErrorSourceTimeRange(range)}
                      className={`px-2 py-1 text-[12px] font-medium rounded-[4px] transition-colors ${
                        errorSourceTimeRange === range
                          ? 'bg-[#ececec] text-[#161616]'
                          : 'text-[#6F6F6F] hover:text-[#161616]'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-[14px] mb-4">
                {errorStats.map((stat) => {
                  const Icon = stat.icon;
                  const isSelected = selectedErrorSource === stat.label;
                  
                  return (
                    <button
                      key={stat.label}
                      onClick={() => setSelectedErrorSource(isSelected ? null : stat.label)}
                      className={`bg-white border rounded-[8px] h-[125.5px] relative overflow-hidden transition-all text-left ${
                        isSelected 
                          ? 'border-[#2f54eb] shadow-[0_0_0_1px_#2f54eb]' 
                          : 'border-[#D9D9D9] hover:border-[#6F6F6F]'
                      }`}
                    >
                      <div className="p-[16px] h-full flex flex-col justify-center relative">
                        {/* Icon and Trend Indicator */}
                        <div className="flex justify-between items-start mb-[7px]">
                          
                          
                          {/* Trend Indicator */}
                          <div className={`absolute top-[16px] right-[16px] flex items-center gap-1 text-[10px] font-medium ${
                            stat.trendDirection === 'up' ? 'text-[#CF1322]' :
                            stat.trendDirection === 'down' ? 'text-[#52C41A]' :
                            'text-[#6F6F6F]'
                          }`}>
                            {stat.trendDirection === 'up' ? (
                              null
                            ) : stat.trendDirection === 'down' ? (
                              null
                            ) : (
                              null
                            )}
                            <span className="text-[14px]">{stat.trendPercentage}</span>
                          </div>
                        </div>
                        
                        {/* Percentage and Count */}
                        <div className="h-[36px] flex items-baseline gap-[6.995px] mb-[3.5px]">
                          <span className="text-[24px] font-bold text-[rgba(22,22,22,0.85)] leading-[32px]">{stat.percentage}%</span>
                          <span className="text-[12px] text-[#6F6F6F] font-mono leading-[20px]">({stat.count}/{stat.total})</span>
                        </div>
                        
                        {/* Label */}
                        <p className="text-[14px] text-[#161616]" style={{ fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--leading-14)' }}>{stat.label}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Drill-down Panel */}
              {selectedErrorSource && (() => {
                const selectedStat = errorStats.find(s => s.label === selectedErrorSource);
                if (!selectedStat) return null;
                
                return (
                  <div className="bg-[rgba(0,0,0,0.02)] border border-[#D9D9D9] rounded-[8px] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[14px] font-semibold text-[#161616] flex items-center gap-2">
                        <span className={`p-1.5 rounded-[4px] ${selectedStat.bg}`}>
                          <selectedStat.icon className="size-[14px]" style={{ color: selectedStat.iconColor }} />
                        </span>
                        {selectedStat.label} Error Details
                      </h4>
                      <button
                        onClick={() => setSelectedErrorSource(null)}
                        className="text-[12px] text-[#6F6F6F] hover:text-[#161616]"
                      >
                        Close
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {/* Top Issues */}
                      <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-[16px]">
                        <h5 className="text-[12px] font-bold text-[#6F6F6F] uppercase mb-3">Top Issues</h5>
                        <div className="space-y-3">
                          {selectedStat.topIssues.map((issue, idx) => (
                            <div key={idx} className="border-b border-[#D9D9D9] last:border-0 pb-2 last:pb-0">
                              <div className="flex items-start justify-between mb-1">
                                <p className="text-[12px] text-[#161616] flex-1 pr-2">{issue.message}</p>
                                <span className="text-[12px] font-bold text-[rgba(22,22,22,0.85)] shrink-0">{issue.count}</span>
                              </div>
                              <div className="flex items-center gap-1 flex-wrap">
                                {issue.traceIds.map((traceId, i) => (
                                  <button
                                    key={i}
                                    className="text-[10px] font-mono text-[#2f54eb] hover:underline flex items-center gap-0.5"
                                  >
                                    {traceId}
                                    <ExternalLink className="size-[10px]" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Scope Details */}
                      <div className="space-y-4">
                        {/* Affected Versions */}
                        <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-[16px]">
                          <h5 className="text-[12px] font-bold text-[#6F6F6F] uppercase mb-2 flex items-center gap-1">
                            <GitBranch className="size-[12px]" /> Versions
                          </h5>
                          <div className="space-y-1">
                            {selectedStat.affectedVersions.map((version, idx) => (
                              <div key={idx} className="text-[12px] text-[#161616] font-mono">{version}</div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Affected Components */}
                        <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-[16px]">
                          <h5 className="text-[12px] font-bold text-[#6F6F6F] uppercase mb-2 flex items-center gap-1">
                            <Server className="size-[12px]" /> Components
                          </h5>
                          <div className="space-y-1">
                            {selectedStat.affectedComponents.map((component, idx) => (
                              <div key={idx} className="text-[12px] text-[#161616]">{component}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Affected Endpoints */}
                      <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-[16px]">
                        <h5 className="text-[12px] font-bold text-[#6F6F6F] uppercase mb-2 flex items-center gap-1">
                          <Globe className="size-[12px]" /> Endpoints
                        </h5>
                        <div className="space-y-1">
                          {selectedStat.affectedEndpoints.map((endpoint, idx) => (
                            <div key={idx} className="text-[12px] text-[#161616] font-mono">{endpoint}</div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Affected Sites */}
                      <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-[16px]">
                        <h5 className="text-[12px] font-bold text-[#6F6F6F] uppercase mb-2 flex items-center gap-1">
                          <Database className="size-[12px]" /> Sites
                        </h5>
                        <div className="space-y-1">
                          {selectedStat.affectedSites.map((site, idx) => (
                            <div key={idx} className="text-[12px] text-[#161616]">{site}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="space-y-8">
              {/* 2. Top User-Facing Errors */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-[21px] flex items-center gap-[7px]">
                    <FileWarning className="size-[14px] text-[#6F6F6F]" />
                    <h3 className="text-[14px] font-semibold text-[#161616] leading-[22px]">Top User-Facing Errors</h3>
                  </div>
                  
                </div>
                
                <div className="bg-white border border-[#D9D9D9] rounded-[8px] overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[rgba(248,248,248,0.5)] sticky top-0 z-10">
                      <tr>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F]">Issue</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-32">Affected Users</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-24">Trend</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-28">Workflow Impact</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-32">First Seen / Status</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-28">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D9D9D9]">
                      {filteredErrors.map((error) => (
                        <ErrorRow key={error.id} error={error} expandedErrorId={expandedErrorId} setExpandedErrorId={setExpandedErrorId} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Recent Diagnostic Logs */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-[21px] flex items-center gap-[7px]">
                    <Clock className="size-[14px] text-[#6F6F6F]" />
                    <h3 className="text-[14px] font-semibold text-[#161616] leading-[22px]">Recent Diagnostic Logs</h3>
                  </div>
                  
                  {/* Group by Cluster Toggle */}
                  
                </div>
                
                {/* Filter / Search Bar */}
                <div className="bg-white border border-[#D9D9D9] rounded-[8px] p-3 mb-4 flex items-center gap-2">
                  <div className="flex-1 relative">
                    <Search className="size-[14px] text-[#6F6F6F] absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search by message, trace ID, or request ID..."
                      value={logSearchText}
                      onChange={(e) => setLogSearchText(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-[12px] border border-[#D9D9D9] rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#2f54eb]/20 focus:border-[#2f54eb]"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Filter className="size-[14px] text-[#6F6F6F]" />
                    <select
                      value={logComponentFilter}
                      onChange={(e) => setLogComponentFilter(e.target.value)}
                      className="px-2 py-1.5 text-[12px] border border-[#D9D9D9] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#2f54eb]/20 focus:border-[#2f54eb]"
                    >
                      {uniqueComponents.map(comp => (
                        <option key={comp} value={comp}>
                          {comp === 'all' ? 'All Components' : comp}
                        </option>
                      ))}
                    </select>
                    
                    <select
                      value={logCodeFilter}
                      onChange={(e) => setLogCodeFilter(e.target.value)}
                      className="px-2 py-1.5 text-[12px] border border-[#D9D9D9] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#2f54eb]/20 focus:border-[#2f54eb]"
                    >
                      {uniqueCodes.map(code => (
                        <option key={code} value={code}>
                          {code === 'all' ? 'All Codes' : code}
                        </option>
                      ))}
                    </select>
                    
                    {(logSearchText || logComponentFilter !== 'all' || logCodeFilter !== 'all') && (
                      <button
                        onClick={() => {
                          setLogSearchText('');
                          setLogComponentFilter('all');
                          setLogCodeFilter('all');
                        }}
                        className="px-2 py-1.5 text-[12px] text-[#6F6F6F] hover:text-[#161616]"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="bg-white border border-[#D9D9D9] rounded-[8px] overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[rgba(248,248,248,0.5)] sticky top-0 z-10">
                      <tr>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-24">Timestamp</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-16">Code</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-32">Component</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F]">Message</th>
                        <th className="px-3 py-2 text-[12px] font-medium text-[#6F6F6F] w-32">Trace ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D9D9D9]">
                      {filteredLogs.length > 0 ? (
                        filteredLogs.map((log) => (
                          <LogRow key={log.id} log={log} expandedLogId={expandedLogId} setExpandedLogId={setExpandedLogId} />
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-3 py-8 text-center text-[12px] text-[#6F6F6F]">
                            No logs match your filters
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="p-2 bg-white border-t border-[#D9D9D9] flex items-center justify-between">
                    <span className="text-[12px] text-[#6F6F6F] ml-2">
                      Showing {filteredLogs.length} of {errorLogs.length} logs
                    </span>
                    <button className="text-[12px] font-medium text-[#2f54eb] hover:underline flex items-center gap-1">
                      View All Logs <ChevronRight className="size-[14px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
             {/* User Reports Section */}
             <div>
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[14px] font-semibold text-[#161616]">User Reported Issues</h3>
                 <div className="flex gap-2">
                   <button className="py-1.5 text-[#2f54eb] rounded-[4px] text-[12px] font-medium hover:bg-[#2f54eb]/10 transition-colors px-[10px] py-[6px]">
                     Export Report
                   </button>
                 </div>
               </div>
               
               <div className="bg-white border border-[#D9D9D9] rounded-[8px] overflow-hidden">
                 <div className="px-4 py-3 border-b border-[#D9D9D9] bg-white flex items-center justify-between">
                   <div className="flex gap-4">
                     <span className="text-[12px] font-medium text-[#161616]">All Reports</span>
                     <span className="text-[12px] text-[#6F6F6F]">Open</span>
                     <span className="text-[12px] text-[#6F6F6F]">Resolved</span>
                   </div>
                   <span className="text-[12px] text-[#6F6F6F]">3 open tickets</span>
                 </div>
                 <div className="divide-y divide-[#D9D9D9]">
                   {userReports.map((report) => (
                     <div key={report.id} className="p-4 hover:bg-[rgba(0,0,0,0.02)] transition-colors">
                       <div className="flex items-start justify-between mb-2">
                         <div className="flex items-center gap-3">
                           <span className={`px-2 py-0.5 rounded font-bold uppercase border text-[12px] ${ report.type === 'Bug' ? 'bg-[rgba(255,77,79,0.1)] text-[#cf1322] border-[rgba(255,77,79,0.2)]' : report.type === 'Question' ? 'bg-[rgba(43,127,255,0.1)] text-[#2B7FFF] border-[rgba(43,127,255,0.2)]' : 'bg-[rgba(254,154,0,0.1)] text-[#E17100] border-[rgba(254,154,0,0.2)]' }`}>
                             {report.type}
                           </span>
                           <span className="text-[12px] font-medium text-[#161616]">{report.user}</span>
                           <span className="text-[12px] text-[#6F6F6F] flex items-center gap-1">
                             <Users className="size-3" /> {report.site}
                           </span>
                         </div>
                         <span className="text-[12px] text-[#6F6F6F]">{report.time}</span>
                       </div>
                       <p className="text-[14px] text-[#161616] mb-3">{report.message}</p>
                       <div className="flex items-center gap-2">
                         <button className="px-3 py-1.5 bg-white border border-[#D9D9D9] rounded-[8px] text-[12px] font-medium hover:bg-[rgba(0,0,0,0.02)] flex items-center gap-1">
                           <MessageSquare className="size-3" /> Reply
                         </button>
                         <button className="px-3 py-1.5 bg-white border border-[#D9D9D9] rounded-[8px] text-[12px] font-medium hover:bg-[rgba(0,0,0,0.02)] flex items-center gap-1">
                           <CheckCircle2 className="size-3" /> Mark Resolved
                         </button>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}