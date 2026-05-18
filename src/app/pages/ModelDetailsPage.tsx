import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Upload, Download, CheckCircle2, FileText, Activity, BookOpen, AlertTriangle, ChevronDown, ChevronUp, Edit3 } from 'lucide-react';
import { PathologistHeader, DEVELOPER_TABS, DEVELOPER_HOME_ROUTE } from '../components/pathologist/PathologistHeader';
import { models, modelRequests, ModelRequest } from '../data/models';
import { useState, useEffect, useRef } from 'react';
import imgRectangle1014 from "figma:asset/026e252d89778572d217f6f3004622792f4e9b3c.png";
import { RequestsPanel } from '../components/RequestsPanel';
import { RequestDetailsOverlay } from '../components/RequestDetailsOverlay';
import { MetricCard } from '../components/MetricCard';
import { SectionHeader } from '../components/SectionHeader';
import { FileUploadItem } from '../components/FileUploadItem';
import { Button } from '../components/Button';
import { Tabs } from '../components/Tabs';
import { Card, CardContent } from '../components/Card';
import { Divider } from '../components/Divider';

// ── Static mock data for Model Data tab ──────────────────────────────────────

const openTickets = [
  { id: 'TICKET-8845', priority: 'high', priorityBg: 'rgba(254,226,226,0.8)', priorityColor: '#dc1111', title: 'Model producing inconsistent results on specific tissue types', author: 'Dr. Sarah Chen', date: '2026-04-04 09:23' },
  { id: 'TICKET-8840', priority: 'high', priorityBg: 'rgba(254,226,226,0.8)', priorityColor: '#dc1111', title: 'Quality score threshold too strict', author: 'Dr. Michael Rodriguez', date: '2026-03-30 10:22' },
  { id: 'TICKET-8844', priority: 'medium', priorityBg: 'rgba(254,243,199,0.7)', priorityColor: '#874d00', title: 'Preprocessing errors on high-resolution slides', author: 'Dr. James Park', date: '2026-04-03 14:15' },
  { id: 'TICKET-8842', priority: 'low', priorityBg: 'rgba(217,247,190,0.45)', priorityColor: '#135200', title: 'Request for batch processing feature', author: 'Dr. Emily Watson', date: '2026-04-01 16:45' },
];

const resolvedTickets = [
  { id: 'TICKET-8843', title: 'Model timeout on cervical cytology samples', resolvedDate: '2026-03-30 10:24' },
  { id: 'TICKET-8841-a', title: 'Missing metadata causing normalization failures', resolvedDate: '2026-03-30 10:24' },
  { id: 'TICKET-8841-b', title: 'Missing metadata causing normalization failures', resolvedDate: '2026-03-30 10:24' },
  { id: 'TICKET-8841-c', title: 'Missing metadata causing normalization failures', resolvedDate: '2026-03-30 10:24' },
  { id: 'TICKET-8841-d', title: 'Missing metadata causing normalization failures', resolvedDate: '2026-03-30 10:24' },
];

const failedJobs = [
  { id: 'JOB-2847303', version: 'Version v1.9.0-beta', date: '2026-03-31 14:12', duration: '2.1min' },
  { id: 'JOB-2847293', version: 'Version v2.1.3', date: '2026-03-25 10:12', duration: '4.2min' },
  { id: 'JOB-2847298', version: 'Version v2.1.3', date: '2026-03-26 10:27', duration: '0.1min' },
];

const institutions = [
  { name: 'Mayo Clinic', users: 12, cases: '1,847', pct: '22.7%' },
  { name: 'Johns Hopkins Hospital', users: 8, cases: '1,523', pct: '18.7%' },
  { name: 'Cleveland Clinic', users: 6, cases: '982', pct: '12.0%' },
  { name: 'Massachusetts General Hospital', users: 5, cases: '876', pct: '10.7%' },
  { name: 'Stanford Health Care', users: 4, cases: '654', pct: '8.0%' },
  { name: 'UCSF Medical Center', users: 3, cases: '543', pct: '6.7%' },
  { name: 'Mount Sinai Hospital', users: 2, cases: '421', pct: '5.2%' },
  { name: 'NYU Langone Health', users: 2, cases: '398', pct: '4.9%' },
  { name: 'Cedars-Sinai Medical Center', users: 2, cases: '312', pct: '3.8%' },
  { name: 'UCLA Health', users: 1, cases: '267', pct: '3.3%' },
  { name: 'University of Chicago Medicine', users: 1, cases: '189', pct: '2.3%' },
  { name: 'Northwestern Memorial Hospital', users: 1, cases: '142', pct: '1.7%' },
];

const permissionUsers = [
  { name: 'Dr. Sarah Chen', email: 'sarah.chen@hospital.edu', role: 'Owner', isChip: true },
  { name: 'Dr. Michael Rodriguez', email: 'm.rodriguez@hospital.edu', role: 'Editor', isChip: false },
  { name: 'IT Team (Mayo Clinic)', email: 'it-team@mayoclinic.org', role: 'User', isChip: false },
];

// ── Component ────────────────────────────────────────────────────────────────

