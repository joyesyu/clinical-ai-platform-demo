import { Link } from "react-router";
import { PathologistHeader } from "../../components/pathologist/PathologistHeader";
import { Clock } from "lucide-react";

// Mock data - pending/requested models
const requestedModels = [
  {
    id: "pneumoscan",
    name: "PneumoScan Detector",
    taskType: "Detection",
    tags: ["Lung tissue", "CT scan", "Chest imaging"],
    requestStatus: "Pending",
    requestDate: "2026-03-15",
    estimatedResponse: "2-3 business days",
    requestDetails: {
      purpose: "Clinical diagnosis support for pneumonia detection in hospitalized patients",
      startDate: "2026-04-01",
      endDate: "2026-09-30",
      casesPerDay: 8,
      institution: "Stanford Medical Center",
      numberOfUsers: 8
    }
  },
  {
    id: "breastpath",
    name: "BreastPath Analyzer",
    taskType: "Segmentation",
    tags: ["Breast tissue", "H&E stain", "WSI", "Core biopsy"],
    requestStatus: "Under Review",
    requestDate: "2026-03-12",
    estimatedResponse: "1-2 business days",
    requestDetails: {
      purpose: "Research and clinical validation for breast cancer diagnosis",
      startDate: "2026-03-20",
      endDate: "2026-12-31",
      casesPerDay: 12,
      institution: "Johns Hopkins Pathology Lab",
      numberOfUsers: 12
    }
  },
];

export default function PathologistUpdates() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return { bg: "bg-[rgba(250,173,20,0.1)]", text: "#faad14" };
      case "Under Review":
        return { bg: "bg-[rgba(24,144,255,0.1)]", text: "#1890ff" };
      case "Approved":
        return { bg: "bg-[rgba(82,196,26,0.1)]", text: "#52c41a" };
      default:
        return { bg: "bg-[rgba(0,0,0,0.04)]", text: "#6F6F6F" };
    }
  };

  console.log("Rendering Updates page with", requestedModels.length, "models");

  return (
    <div className="bg-[#fafafa] relative min-h-screen w-full">
      <PathologistHeader />
      
      <div style={{ paddingTop: '84px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '96px' }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 className="font-['Roboto']" style={{ fontSize: '24px', fontWeight: 500, lineHeight: '32px', color: '#000000', marginBottom: '8px' }}>
              Updates
            </h1>
            <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#525252' }}>
              Track your model access requests and their approval status
            </p>
          </div>

          {/* Request Cards */}
          <div className="grid grid-cols-2" style={{ gap: '16px' }}>
            {requestedModels.map((model) => {
              const statusColors = getStatusColor(model.requestStatus);
              return (
                <div 
                  key={model.id}
                  className="bg-card border border-border rounded-[8px] overflow-hidden hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-200"
                >
                  <div style={{ padding: '24px' }}>
                    {/* Header Section */}
                    <div className="flex items-start justify-between" style={{ margin: '0px 0px 16px 0px', gap: '16px' }}>
                      <div className="flex-1">
                        <div className="flex items-center" style={{ gap: '12px', margin: '0px 0px 16px 0px' }}>
                          <h3 className="font-['Roboto']" style={{ fontSize: '18px', fontWeight: 500, lineHeight: '26px', color: '#000000' }}>
                            {model.name}
                          </h3>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap" style={{ gap: '8px' }}>
                          {model.tags.map((tag, index) => (
                            <div key={index} className="inline-flex items-center bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.08)] rounded-[4px]" style={{ padding: '2px 8px' }}>
                              <span style={{ fontSize: '12px', lineHeight: '20px', color: '#6F6F6F', fontFamily: "'Roboto Mono', monospace" }}>
                                {tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <span className="font-['Roboto']" style={{ fontSize: '14px', fontWeight: 500, color: '#161616' }}>
                        {model.requestStatus}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-[rgba(0,0,0,0.06)]" style={{ margin: '0px 0px 12px 0px' }} />

                    {/* Request Information Grid */}
                    <div style={{ margin: '0px 0px 12px 0px' }}>
                      {/* Purpose */}
                      <div style={{ marginBottom: '20px' }}>
                        <label className="block font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, color: '#6F6F6F', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Request Purpose
                        </label>
                        <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616' }}>
                          {model.requestDetails.purpose}
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-3" style={{ gap: '24px' }}>
                        <div>
                          <label className="block font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, color: '#6F6F6F', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Institution
                          </label>
                          <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616', fontWeight: 500 }}>
                            {model.requestDetails.institution}
                          </p>
                        </div>

                        <div>
                          <label className="block font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, color: '#6F6F6F', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Usage Period
                          </label>
                          <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616' }}>
                            {new Date(model.requestDetails.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - {new Date(model.requestDetails.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>

                        <div>
                          <label className="block font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, color: '#6F6F6F', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Requested On
                          </label>
                          <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616' }}>
                            {new Date(model.requestDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>

                      {/* Second Row */}
                      <div className="grid grid-cols-3" style={{ gap: '24px', marginTop: '20px' }}>
                        <div>
                          <label className="block font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, color: '#6F6F6F', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Cases Per Day
                          </label>
                          <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616', fontWeight: 500 }}>
                            {model.requestDetails.casesPerDay.toLocaleString()}
                          </p>
                        </div>

                        <div>
                          <label className="block font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, color: '#6F6F6F', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Number of Users
                          </label>
                          <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616', fontWeight: 500 }}>
                            {model.requestDetails.numberOfUsers}
                          </p>
                        </div>

                        <div>
                          <label className="block font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, color: '#6F6F6F', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Expected Response
                          </label>
                          <div className="flex items-center" style={{ gap: '6px' }}>
                            <Clock style={{ width: '14px', height: '14px', color: '#6F6F6F' }} />
                            <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616' }}>
                              {model.estimatedResponse}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    

                    {/* Action Button */}
                    <div className="flex justify-end mx-[0px] mt-[20px] mb-[0px]">
                      <button className="bg-white border border-border rounded-[4px] hover:bg-[rgba(0,0,0,0.02)] hover:border-[rgba(0,0,0,0.15)] transition-all duration-200 font-['Roboto']" style={{ fontSize: '14px', fontWeight: 500, color: '#161616', height: '36px', padding: '0 20px' }}>
                        Edit Request
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {requestedModels.length === 0 && (
            <div className="bg-card border border-border rounded-[8px] text-center" style={{ padding: '64px' }}>
              <div className="max-w-[400px] mx-auto">
                <div className="rounded-full bg-[rgba(0,0,0,0.04)] mx-auto flex items-center justify-center" style={{ width: '64px', height: '64px', marginBottom: '16px' }}>
                  <Clock style={{ width: '32px', height: '32px', color: 'rgba(0,0,0,0.25)' }} />
                </div>
                <p className="font-['Roboto']" style={{ fontSize: '16px', fontWeight: 500, color: '#161616', marginBottom: '8px' }}>
                  No pending requests
                </p>
                <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#525252', marginBottom: '24px' }}>
                  You don't have any model access requests pending approval
                </p>
                <Link 
                  to="/pathologist/marketplace"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-[4px] hover:bg-[#096dd9] transition-all duration-200 shadow-[0_2px_8px_rgba(24,144,255,0.2)] hover:shadow-[0_4px_12px_rgba(24,144,255,0.3)] font-['Roboto']"
                  style={{ fontSize: '14px', fontWeight: 500, height: '36px', padding: '0 20px' }}
                >
                  Browse Marketplace
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}