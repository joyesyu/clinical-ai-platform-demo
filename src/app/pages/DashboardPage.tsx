import { useState } from 'react';
import { Filter, AlertCircle, CheckCircle, Clock, XCircle, Plus, ChevronDown } from 'lucide-react';
import { Header } from '../components/Header';
import { DeveloperModelCard } from '../components/DeveloperModelCard';
import { RequestsPanel } from '../components/RequestsPanel';
import { RequestDetailsOverlay } from '../components/RequestDetailsOverlay';
import { AddModelButton } from '../components/AddModelButton';
import { ModelUploadModal, ModelSubmissionData } from '../components/ModelUploadModal';
import { models as initialModels, modelRequests, ModelRequest } from '../data/models';
import { useNavigate } from 'react-router';

export function DashboardPage() {
  const navigate = useNavigate();
  const [models, setModels] = useState(initialModels);
  const [showRequestsPanel, setShowRequestsPanel] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<ModelRequest | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [showModelUploadModal, setShowModelUploadModal] = useState(false);
  const [modelSubmissionData, setModelSubmissionData] = useState<ModelSubmissionData | null>(null);
  const [sortBy, setSortBy] = useState<'status' | 'name'>('status');

  const pendingRequestsCount = modelRequests.filter(r => r.status === 'pending').length;

  const needsActionModels = models.filter(m =>
    (m.status === 'review' && m.reviewProgress === 'Needs Revision') ||
    ((m.status === 'active' || m.status === 'in_diagnosis') && (m.openTickets ?? 0) > 0)
  );
  
  // Sort all models based on selected sort option
  const sortedModels = [...models].sort((a, b) => {
    if (sortBy === 'status') {
      const statusOrder = { review: 0, active: 1, in_diagnosis: 1, disabled: 2 };
      const orderA = statusOrder[a.status || 'active'];
      const orderB = statusOrder[b.status || 'active'];
      if (orderA !== orderB) return orderA - orderB;
      // Within same status group, "Needs Revision" comes first
      const aNeedsRevision = a.reviewProgress === 'Needs Revision' ? 0 : 1;
      const bNeedsRevision = b.reviewProgress === 'Needs Revision' ? 0 : 1;
      return aNeedsRevision - bNeedsRevision;
    }
    return a.title.localeCompare(b.title);
  });
  
  const allModels = sortedModels;

  const handleDeleteModel = (modelId: string) => {
    setDeleteConfirmId(modelId);
  };

  const confirmDelete = () => {
    if (deleteConfirmId) {
      setModels(models.filter(m => m.id !== deleteConfirmId));
      setDeleteConfirmId(null);
    }
  };

  const handleRequestClick = (request: ModelRequest) => {
    setSelectedRequest(request);
    setShowRequestsPanel(false);
  };

  const handleApprove = (request: ModelRequest) => {
    setSelectedRequest(null);
    navigate('/developer/generate-endpoint', { state: { request } });
  };

  const handleReject = (request: ModelRequest) => {
    alert(`Request from ${request.requesterName} has been rejected.`);
    setSelectedRequest(null);
  };

  const handleRequestInfo = (request: ModelRequest) => {
    alert(`Request for more information sent to ${request.requesterEmail}`);
    setSelectedRequest(null);
  };

  const handleAddModel = () => {
    setShowModelUploadModal(true);
  };

  const handleModelUpload = (data: ModelSubmissionData) => {
    setModelSubmissionData(data);
    setShowModelUploadModal(false);
    // Show success message
    alert(`Model "${data.modelName}" submitted for review! You'll be notified once the review is complete.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        onNotificationsClick={() => setShowRequestsPanel(true)}
        notificationCount={pendingRequestsCount}
      />

      {/* Main Content */}
      <main className="px-[72px] pt-[40px] pb-[72px]">
        {/* Page Header — left-[72px] top-[96px] (96-56nav=40pt), h-[38px], gap-[8px] */}
        <div className="flex items-center justify-between mb-[40px]">
          <div className="flex items-center gap-[8px]">
            <h1 className="font-bold text-[24px] leading-[32px] text-black">My Models</h1>
            <p className="font-normal text-[18px] leading-[26px] text-[#525252]">
              Manage and monitor your AI models
            </p>
          </div>
          <button
            onClick={handleAddModel}
            className="flex items-center gap-[8px] bg-[#096dd9] text-white rounded-[4px] px-[16px] py-[8px] hover:bg-[#0958b0] transition-colors"
            style={{ boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.1)' }}
          >
            <Plus className="size-[17.5px]" strokeWidth={2.5} />
            <span className="text-[14px] font-medium leading-[21px] whitespace-nowrap">Upload New Model</span>
          </button>
        </div>

        {/* Needs Action Section — top-[174px], flex-col gap-[16px], mb-[32px] to All Models */}
        {needsActionModels.length > 0 && (
          <div className="flex flex-col gap-[16px] mb-[48px]">
            <div className="flex items-center justify-between h-[52px]">
              <div className="flex flex-col gap-[4px]">
                <h2 className="font-semibold text-[18px] leading-[26px] text-[rgba(22,22,22,0.85)]">Needs Action</h2>
                <p className="font-normal text-[14px] leading-[22px] text-[#6f6f6f]">Models in review that require revision</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-x-[16px] gap-y-[16px]">
              {needsActionModels.map((model) => (
                <DeveloperModelCard
                  key={model.id}
                  model={model}
                  onDelete={handleDeleteModel}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Models Section — top-[518px], flex-col gap-[16px] */}
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between h-[52px]">
            <div className="flex flex-col gap-[4px]">
              <h2 className="font-semibold text-[18px] leading-[26px] text-[rgba(22,22,22,0.85)]">All Models</h2>
              <p className="font-normal text-[14px] leading-[22px] text-[#6f6f6f]">Complete overview of all your models</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <p className="font-normal text-[14px] leading-[22px] text-[#6f6f6f]">Sort By</p>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'status' | 'name')}
                  style={{
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    background: 'white',
                    border: '1px solid #d9d9d9',
                    borderRadius: '4px',
                    paddingLeft: '12px',
                    paddingRight: '28px',
                    height: '32px',
                    fontSize: '14px',
                    color: 'rgba(22,22,22,0.85)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="status">Status</option>
                  <option value="name">Name</option>
                </select>
                <ChevronDown style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '12px',
                  height: '12px',
                  color: 'rgba(22,22,22,0.45)',
                  pointerEvents: 'none',
                }} />
              </div>
            </div>
          </div>
          {allModels.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-card border border-border rounded-xl">
              <div className="size-16 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="size-8" style={{ color: 'var(--text-tertiary)' }} />
              </div>
              <h3 className="font-semibold mb-2 text-[16px] text-[rgba(22,22,22,0.85)]">No models</h3>
              <p className="text-[14px] text-[#6f6f6f]">
                Upload your first model to get started
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-x-[16px] gap-y-[16px]">
              {allModels.map((model) => (
                <DeveloperModelCard
                  key={model.id}
                  model={model}
                  onDelete={handleDeleteModel}
                />
              ))}
            </div>
          )}
        </div>
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

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setDeleteConfirmId(null)}
          >
            <div
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-destructive/10 rounded-xl shrink-0">
                  <AlertCircle className="size-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Delete Model?</h3>
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete this model? This action cannot be undone and all associated data will be permanently removed.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-4 bg-destructive text-destructive-foreground rounded-xl font-medium hover:bg-destructive/90 transition-all"
                >
                  Delete Model
                </button>
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 px-4 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-secondary/80 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Model Upload Modal */}
      <ModelUploadModal
        isOpen={showModelUploadModal}
        onClose={() => setShowModelUploadModal(false)}
        onSubmit={handleModelUpload}
      />
    </div>
  );
}