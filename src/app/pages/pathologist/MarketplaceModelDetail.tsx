import { Link, useParams } from "react-router";
import { PathologistHeader } from "../../components/pathologist/PathologistHeader";
import svgPaths from "../../../imports/svg-atc68vt8ou";
import svgPathsBack from "../../../imports/svg-3josgn8b02";
import svgPathsWarning from "../../../imports/svg-xq01ymuhp7";
import { useState } from "react";
import { RequestAccessModal } from "../../components/pathologist/RequestAccessModal";
import { ModelAccessRequestModal } from "../../components/pathologist/ModelAccessRequestModal";
import { ROCCurveChart } from "../../components/pathologist/ROCCurveChart";
import { ModelTestPanel } from "../../components/pathologist/ModelTestPanel";
import { ModelOverviewSection } from "../../components/pathologist/ModelOverviewSection";
import { ClinicalWorkflowSection } from "../../components/pathologist/ClinicalWorkflowSection";
import { EvidencePerformanceSection } from "../../components/pathologist/EvidencePerformanceSection";
import { TestModelSection } from "../../components/pathologist/TestModelSection";
import { TechnicalCompatibilitySection } from "../../components/pathologist/TechnicalCompatibilitySection";
import { DocumentationResourcesSection } from "../../components/pathologist/DocumentationResourcesSection";

