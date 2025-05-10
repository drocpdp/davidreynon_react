import { useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import DisplayContainer from '../components/DisplayContainer';
import ProjectCards from '../components/ProjectCards';
import PageNotFound from './PageNotFound';

const LandingPage = () => {
  const { slug } = useParams();

  const selectedProject = slug
    ? PROJECTS.find((p) => p.slug === slug)
    : PROJECTS[0];

  if (slug && !selectedProject) {
    return <PageNotFound />;
  }

  return (
    <div className="landing-page">
      <div className="top-menu">
        <div id="top-title-name" className="top-title">DAVID EYNON</div>
      </div>

      <DisplayContainer selectedProject={selectedProject} />
      <ProjectCards allProjects={PROJECTS} onSelect={() => {}} />
    </div>
  );
};

export default LandingPage;
