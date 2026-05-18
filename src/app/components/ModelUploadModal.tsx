import { useState } from 'react';
import { ChevronDown, ChevronUp, Lock, Loader2, AlertCircle } from 'lucide-react';
import logoIcon from '../../assets/logo-icon.png';

export interface ModelSubmissionData {
  manifestEndpoint: string;
  modelName: string;
  taskType: string;
  shortDescription: string;
  ownerName: string;
  ownerEmail: string;
  authMethod: string;
  environment: string;
  headerName: string;
  tokenExpiration: string;
  tokenValue: string;
  wsiFormats: string[];
  maxFileSize: string;
  ingestionMode: string;
  metadataRequirements: string[];
  autoReadMetadata: boolean;
  typicalRuntime: string;
  timeoutThreshold: string;
  outputTypes: string[];
  outputTypesOther: string;
  wsiFormatsOther: string;
  explanation: string;
}

interface ModelUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ModelSubmissionData) => void;
}

const TASK_TYPES = ['Classification', 'Detection', 'Segmentation', 'Grading', 'Other'];
const AUTH_METHODS = ['API Key', 'Bearer Token', 'OAuth 2.0', 'Basic Auth', 'None'];
const ENVIRONMENTS = ['Production', 'Staging', 'Development', 'US-East', 'US-West', 'EU'];
const INGESTION_MODES = ['Direct Upload', 'URL Reference', 'S3 Path', 'DICOM Store'];
const WSI_FORMAT_OPTIONS = ['SVS', 'NDPI', 'TIFF', 'BigTIFF', 'MRXS', 'SCN', 'VMS', 'VSI'];
const METADATA_OPTIONS = ['Stain', 'Magnification', 'MPP'];
const OUTPUT_TYPE_OPTIONS = ['Overlay', 'Heatmap', 'Score', 'Table/CSV', 'JSON report'];

const EMPTY_FORM = (): ModelSubmissionData => ({
  manifestEndpoint: '', modelName: '', taskType: '', shortDescription: '',
  ownerName: '', ownerEmail: '', authMethod: '', environment: '',
  headerName: 'Authorization', tokenExpiration: '', tokenValue: '',
  wsiFormats: [], maxFileSize: '', ingestionMode: '', metadataRequirements: [],
  autoReadMetadata: false, typicalRuntime: '', timeoutThreshold: '',
  outputTypes: [], outputTypesOther: '', wsiFormatsOther: '', explanation: '',
});

// ─── Shared styles ────────────────────────────────────────────────────────────
const DM = "'DM Sans', sans-serif";
const JB = "'JetBrains Mono', monospace";

const LABEL: React.CSSProperties = { fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)', display: 'flex', alignItems: 'center', gap: '4px' };
const INPUT: React.CSSProperties = { width: '100%', height: '40px', padding: '0 8px', fontFamily: DM, fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)', background: 'white', border: '1px solid #d9d9d9', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' };
const BTN_PRIMARY: React.CSSProperties = { height: '40px', background: '#0c857a', border: 'none', borderRadius: '4px', fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'white', cursor: 'pointer', padding: '0 16px' };
const BTN_SECONDARY: React.CSSProperties = { height: '40px', background: 'white', border: '1px solid #d9d9d9', borderRadius: '4px', fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'rgba(0,0,0,0.85)', cursor: 'pointer', padding: '0 16px' };

function Required() { return <span style={{ color: '#ff4d4f', fontWeight: 500 }}>*</span>; }

function StyledSelect({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder?: string }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ ...INPUT, paddingRight: '28px', appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', color: 'rgba(22,22,22,0.85)' }}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown style={{ position: 'absolute', right: '9px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', color: 'rgba(22,22,22,0.45)', pointerEvents: 'none' }} />
    </div>
  );
}

// Badge for section headings (A, B, C, D)
function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f6f7f9', border: '1px solid rgba(0,0,0,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontFamily: DM, fontWeight: 700, fontSize: '12px', color: '#6f6f6f', lineHeight: 1 }}>{label}</span>
    </div>
  );
}

