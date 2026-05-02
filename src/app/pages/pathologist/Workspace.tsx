import { useRef, useState } from 'react';
import { PathologistHeader } from '../../components/pathologist/PathologistHeader';
import imgHospital1 from 'figma:asset/09c9138fae8e42a787af08edb0f8d39b50b3bfe2.png';

// ─── Data ───────────────────────────────────────────────────────────────────

const authorizedModels = [
  {
    id: 'retinacheck',
    name: 'RetinaCheck AI',
    taskType: 'Detection',
    tags: ['Retinal tissue', 'Fundus imaging', 'Color photography'],
    totalRuns: 125,
    avgTime: '2 min',
    lastUsed: 'Feb 25, 2025',
    output: 'Heat map + score',
    hasUpdate: true,
  },
  {
    id: 'pulmonode',
    name: 'PulmoNode Detector',
    taskType: 'Detection',
    tags: ['Lung tissue', 'Chest imaging', 'CT scan'],
    totalRuns: 165,
    avgTime: '2 min',
    lastUsed: 'Feb 20, 2025',
    output: 'Heat map',
    hasUpdate: false,
  },
  {
    id: 'prostate',
    name: 'ProstateScore Gleason AI',
    taskType: 'Grading',
    tags: ['Prostate tissue', 'H&E stain', 'Needle biopsy'],
    totalRuns: 214,
    avgTime: '3 min',
    lastUsed: 'Jan 08, 2025',
    output: 'Score',
    hasUpdate: false,
  },
];

const pendingModels = [
  {
    id: 'thyroidclass',
    name: 'ThyroidClass AI',
    taskType: 'Classification',
    tags: ['Thyroid tissue', 'FNA cytology', 'H&E stain'],
    requestedDate: 'Jan 12, 2025',
    status: 'Check Information',
  },
  {
    id: 'colondetect',
    name: 'ColonDetect Pro',
    taskType: 'Detection',
    tags: ['Colon tissue', 'H&E stain', 'Biopsy'],
    requestedDate: 'Jan 20, 2025',
    status: 'Under Review',
  },
];

const completedProjects = [
  {
    id: 'cp1',
    projectName: 'Cervical Screening Batch #041',
    modelUsed: 'PathScan Cervical AI v2.3.1',
    slides: 48,
    completedOn: '2026-03-31 14:23',
    duration: '3 h 14 min',
    failedCases: 0,
  },
  {
    id: 'cp2',
    projectName: 'Kidney Biopsy Panel — Q1',
    modelUsed: 'GlomDetect Renal v3.0.1',
    slides: 120,
    completedOn: '2026-03-30 14:02',
    duration: '2 h 6 min',
    failedCases: 1,
  },
  {
    id: 'cp3',
    projectName: 'Breast Tissue IHC Analysis',
    modelUsed: 'BreastPath Analyzer v2.1.4',
    slides: 132,
    completedOn: '2026-03-29 14:20',
    duration: '3 h 11 min',
    failedCases: 0,
  },
  {
    id: 'cp4',
    projectName: 'Prostate Biopsy Grading Round 7',
    modelUsed: 'ProstateScore Gleason AI v3.1.0',
    slides: 76,
    completedOn: '2026-03-28 09:44',
    duration: '2 h 51 min',
    failedCases: 0,
  },
  {
    id: 'cp5',
    projectName: 'Lung Nodule Detection — Cohort B',
    modelUsed: 'PulmoNode Detector v2.0.2',
    slides: 94,
    completedOn: '2026-03-27 16:10',
    duration: '1 h 58 min',
    failedCases: 2,
  },
  {
    id: 'cp6',
    projectName: 'Retinal Screening — Diabetic Cohort',
    modelUsed: 'RetinaCheck AI v2.1.0',
    slides: 210,
    completedOn: '2026-03-26 11:35',
    duration: '4 h 22 min',
    failedCases: 0,
  },
  {
    id: 'cp7',
    projectName: 'Liver Fibrosis Staging Batch #12',
    modelUsed: 'HepatoStage AI v1.4.1',
    slides: 58,
    completedOn: '2026-03-25 13:50',
    duration: '1 h 34 min',
    failedCases: 1,
  },
  {
    id: 'cp8',
    projectName: 'Skin Lesion Classification — Q1',
    modelUsed: 'DermaScope Pro v2.3.0',
    slides: 183,
    completedOn: '2026-03-24 10:17',
    duration: '3 h 45 min',
    failedCases: 3,
  },
  {
    id: 'cp9',
    projectName: 'Colorectal Polyp Detection #029',
    modelUsed: 'ColonDetect Pro v1.9.2',
    slides: 67,
    completedOn: '2026-03-23 15:08',
    duration: '1 h 22 min',
    failedCases: 0,
  },
  {
    id: 'cp10',
    projectName: 'Thyroid FNA Cytology Review',
    modelUsed: 'ThyroidClass AI v1.2.0',
    slides: 44,
    completedOn: '2026-03-22 08:55',
    duration: '0 h 58 min',
    failedCases: 0,
  },
  {
    id: 'cp11',
    projectName: 'Lymphoma Panel — Haematology Dept',
    modelUsed: 'LymphoScan v3.0.1',
    slides: 155,
    completedOn: '2026-03-21 17:30',
    duration: '2 h 43 min',
    failedCases: 2,
  },
  {
    id: 'cp12',
    projectName: 'Melanoma Screening Batch #018',
    modelUsed: 'MelanomaDetect Pro v2.5.1',
    slides: 89,
    completedOn: '2026-03-20 12:22',
    duration: '1 h 47 min',
    failedCases: 0,
  },
  {
    id: 'cp13',
    projectName: 'Bladder Biopsy Assessment #004',
    modelUsed: 'UroPath Classifier v1.1.3',
    slides: 31,
    completedOn: '2026-03-19 14:05',
    duration: '0 h 44 min',
    failedCases: 0,
  },
];

