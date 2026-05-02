import { useState } from 'react';
import { ChevronDown, Lock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

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
  manifestEndpoint: '',
  modelName: '',
  taskType: '',
  shortDescription: '',
  ownerName: '',
  ownerEmail: '',
  authMethod: '',
  environment: '',
  headerName: 'Authorization',
  tokenExpiration: '',
  tokenValue: '',
  wsiFormats: [],
  maxFileSize: '',
  ingestionMode: '',
  metadataRequirements: [],
  autoReadMetadata: false,
  typicalRuntime: '',
  timeoutThreshold: '',
  outputTypes: [],
  outputTypesOther: '',
  wsiFormatsOther: '',
  explanation: '',
});

// ─── Shared style constants ───────────────────────────────────────────────────

const LABEL: React.CSSProperties = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22px',
  color: 'rgba(22,22,22,0.85)',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};

const SUB_LABEL: React.CSSProperties = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '20px',
  color: 'rgba(22,22,22,0.85)',
};

const INPUT: React.CSSProperties = {
  width: '100%',
  height: '40px',
  padding: '0 8px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '22px',
  color: 'rgba(22,22,22,0.85)',
  background: 'white',
  border: '1px solid #d9d9d9',
  borderRadius: '4px',
  outline: 'none',
  boxSizing: 'border-box',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Required() {
  return <span style={{ color: '#ff4d4f', fontWeight: 500 }}>*</span>;
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ width: '24.5px', height: '24.5px', borderRadius: '50%', background: '#003a8c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '12px', color: 'white', lineHeight: 1 }}>{label}</span>
    </div>
  );
}

function SectionHeading({ badge, title }: { badge: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
      <SectionBadge label={badge} />
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' }}>
        {title}
      </span>
    </div>
  );
}

function StyledSelect({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder?: string }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...INPUT, paddingRight: '28px', appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', color: value ? 'rgba(22,22,22,0.85)' : 'rgba(0,0,0,0.43)' }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown style={{ position: 'absolute', right: '9px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', color: 'rgba(22,22,22,0.45)', pointerEvents: 'none' }} />
    </div>
  );
}

function CheckboxGroup({ options, selected, onChange, columns = 6, otherValue, onOtherChange }: { options: string[]; selected: string[]; onChange: (v: string[]) => void; columns?: number; otherValue?: string; onOtherChange?: (v: string) => void }) {
  const toggle = (opt: string) => selected.includes(opt) ? onChange(selected.filter(s => s !== opt)) : onChange([...selected, opt]);
  const otherChecked = selected.includes('Other');
  const TEXT: React.CSSProperties = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)', whiteSpace: 'nowrap' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 141px)`, rowGap: '10px' }}>
        {options.map(opt => (
          <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', height: '20px' }}>
            <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} style={{ width: '13px', height: '13px', cursor: 'pointer', flexShrink: 0 }} />
            <span style={TEXT}>{opt}</span>
          </label>
        ))}
        <label style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', height: '20px' }}>
          <input type="checkbox" checked={otherChecked} onChange={() => toggle('Other')} style={{ width: '13px', height: '13px', cursor: 'pointer', flexShrink: 0 }} />
          <span style={TEXT}>Other, specify______</span>
        </label>
      </div>
      {onOtherChange && otherChecked && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ ...TEXT, flexShrink: 0 }}>Specify:</span>
          <input type="text" value={otherValue ?? ''} onChange={e => onOtherChange(e.target.value)} placeholder="Please specify..." style={{ height: '28px', padding: '0 8px', fontFamily: 'Roboto, sans-serif', fontSize: '12px', color: 'rgba(22,22,22,0.85)', background: 'white', border: '1px solid #d9d9d9', borderRadius: '4px', outline: 'none', width: '240px' }} />
        </div>
      )}
    </div>
  );
}

// ─── Button styles ────────────────────────────────────────────────────────────

const BTN_PRIMARY: React.CSSProperties = { width: '140px', height: '40px', background: '#096DD9', border: 'none', borderRadius: '4px', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'white', cursor: 'pointer' };
const BTN_SECONDARY: React.CSSProperties = { width: '140px', height: '40px', background: 'white', border: '1px solid #d9d9d9', borderRadius: '4px', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'rgba(0,0,0,0.85)', cursor: 'pointer' };
const BTN_BACK: React.CSSProperties = { width: '140px', height: '40px', background: '#f5f5f5', border: '1px solid #d9d9d9', borderRadius: '4px', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: '#161616', cursor: 'pointer' };

// ─── Main Component ───────────────────────────────────────────────────────────

