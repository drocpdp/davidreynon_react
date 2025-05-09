import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';

const LandingPage = ({ initialProjectId }: { initialProjectId?: number }) => {
  const { slug } = useParams();

  const getInitialProject = () => {
    if (slug) {
      const match = PROJECTS.find((p) => p.slug === slug);
      return match || PROJECTS[0]; // fallback if slug not found
    } else if (initialProjectId) {
      const match = PROJECTS.find((p) => p.id === initialProjectId);
      return match || PROJECTS[0]; // fallback if ID not found
    }
    return PROJECTS[0]; // homepage default
  };

  const [selectedProject, setSelectedProject] = useState(getInitialProject);

  // Update project when slug changes (navigation)
  useEffect(() => {
    setSelectedProject(getInitialProject());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, initialProjectId]);

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