const incompleteProjects = [
  {
    id: 'ip1',
    projectName: 'Tumor Margin Assessment #12',
    modelUsed: 'TumorSegment Pro v1.8.0',
    slides: 24,
    startedScheduled: 'Apr 23, 2026 09:14',
    status: 'Running',
    progressDone: 15,
    progressTotal: 24,
    progressNote: '',
  },
  {
    id: 'ip2',
    projectName: 'Retinal Batch — April Wave',
    modelUsed: 'RetinaCheck AI v2.1.0',
    slides: 60,
    startedScheduled: 'Apr 23, 2026 10:00',
    status: 'Running',
    progressDone: 38,
    progressTotal: 60,
    progressNote: '',
  },
  {
    id: 'ip3',
    projectName: 'Melanoma Screening #019',
    modelUsed: 'MelanomaDetect Pro v2.5.1',
    slides: 42,
    startedScheduled: 'Apr 23, 2026 10:45',
    status: 'Running',
    progressDone: 9,
    progressTotal: 42,
    progressNote: '',
  },
  {
    id: 'ip4',
    projectName: 'Prostate Biopsy Screening',
    modelUsed: 'ProstateScore Gleason AI v3.1.0',
    slides: 18,
    startedScheduled: 'Apr 23, 2026 11:30',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 18,
    progressNote: 'Starting in 1d 13h',
  },
  {
    id: 'ip5',
    projectName: 'Lymph Node H&E Panel',
    modelUsed: 'BreastPath Analyzer v2.1.4',
    slides: 36,
    startedScheduled: 'Apr 23, 2026 13:00',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 36,
    progressNote: 'Starting in 2 days',
  },
  {
    id: 'ip6',
    projectName: 'Lung CT Nodule Review — Cohort C',
    modelUsed: 'PulmoNode Detector v2.0.2',
    slides: 55,
    startedScheduled: 'Apr 24, 2026 08:00',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 55,
    progressNote: 'Starting in 2 days',
  },
  {
    id: 'ip7',
    projectName: 'Cervical Screening Batch #042',
    modelUsed: 'PathScan Cervical AI v2.3.1',
    slides: 48,
    startedScheduled: 'Apr 24, 2026 09:30',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 48,
    progressNote: 'Starting in 2 days',
  },
  {
    id: 'ip8',
    projectName: 'Colorectal Polyp Batch #030',
    modelUsed: 'ColonDetect Pro v1.9.2',
    slides: 29,
    startedScheduled: 'Apr 24, 2026 11:00',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 29,
    progressNote: 'Starting in 3 days',
  },
  {
    id: 'ip9',
    projectName: 'Thyroid FNA — Spring Cohort',
    modelUsed: 'ThyroidClass AI v1.2.0',
    slides: 22,
    startedScheduled: 'Apr 25, 2026 10:00',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 22,
    progressNote: 'Starting in 3 days',
  },
  {
    id: 'ip10',
    projectName: 'Liver Fibrosis Staging Batch #13',
    modelUsed: 'HepatoStage AI v1.4.1',
    slides: 64,
    startedScheduled: 'Apr 25, 2026 14:00',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 64,
    progressNote: 'Starting in 3 days',
  },
  {
    id: 'ip11',
    projectName: 'Bladder Biopsy Assessment #005',
    modelUsed: 'UroPath Classifier v1.1.3',
    slides: 17,
    startedScheduled: 'Apr 26, 2026 09:00',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 17,
    progressNote: 'Starting in 4 days',
  },
  {
    id: 'ip12',
    projectName: 'Skin Lesion Classification — Q2',
    modelUsed: 'DermaScope Pro v2.3.0',
    slides: 98,
    startedScheduled: 'Apr 26, 2026 13:30',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 98,
    progressNote: 'Starting in 4 days',
  },
  {
    id: 'ip13',
    projectName: 'Kidney Biopsy Panel — Q2',
    modelUsed: 'GlomDetect Renal v3.0.1',
    slides: 110,
    startedScheduled: 'Apr 27, 2026 08:30',
    status: 'Scheduled',
    progressDone: 0,
    progressTotal: 110,
    progressNote: 'Starting in 5 days',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const TASK_CHIP: Record<string, { bg: string; border: string; color: string }> = {
  Classification: { bg: 'rgba(208,231,255,0.45)', border: 'rgba(0,58,140,0.4)', color: '#003a8c' },
  Detection: { bg: 'rgba(217,247,190,0.45)', border: 'rgba(19,82,0,0.4)', color: '#135200' },
  Grading: { bg: 'rgba(249,240,255,0.85)', border: 'rgba(57,16,133,0.4)', color: '#391085' },
  Segmentation: { bg: 'rgba(255,241,240,0.85)', border: 'rgba(163,16,0,0.4)', color: '#a30000' },
};

function TaskChip({ type }: { type: string }) {
  const s = TASK_CHIP[type] ?? { bg: 'rgba(0,0,0,0.04)', border: 'rgba(0,0,0,0.15)', color: '#595959' };
  return (
    <span
      style={{
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: '6px',
        padding: '3px 9px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '20px',
        color: s.color,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {type}
    </span>
  );
}

function ClinicalReadyBadge() {
  return (
    <span
      style={{
        border: '1px solid #ebebeb',
        borderRadius: '6px',
        padding: '4px 9px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        flexShrink: 0,
      }}
    >
      <div style={{ position: 'relative', flexShrink: 0, width: '20px', height: '20px' }}>
        <img alt="" src={imgHospital1} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#525252', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
        Clinical-ready
      </span>
    </span>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        background: 'white',
        border: '1px solid rgba(82,82,82,0.4)',
        borderRadius: '6px',
        padding: '2px 9px',
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '20px',
        color: '#6f6f6f',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}

function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '18px', color: '#6f6f6f', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>
        {value}
      </span>
    </div>
  );
}

function PendingStatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '18px', color: '#6f6f6f', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>
        {value}
      </span>
    </div>
  );
}

const SECTION_TITLE_STYLE: React.CSSProperties = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '28px',
  color: 'rgba(22,22,22,0.85)',
  margin: 0,
};