export function ModelUploadModal({ isOpen, onClose, onSubmit }: ModelUploadModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [draftSaved, setDraftSaved] = useState(false);
  const [formData, setFormData] = useState<ModelSubmissionData>(EMPTY_FORM());

  if (!isOpen) return null;

  const set = (field: keyof ModelSubmissionData, value: ModelSubmissionData[keyof ModelSubmissionData]) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleTestConnection = async () => {
    if (!formData.manifestEndpoint.trim()) return;
    setConnectionStatus('testing');
    await new Promise(r => setTimeout(r, 1500));
    // Simulate: endpoints starting with "https" succeed, others fail
    const ok = formData.manifestEndpoint.startsWith('https');
    setConnectionStatus(ok ? 'success' : 'error');
    if (ok) setTimeout(() => setStep(2), 800);
  };

  const handleSubmit = () => { onSubmit(formData); handleClose(); };

  const handleClose = () => {
    setFormData(EMPTY_FORM());
    setConnectionStatus('idle');
    setDraftSaved(false);
    setStep(1);
    onClose();
  };

  const handleSaveDraft = () => {
    onSubmit(formData);
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2000);
  };

  const canSubmit = !!(formData.manifestEndpoint && formData.modelName && formData.taskType && formData.shortDescription && formData.ownerName && formData.ownerEmail);

  const FORM_W = 846;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'white', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <div style={{ width: `${FORM_W}px`, textAlign: 'left', paddingTop: '24px', paddingBottom: '24px' }}>
          <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: '32px', color: 'rgba(22,22,22,0.85)' }}>
            Upload New Model
          </div>
          <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '20px', color: '#525252', marginTop: '4px' }}>
            Register your model for platform integration
          </div>
        </div>
        <button
          onClick={handleClose}
          style={{ position: 'absolute', right: '24px', top: '28px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: 'rgba(22,22,22,0.45)' }}
        >
          ✕
        </button>
        {/* Divider constrained to form width */}
        <div style={{ width: `${FORM_W}px`, height: '1px', background: '#d9d9d9' }} />
      </div>

      {/* ── Scrollable Body ─────────────────────────────────────────────────── */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingTop: '24px' }}>
        <div style={{ width: `${FORM_W}px`, display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '24px' }}>

          {step === 1 ? (
            <>
              {/* ── Step 1: Basic Information ─────────────────────────────── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>
                  Basic Information
                </span>

                {/* Model Name + Task Type */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={LABEL}>Model Name <Required /></label>
                    <input type="text" value={formData.modelName} onChange={e => set('modelName', e.target.value)} placeholder="PathologyAI Classifier v2.1" style={INPUT} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={LABEL}>Task Type <Required /></label>
                    <StyledSelect value={formData.taskType} onChange={v => set('taskType', v)} options={TASK_TYPES} placeholder="Select task type" />
                  </div>
                </div>

                {/* Short Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={LABEL}>Short Description <Required /></label>
                  <textarea value={formData.shortDescription} onChange={e => set('shortDescription', e.target.value)} rows={3} placeholder="1-2 sentences describing the clinical use case" style={{ ...INPUT, height: '88px', padding: '8px', resize: 'none' }} />
                </div>

                {/* Owner Name + Owner Email */}
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

              {/* ── Connect to Manifest ───────────────────────────────────── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>
                  Connect to Manifest
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={LABEL}>Manifest Endpoint (GET) <Required /></label>
                  <input
                    type="text"
                    value={formData.manifestEndpoint}
                    onChange={e => { set('manifestEndpoint', e.target.value); setConnectionStatus('idle'); }}
                    placeholder="https://api.yourmodel.com/manifest"
                    style={{ ...INPUT, borderColor: connectionStatus === 'error' ? '#ff4d4f' : '#d9d9d9' }}
                  />

                  {/* Connection status feedback */}
                  {connectionStatus === 'success' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 12px', background: 'rgba(82,196,26,0.08)', border: '1px solid rgba(82,196,26,0.2)', borderRadius: '4px' }}>
                      <CheckCircle style={{ width: '14px', height: '14px', color: '#135200', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', color: '#135200' }}>Connection successful! Redirecting to next step…</span>
                    </div>
                  )}
                  {connectionStatus === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 12px', background: 'rgba(255,77,79,0.06)', border: '1px solid rgba(255,77,79,0.3)', borderRadius: '4px' }}>
                      <AlertCircle style={{ width: '14px', height: '14px', color: '#dc1111', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', color: '#dc1111' }}>Connection failed. Please check the endpoint URL and try again.</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* ── Step 2: Technical Details ─────────────────────────────── */}

              {/* Section A */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <SectionHeading badge="A" title="Manifest Connection & Authentication" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <label style={LABEL}>Manifest Endpoint <Required /></label>
                  <input type="text" value={formData.manifestEndpoint} onChange={e => set('manifestEndpoint', e.target.value)} placeholder="https://api.yourmodel.com/manifest" style={INPUT} />
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Authentication Method <Required /></label>
                    <StyledSelect value={formData.authMethod} onChange={v => set('authMethod', v)} options={AUTH_METHODS} placeholder="Select method" />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={{ ...LABEL }}><span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '22px', color: 'rgba(22,22,22,0.85)' }}>Environment / Region</span></label>
                    <StyledSelect value={formData.environment} onChange={v => set('environment', v)} options={ENVIRONMENTS} placeholder="Select environment" />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={SUB_LABEL}>Header Name</label>
                    <input type="text" value={formData.headerName} onChange={e => set('headerName', e.target.value)} style={INPUT} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={SUB_LABEL}>Token Expiration / Rotation</label>
                    <input type="text" value={formData.tokenExpiration} onChange={e => set('tokenExpiration', e.target.value)} placeholder="e.g., 90 days, never" style={INPUT} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <label style={SUB_LABEL}>Token Value</label>
                    <Lock style={{ width: '12px', height: '12px', color: 'rgba(0,0,0,0.43)' }} />
                  </div>
                  <input type="password" value={formData.tokenValue} onChange={e => set('tokenValue', e.target.value)} placeholder="Enter token value" style={INPUT} />
                </div>
              </div>

              {/* Section B */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <SectionHeading badge="B" title="Input Data Constraints" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10.5px' }}>
                  <label style={LABEL}>Supported WSI Formats <Required /></label>
                  <CheckboxGroup options={WSI_FORMAT_OPTIONS} selected={formData.wsiFormats} onChange={v => set('wsiFormats', v)} columns={6} otherValue={formData.wsiFormatsOther} onOtherChange={v => set('wsiFormatsOther', v)} />
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Maximum File Size</label>
                    <input type="text" value={formData.maxFileSize} onChange={e => set('maxFileSize', e.target.value)} style={INPUT} />
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
                        <input type="checkbox" checked={formData.metadataRequirements.includes(opt)} onChange={() => { const cur = formData.metadataRequirements; set('metadataRequirements', cur.includes(opt) ? cur.filter(s => s !== opt) : [...cur, opt]); }} style={{ width: '13px', height: '13px', cursor: 'pointer' }} />
                        <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px', lineHeight: '20px', color: 'rgba(22,22,22,0.85)' }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section C */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <SectionHeading badge="C" title="Runtime Behavior" />
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Typical Runtime</label>
                    <input type="text" value={formData.typicalRuntime} onChange={e => set('typicalRuntime', e.target.value)} style={INPUT} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={LABEL}>Timeout Threshold</label>
                    <input type="text" value={formData.timeoutThreshold} onChange={e => set('timeoutThreshold', e.target.value)} style={INPUT} />
                  </div>
                </div>
              </div>

              {/* Section D */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <SectionHeading badge="D" title="Output Types" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10.5px' }}>
                  <label style={LABEL}>Output Types <Required /></label>
                  <CheckboxGroup options={OUTPUT_TYPE_OPTIONS} selected={formData.outputTypes} onChange={v => set('outputTypes', v)} columns={6} otherValue={formData.outputTypesOther} onOtherChange={v => set('outputTypesOther', v)} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <label style={LABEL}>Explanation</label>
                  <textarea value={formData.explanation} onChange={e => set('explanation', e.target.value)} rows={3} placeholder="Describe the output format and how results should be interpreted" style={{ ...INPUT, height: '88px', padding: '8px', resize: 'none' }} />
                </div>
              </div>

              {/* Step 2 buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '24px' }}>
                <button onClick={() => setStep(1)} style={BTN_BACK}>Back</button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button onClick={handleSubmit} disabled={!canSubmit} style={{ ...BTN_PRIMARY, opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? 'pointer' : 'not-allowed' }}>
                    Submit for Review
                  </button>
                  <button onClick={handleSaveDraft} style={BTN_SECONDARY}>
                    {draftSaved ? 'Saved!' : 'Save Draft'}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Step 1 buttons */}
          {step === 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', paddingBottom: '24px' }}>
              <button
                onClick={handleTestConnection}
                disabled={!formData.manifestEndpoint.trim() || connectionStatus === 'testing'}
                style={{
                  ...BTN_PRIMARY,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  opacity: !formData.manifestEndpoint.trim() ? 0.5 : 1,
                  cursor: !formData.manifestEndpoint.trim() || connectionStatus === 'testing' ? 'not-allowed' : 'pointer',
                }}
              >
                {connectionStatus === 'testing' && <Loader2 style={{ width: '14px', height: '14px' }} className="animate-spin" />}
                {connectionStatus === 'testing' ? 'Testing…' : 'Test Connection'}
              </button>
              <button onClick={handleSaveDraft} style={BTN_SECONDARY}>
                {draftSaved ? 'Saved!' : 'Save Draft'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
