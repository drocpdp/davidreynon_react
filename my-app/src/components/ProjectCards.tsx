import { getAssetUrl } from '../utils/assets';

const ProjectCards = ({ allProjects, onSelect }: { allProjects: any[], onSelect: (p: any) => void }) => {
    return (
      <div className="project-cards">
        {allProjects.slice(1).map((project) => (
          <div
            className="project-card"
            key={project.id}
            id="project-card-{project.id}"
            onClick={() => onSelect(project)}
          >
            <div className="project-title">
                {project.name}
            </div>
            <div className="project-image">
                <img src= {getAssetUrl(project.projectImageSource)}
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
  