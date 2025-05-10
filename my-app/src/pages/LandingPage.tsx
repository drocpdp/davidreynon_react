import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';

const LandingPage = () => {
  const { slug } = useParams();

  const match = slug ? PROJECTS.find(p => p.slug === slug) : PROJECTS[0];

  if (slug && !match) {
    return <Navigate to="/not-found" replace />;
  }

  const [selectedProject, setSelectedProject] = useState(match);

  useEffect(() => {
    if (slug && match) {
      setSelectedProject(match);
    }
  }, [slug]);

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