// Mock model data - would come from API in production
const modelDatabase: Record<string, any> = {
  deepcolon: {
    id: "deepcolon",
    name: "DeepColon Prognosticator",
    version: "v2.1.3",
    status: "Active",
    taskType: "Classification",
    tags: ["Classification", "Skin", "H&E", "Digital Pathology"],
    applicabilityTags: ["Colon tissue", "H&E stain", "WSI", "Biopsy"],
    clinicalUse: "Predict the prognosis of colon cancer from biopsy images, helping oncologists tailor treatment plans.",
    clinicalProblem: "Automated detection and classification of melanoma in digital pathology slides to assist pathologists in early cancer diagnosis and reduce screening time.",
    applicableScenarios: [
      "Primary screening of dermatopathology specimens",
      "Second opinion and quality assurance workflows",
      "High-volume screening programs requiring prioritization"
    ],
    requiredInput: "High-resolution whole slide images (WSI) in standard formats (DICOM, SVS, NDPI)",
    output: "Classification score (0-1) with heatmap overlay indicating areas of concern",
    performance: {
      accuracy: "94%",
      sensitivity: "92%",
      specificity: "98%",
      precision: "0.87",
      validationDataset: "5,000 / 1,385",
      studyPeriod: "2018-2020",
      peerReviewed: "Yes"
    },
    clinicalWorkflow: {
      useCases: [
        { title: "Screening", subtitle: "First-pass triage" },
        { title: "Assist", subtitle: "Decision support" },
        { title: "QA", subtitle: "Quality assurance" }
      ],
      interpretOutputs: [
        {
          title: "Score (0.0 - 1.0)",
          description: "Higher scores indicate higher likelihood of malignancy. Scores above 0.7 suggest high suspicion and should be prioritized for expert review."
        },
        {
          title: "Heatmap Overlay",
          description: "Red/warm colors indicate regions where the model detected suspicious features. Use these to guide your microscopic examination."
        }
      ],
      operatingModes: [
        {
          title: "Sensitivity-Focused",
          description: "Minimizes false negatives. Use for screening where catching all potential cases is critical, even if it means more false alarms.",
          recommendation: "→ Recommended for screening workflows",
          color: "green"
        },
        {
          title: "Specificity-Focused",
          description: "Reduces false positives. Use when you want higher confidence in positive predictions, accepting some cases might be missed.",
          recommendation: "→ Recommended for confirmatory use",
          color: "blue"
        }
      ]
    },
    technicalSpecs: {
      inputImageFormat: "TIFF, SVS, NDPI",
      imageResolution: "Minimum 20x magnification",
      hardwareRequirements: "GPU with minimum 8GB VRAM recommended for optimal performance",
      softwareIntegration: "REST API, DICOM integration available"
    },
    limitations: {
      sampleTypes: "Only validated for H&E stained colorectal adenocarcinoma specimens",
      exclusions: "Not suitable for analysis of non-neoplastic tissue, poorly differentiated tumors, or specimens with significant artifact"
    },
    notUseFor: [
      "Standalone diagnosis without pathologist review",
      "Non-colorectal tissue types (trained on colon specimens only)",
      "Frozen sections or non-H&E stained specimens",
      "Pediatric cases (validated on adult population only)"
    ],
    documentation: [
      { title: "User Guide and Best Practices", link: "#" },
      { title: "Clinical Validation Study (2020)", link: "#" },
      { title: "Technical Architecture Whitepaper", link: "#" }
    ],
    references: [
      "Smith et al. (2020) - Deep learning prognostication in colorectal cancer. Journal of Pathology Informatics.",
      "Lee & Park (2019) - AI-based risk stratification from WSI. Nature Medicine."
    ]
  },
  retinacheck: {
    id: "retinacheck",
    name: "RetinaCheck AI",
    version: "v1.8.0",
    status: "Active",
    taskType: "Detection",
    tags: ["Detection", "Retinal tissue", "Fundus imaging"],
    applicabilityTags: ["Retinal tissue", "Fundus imaging", "Color photography"],
    clinicalUse: "Detects early signs of diabetic retinopathy from retinal images, aiding in prevention of blindness.",
    clinicalProblem: "Automated detection of diabetic retinopathy in fundus photographs to enable early intervention and prevent vision loss in diabetic patients.",
    applicableScenarios: [
      "Primary screening in ophthalmology clinics",
      "Diabetic patient monitoring programs",
      "Telemedicine screening workflows"
    ],
    requiredInput: "Color fundus photographs (JPEG, PNG, DICOM format)",
    output: "DR severity grade (None, Mild, Moderate, Severe, Proliferative) with lesion heatmap",
    performance: {
      accuracy: "96%",
      sensitivity: "94%",
      specificity: "97%",
      precision: "0.91",
      validationDataset: "8,000 / 2,100",
      studyPeriod: "2019-2021",
      peerReviewed: "Yes"
    },
    clinicalWorkflow: {
      useCases: [
        { title: "Screening", subtitle: "First-pass triage" },
        { title: "Assist", subtitle: "Decision support" },
        { title: "QA", subtitle: "Quality assurance" }
      ],
      interpretOutputs: [
        {
          title: "Severity Grade",
          description: "Model classifies retinopathy severity from None to Proliferative. Moderate and above require ophthalmologist referral."
        },
        {
          title: "Lesion Heatmap",
          description: "Highlighted regions show detected microaneurysms, hemorrhages, and exudates to guide clinical examination."
        }
      ],
      operatingModes: [
        {
          title: "Sensitivity-Focused",
          description: "Minimizes false negatives. Use for screening where catching all potential cases is critical, even if it means more false alarms.",
          recommendation: "→ Recommended for screening workflows",
          color: "green"
        },
        {
          title: "Specificity-Focused",
          description: "Reduces false positives. Use when you want higher confidence in positive predictions, accepting some cases might be missed.",
          recommendation: "→ Recommended for confirmatory use",
          color: "blue"
        }
      ]
    },
    technicalSpecs: {
      inputImageFormat: "JPEG, PNG, DICOM",
      imageResolution: "Minimum 1024x1024 pixels",
      hardwareRequirements: "CPU-based inference supported, GPU recommended for batch processing",
      softwareIntegration: "REST API, HL7/FHIR compatible"
    },
    limitations: {
      sampleTypes: "Validated only for standard 45-degree fundus photographs",
      exclusions: "May not perform optimally with poor quality images, media opacities, or other retinal pathologies"
    },
    notUseFor: [
      "Standalone diagnosis without ophthalmologist review",
      "Non-diabetic retinopathies (trained on diabetic retinopathy only)",
      "Ultra-widefield or narrow-angle fundus images",
      "Pediatric cases (validated on adult population only)"
    ],
    documentation: [
      { title: "Screening Protocol Guide", link: "#" },
      { title: "Multi-center Validation Study", link: "#" },
      { title: "Integration Manual", link: "#" }
    ],
    references: [
      "Johnson et al. (2021) - Automated diabetic retinopathy detection using deep learning. Ophthalmology.",
      "Chen et al. (2020) - Performance evaluation in diverse populations. JAMA Ophthalmology."
    ]
  },
  pneumoscan: {
    id: "pneumoscan",
    name: "PneumoScan Detector",
    version: "v3.0.2",
    status: "Active",
    taskType: "Detection",
    tags: ["Detection", "Lung tissue", "X-Ray", "CT"],
    applicabilityTags: ["Lung tissue", "X-Ray", "CT scan", "Chest imaging"],
    clinicalUse: "Identifies pneumonia patterns in chest X-rays with high accuracy, supporting rapid diagnosis.",
    clinicalProblem: "Automated pneumonia detection in chest radiographs to enable faster triage and treatment initiation in emergency settings.",
    applicableScenarios: [
      "Emergency department triage",
      "Primary care screening",
      "Radiology workflow prioritization"
    ],
    requiredInput: "Chest X-ray images - PA or AP views (DICOM, PNG, JPEG)",
    output: "Binary classification (Pneumonia/No Pneumonia) with confidence score and region highlighting",
    performance: {
      accuracy: "95%",
      sensitivity: "93%",
      specificity: "96%",
      precision: "0.89",
      validationDataset: "12,000 / 3,200",
      studyPeriod: "2017-2022",
      peerReviewed: "Yes"
    },
    clinicalWorkflow: {
      useCases: [
        { title: "Screening", subtitle: "First-pass triage" },
        { title: "Assist", subtitle: "Decision support" },
        { title: "QA", subtitle: "Quality assurance" }
      ],
      interpretOutputs: [
        {
          title: "Classification Score",
          description: "Confidence score from 0-1 indicates likelihood of pneumonia. Scores above 0.6 warrant clinical review and confirmation."
        },
        {
          title: "Region Highlighting",
          description: "Highlighted lung regions show areas of detected consolidation or ground-glass opacities suggestive of pneumonia."
        }
      ],
      operatingModes: [
        {
          title: "Sensitivity-Focused",
          description: "Minimizes false negatives. Use for screening where catching all potential cases is critical, even if it means more false alarms.",
          recommendation: "→ Recommended for screening workflows",
          color: "green"
        },
        {
          title: "Specificity-Focused",
          description: "Reduces false positives. Use when you want higher confidence in positive predictions, accepting some cases might be missed.",
          recommendation: "→ Recommended for confirmatory use",
          color: "blue"
        }
      ]
    },
    technicalSpecs: {
      inputImageFormat: "DICOM, PNG, JPEG",
      imageResolution: "Minimum 512x512 pixels",
      hardwareRequirements: "Standard CPU sufficient, GPU optional for high-throughput scenarios",
      softwareIntegration: "PACS integration, REST API, DICOM worklist"
    },
    limitations: {
      sampleTypes: "Validated for adult chest X-rays only",
      exclusions: "Performance may be reduced with portable/bedside X-rays, severe positioning artifacts, or concurrent lung pathologies"
    },
    notUseFor: [
      "Standalone diagnosis without radiologist review",
      "Pediatric chest X-rays (trained on adult population only)",
      "CT scans or other imaging modalities (optimized for X-rays only)",
      "Detection of other pulmonary conditions beyond pneumonia"
    ],
    documentation: [
      { title: "Clinical Implementation Guide", link: "#" },
      { title: "Emergency Department Workflow Study", link: "#" },
      { title: "API Documentation", link: "#" }
    ],
    references: [
      "Rodriguez et al. (2022) - Deep learning for pneumonia detection in the ED. Radiology.",
      "Wang et al. (2021) - Real-world performance evaluation. European Radiology."
    ]
  }
};

