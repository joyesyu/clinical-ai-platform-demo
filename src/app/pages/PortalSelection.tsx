import { Link } from "react-router";

export default function PortalSelection() {
  return (
    <div className="bg-background relative min-h-screen w-full flex items-center justify-center p-[28px]">
      <div className="max-w-[1000px] w-full">
        <div className="text-center mb-[42px]">
          <h1 className="text-foreground mb-[14px]">
            MedicalAI Platform
          </h1>
          <p className="text-muted-foreground">
            Select your portal to continue
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[28px] max-w-[900px] mx-auto">
          {/* Developer Portal */}
          <Link
            to="/developer/models"
            className="bg-card border border-border rounded-[14px] p-[42px] hover:shadow-[var(--elevation-sm)] transition-all group"
          >
            <div className="size-[56px] bg-primary/10 rounded-[var(--radius)] flex items-center justify-center mb-[21px] group-hover:bg-primary/20 transition-colors">
              <svg className="size-[28px]" viewBox="0 0 24 24" fill="none">
                <path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H21" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-foreground mb-[10.5px]">
              Developer Portal
            </h2>
            <p className="text-muted-foreground mb-[21px]">
              Upload and manage AI diagnostic models, monitor performance metrics, and handle access requests from pathologists.
            </p>
            <div className="flex flex-wrap gap-[7px]">
              <div className="bg-muted/20 border border-border rounded-[var(--radius-badge)] px-[10.5px] py-[3.5px]">
                <label className="text-muted-foreground text-[10.5px]">Model Management</label>
              </div>
              <div className="bg-muted/20 border border-border rounded-[var(--radius-badge)] px-[10.5px] py-[3.5px]">
                <label className="text-muted-foreground text-[10.5px]">Performance Monitoring</label>
              </div>
              <div className="bg-muted/20 border border-border rounded-[var(--radius-badge)] px-[10.5px] py-[3.5px]">
                <label className="text-muted-foreground text-[10.5px]">Access Control</label>
              </div>
            </div>
          </Link>

          {/* Pathologist Portal */}
          <Link
            to="/pathologist/marketplace"
            className="bg-card border border-border rounded-[14px] p-[42px] hover:shadow-[var(--elevation-sm)] transition-all group"
          >
            <div className="size-[56px] bg-primary/10 rounded-[var(--radius)] flex items-center justify-center mb-[21px] group-hover:bg-primary/20 transition-colors">
              <svg className="size-[28px]" viewBox="0 0 24 24" fill="none">
                <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-foreground mb-[10.5px]">
              Pathologist Portal
            </h2>
            <p className="text-muted-foreground mb-[21px]">
              Access AI diagnostic models, run analyses on patient samples, and review model outputs to support clinical decision-making.
            </p>
            <div className="flex flex-wrap gap-[7px]">
              <div className="bg-muted/20 border border-border rounded-[var(--radius-badge)] px-[10.5px] py-[3.5px]">
                <label className="text-muted-foreground text-[10.5px]">Model Marketplace</label>
              </div>
              <div className="bg-muted/20 border border-border rounded-[var(--radius-badge)] px-[10.5px] py-[3.5px]">
                <label className="text-muted-foreground text-[10.5px]">Diagnostic Tools</label>
              </div>
              <div className="bg-muted/20 border border-border rounded-[var(--radius-badge)] px-[10.5px] py-[3.5px]">
                <label className="text-muted-foreground text-[10.5px]">Case Management</label>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-[42px]">
          <p className="text-muted-foreground text-sm">
            Need help? Contact support at support@medicalai.com
          </p>
        </div>
      </div>
    </div>
  );
}
