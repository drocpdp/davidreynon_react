import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';

const LandingPage = () => {
  const params = useParams();
  const [projectIdx, setProjectIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  useEffect(() => {
    const param = params.project;
    if (param) {
      const index = PROJECTS.findIndex((p: { name: string; }) => p.name.toLowerCase().includes(param.toLowerCase()));
      setProjectIdx(index >= 0 ? index : 0);
    } else {
      setProjectIdx(0);
    }
  }, [params]);
  

  useEffect(() => {
    setSelectedProject(PROJECTS[projectIdx]);
  }, [projectIdx]);

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
