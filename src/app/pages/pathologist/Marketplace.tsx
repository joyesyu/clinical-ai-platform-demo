import { useState, useEffect, useRef } from "react";
import { PathologistHeader } from "../../components/pathologist/PathologistHeader";
import { MarketplaceModelCard } from "../../components/pathologist/MarketplaceModelCard";
import { RequestAccessModal } from "../../components/pathologist/RequestAccessModal";
import svgPaths from "../../../imports/svg-41n8ab18bl";
import { Link } from "react-router";
import { X, ChevronDown } from "lucide-react";

// Mock data - only Active models visible to pathologists
const activeModels = [
  {
    id: "deepcolon",
    name: "DeepColon Prognosticator",
    taskType: "Classification",
    diseaseType: "Oncology",
    clinicalUseOneLine: "Analyzes H&E-stained colon biopsies to predict patient prognosis and survival outcomes. Helps oncologists personalize treatment strategies based on risk stratification.",
    applicabilityTags: ["Colon tissue", "H&E stain", "WSI", "Biopsy"],
    outputType: "Risk Score",
    runtime: "Typical runtime: 2–5 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Clinical-ready" as const,
    tags: ["Colon tissue", "H&E stain", "WSI"],
    clinicalUse: "Predict the prognosis of colon cancer from biopsy images, helping oncologists tailor treatment plans.",
    performanceSummary: "94% accuracy, 92% sensitivity, 98% specificity",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "retinacheck",
    name: "RetinaCheck AI",
    taskType: "Detection",
    diseaseType: "Ophthalmology",
    clinicalUseOneLine: "Detects and highlights early signs of diabetic retinopathy in fundus images with heat-mapped visualization. Accelerates screening workflow and prevents vision loss through early intervention.",
    applicabilityTags: ["Retinal tissue", "Fundus imaging", "Color photography"],
    outputType: "Heatmap",
    runtime: "Typical runtime: 1–2 min/image",
    availability: "Available in ~4 hours",
    accessStatus: "pending" as const,
    usageStatus: "Clinical-ready" as const,
    tags: ["Retinal tissue", "Fundus imaging"],
    clinicalUse: "Detects early signs of diabetic retinopathy from retinal images, aiding in prevention of blindness.",
    performanceSummary: "96% accuracy, High sensitivity for early detection",
    inputImageUrl: "https://images.unsplash.com/photo-1682663947124-88b7b7e12889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjByZXRpbmFsJTIwbWVkaWNhbCUyMGltYWdpbmd8ZW58MXx8fHwxNzczNzcxNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "breastpath",
    name: "BreastPath Analyzer",
    taskType: "Segmentation",
    diseaseType: "Oncology",
    clinicalUseOneLine: "Precisely segments and quantifies tumor regions in breast tissue core biopsies. Provides objective measurements to support diagnostic accuracy and treatment planning decisions.",
    applicabilityTags: ["Breast tissue", "H&E stain", "WSI", "Core biopsy"],
    outputType: "Segmentation Mask",
    runtime: "Typical runtime: 3–7 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Research-only" as const,
    tags: ["Breast tissue", "H&E stain", "WSI"],
    clinicalUse: "Automatically segments and quantifies tumor regions in breast tissue biopsies.",
    performanceSummary: "93% Dice coefficient, High precision",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "prostatescore",
    name: "ProstateScore Gleason AI",
    taskType: "Grading",
    diseaseType: "Oncology",
    clinicalUseOneLine: "Provides consistent, reproducible Gleason grading for prostate cancer needle biopsies. Reduces inter-observer variability and standardizes pathology reporting across institutions.",
    applicabilityTags: ["Prostate tissue", "H&E stain", "WSI", "Needle biopsy"],
    outputType: "Gleason Grade",
    runtime: "Typical runtime: 4–8 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Dual-use" as const,
    tags: ["Prostate tissue", "H&E stain", "WSI"],
    clinicalUse: "Provides consistent Gleason grading for prostate cancer specimens.",
    performanceSummary: "91% agreement with pathologist consensus",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "kidneyseg",
    name: "RenalSeg Analyzer",
    taskType: "Segmentation",
    diseaseType: "Nephrology",
    clinicalUseOneLine: "Automatically segments and quantifies glomeruli, tubules, and interstitial structures in kidney biopsies. Enables precise morphometric analysis for nephropathology assessment.",
    applicabilityTags: ["Kidney tissue", "PAS stain", "H&E stain", "WSI"],
    outputType: "Segmentation Mask",
    runtime: "Typical runtime: 5–10 min/slide",
    availability: "Available in ~6 hours",
    accessStatus: "not-requested" as const,
    usageStatus: "Research-only" as const,
    tags: ["Kidney tissue", "PAS stain", "WSI"],
    clinicalUse: "Quantifies glomerular and tubular structures in renal pathology specimens.",
    performanceSummary: "90% Dice coefficient for glomeruli",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "melanoma",
    name: "MelanomaDetect Pro",
    taskType: "Detection",
    diseaseType: "Dermatology",
    clinicalUseOneLine: "Identifies melanoma and atypical melanocytic lesions in skin biopsies and dermoscopy images. Supports dermatopathologists with AI-assisted diagnostic confidence scoring.",
    applicabilityTags: ["Skin tissue", "H&E stain", "Dermoscopy", "WSI"],
    outputType: "Heatmap + Score",
    runtime: "Typical runtime: 1–3 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Clinical-ready" as const,
    tags: ["Skin tissue", "H&E stain", "Dermoscopy"],
    clinicalUse: "Automated detection and classification of melanoma in dermatopathology slides.",
    performanceSummary: "97% sensitivity, 94% specificity",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "lungnode",
    name: "PulmoNode Detector",
    taskType: "Detection",
    diseaseType: "Pulmonology",
    clinicalUseOneLine: "Detects and characterizes pulmonary nodules in chest CT scans with precise localization. Enhances early lung cancer screening programs with automated detection and size measurements.",
    applicabilityTags: ["Lung tissue", "CT scan", "Chest imaging"],
    outputType: "Overlay + Report",
    runtime: "Typical runtime: 2–4 min/scan",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Clinical-ready" as const,
    tags: ["Lung tissue", "CT scan", "Chest imaging"],
    clinicalUse: "Detects and characterizes pulmonary nodules for early lung cancer screening.",
    performanceSummary: "95% detection rate, Low false positive rate",
    inputImageUrl: "https://images.unsplash.com/photo-1584555684040-bad07f46a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMHhyYXklMjBwbmV1bW9uaWElMjBzY2FufGVufDF8fHx8MTc3Mzc3MTQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "liverfibrosis",
    name: "HepatoFibrosis Scorer",
    taskType: "Classification",
    diseaseType: "Hepatology",
    clinicalUseOneLine: "Stages liver fibrosis (F0-F4) from trichrome and H&E-stained biopsy slides with quantitative metrics. Provides objective fibrosis assessment to monitor disease progression and treatment response.",
    applicabilityTags: ["Liver tissue", "Trichrome stain", "H&E stain", "WSI"],
    outputType: "Fibrosis Stage",
    runtime: "Typical runtime: 3–6 min/slide",
    availability: "Available in ~8 hours",
    accessStatus: "not-requested" as const,
    usageStatus: "Research-only" as const,
    tags: ["Liver tissue", "Trichrome stain", "WSI"],
    clinicalUse: "Automated staging of liver fibrosis (F0-F4) from histopathology images.",
    performanceSummary: "89% accuracy across all stages",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "thyroidnodule",
    name: "ThyroidClass AI",
    taskType: "Classification",
    diseaseType: "Endocrinology",
    clinicalUseOneLine: "Classifies thyroid FNA cytology specimens as benign or malignant with high diagnostic accuracy. Reduces unnecessary surgeries through improved preoperative risk stratification.",
    applicabilityTags: ["Thyroid tissue", "FNA cytology", "H&E stain"],
    outputType: "Classification + Score",
    runtime: "Typical runtime: 1–2 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Dual-use" as const,
    tags: ["Thyroid tissue", "FNA cytology", "H&E stain"],
    clinicalUse: "Distinguishes benign from malignant thyroid nodules in cytology specimens.",
    performanceSummary: "92% accuracy, 88% sensitivity",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "cervicalscreen",
    name: "CerviScreen Detector",
    taskType: "Detection",
    diseaseType: "Gynecology",
    clinicalUseOneLine: "Screens Pap smears and liquid-based cytology for cervical dysplasia and malignancy with high sensitivity. Improves cervical cancer screening efficiency and reduces false-negative rates.",
    applicabilityTags: ["Cervical tissue", "Pap smear", "Liquid-based cytology"],
    outputType: "Heatmap + Classification",
    runtime: "Typical runtime: 1 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Clinical-ready" as const,
    tags: ["Cervical tissue", "Pap smear", "Cytology"],
    clinicalUse: "Automated screening for cervical dysplasia and malignancy in cytology samples.",
    performanceSummary: "96% sensitivity for high-grade lesions",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "gastropolyp",
    name: "GastroPolyp Scout",
    taskType: "Detection",
    diseaseType: "Gastroenterology",
    clinicalUseOneLine: "Automatically detects and localizes colorectal polyps in endoscopic biopsy tissue sections with precise boundary delineation. Supports gastroenterologists in identifying early neoplastic lesions and reducing missed adenoma rates.",
    applicabilityTags: ["Colon tissue", "Endoscopy biopsy", "H&E stain", "WSI"],
    outputType: "Bounding Box + Score",
    runtime: "Typical runtime: 1–3 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Clinical-ready" as const,
    tags: ["Colon tissue", "Endoscopy biopsy", "H&E stain", "WSI"],
    clinicalUse: "Detects and localizes colorectal polyps in endoscopic biopsy specimens to support early neoplasia identification.",
    performanceSummary: "93% sensitivity, 91% specificity for adenomatous polyps",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "lymphoseg",
    name: "LymphoSeg Classifier",
    taskType: "Segmentation",
    diseaseType: "Hematology",
    clinicalUseOneLine: "Segments and classifies lymphoma cell populations in bone marrow trephine biopsies and lymph node specimens. Delivers objective infiltration quantification to guide diagnosis and treatment staging decisions.",
    applicabilityTags: ["Bone marrow", "Lymph node", "H&E stain", "WSI"],
    outputType: "Segmentation Mask",
    runtime: "Typical runtime: 4–8 min/slide",
    availability: "Available in ~3 hours",
    accessStatus: "not-requested" as const,
    usageStatus: "Research-only" as const,
    tags: ["Bone marrow", "Lymph node", "H&E stain", "WSI"],
    clinicalUse: "Segments and quantifies lymphoma cell infiltration in bone marrow and lymph node specimens.",
    performanceSummary: "91% Dice coefficient for cell population segmentation",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "cardiofibrosis",
    name: "CardioFibrosis Grader",
    taskType: "Grading",
    diseaseType: "Cardiology",
    clinicalUseOneLine: "Grades myocardial fibrosis severity from endomyocardial biopsies using quantitative tissue morphometry. Provides reproducible fibrosis scores to assist in heart failure diagnosis and transplant rejection monitoring.",
    applicabilityTags: ["Cardiac tissue", "Trichrome stain", "H&E stain", "Biopsy"],
    outputType: "Fibrosis Grade",
    runtime: "Typical runtime: 3–6 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Dual-use" as const,
    tags: ["Cardiac tissue", "Trichrome stain", "H&E stain", "Biopsy"],
    clinicalUse: "Grades myocardial fibrosis severity in endomyocardial biopsies for heart failure and transplant monitoring.",
    performanceSummary: "88% agreement with expert pathologist consensus grading",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "pancreasdetect",
    name: "PancreasPath Detector",
    taskType: "Detection",
    diseaseType: "Oncology",
    clinicalUseOneLine: "Identifies pancreatic ductal adenocarcinoma and precursor lesions in resection and biopsy specimens. Highlights invasive tumor margins and perineural invasion patterns to support surgical planning and prognosis.",
    applicabilityTags: ["Pancreas tissue", "H&E stain", "WSI", "Resection"],
    outputType: "Heatmap + Classification",
    runtime: "Typical runtime: 5–10 min/slide",
    availability: "Available in ~5 hours",
    accessStatus: "not-requested" as const,
    usageStatus: "Research-only" as const,
    tags: ["Pancreas tissue", "H&E stain", "WSI", "Resection"],
    clinicalUse: "Detects pancreatic ductal adenocarcinoma and highlights invasive margins in resection specimens.",
    performanceSummary: "90% sensitivity, 87% specificity for invasive carcinoma",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "neuroclass",
    name: "NeuroDegen Classifier",
    taskType: "Classification",
    diseaseType: "Neuropathology",
    clinicalUseOneLine: "Classifies neurodegenerative pathology patterns — including Alzheimer's, Parkinson's, and Lewy body disease — from brain autopsy and biopsy specimens. Assists neuropathologists in achieving consistent diagnostic classification across complex cases.",
    applicabilityTags: ["Brain tissue", "H&E stain", "IHC", "Autopsy"],
    outputType: "Classification + Confidence",
    runtime: "Typical runtime: 6–12 min/slide",
    availability: "Immediately available",
    accessStatus: "not-requested" as const,
    usageStatus: "Research-only" as const,
    tags: ["Brain tissue", "H&E stain", "IHC", "Autopsy"],
    clinicalUse: "Classifies neurodegenerative disease subtypes from brain tissue to support neuropathological diagnosis.",
    performanceSummary: "87% accuracy across five major neurodegenerative subtypes",
    inputImageUrl: "https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwdGlzc3VlJTIwc2FtcGxlfGVufDF8fHx8MTc3MzczODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    outputImageUrl: "https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhbmFseXNpcyUyMHJlc3VsdCUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNzcxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

export default function PathologistMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrgans, setSelectedOrgans] = useState<string[]>([]);
  const [selectedTaskTypes, setSelectedTaskTypes] = useState<string[]>([]);
  const [selectedUsageStatus, setSelectedUsageStatus] = useState<string>("");
  const [organDropdownOpen, setOrganDropdownOpen] = useState(false);
  const [taskTypeDropdownOpen, setTaskTypeDropdownOpen] = useState(false);
  const [usageDropdownOpen, setUsageDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  const [requestingModel, setRequestingModel] = useState<string | null>(null);

  // Refs for click outside detection
  const organDropdownRef = useRef<HTMLDivElement>(null);
  const taskTypeDropdownRef = useRef<HTMLDivElement>(null);
  const usageDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        organDropdownRef.current &&
        !organDropdownRef.current.contains(event.target as Node)
      ) {
        setOrganDropdownOpen(false);
      }
      if (
        taskTypeDropdownRef.current &&
        !taskTypeDropdownRef.current.contains(event.target as Node)
      ) {
        setTaskTypeDropdownOpen(false);
      }
      if (
        usageDropdownRef.current &&
        !usageDropdownRef.current.contains(event.target as Node)
      ) {
        setUsageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Extract unique organs/samples from all models
  const allOrgans = Array.from(new Set(activeModels.flatMap(m => m.applicabilityTags))).sort();
  const taskTypes = ["Classification", "Detection", "Segmentation", "Grading"];
  const usageStatuses = ["All", "Clinical-ready", "Research-only"];

  const handleRequestAccess = (modelId: string) => {
    setRequestingModel(modelId);
  };

  const handleSubmitRequest = (data: any) => {
    console.log("Request submitted:", data);
    setRequestingModel(null);
    // Show success message
    alert("Access request submitted successfully! The developer will review your request.");
  };

  const toggleOrganSelection = (organ: string) => {
    setSelectedOrgans(prev => 
      prev.includes(organ) ? prev.filter(o => o !== organ) : [...prev, organ]
    );
  };

  const toggleTaskTypeSelection = (taskType: string) => {
    setSelectedTaskTypes(prev => 
      prev.includes(taskType) ? prev.filter(t => t !== taskType) : [...prev, taskType]
    );
  };

  const toggleUsageStatusSelection = (status: string) => {
    setSelectedUsageStatus(status === "All" ? "" : status);
  };

  const removeFilter = (type: 'organ' | 'taskType' | 'usageStatus', value: string) => {
    if (type === 'organ') {
      setSelectedOrgans(prev => prev.filter(o => o !== value));
    } else if (type === 'taskType') {
      setSelectedTaskTypes(prev => prev.filter(t => t !== value));
    } else {
      setSelectedUsageStatus("");
    }
  };

  const filteredModels = activeModels.filter(model => {
    // Visibility rule: Don't show models that are already approved or available (in My Models)
    if (model.accessStatus === 'approved' || model.accessStatus === 'available') {
      return false;
    }
    
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.clinicalUse.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesOrgan = selectedOrgans.length === 0 || 
                        selectedOrgans.some(organ => model.applicabilityTags.includes(organ));
    
    const matchesTask = selectedTaskTypes.length === 0 || 
                       selectedTaskTypes.includes(model.taskType);
    
    // For usage status, we'll use a simple mock - in real app this would come from model data
    const matchesUsage = selectedUsageStatus === "" || model.usageStatus === selectedUsageStatus;
    
    return matchesSearch && matchesOrgan && matchesTask && matchesUsage;
  });

  const selectedModel = activeModels.find(m => m.id === requestingModel);

  // Get all active filters for chips display
  const activeFilters = [
    ...selectedOrgans.map(o => ({ type: 'organ' as const, value: o, label: o })),
    ...selectedTaskTypes.map(t => ({ type: 'taskType' as const, value: t, label: t })),
    ...selectedUsageStatus ? [{ type: 'usageStatus' as const, value: selectedUsageStatus, label: selectedUsageStatus }] : [],
  ];

  return (
    <div className="bg-white relative min-h-screen w-full">
      <PathologistHeader />
      
      <div className="pt-[40px] px-[158px] pb-[96px] bg-white">
        <div>
          {/* Header */}
          <div className="mb-[40px]">
            <h1 className="mb-[8px] font-['Roboto']" style={{ fontSize: '24px', fontWeight: 500, lineHeight: '32px', color: '#000000' }}>
              Model Marketplace
            </h1>
            <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#525252' }}>
              Browse and request access to AI diagnostic models
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-[16px] p-[0px]">
            <div className="flex gap-[8px] items-end">
              {/* Organ / Sample Filter */}
              <div className="w-[192px]">
                <label className="block mb-[8px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                  Organ / Sample
                </label>
                <div className="relative" ref={organDropdownRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setOrganDropdownOpen(!organDropdownOpen);
                      setTaskTypeDropdownOpen(false);
                      setUsageDropdownOpen(false);
                    }}
                    className="w-full bg-input-background border border-border rounded-[6px] px-[13px] py-px h-[40px] text-left font-['Roboto'] flex items-center justify-between focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    style={{ fontSize: '14px', lineHeight: '22px', color: selectedOrgans.length > 0 ? '#161616' : '#6f6f6f' }}
                  >
                    <span className="truncate">
                      {selectedOrgans.length > 0 ? `${selectedOrgans.length} selected` : 'All'}
                    </span>
                    <svg className="size-[16px] flex-shrink-0" fill="none" viewBox="0 0 16 16">
                      <path d="M4 6L8 10L12 6" stroke="#6F6F6F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                  {organDropdownOpen && (
                    <div className="absolute z-10 mt-[4px] w-full max-h-[256px] overflow-y-auto bg-card border border-border rounded-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                      {allOrgans.map((organ) => (
                        <div
                          key={organ}
                          onClick={() => toggleOrganSelection(organ)}
                          className="px-[12px] py-[8px] hover:bg-[rgba(0,0,0,0.02)] cursor-pointer flex items-center gap-[8px]"
                        >
                          <input
                            type="checkbox"
                            checked={selectedOrgans.includes(organ)}
                            onChange={() => {}}
                            className="size-[16px] rounded-[4px] border border-border cursor-pointer"
                          />
                          <span className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616' }}>
                            {organ}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Task Type Filter */}
              <div className="w-[192px]">
                <label className="block mb-[8px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                  Task Type
                </label>
                <div className="relative" ref={taskTypeDropdownRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setTaskTypeDropdownOpen(!taskTypeDropdownOpen);
                      setOrganDropdownOpen(false);
                      setUsageDropdownOpen(false);
                    }}
                    className="w-full bg-input-background border border-border rounded-[6px] px-[12px] h-[40px] text-left font-['Roboto'] flex items-center justify-between focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    style={{ fontSize: '14px', lineHeight: '22px', color: selectedTaskTypes.length > 0 ? '#161616' : '#6f6f6f' }}
                  >
                    <span className="truncate">
                      {selectedTaskTypes.length > 0 ? `${selectedTaskTypes.length} selected` : 'All'}
                    </span>
                    <ChevronDown className="size-[16px] flex-shrink-0 ml-[8px]" style={{ color: '#6f6f6f' }} />
                  </button>
                  {taskTypeDropdownOpen && (
                    <div className="absolute z-10 mt-[4px] w-full bg-card border border-border rounded-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                      {taskTypes.map((taskType) => (
                        <div
                          key={taskType}
                          onClick={() => toggleTaskTypeSelection(taskType)}
                          className="px-[12px] py-[8px] hover:bg-[rgba(0,0,0,0.02)] cursor-pointer flex items-center gap-[8px]"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTaskTypes.includes(taskType)}
                            onChange={() => {}}
                            className="size-[16px] rounded-[4px] border border-border cursor-pointer"
                          />
                          <span className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616' }}>
                            {taskType}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Usage Status Filter */}
              <div className="w-[192px]">
                <label className="block mb-[8px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                  Usage Status
                </label>
                <div className="relative" ref={usageDropdownRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setUsageDropdownOpen(!usageDropdownOpen);
                      setOrganDropdownOpen(false);
                      setTaskTypeDropdownOpen(false);
                    }}
                    className="w-full bg-input-background border border-border rounded-[6px] px-[12px] h-[40px] text-left font-['Roboto'] flex items-center justify-between focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    style={{ fontSize: '14px', lineHeight: '22px', color: selectedUsageStatus ? '#161616' : '#6f6f6f' }}
                  >
                    <span className="truncate">
                      {selectedUsageStatus || 'All'}
                    </span>
                    <ChevronDown className="size-[16px] flex-shrink-0 ml-[8px]" style={{ color: '#6f6f6f' }} />
                  </button>
                  {usageDropdownOpen && (
                    <div className="absolute z-10 mt-[4px] w-full bg-card border border-border rounded-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                      {usageStatuses.map((status) => (
                        <div
                          key={status}
                          onClick={() => toggleUsageStatusSelection(status)}
                          className="px-[12px] py-[8px] hover:bg-[rgba(0,0,0,0.02)] cursor-pointer flex items-center gap-[8px]"
                        >
                          <input
                            type="radio"
                            name="usageStatus"
                            checked={status === "All" ? selectedUsageStatus === "" : selectedUsageStatus === status}
                            onChange={() => {}}
                            className="size-[16px] border border-border cursor-pointer"
                          />
                          <span className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#161616' }}>
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Bar - Far Right */}
              <div className="w-[600px]">
                <label className="block mb-[8px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-input-background border border-border rounded-[6px] pl-[40px] pr-[16px] h-[40px] text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-['Roboto']"
                    placeholder="Search by model name or clinical use..."
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  />
                  <div className="absolute left-[12px] size-[16px] top-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <g id="Icon">
                        <path d={svgPaths.p8cdb700} stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        <path d="M12.25 12.25L9.74167 9.74167" stroke="rgba(0,0,0,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-end ml-auto">
                <div className="inline-flex items-center bg-card border border-border rounded-[4px] p-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
                  <button
                    onClick={() => setViewMode("card")}
                    className={`px-[16px] py-[6px] rounded-[4px] transition-all duration-200 font-['Roboto'] ${
                      viewMode === "card" 
                        ? "bg-[rgba(0,0,0,0.06)] shadow-sm" 
                        : "hover:bg-[rgba(0,0,0,0.02)]"
                    }`}
                    style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: viewMode === "card" ? '#161616' : '#6F6F6F' }}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                        <rect x="0.5" y="0.5" width="5" height="5" stroke="currentColor" strokeWidth="1" rx="1"/>
                        <rect x="8.5" y="0.5" width="5" height="5" stroke="currentColor" strokeWidth="1" rx="1"/>
                        <rect x="0.5" y="8.5" width="5" height="5" stroke="currentColor" strokeWidth="1" rx="1"/>
                        <rect x="8.5" y="8.5" width="5" height="5" stroke="currentColor" strokeWidth="1" rx="1"/>
                      </svg>
                      Card
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`px-[16px] py-[6px] rounded-[4px] transition-all duration-200 font-['Roboto'] ${
                      viewMode === "table" 
                        ? "bg-[rgba(0,0,0,0.06)] shadow-sm" 
                        : "hover:bg-[rgba(0,0,0,0.02)]"
                    }`}
                    style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: viewMode === "table" ? '#161616' : '#6F6F6F' }}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                        <line x1="1" y1="3" x2="13" y2="3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <line x1="1" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                      Table
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Chips */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-[8px] mt-[16px] pt-[16px] border-t border-[rgba(0,0,0,0.06)]">
                {activeFilters.map((filter, index) => (
                  <div
                    key={`${filter.type}-${filter.value}-${index}`}
                    className="inline-flex items-center gap-[4px] bg-[rgba(24,144,255,0.08)] border border-[rgba(24,144,255,0.2)] rounded-[4px] px-[8px] py-[4px]"
                  >
                    <span className="font-['Roboto']" style={{ fontSize: '12px', lineHeight: '20px', color: '#096DD9', fontWeight: 500 }}>
                      {filter.label}
                    </span>
                    <button
                      onClick={() => removeFilter(filter.type, filter.value)}
                      className="hover:bg-[rgba(24,144,255,0.12)] rounded-[4px] p-[2px] transition-colors"
                    >
                      <X className="size-[12px]" style={{ color: '#096DD9' }} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Models Grid/Table */}
          <div>
            {viewMode === "card" ? (
              <div className="grid grid-cols-5 gap-[16px]">
                {filteredModels.map((model) => (
                  <MarketplaceModelCard
                    key={model.id}
                    {...model}
                    onRequestAccess={() => handleRequestAccess(model.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-card border border-[rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[rgba(0,0,0,0.02)] border-b border-[rgba(0,0,0,0.06)]">
                    <tr>
                      <th className="text-left px-[24px] py-[12px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                        Model Name
                      </th>
                      <th className="text-left px-[24px] py-[12px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                        Task Type
                      </th>
                      <th className="text-left px-[24px] py-[12px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>Applicability</th>
                      <th className="text-left px-[24px] py-[12px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                        Usage Status
                      </th>
                      <th className="text-right px-[24px] py-[12px] font-['Roboto']" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', color: '#161616' }}>
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredModels.map((model, index) => (
                      <tr 
                        key={model.id} 
                        className="border-b border-[rgba(0,0,0,0.06)] last:border-b-0 hover:bg-[rgba(0,0,0,0.02)] transition-colors"
                      >
                        <td className="px-[24px] py-[16px]">
                          <Link 
                            to={`/pathologist/marketplace/${model.id}`}
                            className="font-['Roboto'] hover:text-primary transition-colors"
                            style={{ fontSize: '14px', fontWeight: 500, lineHeight: '22px', color: '#000000' }}
                          >
                            {model.name}
                          </Link>
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] border border-[rgba(0,0,0,0.15)]" style={{ fontSize: '12px', fontWeight: 400, lineHeight: '20px', color: '#525252', fontFamily: "'Roboto Mono', monospace" }}>
                            {model.taskType}
                          </span>
                        </td>
                        <td className="px-[24px] py-[16px] max-w-[400px]">
                          <div className="flex flex-wrap gap-[6px]">
                            {model.applicabilityTags.slice(0, 4).map((tag, index) => (
                              <span key={index} className="inline-flex items-center px-[8px] py-[2px] bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.08)] rounded-[4px]" style={{ fontSize: '12px', lineHeight: '20px', color: '#6F6F6F', fontFamily: "'Roboto Mono', monospace" }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <span className="inline-flex items-center px-[8px] py-[4px] rounded-[4px]" style={{
                            fontSize: '12px',
                            lineHeight: '20px',
                            color: 'rgba(82, 82, 82, 0.65)',
                            fontWeight: 400,
                            textTransform: 'uppercase',
                            letterSpacing: '0.3px',
                            fontFamily: "'Roboto Mono', monospace"
                          }}>
                            {model.usageStatus}
                          </span>
                        </td>
                        <td className="px-[24px] py-[16px] text-right">
                          <Link
                            to={`/pathologist/marketplace/${model.id}`}
                            className="inline-flex items-center gap-[4px] text-primary hover:text-[#096dd9] transition-colors font-['Roboto']"
                            style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}
                          >
                            <span>View Details</span>
                            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {filteredModels.length === 0 && (
              <div className="bg-card border border-border rounded-[8px] p-[64px] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="max-w-md mx-auto">
                  <div className="size-[64px] rounded-full bg-[rgba(0,0,0,0.04)] mx-auto mb-[16px] flex items-center justify-center">
                    <svg className="size-[32px] text-[rgba(0,0,0,0.25)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="font-['Roboto'] mb-[8px]" style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#161616' }}>
                    No models found
                  </p>
                  <p className="font-['Roboto']" style={{ fontSize: '14px', lineHeight: '22px', color: '#525252' }}>
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Request Access Modal */}
      {requestingModel && selectedModel && (
        <RequestAccessModal
          modelName={selectedModel.name}
          onClose={() => setRequestingModel(null)}
          onSubmit={handleSubmitRequest}
        />
      )}
    </div>
  );
}