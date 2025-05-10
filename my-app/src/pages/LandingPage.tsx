import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';

const LandingPage = () => {
  const { slug } = useParams();

  // Find matching project based on slug
  const match = slug ? PROJECTS.find(p => p.slug === slug) : PROJECTS[0];

  // Redirect only if slug is present and no match was found
  if (slug && !match) {
    return <Navigate to="/not-found" replace />;
  }

  // Track selected project in state
  const [selectedProject, setSelectedProject] = useState(match);

  // Update selected project when URL slug changes
  useEffect(() => {
    if (match) {
      setSelectedProject(match);
    }
  }, [match]);

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