export default function PathologistMarketplaceModelDetail() {
  const { id } = useParams();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    overview: false,
    workflow: false,
    evidence: false,
    technical: false,
    limitations: false,
    documentation: false
  });

  const model = id ? modelDatabase[id] : null;

  if (!model) {
    return (
      <div className="bg-background relative min-h-screen w-full">
        <PathologistHeader />
        <div className="pt-[84px] px-[28px] pb-[100px]">
          <div className="max-w-[1322px] mx-auto">
            <p className="text-foreground">Model not found</p>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmitRequest = (data: any) => {
    console.log("Request submitted:", data);
    setShowRequestModal(false);
    alert("Access request submitted successfully! The developer will review your request.");
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-[#fafafa] relative min-h-screen w-full">
      <PathologistHeader />

      <div className="px-[72px] pb-[80px]">
        {/* Back Button */}
        <div className="pt-[28px] mb-[57px]">
          <Link to="/pathologist/marketplace" className="inline-flex items-center gap-[7px]">
            <svg width="17.5" height="17.5" viewBox="0 0 17.5 17.5" fill="none">
              <path d={svgPathsBack.p27370b80} stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
              <path d="M13.8542 8.75H3.64583" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
            </svg>
            <span className="font-['Roboto'] font-medium text-[14px] leading-[21px] text-[#525252]">Back to Models</span>
          </Link>
        </div>

        {/* Model title — flat on #fafafa, no card */}
        <h1 className="font-['Roboto'] font-bold text-[24px] leading-[32px] text-black mb-[13px]">
          {model.name}
        </h1>
        <p className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#525252] mb-[29px]">
          {model.clinicalUse}
        </p>
        <button
          onClick={() => setShowRequestModal(true)}
          className="mb-[56px]"
          style={{ background: '#0D9488', borderRadius: '4px', padding: '8px 16px', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '18px', color: 'white', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
        >
          Apply for use
        </button>

        {/* Section cards */}
        <div className="flex flex-col gap-[16px]">
          <ModelOverviewSection
            modelName={model.name}
            clinicalProblem={model.clinicalProblem}
            applicableScenarios={model.applicableScenarios}
            requiredInput={model.requiredInput}
            output={model.output}
            applicabilityTags={model.applicabilityTags || model.tags}
          />
          <ClinicalWorkflowSection
            useCases={model.clinicalWorkflow.useCases}
            interpretOutputs={model.clinicalWorkflow.interpretOutputs}
            operatingModes={model.clinicalWorkflow.operatingModes}
            notUseFor={model.notUseFor}
          />
<EvidencePerformanceSection
            performance={{
              sensitivity: model.performance.sensitivity,
              specificity: model.performance.specificity,
              precision: model.performance.precision,
              auc: model.performance.precision,
            }}
            validation={{
              trainingCases: model.performance.validationDataset?.split(' / ')[0] ?? '5,000',
              validationCases: model.performance.validationDataset?.split(' / ')[1] ?? '1,500',
              dataCollectionPeriod: model.performance.studyPeriod ?? '2018-2020',
              multiInstitutional: 'Yes (5 sites)',
              externalValidation: model.performance.peerReviewed === 'Yes' ? 'Yes' : 'No',
              validationSummary: 'External validation performed on independent cases demonstrating consistent performance across different institutions and patient populations.',
            }}
            limitations={[
              { text: 'Performance may degrade on poorly stained or low-quality slides' },
              { text: 'Limited validation on rare subtypes' },
              { text: 'May produce false positives on severely inflamed or artifact-heavy tissue' },
              { text: 'Validated on adult population only' },
            ]}
          />
          <TechnicalCompatibilitySection />
          <DocumentationResourcesSection />
        </div>
      </div>

      {/* Request Access Modal */}
      {showRequestModal && (
        <ModelAccessRequestModal
          modelName={model.name}
          onClose={() => setShowRequestModal(false)}
          onSubmit={handleSubmitRequest}
        />
      )}
    </div>
  );
}