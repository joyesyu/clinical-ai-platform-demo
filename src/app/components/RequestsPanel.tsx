import { X, Clock, Building2, Mail } from 'lucide-react';
import { ModelRequest } from '../data/models';

interface RequestsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  requests: ModelRequest[];
  onRequestClick: (request: ModelRequest) => void;
}

export function RequestsPanel({ isOpen, onClose, requests, onRequestClick }: RequestsPanelProps) {
  if (!isOpen) return null;

  const pendingRequests = requests.filter(r => r.status === 'pending');

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-foreground text-[24px]">Model Access Requests</h2>
            <button
              onClick={onClose}
              className="size-9 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="size-5 text-muted-foreground" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground text-[#161616a6]">
            {pendingRequests.length} pending {pendingRequests.length === 1 ? 'request' : 'requests'}
          </p>
        </div>

        {/* Requests List */}
        <div className="flex-1 overflow-y-auto">
          {pendingRequests.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="size-16 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <Mail className="size-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">No pending requests</p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {pendingRequests.map((request) => (
                <button
                  key={request.id}
                  onClick={() => onRequestClick(request)}
                  className="w-full text-left p-4 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  {/* Model Name */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-[14px] font-semibold text-[#161616] group-hover:text-[#2f54eb] transition-colors line-clamp-1">
                      {request.modelName}
                    </h3>
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 text-[12px] font-medium rounded border border-amber-500/20 shrink-0">
                      New
                    </span>
                  </div>

                  {/* Requester Info */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-[12px] text-[#6F6F6F]">
                      <Building2 className="size-3.5 shrink-0" />
                      <span className="truncate">{request.requesterOrganization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-[#6F6F6F]">
                      <Mail className="size-3.5 shrink-0" />
                      <span className="truncate">{request.requesterEmail}</span>
                    </div>
                  </div>

                  {/* Use Case Preview */}
                  <p className="text-[12px] text-[#6F6F6F] line-clamp-2 mb-3">
                    {request.useCase}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-[12px] text-[#6F6F6F]">
                      <Clock className="size-3.5" />
                      <span>{new Date(request.requestedDate).toLocaleDateString()}</span>
                    </div>
                    <span className="text-[12px] font-medium text-[#2f54eb] group-hover:underline">
                      Review →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}