// Collapsible section card
function SectionCard({ badge, title, subtitle, children, defaultOpen = true, cardStyle }: { badge: string; title: string; subtitle: string; children: React.ReactNode; defaultOpen?: boolean; cardStyle?: React.CSSProperties }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.13)', borderRadius: '8px', padding: '25px 24px', display: 'flex', flexDirection: 'column', gap: '16px', ...cardStyle }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SectionBadge label={badge} />
            <span style={{ fontFamily: DM, fontWeight: 600, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>{title}</span>
          </div>
          <span style={{ fontFamily: DM, fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: '#6f6f6f' }}>{subtitle}</span>
        </div>
        <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
          {open ? <ChevronUp style={{ width: '16px', height: '16px', color: '#525252' }} /> : <ChevronDown style={{ width: '16px', height: '16px', color: '#525252' }} />}
          <span style={{ fontFamily: DM, fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: '#525252' }}>{open ? 'Collapse' : 'Expand'}</span>
        </button>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: open ? '2000px' : '0', transition: 'max-height 0.3s cubic-bezier(0.22,1,0.36,1)', display: open ? 'flex' : 'none', flexDirection: 'column', gap: '16px' }}>
        {children}
      </div>
    </div>
  );
}

// Input with right-side unit badge
function InputWithUnit({ value, onChange, placeholder, unit }: { value: string; onChange: (v: string) => void; placeholder?: string; unit: string }) {
  return (
    <div style={{ display: 'flex', border: '1px solid #d9d9d9', borderRadius: '4px', overflow: 'hidden', height: '40px' }}>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ flex: 1, border: 'none', outline: 'none', padding: '0 8px', fontFamily: DM, fontSize: '14px', color: 'rgba(22,22,22,0.85)', background: 'white' }} />
      <div style={{ background: '#f6f7f9', padding: '0 17px', display: 'flex', alignItems: 'center', borderLeft: '1px solid #d9d9d9', flexShrink: 0 }}>
        <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: 'rgba(82,82,82,0.77)' }}>{unit}</span>
      </div>
    </div>
  );
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────
function TopBar({ step, onClose }: { step: 1 | 2; onClose: () => void }) {
  return (
    <div style={{ flexShrink: 0, background: 'white', boxShadow: '0px 2px 3px rgba(114,114,114,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 24px', height: '56px' }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoIcon} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        <span style={{ fontFamily: DM, fontWeight: 600, fontSize: '16px', color: '#161616' }}>Pixcell</span>
      </div>

      {/* Step indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '338px', justifyContent: 'center' }}>
        {/* Step 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {step === 1 ? (
            <div style={{ width: '24px', height: '24px', borderRadius: '12px', background: '#0c857a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s ease' }}>
              <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '12px', color: 'white' }}>1</span>
            </div>
          ) : (
            <div style={{ width: '24px', height: '24px', borderRadius: '12px', background: '#0c857a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s ease' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
          <span style={{ fontFamily: DM, fontWeight: 400, fontSize: '12px', lineHeight: '24px', color: step === 1 ? 'rgba(22,22,22,0.85)' : '#94a3b8', whiteSpace: 'nowrap', transition: 'color 0.3s ease' }}>
            Basic Info & Connect
          </span>
        </div>
        {/* Connector line */}
        <div style={{ width: '32px', height: '1px', background: step === 2 ? '#0c857a' : '#e8ecf1', transition: 'background 0.3s ease', flexShrink: 0 }} />
        {/* Step 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '24px', height: '24px', borderRadius: '12px',
            background: step === 2 ? '#0c857a' : 'white',
            border: step === 2 ? 'none' : '2px solid #e8ecf1',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            transition: 'all 0.3s ease',
          }}>
            <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '12px', color: step === 2 ? 'white' : '#94a3b8', transition: 'color 0.3s ease' }}>2</span>
          </div>
          <span style={{ fontFamily: DM, fontWeight: 400, fontSize: '12px', lineHeight: '24px', color: step === 2 ? 'rgba(22,22,22,0.85)' : '#94a3b8', whiteSpace: 'nowrap', transition: 'color 0.3s ease' }}>
            Configure & Submit
          </span>
        </div>
      </div>

      {/* Close button — px-[12px] py-[4px] matching Figma */}
      <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: '1px solid #ccc', borderRadius: '4px', padding: '4px 12px', cursor: 'pointer', fontFamily: DM, fontSize: '12px', lineHeight: '20px', color: 'black' }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1l8 8M9 1L1 9" stroke="black" strokeWidth="1.2" strokeLinecap="round"/></svg>
        <span>Close</span>
      </button>
    </div>
  );
}

