import { useNavigate } from 'react-router-dom';

const ProjectCards = ({ allProjects, onSelect }: { allProjects: any[], onSelect: (p: any) => void }) => {
    const navigate = useNavigate();
    return (
      <div className="project-cards">
        {allProjects.slice(1).map((project) => (
          <div
            className="project-card"
            key={project.id}
            id="project-card-{project.id}"
            onClick={() => {
              onSelect(project);
              navigate(`/${project.slug}`);
            }}
          >
            <div className="project-title">
                {project.name}
            </div>
            <div className="project-image">
                <img 
                    src={`${import.meta.env.BASE_URL}${project.projectImageSource}`}
                    alt={project.name} 
                    className="project-cards-image"
                />
            </div>
            <div className="project-short-description">
                {project.shortDescription}
            </div>
            ---
            <div className="project-keywords"> {project.keywords} </div><br/>
            
            
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectCards;
  