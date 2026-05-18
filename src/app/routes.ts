import { createBrowserRouter } from 'react-router';
import { ScrollToTop } from './components/ScrollToTop';
import PortalSelection from './pages/PortalSelection';
import { DashboardPage } from './pages/DashboardPage';
import { ModelDetailsPage } from './pages/ModelDetailsPage';
import { GenerateEndpointPage } from './pages/GenerateEndpointPage';
import { JobsPage } from './pages/JobsPage';
import PathologistMarketplace from './pages/pathologist/Marketplace';
import PathologistMarketplaceModelDetail from './pages/pathologist/MarketplaceModelDetail';
import PathologistWorkspace from './pages/pathologist/Workspace';
import DiagnosisUpload from './pages/pathologist/DiagnosisUpload';
import DiagnosisRun from './pages/pathologist/DiagnosisRun';

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      { path: '/', Component: PortalSelection },
      // Developer Portal Routes
      { path: '/developer/models', Component: DashboardPage },
      { path: '/developer/model/:id', Component: ModelDetailsPage },
      { path: '/developer/generate-endpoint', Component: GenerateEndpointPage },
      { path: '/developer/jobs', Component: JobsPage },
      // Pathologist Portal Routes
      { path: '/pathologist/marketplace', Component: PathologistMarketplace },
      { path: '/pathologist/marketplace/:id', Component: PathologistMarketplaceModelDetail },
      { path: '/pathologist/workspace', Component: PathologistWorkspace },
      { path: '/pathologist/diagnosis/:modelId', Component: DiagnosisUpload },
      { path: '/pathologist/diagnosis/:modelId/run/:runId', Component: DiagnosisRun },
    ],
  },
]);
