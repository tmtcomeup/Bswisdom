import React from 'react';
import { RouteObject } from 'react-router-dom';

// Create placeholder components for problematic routes
const HomeworkPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Homework Resources</h1>
      <p>Loading homework resources...</p>
    </div>
  );
};

const LegalResourcesPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Legal Resources</h1>
      <p>Loading legal resources...</p>
    </div>
  );
};

const ResumeIndex: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resume Resources</h1>
      <p>Loading resume resources...</p>
    </div>
  );
};

const TradingPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Trading Resources</h1>
      <p>Loading trading resources...</p>
    </div>
  );
};

// Regular imports for other components
import MathSciences from '@/pages/resources/homework/math-sciences';
import HomeworkLiteratureReviews from '@/pages/resources/homework/literature-reviews';
import SocialSciences from '@/pages/resources/homework/social-sciences';
import LanguageLearning from '@/pages/resources/homework/language-learning';
import * as HomeworkGuides from '@/pages/resources/homework/guides';

// Individual imports for Legal section
import Contracts from '@/pages/resources/legal/contracts';
import CivilLaw from '@/pages/resources/legal/civil-law';
import CriminalLaw from '@/pages/resources/legal/criminal-law';
import LegalResearch from '@/pages/resources/legal/legal-research';
import * as LegalGuides from '@/pages/resources/legal/guides';

// Individual imports for Resume section
import ResumeWriting from '@/pages/resources/resume/writing';
import ResumeTemplates from '@/pages/resources/resume/templates';
import JobTargeting from '@/pages/resources/resume/targeting';
import ResumeReview from '@/pages/resources/resume/review';

// Individual imports for Trading section
import TradingFundamentals from '@/pages/resources/trading/fundamentals';
import TechnicalAnalysis from '@/pages/resources/trading/technical-analysis';
import TradingStrategies from '@/pages/resources/trading/strategies';
import RiskManagement from '@/pages/resources/trading/risk-management';

// Import components for other sections
import * as Prenuptial from '@/pages/resources/prenuptial';
import * as Professional from '@/pages/resources/professional';

// Import components for sections without barrel files
import AcademicPage from '@/pages/resources/academic';
import ResearchPapers from '@/pages/resources/academic/research-papers';
import ThesisWriting from '@/pages/resources/academic/thesis-writing';
import DissertationSupport from '@/pages/resources/academic/dissertation-support';
import LiteratureReviews from '@/pages/resources/academic/literature-reviews';
import CreativeWriting from '@/pages/resources/academic/creative-writing';
import EditingProofreading from '@/pages/resources/academic/editing-proofreading';
import ScriptWriting from '@/pages/resources/academic/script-writing';
import ResearchMethodology from '@/pages/resources/academic/guides/research-methodology';
import CitationStyles from '@/pages/resources/academic/guides/citation-styles';
import ThesisStatement from '@/pages/resources/academic/guides/thesis-statement';
import PeerReview from '@/pages/resources/academic/guides/peer-review';
import ScreenplayWriting from '@/pages/resources/academic/guides/screenplay-writing';
import Storytelling from '@/pages/resources/academic/guides/storytelling';
import WritingStandards from '@/pages/resources/academic/guides/writing-standards';

import BusinessPlansPage from '@/pages/resources/business-plans';
import StartupPlans from '@/pages/resources/business-plans/startup-plans';
import NonprofitGrants from '@/pages/resources/business-plans/nonprofit-grants';
import DigitalMarketingIndex from '@/pages/resources/digital-marketing/index';
import SEOStrategy from '@/pages/resources/digital-marketing/guides/seo-strategy';
import ContentMarketing from '@/pages/resources/digital-marketing/guides/content-marketing';
import EmailMarketing from '@/pages/resources/digital-marketing/guides/email-marketing';
import SocialMediaManagement from '@/pages/resources/digital-marketing/guides/social-media-management';
import GovernmentContracts from '@/pages/resources/business-plans/government-contracts';
import InvestmentProposals from '@/pages/resources/business-plans/investment-proposals';
import MarketAnalysis from '@/pages/resources/business-plans/market-analysis';
import FinancialProjections from '@/pages/resources/business-plans/financial-projections';
import GrantWriting from '@/pages/resources/business-plans/grant-writing';
import MarketResearch from '@/pages/resources/business-plans/guides/market-research';
import FinancialProjectionsGuide from '@/pages/resources/business-plans/guides/financial-projections';
import GrantWritingGuide from '@/pages/resources/business-plans/guides/grant-writing';
import GrantRequirements from '@/pages/resources/business-plans/guides/grant-requirements';
import ProposalWriting from '@/pages/resources/business-plans/guides/proposal-writing';
import MarketAnalysisGuide from '@/pages/resources/business-plans/guides/market-analysis';

