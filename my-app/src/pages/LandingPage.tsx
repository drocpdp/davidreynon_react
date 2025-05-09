import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';

const LandingPage = ({ initialProjectId }: { initialProjectId?: number }) => {
  const { slug } = useParams();

  const getInitialProject = () => {
    if (slug) {
      return PROJECTS.find((p) => p.slug === slug) || null;
    } else if (initialProjectId) {
      return PROJECTS.find((p) => p.id === initialProjectId) || PROJECTS[0];
    }
    return PROJECTS[0]; // homepage
  };

  const [selectedProject, setSelectedProject] = useState(getInitialProject);

  useEffect(() => {
    setSelectedProject(getInitialProject());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, initialProjectId]);

  if (!selectedProject) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="landing-page">
      <div className="top-menu">
        <div id="top-title-name" className="top-title">
          DAVID EYNON
        </div>
      </div>

      <DisplayContainer selectedProject={selectedProject} />
      <ProjectCards allProjects={PROJECTS} onSelect={setSelectedProject} />
    </div>
  );
};

export default LandingPage;


