import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';


const LandingPage = ({ initialProjectId }: { initialProjectId?: number }) => {
  const defaultProject = PROJECTS.find((p: { id: number | undefined; }) => p.id === initialProjectId) || PROJECTS[0];
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const match = PROJECTS.find((p: { slug: string; }) => p.slug === slug);
      if (match) setSelectedProject(match);
    }
  }, [slug]);

  useEffect(() => {
    if (initialProjectId) {
      const project = PROJECTS.find((p: { id: number; }) => p.id === initialProjectId);
      if (project) setSelectedProject(project);
    }
  }, [initialProjectId]);

  return (
    <div className="landing-page">
      <div className="top-menu">
        <div id="top-title-name" className="top-title">
          DAVID EYNON
        </div>
      </div>

      <DisplayContainer selectedProject={selectedProject} />
      <ProjectCards
        allProjects={PROJECTS}
        onSelect={setSelectedProject}
      />
    </div>
  );
};

export default LandingPage;