import CaseReviewPage from '@/pages/resources/case-review';
import CriminalAnalysis from '@/pages/resources/case-review/criminal-analysis';
import CivilReview from '@/pages/resources/case-review/civil-review';
import FamilyLaw from '@/pages/resources/case-review/family-law';
import CorporateReview from '@/pages/resources/case-review/corporate-review';
import CriminalCasePrep from '@/pages/resources/case-review/guides/criminal-case-prep';
import CivilLawsuit from '@/pages/resources/case-review/guides/civil-lawsuit';
import NavigatingDivorce from '@/pages/resources/case-review/guides/navigating-divorce';
import BusinessProtection from '@/pages/resources/case-review/guides/business-protection';

import ContractsPage from '@/pages/resources/contracts';
import BusinessContracts from '@/pages/resources/contracts/business-contracts';
import EmploymentContracts from '@/pages/resources/contracts/employment-contracts';
import ServiceAgreements from '@/pages/resources/contracts/service-agreements';
import PartnershipAgreements from '@/pages/resources/contracts/partnership-agreements';
import LicensingAgreements from '@/pages/resources/contracts/licensing-agreements';
import ContractNegotiation from '@/pages/resources/contracts/guides/contract-negotiation';
import EssentialClauses from '@/pages/resources/contracts/guides/essential-clauses';
import ContractBoilerplate from '@/pages/resources/contracts/guides/contract-boilerplate';
import EmploymentContractGuide from '@/pages/resources/contracts/guides/employment-contract';
import IPProtection from '@/pages/resources/contracts/guides/ip-protection';
import RegulatoryCompliance from '@/pages/resources/contracts/guides/regulatory-compliance';
import RiskAssessment from '@/pages/resources/contracts/guides/risk-assessment';

import CoursesPage from '@/pages/resources/courses';
import CoursePlanning from '@/pages/resources/courses/course-planning';
import ContentCreation from '@/pages/resources/courses/content-creation';
import AssessmentDesign from '@/pages/resources/courses/assessment-design';
import PlatformSetup from '@/pages/resources/courses/platform-setup';
import LearningObjectives from '@/pages/resources/courses/guides/learning-objectives';
import EngagingModules from '@/pages/resources/courses/guides/engaging-modules';
import OnlineAssessments from '@/pages/resources/courses/guides/online-assessments';
import StudentEngagement from '@/pages/resources/courses/guides/student-engagement';
import PlatformSelection from '@/pages/resources/courses/guides/platform-selection';
import TechnicalSetup from '@/pages/resources/courses/guides/technical-setup';
import CourseMarketing from '@/pages/resources/courses/guides/course-marketing';

import ProjectManagement from '@/pages/resources/digital-tools/project-management';
import WorkflowAutomation from '@/pages/resources/digital-tools/workflow-automation';
import AnalyticsTools from '@/pages/resources/digital-tools/analytics-tools';
import BusinessTemplates from '@/pages/resources/digital-tools/business-templates';

import EbookPage from '@/pages/resources/ebook';
import FictionWriting from '@/pages/resources/ebook/fiction-writing';
import NonfictionWriting from '@/pages/resources/ebook/nonfiction-writing';
import EbookFormatting from '@/pages/resources/ebook/ebook-formatting';
import SelfPublishing from '@/pages/resources/ebook/self-publishing';
import BookMarketing from '@/pages/resources/ebook/book-marketing';

import FictionWritingEbooks from '@/pages/resources/ebooks/fiction-writing';
import NonfictionBooks from '@/pages/resources/ebooks/nonfiction-books';
import TechnicalManuals from '@/pages/resources/ebooks/technical-manuals';
import DigitalPublishing from '@/pages/resources/ebooks/digital-publishing';
import EbookFormattingGuide from '@/pages/resources/ebooks/guides/ebook-formatting';
import PublishingPlatforms from '@/pages/resources/ebooks/guides/publishing-platforms';
import BookMarketingGuide from '@/pages/resources/ebooks/guides/book-marketing';
import BookStructure from '@/pages/resources/ebooks/guides/book-structure';

import ToolsPage from '@/pages/resources/tools';
import ProjectManagementTools from '@/pages/resources/tools/project-management';
import WorkflowAutomationTools from '@/pages/resources/tools/workflow-automation';
import AnalyticsToolsPage from '@/pages/resources/tools/analytics-tools';
import BusinessTemplatesPage from '@/pages/resources/tools/business-templates';
import ProjectManagementGuide from '@/pages/resources/tools/guides/project-management';
import MarketingPlanGenerator from '@/pages/resources/tools/guides/marketing-plan-generator';
import Budgeting from '@/pages/resources/tools/guides/budgeting';

