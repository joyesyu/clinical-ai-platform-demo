import { useState } from "react";

interface RequestAccessModalProps {
  modelName: string;
  onClose: () => void;
  onSubmit: (data: RequestData) => void;
}

interface RequestData {
  caseVolume: string;
  startDate: string;
  endDate: string;
  purpose: string;
  institution: string;
}

export function RequestAccessModal({ modelName, onClose, onSubmit }: RequestAccessModalProps) {
  const [formData, setFormData] = useState<RequestData>({
    caseVolume: '',
    startDate: '',
    endDate: '',
    purpose: '',
    institution: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-[28px]" onClick={onClose}>
      <div 
        className="bg-card border border-border rounded-[var(--radius-card)] w-full max-w-[600px] max-h-[90vh] overflow-auto shadow-[var(--elevation-sm)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-[24px]">
          <div className="mb-[24px]">
            <h2 className="text-foreground mb-[8px]">
              Request Access
            </h2>
            <p className="text-muted-foreground">
              Request access to <span className="text-foreground font-medium">{modelName}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-[24px]">
            <div>
              <label className="text-foreground block mb-[8px]">
                Case Volume *
              </label>
              <input
                type="number"
                required
                value={formData.caseVolume}
                onChange={(e) => setFormData({ ...formData, caseVolume: e.target.value })}
                className="w-full bg-input-background border border-border rounded-[var(--radius-button)] px-[16px] h-[36px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="How many cases do you plan to run?"
              />
            </div>

            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <label className="text-foreground block mb-[8px]">
                  Start Date *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full bg-input-background border border-border rounded-[var(--radius-button)] px-[16px] h-[36px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-foreground block mb-[8px]">
                  End Date *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full bg-input-background border border-border rounded-[var(--radius-button)] px-[16px] h-[36px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="text-foreground block mb-[8px]">
                Intended Use / Purpose *
              </label>
              <textarea
                required
                rows={4}
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full bg-input-background border border-border rounded-[var(--radius-button)] px-[16px] py-[12px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px]"
                placeholder="Describe how you intend to use this model..."
              />
            </div>

            <div>
              <label className="text-foreground block mb-[8px]">
                Institution / Site *
              </label>
              <input
                type="text"
                required
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="w-full bg-input-background border border-border rounded-[var(--radius-button)] px-[16px] h-[36px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your institution name"
              />
            </div>

            <div className="flex gap-[16px] pt-[8px]">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-secondary text-secondary-foreground border border-border rounded-[var(--radius-button)] h-[36px] hover:bg-muted/10 transition-colors"
              >
                <label className="cursor-pointer font-medium">Cancel</label>
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground rounded-[var(--radius-button)] h-[36px] hover:opacity-90 transition-opacity shadow-[var(--elevation-sm)]"
              >
                <label className="cursor-pointer font-medium">Submit Request</label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}