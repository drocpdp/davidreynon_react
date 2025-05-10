import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';

const LandingPage = () => {
  const { slug } = useParams();

  const [selectedProject, setSelectedProject] = useState(() => {
    const found = PROJECTS.find(p => p.slug === slug);
    return found || PROJECTS[0];
  });

  useEffect(() => {
    const found = PROJECTS.find(p => p.slug === slug);
    setSelectedProject(found || PROJECTS[0]);
  }, [slug]);

  if (!selectedProject) return <div>Loading project...</div>;

  return (
    <div className="landing-page">
      <div className="top-menu">
        <div id="top-title-name" className="top-title">DAVID EYNON</div>
      </div>

      <DisplayContainer selectedProject={selectedProject} />
      <ProjectCards allProjects={PROJECTS} onSelect={setSelectedProject} />
    </div>
  );
};

export default LandingPage;