export function ModelDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const model = models.find(m => m.id === id);

  const [activeTab, setActiveTab] = useState<'information' | 'data'>('data');
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'NM888293.PNG', status: 'Ready' },
    { id: 2, name: 'NM888294.PNG', status: 'Ready' },
  ]);
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [selectedPeriod, setSelectedPeriod] = useState<'7D' | '4W' | '6M' | '12M'>('6M');
  const [rocExpanded, setRocExpanded] = useState(false);
  const [usagePeriod, setUsagePeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [showRequestsPanel, setShowRequestsPanel] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<ModelRequest | null>(null);

  const pendingRequestsCount = modelRequests.filter(r => r.status === 'pending').length;

  const handleRequestClick = (request: ModelRequest) => {
    setSelectedRequest(request);
    setShowRequestsPanel(false);
  };

  const handleApprove = (request: ModelRequest) => {
    setSelectedRequest(null);
    navigate('/generate-endpoint', { state: { request } });
  };

  const handleReject = (request: ModelRequest) => {
    alert(`Request from ${request.requesterName} has been rejected.`);
    setSelectedRequest(null);
  };

  const handleRequestInfo = (request: ModelRequest) => {
    alert(`Request for more information sent to ${request.requesterEmail}`);
    setSelectedRequest(null);
  };

  // Diagnosis Progress Simulation
  const totalCases = 15420;
  const [processedCases, setProcessedCases] = useState(8742);
  const [throughput, setThroughput] = useState(45);

  useEffect(() => {
    if (model?.status !== 'in_diagnosis') return;
    const interval = setInterval(() => {
      setProcessedCases(prev => {
        if (prev >= totalCases) return totalCases;
        const increment = Math.random() > 0.3 ? 1 : 2;
        return Math.min(prev + increment, totalCases);
      });
      setThroughput(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(30, Math.min(60, prev + change));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [model?.status]);

  const progressPercentage = (processedCases / totalCases) * 100;
  const remainingCases = totalCases - processedCases;
  const minutesRemaining = remainingCases / throughput;
  const eta = new Date(Date.now() + minutesRemaining * 60000);

  // Revenue data
  const revenueData = {
    '7D': [120, 340, 280, 450, 380, 420, 390],
    '4W': [1200, 1850, 2100, 1900],
    '6M': [2800, 4200, 5100, 5580, 3900, 4800],
    '12M': [4500, 4800, 5200, 5580, 5900, 6100, 5800, 6200, 6500, 6800, 7100, 7300],
  };
  const currentRevenue = selectedPeriod === '6M' ? 5580 : selectedPeriod === '7D' ? 390 : selectedPeriod === '4W' ? 1900 : 7300;
  const maxRevenue = Math.max(...revenueData[selectedPeriod]);

  const periodLabels: Record<'7D' | '4W' | '6M' | '12M', string[]> = {
    '7D': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    '4W': ['W1', 'W2', 'W3', 'W4'],
    '6M': ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    '12M': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };

  // ROC Curve data
  const rocCurveData = [
    { fpr: 0.0, tpr: 0.0, threshold: 1.0 },
    { fpr: 0.001, tpr: 0.72, threshold: 0.95 },
    { fpr: 0.01, tpr: 0.85, threshold: 0.9 },
    { fpr: 0.02, tpr: 0.90, threshold: 0.85 },
    { fpr: 0.05, tpr: 0.95, threshold: 0.75 },
    { fpr: 0.08, tpr: 0.965, threshold: 0.7 },
    { fpr: 0.18, tpr: 0.983, threshold: 0.6 },
    { fpr: 0.35, tpr: 0.992, threshold: 0.5 },
    { fpr: 0.62, tpr: 0.997, threshold: 0.4 },
    { fpr: 1.0, tpr: 1.0, threshold: 0.0 },
  ];
  const auc = 0.94;

  const handleRunTest = () => {
    setTestStatus('running');
    setTimeout(() => setTestStatus('completed'), 2000);
  };

  const handleRemoveFile = (fileId: number) => {
    setUploadedFiles(uploadedFiles.filter(f => f.id !== fileId));
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        status: 'Ready',
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  if (!model) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[24px] font-semibold text-[#000000] mb-2">Model Not Found</h1>
          <button onClick={() => navigate('/developer/models')} className="text-primary hover:underline">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const status = model.status || 'active';

  // ── Usage bar chart heights (Mon–Sun) ────────────────────────────────────
  const usageBarHeights = [188, 220, 194, 160, 169, 152, 157];
  const usageBarMax = 220;
  const usageDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
      <PathologistHeader
        tabs={DEVELOPER_TABS}
        homeRoute={DEVELOPER_HOME_ROUTE}
        onNotificationsClick={() => setShowRequestsPanel(true)}
      />

      <main style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '28px', paddingBottom: '72px' }}>

        {/* Back to Models */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-[8px] mb-[24px]"
          style={{ marginLeft: '-44px' }}
        >
          <ArrowLeft style={{ width: '17.5px', height: '17.5px', color: '#525252' }} />
          <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '21px', color: '#525252' }}>Back</span>
        </button>

        {/* ── Model Overview Card ─────────────────────────────────────────── */}
        <div className="flex flex-col rounded-[8px] mb-[24px]" style={{ gap: '24px' }}>

          {/* Name + badge + Disable button */}
          <div className="flex flex-col" style={{ gap: '4px' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center" style={{ gap: '16px' }}>
                <h1 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '24px', lineHeight: '32px', color: '#000000', margin: 0 }}>{model.title}</h1>
                <div
                  style={{ background: 'rgba(217,247,190,0.45)', border: '1px solid rgba(19,82,0,0.2)', borderRadius: '4px', height: '27px', width: '57px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '12px', lineHeight: '18px', color: '#135200' }}>Active</span>
                </div>
              </div>
              <button
                style={{ background: 'rgba(22,22,22,0.85)', borderRadius: '4px', padding: '8px 16px', border: 'none', cursor: 'pointer' }}
              >
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '12px', lineHeight: '18px', color: '#ffffff' }}>Disable Model</span>
              </button>
            </div>
            <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: '#525252', margin: 0 }}>{model.description}</p>
          </div>

          {/* Quick stats */}
          <div className="flex" style={{ gap: '8px' }}>
            {[
              { label: 'Open Ticket', value: '4' },
              { label: '24H Failed Jobs', value: '1' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white flex flex-col rounded-[8px]"
                style={{ gap: '4px', padding: '16px', width: '200px', height: '84px' }}
              >
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '18px', color: '#6f6f6f', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{stat.label}</span>
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: '20px', lineHeight: '30px', color: '#161616' }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Diagnosis Progress (only for in_diagnosis) */}
        {model.status === 'in_diagnosis' && (
          <div className="bg-card border border-chart-5/20 rounded-2xl shadow-sm relative overflow-hidden group p-[24px] mb-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-chart-5/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-semibold leading-[26px] text-[#000000]">Real-Time Diagnosis in Progress</h3>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-5 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-5"></span>
                    </span>
                  </div>
                  <p className="text-[14px] leading-[22px] text-[#525252]">
                    Processing Batch #4092 • Started {new Date(Date.now() - 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-1">Estimated Completion</p>
                  <span className="text-[18px] font-bold leading-[26px] text-[#161616] font-mono">
                    {eta.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-end justify-between mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[24px] font-bold leading-[32px] text-[#161616] font-mono tabular-nums">{processedCases.toLocaleString()}</span>
                    <span className="text-[14px] font-medium leading-[22px] text-[#525252]">/ {totalCases.toLocaleString()} cases</span>
                  </div>
                  <span className="text-[18px] font-bold leading-[26px] text-chart-5 tabular-nums">{progressPercentage.toFixed(1)}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-chart-5 transition-all duration-300 ease-linear" style={{ width: `${progressPercentage}%` }} />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { label: 'Throughput', value: `${throughput}`, unit: 'slides/min' },
                  { label: 'Current Accuracy', value: '94.2%', unit: '(rolling)' },
                  { label: 'Time Remaining', value: `~${Math.ceil(minutesRemaining)}`, unit: 'min' },
                  { label: 'Active Phase', value: new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Daytime' : 'Nighttime', unit: 'peak' },
                ].map((m) => (
                  <div key={m.label} className="bg-background/50 border border-border/50 rounded-xl p-4">
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-1">{m.label}</p>
                    <p className="text-[18px] font-bold leading-[26px] text-[#161616] tabular-nums">
                      {m.value} <span className="text-[14px] font-normal leading-[22px] text-[#525252]">{m.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Tab Navigation ──────────────────────────────────────────────── */}
        <div className="mb-6">
          <Tabs
            tabs={[
              { label: 'Model Information', value: 'information' },
              { label: 'Model Data', value: 'data' },
            ]}
            activeTab={activeTab}
            onChange={(value) => setActiveTab(value as 'information' | 'data')}
          />
        </div>

        {/* ── TAB CONTENT ─────────────────────────────────────────────────── */}
        {activeTab === 'information' ? (

          /* ── MODEL INFORMATION TAB ──────────────────────────────────────── */
          <div className="space-y-6">

            {/* A. Model Overview */}
            <Card>
              <SectionHeader
                title="Model Overview"
                description="Clinical context and application scope"
                action={
                  <button className="p-2 hover:bg-secondary rounded-[4px] transition-colors">
                    <Edit3 className="size-5 text-[#6F6F6F]" />
                  </button>
                }
              />
              <CardContent>
                <div className="space-y-6 p-[0px]">
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-2">Model Name</p>
                    <p className="text-[16px] font-semibold leading-[24px] text-[#161616]">{model.title}</p>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-2">Clinical Problem Statement</p>
                    <p className="text-[14px] leading-[22px] text-[#161616]">
                      Automated detection and classification of melanoma in digital pathology slides to assist pathologists in early cancer diagnosis and reduce screening time.
                    </p>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Applicable Scenarios</p>
                    <ul className="space-y-2 text-[14px] leading-[22px] text-[#161616]">
                      {['Primary screening of dermatopathology specimens', 'Second opinion and quality assurance workflows', 'High-volume screening programs requiring prioritization'].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-2">Required Input</p>
                      <p className="text-[14px] leading-[22px] text-[#161616]">High-resolution whole slide images (WSI) in standard formats (DICOM, SVS, NDPI)</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-2">Output</p>
                      <p className="text-[14px] leading-[22px] text-[#161616]">Classification score (0-1) with heatmap overlay indicating areas of concern</p>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Supported Scenario Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {['Classification', 'Skin', 'H&E', 'Digital Pathology'].map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-secondary text-secondary-foreground border border-border rounded-[4px] text-[12px] font-medium leading-[20px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* B. Clinical Use & Workflow */}
            <Card>
              <SectionHeader
                title="Clinical Use & Workflow"
                description="How to use and interpret this model"
                action={
                  <button className="p-2 hover:bg-secondary rounded-[4px] transition-colors">
                    <Edit3 className="size-5 text-[#6F6F6F]" />
                  </button>
                }
              />
              <CardContent className="space-y-[20px]">
                <div>
                  <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-[12px]">Recommended Use Cases</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[{ t: 'Screening', d: 'First-pass triage' }, { t: 'Assist', d: 'Decision support' }, { t: 'QA', d: 'Quality assurance' }].map((c) => (
                      <div key={c.t} className="bg-background/50 border border-border rounded-[8px] text-center p-[16px]">
                        <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-1">{c.t}</p>
                        <p className="text-[12px] leading-[20px] text-[#6F6F6F]">{c.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-[#d9d9d9]" />
                <div>
                  <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-[12px]">How to Interpret Outputs</p>
                  <div className="space-y-[12px]">
                    <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                      <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">Score (0.0 - 1.0)</p>
                      <p className="text-[14px] leading-[22px] text-[#525252]">Higher scores indicate higher likelihood of malignancy. Scores above 0.7 suggest high suspicion and should be prioritized for expert review.</p>
                    </div>
                    <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                      <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">Heatmap Overlay</p>
                      <p className="text-[14px] leading-[22px] text-[#525252]">Red/warm colors indicate regions where the model detected suspicious features. Use these to guide your microscopic examination.</p>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-[#d9d9d9]" />
                <div>
                  <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-[12px]">Suggested Operating Mode</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-card border border-border rounded-[8px]">
                      <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">Sensitivity-Focused</p>
                      <p className="text-[12px] leading-[20px] text-[#525252] mb-2">Minimizes false negatives. Use for screening where catching all potential cases is critical, even if it means more false alarms.</p>
                      <p className="text-[12px] font-medium leading-[20px] text-[#161616]">→ Recommended for screening workflows</p>
                    </div>
                    <div className="p-4 bg-card border border-border rounded-[8px]">
                      <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">Specificity-Focused</p>
                      <p className="text-[12px] leading-[20px] text-[#525252] mb-2">Reduces false positives. Use when you want higher confidence in positive predictions, accepting some cases might be missed.</p>
                      <p className="text-[12px] font-medium leading-[20px] text-[#161616]">→ Recommended for confirmatory use</p>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-[#d9d9d9]" />
                <div className="p-4 bg-card border-[1.5px] border-destructive rounded-[8px]">
                  <div className="flex items-start gap-[12px]">
                    <AlertTriangle className="size-[18px] text-[#ff4d4f] shrink-0" />
                    <div>
                      <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">What You Should NOT Use This Model For</p>
                      <ul className="space-y-2 text-[14px] leading-[22px] text-[#525252]">
                        {['Standalone diagnosis without pathologist review', 'Non-dermatological tissue types (trained on skin only)', 'Frozen sections or non-H&E stained specimens', 'Pediatric cases (validated on adult population only)'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[#ff4d4f] shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-[#d9d9d9]" />
                {/* Test Model */}
                <div>
                  <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-[0.3px] mb-[12px]">Test Model</p>
                  <div className="space-y-2 mb-4">
                    {uploadedFiles.map((file) => (
                      <FileUploadItem key={file.id} id={file.id} name={file.name} status={file.status} onRemove={handleRemoveFile} />
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border flex flex-col items-center justify-center gap-4">
                    <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileChange} className="hidden" />
                    <button
                      onClick={handleUploadClick}
                      style={{ width: '160px', height: '40px', background: 'white', border: '1px solid #d9d9d9', borderRadius: '6px', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', color: 'rgba(0,0,0,0.85)', cursor: 'pointer' }}
                    >
                      Upload New Image
                    </button>
                    <button
                      onClick={handleRunTest}
                      disabled={testStatus === 'running' || uploadedFiles.length === 0}
                      style={{ width: '160px', height: '40px', background: '#096dd9', border: 'none', borderRadius: '6px', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', color: 'white', cursor: (testStatus === 'running' || uploadedFiles.length === 0) ? 'not-allowed' : 'pointer', opacity: (testStatus === 'running' || uploadedFiles.length === 0) ? 0.6 : 1 }}
                    >
                      {testStatus === 'running' ? 'Running…' : 'Run Test'}
                    </button>
                  </div>
                  {testStatus === 'completed' && (
                    <div className="pt-4 border-t border-border space-y-4 mt-4">
                      <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-[0.3px]">Latest Results</p>
                      <div className="aspect-video bg-background border border-border rounded-[8px] overflow-hidden">
                        <img src={imgRectangle1014} alt="Test result visualization" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#161616] shrink-0" />
                        <p className="text-[12px] leading-[20px] text-[#525252]">Analysis completed successfully</p>
                      </div>
                      <div className="flex justify-center">
                        <button
                          style={{ width: '160px', height: '40px', background: '#096dd9', border: 'none', borderRadius: '6px', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', color: 'white', cursor: 'pointer' }}
                        >
                          Download Results
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* C. Evidence & Performance */}
            <Card>
              <SectionHeader
                title="Evidence & Performance"
                description="Clinical validation and model performance data"
                action={
                  <button className="p-2 hover:bg-secondary rounded-[4px] transition-colors">
                    <Edit3 className="size-5 text-[#6F6F6F]" />
                  </button>
                }
              />
              <CardContent className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <MetricCard label="Sensitivity" value="92%" />
                  <MetricCard label="Specificity" value="98%" />
                  <MetricCard label="Precision" value="0.87" />
                  <MetricCard label="AUC" value="0.94" />
                </div>
                <div className="h-px bg-border" />
                {/* ROC Curve */}
                <div>
                  <button
                    onClick={() => setRocExpanded(!rocExpanded)}
                    className="w-full flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-[4px] hover:bg-primary/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <p className="text-[14px] font-semibold leading-[22px] text-[#161616]">ROC Curve Analysis</p>
                      <span className="bg-primary/10 text-primary rounded text-[12px] font-medium leading-[20px] px-[8px] py-[4px]">AUC: {auc.toFixed(2)}</span>
                    </div>
                    {rocExpanded ? <ChevronUp className="size-5 text-[#6F6F6F]" /> : <ChevronDown className="size-5 text-[#6F6F6F]" />}
                  </button>
                  {rocExpanded && (
                    <div className="mt-4 p-6 bg-background border border-border rounded-[8px] space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[14px] font-semibold leading-[22px] text-[#161616]">ROC Curve Analysis</p>
                        <div className="px-3 py-1 bg-[#2f54eb]/10 border border-[#2f54eb]/20 rounded-[4px]">
                          <p className="text-[12px] font-semibold leading-[20px] text-[#2f54eb]">AUC: {auc.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="relative w-full" style={{ height: '350px' }}>
                        <svg width="100%" height="100%" viewBox="0 0 1200 350" preserveAspectRatio="xMidYMid meet">
                          <line x1="80" y1="310" x2="1120" y2="310" stroke="#666666" strokeWidth="1" />
                          <line x1="80" y1="10" x2="80" y2="310" stroke="#666666" strokeWidth="1" />
                          {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map((tick, i) => (
                            <g key={i}>
                              <line x1={80 + tick * 1040} y1="310" x2={80 + tick * 1040} y2="316" stroke="#666666" strokeWidth="1" />
                              <text x={80 + tick * 1040} y="330" textAnchor="middle" fontSize="11" fill="rgba(0,0,0,0.65)">{(tick * 100).toFixed(0)}%</text>
                              <line x1="74" y1={310 - tick * 300} x2="80" y2={310 - tick * 300} stroke="#666666" strokeWidth="1" />
                              <text x="65" y={310 - tick * 300 + 4} textAnchor="end" fontSize="11" fill="rgba(0,0,0,0.65)">{(tick * 100).toFixed(0)}%</text>
                            </g>
                          ))}
                          <text x="600" y="345" textAnchor="middle" fontSize="12" fill="rgba(0,0,0,0.45)">False Positive Rate</text>
                          <text x="30" y="160" textAnchor="middle" fontSize="12" fill="rgba(0,0,0,0.45)" transform="rotate(-90 30 160)">True Positive Rate</text>
                          <line x1="80" y1="310" x2="1120" y2="10" stroke="black" strokeWidth="2" strokeDasharray="5 5" opacity="0.15" />
                          <path
                            d={rocCurveData.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${80 + pt.fpr * 1040} ${310 - pt.tpr * 300}`).join(' ')}
                            fill="none" stroke="#1890FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] leading-[20px] text-[#525252]">
                        <strong>Clinical interpretation:</strong> The ROC curve demonstrates excellent discriminative ability with an AUC of {auc.toFixed(2)}. This means the model correctly distinguishes between malignant and benign cases 94% of the time, significantly better than random chance (50%).
                      </p>
                    </div>
                  )}
                </div>
                <div className="h-px bg-border" />
                {/* Validation Summary */}
                <div>
                  <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Validation Summary</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Training/Validation Cases', value: '5,000 / 1,500' },
                      { label: 'Data Collection Period', value: '2018-2020' },
                      { label: 'Multi-institutional', value: 'Yes (5 sites)' },
                      { label: 'External Validation', value: 'Yes' },
                    ].map((item) => (
                      <div key={item.label} className="p-4 bg-card border border-border rounded-[8px]">
                        <p className="text-[12px] leading-[20px] text-[#6F6F6F] mb-1">{item.label}</p>
                        <p className="text-[18px] font-semibold leading-[26px] text-[#161616]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[12px] leading-[20px] text-[#525252] mt-4">External validation performed on 500 independent cases from Mayo Clinic and Johns Hopkins Hospital, demonstrating consistent performance across different institutions and patient populations.</p>
                </div>
                <div className="h-px bg-border" />
                <div className="p-4 bg-card border border-[#e17100] rounded-[8px]">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="size-5 text-[#FAAD14] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-4">Known Failure Modes & Limitations</p>
                      <ul className="space-y-2 text-[14px] leading-[22px] text-[#525252]">
                        {['Performance may degrade on poorly stained or low-quality slides', 'Limited validation on rare melanoma subtypes (e.g., amelanotic melanoma)', 'May produce false positives on severely inflamed or artifact-heavy tissue', 'Not validated on non-Caucasian populations (training data: 78% Caucasian)'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[#FAAD14] shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* D. Technical Compatibility & Documentation — side by side */}
            <div className="grid grid-cols-2" style={{ gap: 'var(--spacing-card-gap)' }}>
              <Card>
                <SectionHeader
                  title="Technical Compatibility"
                  description="Integration requirements and system compatibility"
                  action={
                    <button className="p-2 hover:bg-secondary rounded-[4px] transition-colors">
                      <Edit3 className="size-5 text-[#6F6F6F]" />
                    </button>
                  }
                />
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Input Requirements</p>
                    <div className="space-y-3">
                      <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                        <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">Supported Image Formats</p>
                        <div className="flex flex-wrap gap-2">
                          {['DICOM', 'SVS', 'NDPI', 'TIFF'].map((f) => (
                            <span key={f} className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-[4px] text-[12px] font-medium leading-[20px]">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                        <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">Resolution & Quality</p>
                        <p className="text-[14px] leading-[22px] text-[#525252]">Minimum 0.25 μm/pixel resolution (40x magnification). Scanner-specific color calibration recommended.</p>
                      </div>
                      <div className="p-4 bg-background/50 border border-border rounded-[8px]">
                        <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-2">Slide Type</p>
                        <p className="text-[14px] leading-[22px] text-[#525252]">H&E stained FFPE skin tissue sections only. Not compatible with frozen sections or immunohistochemistry stains.</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Prerequisites & System Requirements</p>
                    <ul className="space-y-2 text-[14px] leading-[22px] text-[#161616]">
                      {['RESTful API accessible within hospital network', 'Compatible with PACS/LIS systems supporting HL7 or DICOM', 'Standard HTTPS/TLS 1.2+ for secure transmission', 'Average processing time: 30-60 seconds per slide'].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <SectionHeader
                  title="Documentation & Resources"
                  description="Supporting materials and references"
                  action={
                    <button className="p-2 hover:bg-secondary rounded-[4px] transition-colors">
                      <Edit3 className="size-5 text-[#6F6F6F]" />
                    </button>
                  }
                />
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Documentation</p>
                    <button className="w-full p-4 bg-primary/5 border border-primary/20 rounded-[4px] hover:bg-primary/10 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FileText className="size-5 text-primary" />
                        <div className="text-left">
                          <p className="text-[14px] font-semibold leading-[22px] text-[#161616]">User Guide & API Documentation</p>
                          <p className="text-[12px] leading-[20px] text-[#6F6F6F]">Complete integration and usage instructions</p>
                        </div>
                      </div>
                      <span className="text-[12px] leading-[20px] text-primary font-medium">View →</span>
                    </button>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Release Notes</p>
                    <div className="space-y-3">
                      {[{ v: 'Version 2.1.0', d: 'Feb 2026', t: 'Improved sensitivity on amelanotic melanoma cases (+5% sensitivity). Added support for NDPI format.' }, { v: 'Version 2.0.0', d: 'Oct 2025', t: 'Major update with retrained model on expanded dataset (3,000 → 5,000 cases). External validation at two additional institutions.' }].map((rn) => (
                        <div key={rn.v} className="p-4 bg-background/50 border border-border rounded-[8px]">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[14px] font-semibold leading-[22px] text-[#161616]">{rn.v}</p>
                            <span className="text-[12px] leading-[20px] text-[#6F6F6F]">{rn.d}</span>
                          </div>
                          <p className="text-[14px] leading-[22px] text-[#525252]">{rn.t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-[12px] font-medium leading-[20px] text-[#6F6F6F] uppercase tracking-wide mb-4">Scientific Publications</p>
                    <div className="space-y-3">
                      {[{ title: 'Analysis of Virtual H&E on 20 bases of skin lesions', journal: 'JAMA Dermatology', year: '2022', authors: 'L. Loeb, S. Turner' }, { title: 'Quantifying results from Virtual H&E on minor lesions', journal: 'Nature Medicine', year: '2021', authors: 'L. Loeb, S. Turner' }].map((pub) => (
                        <div key={pub.title} className="p-4 bg-background/50 border border-border rounded-[8px] hover:border-primary/30 transition-all cursor-pointer">
                          <div className="flex items-start gap-4">
                            <BookOpen className="size-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[14px] font-semibold leading-[22px] text-[#161616] mb-1">{pub.title}</p>
                              <p className="text-[12px] leading-[20px] text-[#6F6F6F] mb-2">Published in: <span className="font-medium">{pub.journal}</span> • {pub.year}</p>
                              <p className="text-[12px] leading-[20px] text-[#6F6F6F] italic">Authors: {pub.authors}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        ) : (

          /* ── MODEL DATA TAB ─────────────────────────────────────────────── */
          <div className="flex flex-col gap-[16px]">

            {/* ── Tickets (full width) ──────────────────────────────────────── */}
            <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden">
              <div className="px-[24px] py-[16px] border-b border-[#d9d9d9]">
                <p className="font-semibold text-[18px] leading-[26px] text-black">Tickets</p>
                <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">User-reported issues and support requests</p>
              </div>
              <div className="px-[24px] pt-[16px] pb-[16px] flex flex-col gap-[8px]">
                <p className="font-semibold text-[14px] leading-[22px] text-[#161616]">Open Tickets</p>
                {/* 4-column horizontal row */}
                <div className="flex gap-[8px]">
                  {openTickets.map((ticket) => (
                    <div key={ticket.id} className="bg-white border border-[#d9d9d9] rounded-[4px] flex-1 px-[16px] py-[8px] flex items-center gap-[8px]">
                      <div className="flex flex-col gap-[3.5px] flex-1 min-w-0">
                        <div className="flex items-center gap-[7px]">
                          <span
                            className="h-[25px] px-[7px] flex items-center rounded-[4px] text-[12px] font-medium leading-[18px] whitespace-nowrap"
                            style={{ background: ticket.priorityBg, color: ticket.priorityColor }}
                          >
                            {ticket.priority}
                          </span>
                          <span className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] truncate">{ticket.id}</span>
                        </div>
                        <p className="font-medium text-[14px] leading-[22px] text-[#161616] truncate">{ticket.title}</p>
                        <p className="text-[12px] leading-[20px] text-[#525252] truncate">{ticket.author} • {ticket.date}</p>
                      </div>
                      <svg className="size-[14px] shrink-0 text-[#6f6f6f]" viewBox="0 0 14 14" fill="none">
                        <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Jobs (full width) ─────────────────────────────────────────── */}
            <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden">
              <div className="px-[24px] py-[16px] border-b border-[#d9d9d9]">
                <p className="font-semibold text-[18px] leading-[26px] text-black">Jobs</p>
                <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Running, completed, and failed diagnostic jobs</p>
              </div>
              <div className="px-[24px] pt-[16px] pb-[24px] flex flex-col gap-[24px]">
                {/* Stat boxes with icons */}
                <div className="flex gap-[8px]">
                  {[
                    { label: 'In Queue', value: '240', icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#6f6f6f" strokeWidth="1.2"/><path d="M7 4v3l2 1.5" stroke="#6f6f6f" strokeWidth="1.2" strokeLinecap="round"/></svg> },
                    { label: 'Completed', value: '12', icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#6f6f6f" strokeWidth="1.2"/><path d="M4.5 7l2 2 3-4" stroke="#6f6f6f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                    { label: 'Failed', value: '3', icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#6f6f6f" strokeWidth="1.2"/><path d="M5 5l4 4M9 5l-4 4" stroke="#6f6f6f" strokeWidth="1.2" strokeLinecap="round"/></svg> },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-[#d9d9d9] rounded-[4px] flex-1 h-[78px] p-[16px] flex flex-col justify-center gap-[4px]">
                      <div className="flex items-center gap-[7px]">
                        {stat.icon}
                        <span className="text-[12px] font-normal leading-[22px] text-[#6f6f6f]">{stat.label}</span>
                      </div>
                      <span className="text-[20px] font-semibold leading-[28px] text-[#161616]">{stat.value}</span>
                    </div>
                  ))}
                </div>
                {/* Failed Case Review — horizontal 3-column row */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-semibold text-[14px] leading-[22px] text-[#525252]">Failed Case Review</p>
                  <div className="flex gap-[8px]">
                    {failedJobs.map((job) => (
                      <div key={job.id} className="bg-white border border-[#d9d9d9] rounded-[4px] flex-1 h-[92px] p-[16px] flex items-center justify-between">
                        <div className="flex flex-col gap-[4px]">
                          <p className="text-[14px] font-medium leading-[22px] text-[#161616]">{job.id}</p>
                          <p className="text-[14px] font-normal leading-[22px] text-[rgba(82,82,82,0.85)]">{job.version}</p>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="flex flex-col items-end text-[12px] font-normal leading-[20px] text-[#6f6f6f]">
                            <span>{job.date}</span>
                            <span>{job.duration}</span>
                          </div>
                          <svg className="size-[14px] shrink-0 text-[#6f6f6f]" viewBox="0 0 14 14" fill="none">
                            <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Row 1 (Business & Licensing, was right column) ───────────── */}
            <div className="flex gap-[16px] items-start">
              <div className="flex flex-col gap-[16px] w-full">

                {/* BUSINESS & LICENSING */}
                <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden">
                  <div className="px-[24px] py-[16px] border-b border-[#d9d9d9]">
                    <p className="font-semibold text-[18px] leading-[26px] text-black">Business & Licensing</p>
                    <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Revenue and contract information</p>
                  </div>
                  <div className="px-[24px] py-[16px] flex flex-col gap-[32px]">

                    {/* Revenue Overview */}
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-[14px] leading-[22px] text-[#525252]">Revenue Overview</p>
                        <div className="flex gap-[8px] items-center">
                          {(['7D', '4W', '6M', '12M'] as const).map((p) => (
                            <button
                              key={p}
                              onClick={() => setSelectedPeriod(p)}
                              className="h-[28.5px] px-[8px] rounded-[8px] text-[12px] font-semibold leading-[20px]"
                              style={selectedPeriod === p
                                ? { background: 'rgba(208,231,255,0.45)', border: '1px solid rgba(24,144,255,0.2)', color: '#003a8c' }
                                : { color: '#6f6f6f' }}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Average Revenue</p>
                        <p className="text-[20px] font-bold leading-[28px] text-[#161616]">${currentRevenue.toLocaleString()}</p>
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">for {selectedPeriod}</p>
                      </div>
                      {/* Bar chart */}
                      <div className="flex gap-[8px] items-end" style={{ height: '205px' }}>
                        {revenueData[selectedPeriod].map((val, i) => {
                          const barH = Math.round((val / maxRevenue) * 160);
                          return (
                            <div key={i} className="flex-1 flex flex-col items-center gap-[8px]" style={{ height: '205px' }}>
                              <div className="flex-1 flex flex-col justify-end items-center w-full">
                                <div className="flex flex-col items-center gap-[20px]">
                                  <span className="text-[12px] font-semibold leading-[20px] text-[#161616]">${(val / 1000).toFixed(1)}k</span>
                                  <div className="w-[30px] bg-[#91d5ff] rounded-t-[4px]" style={{ height: `${barH}px` }} />
                                </div>
                              </div>
                              <span className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">{periodLabels[selectedPeriod][i] || ''}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Billing info cards */}
                    <div className="flex gap-[16px]">
                      <div className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] flex-1 h-[97px] p-[16px] flex flex-col gap-[8px]">
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] uppercase tracking-[0.3px]">Billing Model</p>
                        <p className="text-[14px] font-semibold leading-[22px] text-[#161616]">Per-inference</p>
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">$2.50 per API call</p>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] flex-1 h-[97px] p-[16px] flex flex-col gap-[8px]">
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] uppercase tracking-[0.3px]">Authorization Status</p>
                        <p className="text-[14px] font-semibold leading-[22px] text-[#135200]">Active</p>
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">End on Mar 15, 2027</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Row 2: Usage Analytics (full width) ─────────────────────── */}
            <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden">
              <div className="px-[24px] py-[16px] border-b border-[#d9d9d9]">
                <p className="font-semibold text-[18px] leading-[26px] text-black">Usage Analytics</p>
                <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">How your model is being used</p>
              </div>
              <div className="px-[24px] py-[16px] flex gap-[32px]">

                {/* Left: Active Sites + Institution table */}
                <div className="flex flex-col gap-[24px] flex-1">
                  <div className="flex flex-col gap-[16px]">
                    <p className="font-semibold text-[14px] leading-[22px] text-[#525252]">Active Sites & Institutions</p>
                    <div className="flex gap-[16px]">
                      {[
                        { label: 'Active Institutions', value: '12', sub: 'Across 6 countries' },
                        { label: 'Active Users', value: '47', sub: 'Last 30 days' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] flex-1 h-[112px] p-[16px] flex flex-col items-start">
                          <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] uppercase tracking-[0.3px] text-left">{stat.label}</p>
                          <p className="text-[24px] font-bold leading-[32px] text-[#161616] mt-[4px] text-left">{stat.value}</p>
                          <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] text-left">{stat.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Institution table */}
                  <div className="border border-[#dfdfdf] rounded-[6px] overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#dfdfdf]">
                          {['Institution', 'Active Users', 'Cases Processed', '% of Total'].map((h, hi) => (
                            <th key={h} className={`px-[16px] py-[16px] text-[12px] font-medium leading-[20px] text-[#6f6f6f] uppercase tracking-[0.35px] ${hi === 0 ? 'text-left' : 'text-right'}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {institutions.map((inst) => (
                          <tr key={inst.name} className="border-b border-[#dfdfdf] last:border-0">
                            <td className="px-[16px] py-[12px] text-[14px] leading-[22px] text-[#161616]">{inst.name}</td>
                            <td className="px-[16px] py-[12px] text-[14px] leading-[22px] font-semibold text-[#525252] text-right">{inst.users}</td>
                            <td className="px-[16px] py-[12px] text-[14px] leading-[22px] font-medium text-[#525252] text-right">{inst.cases}</td>
                            <td className="px-[16px] py-[12px] text-[14px] leading-[22px] font-semibold text-[#525252] text-right">{inst.pct}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right: Cases Processed */}
                <div className="flex flex-col flex-1">
                  <p className="font-semibold text-[14px] leading-[22px] text-[#525252]">Cases Processed</p>
                  <div className="flex items-start justify-between mt-[56px]">
                    <div className="flex flex-col items-start">
                      <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] text-left">Total Cases</p>
                      <p className="text-[24px] font-bold leading-[32px] text-[#161616] text-left">1,087</p>
                    </div>
                    <div className="flex gap-[8px] items-center">
                      {(['Daily', 'Weekly', 'Monthly'] as const).map((p) => (
                        <button
                          key={p}
                          onClick={() => setUsagePeriod(p.toLowerCase() as 'daily' | 'weekly' | 'monthly')}
                          className="h-[27px] px-[8px] rounded-[8px] text-[12px] font-medium leading-[20px]"
                          style={usagePeriod === p.toLowerCase()
                            ? { background: 'rgba(208,231,255,0.45)', border: '1px solid rgba(0,58,140,0.4)', color: '#003a8c' }
                            : { color: '#6f6f6f' }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Spacer pushes chart + pagination + cards toward bottom */}
                  <div className="flex-1" />

                  {/* Usage bar chart */}
                  <div className="flex gap-[8px] items-end" style={{ height: '220px' }}>
                    {usageBarHeights.map((h, i) => {
                      const pct = Math.round((h / usageBarMax) * 180);
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-[8px]" style={{ height: '220px' }}>
                          <div className="flex-1 flex flex-col justify-end w-full items-center">
                            <div className="w-[40px] bg-[#91d5ff] rounded-t-[4px]" style={{ height: `${pct}px` }} />
                          </div>
                          <span className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">{usageDays[i]}</span>
                        </div>
                      );
                    })}
                  </div>
                  {/* Pagination */}
                  <div className="flex items-center justify-center gap-[8px] mt-[12px]">
                    <button className="size-[24.5px] rounded-[8px] flex items-center justify-center">
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M6.5 1L1.5 6L6.5 11" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <span className="text-[14px] font-medium leading-[22px] text-[rgba(22,22,22,0.85)]">Last 7 Days</span>
                    <button className="size-[24.5px] rounded-[8px] flex items-center justify-center opacity-30">
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M1.5 1L6.5 6L1.5 11" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                  </div>
                  {/* Failed Cases + Avg Cases — pinned at bottom */}
                  <div className="flex gap-[16px] mt-[16px]">
                    {[{ label: 'Failed Cases', value: '12' }, { label: 'AVG. Cases', value: '47' }].map((stat) => (
                      <div key={stat.label} className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] flex-1 px-[16px] py-[16px] flex flex-col items-start gap-[8px]">
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] uppercase tracking-[0.3px] text-left">{stat.label}</p>
                        <p className="text-[24px] font-bold leading-[32px] text-[#161616] text-left">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Row 3: Versioning + Audit & Admin ───────────────────────── */}
            <div className="flex flex-col gap-[16px]">

              {/* VERSIONING & DEPRECATION */}
              <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden">
                <div className="px-[24px] py-[16px] border-b border-[#d9d9d9]">
                  <p className="font-semibold text-[18px] leading-[26px] text-black">Versioning & Deprecation</p>
                  <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Version history and lifecycle management</p>
                </div>
                <div className="px-[24px] py-[16px] flex flex-col gap-[24px]">

                  {/* Upload + Current Version */}
                  <div className="flex flex-col gap-[8px] items-end">
                    <button className="text-[14px] font-medium leading-[22px] text-[#096dd9] w-full text-right">+ Upload New Version</button>
                    <div className="border border-[#d9d9d9] rounded-[8px] p-[16px] w-full flex flex-col gap-[8px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[8px]">
                          <svg className="size-[14px] text-[#096dd9]" viewBox="0 0 14 14" fill="none">
                            <path d="M7 3V7M7 9.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                          <span className="text-[14px] font-semibold leading-[22px] text-[#161616]">Current Version</span>
                        </div>
                        <div className="bg-[rgba(208,231,255,0.45)] rounded-[3.5px] h-[25px] px-[12px] flex items-center">
                          <span className="text-[12px] font-medium leading-[20px] text-[#003a8c]">v2.1.0</span>
                        </div>
                      </div>
                      <p className="text-[12px] font-normal leading-[20px] text-[#525252]">Released on Feb 15, 2026</p>
                    </div>
                  </div>

                  {/* Version History — horizontal 3-column row */}
                  <div className="flex flex-col gap-[16px]">
                    <p className="font-semibold text-[14px] leading-[22px] text-[#525252]">Version History</p>
                    <div className="flex gap-[8px]">

                      {/* v2.1.0 - Active */}
                      <div className="bg-white border border-[#d9d9d9] rounded-[8px] p-[16px] flex-1 flex flex-col gap-[8px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-[8px]">
                            <div className="h-[25px] px-[8px] rounded-[3.5px] flex items-center">
                              <span className="font-mono text-[12px] leading-[20px] text-[rgba(22,22,22,0.85)]">v2.1.0</span>
                            </div>
                            <span className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Feb 15, 2026</span>
                          </div>
                          <div className="bg-[rgba(0,188,125,0.1)] h-[25px] px-[8px] rounded-[3.5px] flex items-center">
                            <span className="text-[12px] font-medium leading-[20px] text-[#237804]">Active</span>
                          </div>
                        </div>
                        <p className="text-[14px] font-normal leading-[22px] text-[#161616]">Improved sensitivity on amelanotic melanoma cases. Added NDPI format support. Performance optimizations.</p>
                      </div>

                      {/* v2.0.0 */}
                      <div className="bg-white border border-[#d9d9d9] rounded-[8px] p-[16px] flex-1 flex flex-col gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                          <div className="h-[25px] px-[8px] rounded-[3.5px] flex items-center">
                            <span className="font-mono text-[12px] leading-[20px] text-[rgba(22,22,22,0.85)]">v2.0.0</span>
                          </div>
                          <span className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Oct 15, 2025</span>
                        </div>
                        <p className="text-[14px] font-normal leading-[22px] text-[#161616]">Major update with retrained model on expanded dataset. External validation completed.</p>
                      </div>

                      {/* v1.5.2 - Deprecated (orange border) */}
                      <div className="bg-white rounded-[8px] p-[16px] flex-1 flex flex-col gap-[8px]" style={{ border: '1px solid #e17100' }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-[8px]">
                            <div className="bg-[rgba(254,154,0,0.1)] h-[25px] px-[8px] rounded-[3.5px] flex items-center">
                              <span className="font-mono text-[12px] leading-[20px] text-[#e17100]">v1.5.2</span>
                            </div>
                            <span className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Jun 3, 2025</span>
                          </div>
                          <div className="bg-[rgba(255,241,184,0.45)] h-[25px] px-[8px] rounded-[3.5px] flex items-center gap-[8px]">
                            <svg className="shrink-0" width="10.5" height="10.5" viewBox="0 0 12 12" fill="#874d00">
                              <path d="M6 1L7.545 4.455L11.5 4.927L8.75 7.545L9.545 11.5L6 9.5L2.455 11.5L3.25 7.545L0.5 4.927L4.455 4.455L6 1Z" />
                            </svg>
                            <span className="text-[12px] font-medium leading-[20px] text-[#874d00]">Deprecated</span>
                          </div>
                        </div>
                        <p className="text-[14px] font-normal leading-[22px] text-[#161616]">Initial production release. Bug fixes and stability improvements.</p>
                        <p className="text-[12px] leading-[20px] text-[#e17100]"><strong>Sunset date:</strong> May 1, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AUDIT & ADMIN */}
              <div className="bg-white border border-[#d9d9d9] rounded-[8px] overflow-hidden">
                <div className="px-[24px] py-[16px] border-b border-[#d9d9d9]">
                  <p className="font-semibold text-[18px] leading-[26px] text-black">Audit & Admin</p>
                  <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">Model metadata and administrative controls</p>
                </div>
                <div className="px-[24px] py-[16px] flex flex-col gap-[24px]">

                  {/* Metadata — horizontal 4-column row */}
                  <div className="flex gap-[8px]">
                    {[
                      { label: 'Created Date', value: 'Jan 10, 2025' },
                      { label: 'Owner', value: 'Dr. Sarah Chen' },
                      { label: 'Assigned By', value: 'Dr. Sarah Chen' },
                      { label: 'Last Modified', value: 'Feb 15, 2026' },
                    ].map((item) => (
                      <div key={item.label} className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] p-[16px] flex-1 flex flex-col gap-[8px]">
                        <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f] uppercase tracking-[0.3px]">{item.label}</p>
                        <p className="text-[14px] font-semibold leading-[22px] text-[#161616]">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Permissions & Roles */}
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-[14px] leading-[22px] text-[#525252]">Permissions & Roles</p>
                      <button className="text-[14px] font-medium leading-[22px] text-[rgba(0,0,0,0.85)] flex items-center gap-[8px]">
                        <svg className="size-[14px]" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M5 7H9M7 5V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        Manage Permissions
                      </button>
                    </div>

                    {/* User rows */}
                    <div className="flex flex-col gap-[8px]">
                      {permissionUsers.map((user) => (
                        <div key={user.email} className="bg-[rgba(255,255,255,0.5)] border border-[#d9d9d9] rounded-[8px] p-[16px] h-[69px] flex items-center justify-between">
                          <div className="flex flex-col gap-[4px]">
                            <p className="text-[14px] font-semibold leading-[22px] text-[#161616]">{user.name}</p>
                            <p className="text-[12px] font-normal leading-[20px] text-[#6f6f6f]">{user.email}</p>
                          </div>
                          {user.isChip ? (
                            <div className="bg-[rgba(208,231,255,0.45)] h-[25px] px-[12px] rounded-[4px] flex items-center">
                              <span className="text-[12px] font-medium leading-[20px] text-[#003a8c]">{user.role}</span>
                            </div>
                          ) : (
                            <p className="text-[12px] font-medium leading-[20px] text-[rgba(0,0,0,0.85)]">{user.role}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Requests Panel */}
      <RequestsPanel
        isOpen={showRequestsPanel}
        onClose={() => setShowRequestsPanel(false)}
        requests={modelRequests}
        onRequestClick={handleRequestClick}
      />

      {/* Request Details Overlay */}
      <RequestDetailsOverlay
        request={selectedRequest}
        onClose={() => setSelectedRequest(null)}
        onApprove={handleApprove}
        onReject={handleReject}
        onRequestInfo={handleRequestInfo}
      />
    </div>
  );
}