const TABLE_HEADER_STYLE: React.CSSProperties = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  fontSize: '12px',
  color: '#808080',
  textTransform: 'uppercase',
  textAlign: 'left',
  padding: '0 16px',
  height: '40px',
  whiteSpace: 'nowrap',
  letterSpacing: '0.3px',
  lineHeight: '40px',
};

const TABLE_CELL_STYLE: React.CSSProperties = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  color: '#595959',
  padding: '0 16px',
  height: '60px',
  verticalAlign: 'middle',
  lineHeight: '22px',
};

const TABLE_NAME_STYLE: React.CSSProperties = {
  ...TABLE_CELL_STYLE,
  fontWeight: 400,
  color: '#161616',
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function PathologistWorkspace() {
  const [activeTab, setActiveTab] = useState(0);

  const authorizedRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef<HTMLDivElement>(null);
  const incompleteRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { label: 'Authorized Models', ref: authorizedRef },
    { label: 'Pending Models', ref: pendingRef },
    { label: 'Completed Projects', ref: completedRef },
    { label: 'Active & Scheduled Projects', ref: incompleteRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    setActiveTab(index);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <PathologistHeader />

      {/* ── Scroll Tabs ─────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'sticky',
          top: '56px',
          zIndex: 40,
          background: '#ffffff',
          paddingLeft: '72px',
          paddingRight: '72px',
          paddingTop: '32px',
          paddingBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => scrollToSection(tab.ref, i)}
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '22px',
              color: activeTab === i ? '#096DD9' : 'rgba(82,82,82,0.8)',
              background: activeTab === i ? 'white' : 'transparent',
              border: activeTab === i ? '1px solid #d9d9d9' : '1px solid transparent',
              borderRadius: '6px',
              padding: '6px 16px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: activeTab === i ? '0px 1px 4px rgba(0,0,0,0.08)' : 'none',
              transition: 'color 0.15s, background 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={(e) => { if (activeTab !== i) e.currentTarget.style.color = '#096DD9'; }}
            onMouseLeave={(e) => { if (activeTab !== i) e.currentTarget.style.color = 'rgba(82,82,82,0.8)'; }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Page Content ────────────────────────────────────────────────── */}
      <div style={{ paddingLeft: '72px', paddingRight: '72px', paddingBottom: '64px', display: 'flex', flexDirection: 'column', gap: '40px' }}>

        {/* ── Section 1: Authorized Models ─────────────────────────────── */}
        <section ref={authorizedRef} style={{ scrollMarginTop: '162px' }}>
          <h2 style={{ ...SECTION_TITLE_STYLE, marginBottom: '16px' }}>Authorized Models</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {authorizedModels.map((model) => (
              <div
                key={model.id}
                style={{
                  background: 'white',
                  border: '1px solid #d9d9d9',
                  borderRadius: '8px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* Row 1: name + clinical-ready (left) | task chip (far right) */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
                  <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '18px', lineHeight: '26px', color: '#161616', flexShrink: 0 }}>
                    {model.name}
                  </span>
                  <ClinicalReadyBadge />
                  <div style={{ flex: 1 }} />
                  <TaskChip type={model.taskType} />
                </div>

                {/* Row 2: tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {model.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>

                {/* Row 3: stats */}
                <div style={{ padding: '24px 0', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <StatItem label="Total Runs" value={model.totalRuns} />
                  <StatItem label="Avg Time" value={model.avgTime} />
                  <StatItem label="Last Used" value={model.lastUsed} />
                  <StatItem label="Output" value={model.output} />
                </div>

                {/* Row 4: note + buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  {model.hasUpdate ? (
                    <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: 'rgba(82,82,82,0.85)' }}>
                      Updated version available
                    </span>
                  ) : <span />}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      style={{
                        background: '#096dd9',
                        border: 'none',
                        borderRadius: '6px',
                        width: '144px',
                        padding: '8px 0',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0px 2px 4px rgba(24,144,255,0.2)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Upload File
                    </button>
                    <button
                      style={{
                        background: 'white',
                        border: '1px solid #d9d9d9',
                        borderRadius: '6px',
                        width: '144px',
                        padding: '8px 0',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: '#161616',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      View History
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Pending Models ─────────────────────────────────── */}
        <section ref={pendingRef} style={{ scrollMarginTop: '162px' }}>
          <h2 style={{ ...SECTION_TITLE_STYLE, marginBottom: '16px' }}>Pending Models</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {pendingModels.map((model) => (
              <div
                key={model.id}
                style={{
                  background: 'white',
                  border: '1px solid #d9d9d9',
                  borderRadius: '8px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* Row 1: name + clinical-ready (left) | task chip (far right) */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
                  <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '18px', lineHeight: '26px', color: '#161616', flexShrink: 0 }}>
                    {model.name}
                  </span>
                  <ClinicalReadyBadge />
                  <div style={{ flex: 1 }} />
                  <TaskChip type={model.taskType} />
                </div>

                {/* Row 2: tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {model.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>

                {/* Row 3: stats — no background, 0 x-padding, fill container */}
                <div style={{ padding: '16px 0', display: 'flex', gap: '16px' }}>
                  <PendingStatItem label="Requested Date" value={model.requestedDate} />
                  <PendingStatItem label="Status" value={model.status} />
                </div>

                {/* Row 4: Edit Request button */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    style={{
                      background: 'white',
                      border: '1px solid #d9d9d9',
                      borderRadius: '6px',
                      width: '144px',
                      height: '36px',
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: '#161616',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Edit Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Completed Projects ────────────────────────────── */}
        <section ref={completedRef} style={{ scrollMarginTop: '162px' }}>
          <h2 style={{ ...SECTION_TITLE_STYLE, marginBottom: '16px' }}>Completed Projects</h2>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
              <colgroup>
                <col style={{ width: '22%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '11%' }} />
                <col style={{ width: '15%' }} />
                <col />
              </colgroup>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eeeeee' }}>
                  {['Project Name', 'Model Used', 'Slides', 'Failed Cases', 'Duration', 'Completed On', ''].map((h) => (
                    <th key={h} style={TABLE_HEADER_STYLE}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {completedProjects.map((row, idx) => (
                  <tr
                    key={row.id}
                    style={{ borderBottom: idx < completedProjects.length - 1 ? '1px solid #eeeeee' : 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#fafafa')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
                  >
                    <td style={TABLE_NAME_STYLE}>{row.projectName}</td>
                    <td style={TABLE_CELL_STYLE}>{row.modelUsed}</td>
                    <td style={TABLE_CELL_STYLE}>{row.slides}</td>
                    <td style={TABLE_CELL_STYLE}>{row.failedCases}</td>
                    <td style={TABLE_CELL_STYLE}>{row.duration}</td>
                    <td style={{ ...TABLE_CELL_STYLE, color: '#161616' }}>{row.completedOn}</td>
                    <td style={{ ...TABLE_CELL_STYLE, textAlign: 'right', paddingRight: '24px' }}>
                      <button
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', color: '#096dd9', padding: 0, whiteSpace: 'nowrap' }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        Download Results
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 4: Active & Scheduled Projects ───────────────────── */}
        <section ref={incompleteRef} style={{ scrollMarginTop: '162px' }}>
          <h2 style={{ ...SECTION_TITLE_STYLE, marginBottom: '16px' }}>Active & Scheduled Projects</h2>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
              <colgroup>
                <col style={{ width: '20%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '14%' }} />
                <col style={{ width: '9%' }} />
                <col style={{ width: '22%' }} />
                <col />
              </colgroup>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eeeeee' }}>
                  {['Project Name', 'Model Used', 'Slides', 'Started / Scheduled', 'Status', 'Progress', ''].map((h) => (
                    <th key={h} style={TABLE_HEADER_STYLE}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {incompleteProjects.map((row, idx) => {
                  const pct = row.progressTotal > 0 ? (row.progressDone / row.progressTotal) * 100 : 0;
                  return (
                    <tr
                      key={row.id}
                      style={{ borderBottom: idx < incompleteProjects.length - 1 ? '1px solid #eeeeee' : 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#fafafa')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
                    >
                      <td style={TABLE_NAME_STYLE}>{row.projectName}</td>
                      <td style={TABLE_CELL_STYLE}>{row.modelUsed}</td>
                      <td style={TABLE_CELL_STYLE}>{row.slides}</td>
                      <td style={TABLE_CELL_STYLE}>{row.startedScheduled}</td>
                      <td style={{ ...TABLE_CELL_STYLE, color: 'rgba(22,22,22,0.85)' }}>{row.status}</td>
                      <td style={{ ...TABLE_CELL_STYLE }}>
                        {row.status === 'Running' ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ position: 'relative', width: '160px', height: '6px', background: '#e6e6e6', borderRadius: '3px', flexShrink: 0 }}>
                              <div style={{ position: 'absolute', left: 0, top: 0, height: '6px', width: `${pct}%`, background: '#1976d2', borderRadius: '3px' }} />
                            </div>
                            <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '11px', color: '#161616', whiteSpace: 'nowrap' }}>
                              {row.progressDone}/{row.progressTotal}
                            </span>
                          </div>
                        ) : (
                          <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', color: '#161616' }}>
                            {row.progressNote}
                          </span>
                        )}
                      </td>
                      <td style={{ ...TABLE_CELL_STYLE, textAlign: 'right', paddingRight: '24px' }}>
                        <button
                          style={{
                            background: 'white',
                            border: '1px solid #d9d9d9',
                            borderRadius: '6px',
                            padding: '4px 24px',
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '22px',
                            color: '#161616',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {row.status === 'Scheduled' ? 'Cancel' : 'Pause'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
