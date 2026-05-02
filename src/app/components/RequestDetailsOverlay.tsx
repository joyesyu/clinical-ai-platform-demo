import { X, User, Building2, Mail, Target, TrendingUp, Calendar, FileText, CheckCircle, XCircle, MessageSquare, Clock } from 'lucide-react';
import { ModelRequest } from '../data/models';

interface RequestDetailsOverlayProps {
  request: ModelRequest | null;
  onClose: () => void;
  onApprove: (request: ModelRequest) => void;
  onReject: (request: ModelRequest) => void;
  onRequestInfo: (request: ModelRequest) => void;
}

export function RequestDetailsOverlay({
  request,
  onClose,
  onApprove,
  onReject,
  onRequestInfo,
}: RequestDetailsOverlayProps) {
  if (!request) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-border bg-secondary/20">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Model Access Request
                </h2>
                <p className="text-sm text-muted-foreground">
                  Review the details and approve or reject this request
                </p>
              </div>
              <button
                onClick={onClose}
                className="size-9 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors shrink-0"
              >
                <X className="size-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Model Info */}
            <div className="border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                
                <h3 className="text-[12px] font-medium text-[#6F6F6F] uppercase tracking-wide">
                  Requested Model
                </h3>
              </div>
              <p className="text-[18px] font-semibold text-[#161616]">
                {request.modelName}
              </p>
            </div>

            {/* Requester Information */}
            <div>
              <h3 className="text-[14px] font-semibold text-[#161616] mb-4 flex items-center gap-2">
                <User className="size-4 text-[#2f54eb]" />
                Requester Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-[12px] font-medium text-[#6F6F6F] uppercase tracking-wide mb-2">
                    Name
                  </p>
                  <p className="text-[14px] font-medium text-[#161616]">{request.requesterName}</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-[12px] font-medium text-[#6F6F6F] uppercase tracking-wide mb-2">
                    Organization
                  </p>
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-[#6F6F6F]" />
                    <p className="text-[14px] font-medium text-[#161616]">{request.requesterOrganization}</p>
                  </div>
                </div>
                <div className="col-span-2 bg-background border border-border rounded-xl p-4">
                  <p className="text-[12px] font-medium text-[#6F6F6F] uppercase tracking-wide mb-2">
                    Email
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-[#6F6F6F]" />
                    <p className="text-[14px] font-medium text-[#161616]">{request.requesterEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Case */}
            <div>
              <h3 className="text-[14px] font-semibold text-[#161616] mb-3 flex items-center gap-2">
                <FileText className="size-4 text-[#2f54eb]" />
                Intended Use Case
              </h3>
              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-[14px] text-[#161616] leading-relaxed">
                  {request.useCase}
                </p>
              </div>
            </div>

            {/* Usage Details */}
            <div>
              <h3 className="text-[14px] font-semibold text-[#161616] mb-4 flex items-center gap-2">
                <TrendingUp className="size-4 text-[#2f54eb]" />
                Usage Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-[12px] font-medium text-[#6F6F6F] uppercase tracking-wide mb-2">
                    Estimated Cases
                  </p>
                  <p className="text-[14px] font-medium text-[#161616]">{request.estimatedCases}</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-[12px] font-medium text-[#6F6F6F] uppercase tracking-wide mb-2">
                    Time Window
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-[#6F6F6F]" />
                      <p className="text-[14px] font-medium text-[#161616]">
                        Start: {new Date(request.usageStartDate).toLocaleDateString()}
                      </p>
                    </div>
                    {(request.usageEndDate || request.usageDuration) && (
                      <div className="flex items-center gap-2">
                        <Clock className="size-4 text-[#6F6F6F]" />
                        <p className="text-[14px] font-medium text-[#161616]">
                          {request.usageEndDate 
                            ? `End: ${new Date(request.usageEndDate).toLocaleDateString()}` 
                            : `Duration: ${request.usageDuration}`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            {request.additionalNotes && (
              <div>
                <h3 className="text-[14px] font-semibold text-[#161616] mb-3 flex items-center gap-2">
                  <MessageSquare className="size-4 text-[#2f54eb]" />
                  Additional Notes
                </h3>
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-[14px] text-[#6F6F6F] leading-relaxed">
                    {request.additionalNotes}
                  </p>
                </div>
              </div>
            )}

            {/* Request Date */}
            <div className="bg-secondary/20 border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-[14px] text-[#6F6F6F]">
                <Calendar className="size-4" />
                <span>
                  Request submitted on {new Date(request.requestedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 border-t border-border bg-secondary/20">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onApprove(request)}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <CheckCircle className="size-5" />
                Approve Request
              </button>
              <button
                onClick={() => onRequestInfo(request)}
                className="px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="size-5" />
                Request Info
              </button>
              <button
                onClick={() => onReject(request)}
                className="px-6 py-3 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl font-medium hover:bg-destructive/20 transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="size-5" />
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}