// ─── Confirmation Popup ───────────────────────────────────────────────────────
function SubmitConfirmDialog({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{ background: 'white', borderRadius: '8px', width: '400px', boxShadow: '0 8px 32px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden', transform: 'translateY(-8vh)' }}>
        {/* Body */}
        <div style={{ padding: '28px 24px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ fontFamily: DM, fontWeight: 600, fontSize: '20px', lineHeight: '28px', color: '#161616', margin: 0 }}>
            Submit for review?
          </p>
          <p style={{ fontFamily: DM, fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.65)', margin: 0 }}>
            Your model will be queued for the review team. You can still edit the draft while it's under review.
          </p>
        </div>
        {/* Footer */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onCancel}
            style={{ height: '36px', padding: '0 20px', background: 'white', border: '1px solid #d9d9d9', borderRadius: '4px', fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'rgba(0,0,0,0.85)', cursor: 'pointer' }}>
            Cancel
          </button>
          <button onClick={onConfirm}
            style={{ height: '36px', padding: '0 24px', background: '#0c857a', border: 'none', borderRadius: '4px', fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'white', cursor: 'pointer' }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function ModelUploadModal({ isOpen, onClose, onSubmit }: ModelUploadModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [draftSaved, setDraftSaved] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState<ModelSubmissionData>(EMPTY_FORM());

  const SLIDE = 'transform 400ms cubic-bezier(0.4,0,0.2,1), opacity 400ms cubic-bezier(0.4,0,0.2,1)';

  if (!isOpen) return null;

  const set = (field: keyof ModelSubmissionData, value: ModelSubmissionData[keyof ModelSubmissionData]) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleTestConnection = async () => {
    if (!formData.manifestEndpoint.trim()) return;
    setConnectionStatus('testing');
    await new Promise(r => setTimeout(r, 1500));
    const ok = formData.manifestEndpoint.startsWith('https');
    setConnectionStatus(ok ? 'success' : 'error');
    if (ok) {
      // Simulate manifest fetch — prefill step 2 fields
      setFormData(prev => ({
        ...prev,
        authMethod: 'Bearer Token',
        environment: 'Production',
        headerName: 'Authorization',
        tokenExpiration: '90 days',
        wsiFormats: ['SVS', 'TIFF', 'NDPI'],
        maxFileSize: '2048',
        ingestionMode: 'URL Reference',
        metadataRequirements: ['Stain', 'Magnification'],
        typicalRuntime: '12',
        timeoutThreshold: '30',
        outputTypes: ['Heatmap', 'JSON report'],
      }));
    }
  };

  const handleClose = () => {
    setFormData(EMPTY_FORM());
    setConnectionStatus('idle');
    setDraftSaved(false);
    setStep(1);
    setShowConfirm(false);
    onClose();
  };

  const handleSaveDraft = () => {
    onSubmit(formData);
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2000);
  };

  const handleConfirmSubmit = () => {
    setShowConfirm(false);
    onSubmit(formData);
    handleClose();
  };

  const toggleCheck = (field: 'wsiFormats' | 'metadataRequirements' | 'outputTypes', val: string) => {
    const arr = formData[field] as string[];
    set(field, arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  const FORM_W = 894;

  const panel = (s: 1 | 2) => ({
    position: 'absolute' as const, inset: 0, overflowY: 'auto' as const,
    display: 'flex', justifyContent: 'center',
    transform: step === s ? 'translateX(0)' : s === 1 ? 'translateX(-100%)' : 'translateX(100%)',
    opacity: step === s ? 1 : 0.4,
    transition: SLIDE,
  });

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: '#f5f6f8', display: 'flex', flexDirection: 'column' }}>
      <TopBar step={step} onClose={handleClose} />

      {/* Slide container — clips both panels */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>

        {/* ── PANEL 1 ──────────────────────────────────────────────────────── */}
        <div style={panel(1)}>
        <div style={{ width: `${FORM_W}px`, display: 'flex', flexDirection: 'column', paddingBottom: '40px' }}>
          <div style={{ padding: '45px 0 40px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <h1 style={{ fontFamily: DM, fontWeight: 600, fontSize: '24px', lineHeight: '32px', color: 'rgba(22,22,22,0.85)', margin: 0 }}>Upload new model</h1>
            <p style={{ fontFamily: DM, fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#525252', margin: 0 }}>Register your model for platform integration. Fill in the basics and connect your manifest endpoint — we'll validate the connection before proceeding.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Card 1: Basic Information */}
              <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.13)', borderRadius: '8px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontFamily: DM, fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>Basic Information</span>
                  <span style={{ fontFamily: DM, fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: '#6f6f6f' }}>These details appear on your Marketplace listing.</span>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={LABEL}>Model Name <Required /></label>
                    <input type="text" value={formData.modelName} onChange={e => set('modelName', e.target.value)} style={INPUT} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={LABEL}>Task Type <Required /></label>
                    <StyledSelect value={formData.taskType} onChange={v => set('taskType', v)} options={TASK_TYPES} placeholder="Select task type" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={LABEL}>Short Description <Required /></label>
                  <textarea value={formData.shortDescription} onChange={e => set('shortDescription', e.target.value)} rows={3}
                    placeholder="1-2 sentences describing the clinical use case"
                    style={{ ...INPUT, height: '88px', padding: '8px', resize: 'none' }} />
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={LABEL}>Owner Name <Required /></label>
                    <input type="text" value={formData.ownerName} onChange={e => set('ownerName', e.target.value)} placeholder="Team or individual name" style={INPUT} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={LABEL}>Owner Email <Required /></label>
                    <input type="email" value={formData.ownerEmail} onChange={e => set('ownerEmail', e.target.value)} placeholder="owner@example.com" style={INPUT} />
                  </div>
                </div>
              </div>

              {/* Card 2: Connect to Manifest */}
              <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.13)', borderRadius: '8px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontFamily: DM, fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>Connect to Manifest</span>
                  <span style={{ fontFamily: DM, fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: '#6f6f6f' }}>Your model must expose a manifest endpoint. We'll also fetch it to pre-fill the next step.</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={LABEL}>Manifest Endpoint <Required /></label>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <div style={{ width: '703px', flexShrink: 0, display: 'flex', border: `1px solid ${connectionStatus === 'error' ? '#fecaca' : '#d9d9d9'}`, borderRadius: '4px', overflow: 'hidden', height: '40px' }}>
                      <div style={{ background: '#f6f7f9', padding: '0 17px', display: 'flex', alignItems: 'center', borderRight: '1px solid #d9d9d9', flexShrink: 0 }}>
                        <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: 'rgba(82,82,82,0.77)' }}>GET</span>
                      </div>
                      <input type="text" value={formData.manifestEndpoint}
                        onChange={e => { set('manifestEndpoint', e.target.value); setConnectionStatus('idle'); }}
                        placeholder="https://api.yourmodel.com/manifest"
                        style={{ flex: 1, border: 'none', outline: 'none', padding: '0 8px', fontFamily: DM, fontSize: '14px', color: 'rgba(22,22,22,0.85)', background: 'transparent' }} />
                    </div>
                    <button onClick={handleTestConnection}
                      disabled={!formData.manifestEndpoint.trim() || connectionStatus === 'testing'}
                      style={{ ...BTN_SECONDARY, width: '135px', flexShrink: 0, whiteSpace: 'nowrap', opacity: !formData.manifestEndpoint.trim() ? 0.5 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      {connectionStatus === 'testing' && <Loader2 style={{ width: '13px', height: '13px' }} className="animate-spin" />}
                      {connectionStatus === 'testing' ? 'Testing…' : 'Test Connection'}
                    </button>
                  </div>
                </div>
                {connectionStatus === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 24px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px' }}>
                    <AlertCircle style={{ width: '14px', height: '14px', color: '#b91c1c', flexShrink: 0 }} />
                    <span style={{ fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: '#b91c1c' }}>Connection failed — check endpoint URL and credentials</span>
                  </div>
                )}
                {connectionStatus === 'success' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 24px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '4px' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#15803d" strokeWidth="1"/><path d="M4 7l2 2 4-4" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: '#15803d' }}>Connection successful — manifest fetched and fields pre-filled. Click Continue to proceed.</span>
                  </div>
                )}
              </div>

              {/* Step 1 footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', marginBottom: '24px' }}>
                <span style={{ fontFamily: DM, fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'rgba(82,82,82,0.85)' }}>
                  Pass the connection test to continue
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button onClick={handleSaveDraft} style={BTN_SECONDARY}>{draftSaved ? 'Saved!' : 'Save Draft'}</button>
                  <button disabled={connectionStatus !== 'success'} onClick={() => setStep(2)}
                    style={{ ...BTN_PRIMARY, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '140px', opacity: connectionStatus === 'success' ? 1 : 0.4, cursor: connectionStatus === 'success' ? 'pointer' : 'not-allowed' }}>
                    Continue
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* ── PANEL 2 ──────────────────────────────────────────────────────── */}
        <div style={panel(2)}>
        <div style={{ width: `${FORM_W}px`, display: 'flex', flexDirection: 'column', paddingBottom: '40px' }}>
          <div style={{ padding: '45px 0 40px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <h1 style={{ fontFamily: DM, fontWeight: 600, fontSize: '24px', lineHeight: '32px', color: 'rgba(22,22,22,0.85)', margin: 0 }}>Configure & Submit</h1>
            <p style={{ fontFamily: DM, fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#525252', margin: 0 }}>We've pre-filled fields from your manifest. Review, adjust anything needed, and submit.</p>
          </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Section A: Manifest Connection & Auth */}
              <SectionCard badge="A" title="Manifest Connection & Authentication" subtitle="Endpoint credentials and region configuration.">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <label style={LABEL}>Manifest Endpoint <Required /></label>
                  <input type="text" value={formData.manifestEndpoint} onChange={e => set('manifestEndpoint', e.target.value)}
                    placeholder="https://api.yourmodel.com/manifest" style={INPUT} />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Authentication Method <Required /></label>
                    <StyledSelect value={formData.authMethod} onChange={v => set('authMethod', v)} options={AUTH_METHODS} placeholder="Select method" />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={{ ...LABEL }}><span>Environment / Region</span></label>
                    <StyledSelect value={formData.environment} onChange={v => set('environment', v)} options={ENVIRONMENTS} placeholder="Select environment" />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={{ ...LABEL, fontSize: '14px' }}>Header Name</label>
                    <input type="text" value={formData.headerName} onChange={e => set('headerName', e.target.value)} style={INPUT} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={{ ...LABEL, fontSize: '14px' }}>Token Expiration / Rotation</label>
                    <input type="text" value={formData.tokenExpiration} onChange={e => set('tokenExpiration', e.target.value)} placeholder="e.g., 90 days, never" style={INPUT} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <label style={{ ...LABEL, fontSize: '14px' }}>Token Value</label>
                    <Lock style={{ width: '12px', height: '12px', color: 'rgba(0,0,0,0.43)' }} />
                  </div>
                  <input type="password" value={formData.tokenValue} onChange={e => set('tokenValue', e.target.value)} placeholder="Enter token value" style={INPUT} />
                </div>
              </SectionCard>

              {/* Section B: Input Data Constraints */}
              <SectionCard badge="B" title="Input Data Constraints" subtitle="WSI formats and metadata requirements.">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={LABEL}>Supported WSI Formats <Required /></label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 141px)', rowGap: '10px' }}>
                    {WSI_FORMAT_OPTIONS.map(fmt => (
                      <label key={fmt} style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', height: '20px' }}>
                        <input type="checkbox" checked={formData.wsiFormats.includes(fmt)} onChange={() => toggleCheck('wsiFormats', fmt)}
                          style={{ width: '13px', height: '13px', cursor: 'pointer', accentColor: '#0c857a' }} />
                        <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)' }}>.{fmt}</span>
                      </label>
                    ))}
                    <label style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', height: '20px' }}>
                      <input type="checkbox" checked={formData.wsiFormats.includes('Other')} onChange={() => toggleCheck('wsiFormats', 'Other')}
                        style={{ width: '13px', height: '13px', cursor: 'pointer', accentColor: '#0c857a' }} />
                      <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>Other, specify___</span>
                    </label>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Maximum File Size</label>
                    <InputWithUnit value={formData.maxFileSize} onChange={v => set('maxFileSize', v)} unit="MB" />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>WSI Ingestion Mode <Required /></label>
                    <StyledSelect value={formData.ingestionMode} onChange={v => set('ingestionMode', v)} options={INGESTION_MODES} placeholder="Select mode" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10.5px' }}>
                  <label style={LABEL}>Metadata Requirements</label>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    {METADATA_OPTIONS.map(opt => (
                      <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={formData.metadataRequirements.includes(opt)} onChange={() => toggleCheck('metadataRequirements', opt)}
                          style={{ width: '13px', height: '13px', cursor: 'pointer', accentColor: '#0c857a' }} />
                        <span style={{ fontFamily: DM, fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)' }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </SectionCard>

              {/* Section C: Runtime Behavior */}
              <SectionCard badge="C" title="Runtime Behavior" subtitle="Expected performance characteristics.">
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Typical Runtime</label>
                    <InputWithUnit value={formData.typicalRuntime} onChange={v => set('typicalRuntime', v)} unit="min" />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Timeout Threshold</label>
                    <InputWithUnit value={formData.timeoutThreshold} onChange={v => set('timeoutThreshold', v)} unit="min" />
                  </div>
                </div>
              </SectionCard>

              {/* Section D: Output Types */}
              <SectionCard badge="D" title="Output Types" subtitle="What format does your model produce?" cardStyle={{ height: '304px', padding: '28px 24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={LABEL}>Output Types <Required /></label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 141px)', rowGap: '10px' }}>
                    {OUTPUT_TYPE_OPTIONS.map(opt => (
                      <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', height: '20px' }}>
                        <input type="checkbox" checked={formData.outputTypes.includes(opt)} onChange={() => toggleCheck('outputTypes', opt)}
                          style={{ width: '13px', height: '13px', cursor: 'pointer', accentColor: '#0c857a' }} />
                        <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)' }}>{opt}</span>
                      </label>
                    ))}
                    <label style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', height: '20px' }}>
                      <input type="checkbox" checked={formData.outputTypes.includes('Other')} onChange={() => toggleCheck('outputTypes', 'Other')}
                        style={{ width: '13px', height: '13px', cursor: 'pointer', accentColor: '#0c857a' }} />
                      <span style={{ fontFamily: JB, fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>Other, specify___</span>
                    </label>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <label style={LABEL}>Explanation</label>
                  <textarea value={formData.explanation} onChange={e => set('explanation', e.target.value)} rows={3}
                    placeholder="Describe the output format and how results should be interpreted"
                    style={{ ...INPUT, height: '88px', padding: '8px', resize: 'none' }} />
                </div>
              </SectionCard>

              {/* Step 2 footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', paddingBottom: '32px' }}>
                <button onClick={() => setStep(1)}
                  style={{ ...BTN_SECONDARY, display: 'flex', alignItems: 'center', gap: '4px', width: '98px' }}>
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M11 6.5H3M6 3.5L3 6.5L6 9.5" stroke="rgba(22,22,22,0.85)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Back
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={handleSaveDraft} style={{ ...BTN_SECONDARY, width: '140px' }}>{draftSaved ? 'Saved!' : 'Save Draft'}</button>
                  <button onClick={() => setShowConfirm(true)}
                    style={{ ...BTN_PRIMARY, width: '146px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Submit for Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Confirmation popup */}
      {showConfirm && <SubmitConfirmDialog onCancel={() => setShowConfirm(false)} onConfirm={handleConfirmSubmit} />}
    </div>
  );
}