import WebsitePage from '@/pages/resources/website';
import WebDesign from '@/pages/resources/website/web-design';
import Development from '@/pages/resources/website/development';
import Ecommerce from '@/pages/resources/website/ecommerce';
import Maintenance from '@/pages/resources/website/maintenance';
import PlatformSelectionWebsite from '@/pages/resources/website/guides/platform-selection';
import EssentialElements from '@/pages/resources/website/guides/essential-elements';
import LandingPage from '@/pages/resources/website/guides/landing-page';
import SEOOptimization from '@/pages/resources/website/guides/seo-optimization';
import PerformanceOptimization from '@/pages/resources/website/guides/performance-optimization';
import SecurityPractices from '@/pages/resources/website/guides/security-practices';

import WebDesignWebsites from '@/pages/resources/websites/web-design';
import DevelopmentWebsites from '@/pages/resources/websites/development';
import EcommerceWebsites from '@/pages/resources/websites/ecommerce';
import MaintenanceWebsites from '@/pages/resources/websites/maintenance';
import PlatformSelectionWebsites from '@/pages/resources/websites/guides/platform-selection';
import SEOOptimizationWebsites from '@/pages/resources/websites/guides/seo-optimization';
import PerformanceOptimizationWebsites from '@/pages/resources/websites/guides/performance-optimization';
import SecurityPracticesWebsites from '@/pages/resources/websites/guides/security-practices';

