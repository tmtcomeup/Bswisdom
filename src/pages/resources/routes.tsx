import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResourcesPage from '.';

// Academic Pages
import ResearchPapers from './academic/research-papers';
import ScriptWriting from './academic/script-writing';
import CreativeWriting from './academic/creative-writing';
import EditingProofreading from './academic/editing-proofreading';
import ThesisStatement from './academic/guides/thesis-statement';
import ScreenplayWriting from './academic/guides/screenplay-writing';
import Storytelling from './academic/guides/storytelling';

// Course Pages
import CoursePlanning from './courses/course-planning';
import ContentCreation from './courses/content-creation';
import PlatformSetup from './courses/platform-setup';
import EngagingModules from './courses/guides/engaging-modules';
import OnlineAssessments from './courses/guides/online-assessments';
import PlatformSelection from './courses/guides/platform-selection';

// Professional Pages
import LeadershipTraining from './professional/leadership-training';
import CareerCoaching from './professional/career-coaching';
import SkillsAssessment from './professional/skills-assessment';
import CareerDevelopmentPlan from './professional/guides/career-development-plan';
import LeadershipDevelopment from './professional/guides/leadership-development';
import SelfAssessment from './professional/guides/self-assessment';

// Tool Pages
import ProjectManagement from './tools/project-management';

const ResourceRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ResourcesPage />} />

      {/* Academic Routes */}
      <Route path="academic/research-papers" element={<ResearchPapers />} />
      <Route path="academic/script-writing" element={<ScriptWriting />} />
      <Route path="academic/creative-writing" element={<CreativeWriting />} />
      <Route path="academic/editing-proofreading" element={<EditingProofreading />} />
      <Route path="academic/guides/thesis-statement" element={<ThesisStatement />} />
      <Route path="academic/guides/screenplay-writing" element={<ScreenplayWriting />} />
      <Route path="academic/guides/storytelling" element={<Storytelling />} />

      {/* Course Routes */}
      <Route path="courses/course-planning" element={<CoursePlanning />} />
      <Route path="courses/content-creation" element={<ContentCreation />} />
      <Route path="courses/platform-setup" element={<PlatformSetup />} />
      <Route path="courses/guides/engaging-modules" element={<EngagingModules />} />
      <Route path="courses/guides/online-assessments" element={<OnlineAssessments />} />
      <Route path="courses/guides/platform-selection" element={<PlatformSelection />} />

      {/* Professional Routes */}
      <Route path="professional/leadership-training" element={<LeadershipTraining />} />
      <Route path="professional/career-coaching" element={<CareerCoaching />} />
      <Route path="professional/skills-assessment" element={<SkillsAssessment />} />
      <Route path="professional/guides/career-development-plan" element={<CareerDevelopmentPlan />} />
      <Route path="professional/guides/leadership-development" element={<LeadershipDevelopment />} />
      <Route path="professional/guides/self-assessment" element={<SelfAssessment />} />

      {/* Tools Routes */}
      <Route path="tools/project-management" element={<ProjectManagement />} />
    </Routes>
  );
};

export default ResourceRoutes;