export const resourceRoutes: RouteObject[] = [
  // Homework Section
  {
    path: 'homework',
    children: [
      { index: true, element: <HomeworkPage /> },
      { path: 'math-sciences', element: <MathSciences /> },
      { path: 'literature-reviews', element: <HomeworkLiteratureReviews /> },
      { path: 'social-sciences', element: <SocialSciences /> },
      { path: 'language-learning', element: <LanguageLearning /> },
      { path: 'guides', children: [
        { path: 'study-techniques', element: <HomeworkGuides.StudyTechniques /> },
        { path: 'time-management', element: <HomeworkGuides.TimeManagement /> },
        { path: 'exam-strategies', element: <HomeworkGuides.ExamStrategies /> },
      ]},
    ],
  },

  // Legal Section
  {
    path: 'legal',
    children: [
      { index: true, element: <LegalResourcesPage /> },
      { path: 'contracts', element: <Contracts /> },
      { path: 'civil', element: <CivilLaw /> },
      { path: 'criminal', element: <CriminalLaw /> },
      { path: 'research', element: <LegalResearch /> },
      { path: 'guides', children: [
        { path: 'motion-writing', element: <LegalGuides.MotionWritingGuide /> },
        { path: 'legal-research', element: <LegalGuides.LegalResearchGuide /> },
        { path: 'case-law', element: <LegalGuides.CaseLawGuide /> },
        { path: 'statutory', element: <LegalGuides.StatutoryGuide /> },
      ]},
    ],
  },

  // Prenuptial Section
  {
    path: 'prenuptial',
    children: [
      { index: true, element: <PrenuptialIndex /> },
      { path: 'drafting', element: <Prenuptial.PrenuptialDrafting /> },
      { path: 'requirements', element: <Prenuptial.PrenuptialRequirements /> },
      { path: 'protection', element: <Prenuptial.AssetProtection /> },
      { path: 'negotiation', element: <Prenuptial.PrenuptialNegotiation /> },
    ],
  },

  // Professional Section
  {
    path: 'professional',
    children: [
      { index: true, element: <ProfessionalIndex /> },
      { path: 'career-development', element: <Professional.CareerDevelopment /> },
      { path: 'skills', element: <Professional.ProfessionalSkills /> },
      { path: 'goals', element: <Professional.GoalSetting /> },
      { path: 'networking', element: <Professional.Networking /> },
    ],
  },

  // Resume Section
  {
    path: 'resume',
    children: [
      { index: true, element: <ResumeIndex /> },
      { path: 'writing', element: <ResumeWriting /> },
      { path: 'templates', element: <ResumeTemplates /> },
      { path: 'targeting', element: <JobTargeting /> },
      { path: 'review', element: <ResumeReview /> },
    ],
  },

  // Trading Section
  {
    path: 'trading',
    children: [
      { index: true, element: <TradingPage /> },
      { path: 'fundamentals', element: <TradingFundamentals /> },
      { path: 'technical-analysis', element: <TechnicalAnalysis /> },
      { path: 'strategies', element: <TradingStrategies /> },
      { path: 'risk-management', element: <RiskManagement /> },
    ],
  },
  // Academic Section
  {
    path: 'academic',
    children: [
      { index: true, element: <AcademicPage /> },
      { path: 'research-papers', element: <ResearchPapers /> },
      { path: 'thesis-writing', element: <ThesisWriting /> },
      { path: 'dissertation-support', element: <DissertationSupport /> },
      { path: 'literature-reviews', element: <LiteratureReviews /> },
      { path: 'creative-writing', element: <CreativeWriting /> },
      { path: 'editing-proofreading', element: <EditingProofreading /> },
      { path: 'script-writing', element: <ScriptWriting /> },
      { path: 'guides', children: [
        { path: 'research-methodology', element: <ResearchMethodology /> },
        { path: 'citation-styles', element: <CitationStyles /> },
        { path: 'thesis-statement', element: <ThesisStatement /> },
        { path: 'peer-review', element: <PeerReview /> },
        { path: 'screenplay-writing', element: <ScreenplayWriting /> },
        { path: 'storytelling', element: <Storytelling /> },
        { path: 'writing-standards', element: <WritingStandards /> },
      ]},
    ],
  },

  // Business Plans Section
  {
    path: 'business-plans',
    children: [
      { index: true, element: <BusinessPlansPage /> },
      { path: 'startup-plans', element: <StartupPlans /> },
      { path: 'nonprofit-grants', element: <NonprofitGrants /> },
      { path: 'government-contracts', element: <GovernmentContracts /> },
      { path: 'investment-proposals', element: <InvestmentProposals /> },
      { path: 'market-analysis', element: <MarketAnalysis /> },
      { path: 'financial-projections', element: <FinancialProjections /> },
      { path: 'grant-writing', element: <GrantWriting /> },
      { path: 'guides', children: [
        { path: 'market-research', element: <MarketResearch /> },
        { path: 'financial-projections', element: <FinancialProjectionsGuide /> },
        { path: 'grant-writing', element: <GrantWritingGuide /> },
        { path: 'grant-requirements', element: <GrantRequirements /> },
        { path: 'proposal-writing', element: <ProposalWriting /> },
        { path: 'market-analysis', element: <MarketAnalysisGuide /> },
      ]},
    ],
  },

  // Case Review Section
  {
    path: 'case-review',
    children: [
      { index: true, element: <CaseReviewPage /> },
      { path: 'criminal-analysis', element: <CriminalAnalysis /> },
      { path: 'civil-review', element: <CivilReview /> },
      { path: 'family-law', element: <FamilyLaw /> },
      { path: 'corporate-review', element: <CorporateReview /> },
      { path: 'guides', children: [
        { path: 'criminal-case-prep', element: <CriminalCasePrep /> },
        { path: 'civil-lawsuit', element: <CivilLawsuit /> },
        { path: 'navigating-divorce', element: <NavigatingDivorce /> },
        { path: 'business-protection', element: <BusinessProtection /> },
      ]},
    ],
  },

  // Contracts Section
  {
    path: 'contracts',
    children: [
      { index: true, element: <ContractsPage /> },
      { path: 'business-contracts', element: <BusinessContracts /> },
      { path: 'employment-contracts', element: <EmploymentContracts /> },
      { path: 'service-agreements', element: <ServiceAgreements /> },
      { path: 'partnership-agreements', element: <PartnershipAgreements /> },
      { path: 'licensing-agreements', element: <LicensingAgreements /> },
      { path: 'guides', children: [
        { path: 'contract-negotiation', element: <ContractNegotiation /> },
        { path: 'essential-clauses', element: <EssentialClauses /> },
        { path: 'contract-boilerplate', element: <ContractBoilerplate /> },
        { path: 'employment-contract', element: <EmploymentContractGuide /> },
        { path: 'ip-protection', element: <IPProtection /> },
        { path: 'regulatory-compliance', element: <RegulatoryCompliance /> },
        { path: 'risk-assessment', element: <RiskAssessment /> },
      ]},
    ],
  },

  // Courses Section
  {
    path: 'courses',
    children: [
      { index: true, element: <CoursesPage /> },
      { path: 'course-planning', element: <CoursePlanning /> },
      { path: 'content-creation', element: <ContentCreation /> },
      { path: 'assessment-design', element: <AssessmentDesign /> },
      { path: 'platform-setup', element: <PlatformSetup /> },
      { path: 'guides', children: [
        { path: 'learning-objectives', element: <LearningObjectives /> },
        { path: 'engaging-modules', element: <EngagingModules /> },
        { path: 'online-assessments', element: <OnlineAssessments /> },
        { path: 'student-engagement', element: <StudentEngagement /> },
        { path: 'platform-selection', element: <PlatformSelection /> },
        { path: 'technical-setup', element: <TechnicalSetup /> },
        { path: 'course-marketing', element: <CourseMarketing /> },
      ]},
    ],
  },

  // Digital Tools Section
  {
    path: 'digital-tools',
    children: [
      { path: 'project-management', element: <ProjectManagement /> },
      { path: 'workflow-automation', element: <WorkflowAutomation /> },
      { path: 'analytics-tools', element: <AnalyticsTools /> },
      { path: 'business-templates', element: <BusinessTemplates /> },
    ],
  },

  // Ebook Section
  {
    path: 'ebook',
    children: [
      { index: true, element: <EbookPage /> },
      { path: 'fiction-writing', element: <FictionWriting /> },
      { path: 'nonfiction-writing', element: <NonfictionWriting /> },
      { path: 'ebook-formatting', element: <EbookFormatting /> },
      { path: 'self-publishing', element: <SelfPublishing /> },
      { path: 'book-marketing', element: <BookMarketing /> },
    ],
  },

  // Ebooks Section
  {
    path: 'ebooks',
    children: [
      { path: 'fiction-writing', element: <FictionWritingEbooks /> },
      { path: 'nonfiction-books', element: <NonfictionBooks /> },
      { path: 'technical-manuals', element: <TechnicalManuals /> },
      { path: 'digital-publishing', element: <DigitalPublishing /> },
      { path: 'guides', children: [
        { path: 'ebook-formatting', element: <EbookFormattingGuide /> },
        { path: 'publishing-platforms', element: <PublishingPlatforms /> },
        { path: 'book-marketing', element: <BookMarketingGuide /> },
        { path: 'book-structure', element: <BookStructure /> },
      ]},
    ],
  },

  // Tools Section
  {
    path: 'tools',
    children: [
      { index: true, element: <ToolsPage /> },
      { path: 'project-management', element: <ProjectManagementTools /> },
      { path: 'workflow-automation', element: <WorkflowAutomationTools /> },
      { path: 'analytics-tools', element: <AnalyticsToolsPage /> },
      { path: 'business-templates', element: <BusinessTemplatesPage /> },
      { path: 'guides', children: [
        { path: 'project-management', element: <ProjectManagementGuide /> },
        { path: 'marketing-plan-generator', element: <MarketingPlanGenerator /> },
        { path: 'budgeting', element: <Budgeting /> },
      ]},
    ],
  },

  // Website Section
  {
    path: 'website',
    children: [
      { index: true, element: <WebsitePage /> },
      { path: 'web-design', element: <WebDesign /> },
      { path: 'development', element: <Development /> },
      { path: 'ecommerce', element: <Ecommerce /> },
      { path: 'maintenance', element: <Maintenance /> },
      { path: 'guides', children: [
        { path: 'platform-selection', element: <PlatformSelectionWebsite /> },
        { path: 'essential-elements', element: <EssentialElements /> },
        { path: 'landing-page', element: <LandingPage /> },
        { path: 'seo-optimization', element: <SEOOptimization /> },
        { path: 'performance-optimization', element: <PerformanceOptimization /> },
        { path: 'security-practices', element: <SecurityPractices /> },
      ]},
    ],
  },

  // Websites Section
// Digital Marketing Section
  {
    path: 'digital-marketing',
    children: [
      { index: true, element: <DigitalMarketingIndex /> },
      { path: 'guides', children: [
        { path: 'seo-strategy', element: <SEOStrategy /> },
        { path: 'content-marketing', element: <ContentMarketing /> },
        { path: 'email-marketing', element: <EmailMarketing /> },
        { path: 'social-media-management', element: <SocialMediaManagement /> },
      ]},
    ],
  },
  {
    path: 'websites',
    children: [
      { path: 'web-design', element: <WebDesignWebsites /> },
      { path: 'development', element: <DevelopmentWebsites /> },
      { path: 'ecommerce', element: <EcommerceWebsites /> },
      { path: 'maintenance', element: <MaintenanceWebsites /> },
      { path: 'guides', children: [
        { path: 'platform-selection', element: <PlatformSelectionWebsites /> },
        { path: 'seo-optimization', element: <SEOOptimizationWebsites /> },
        { path: 'performance-optimization', element: <PerformanceOptimizationWebsites /> },
        { path: 'security-practices', element: <SecurityPracticesWebsites /> },
      ]},
    ],
  },
];