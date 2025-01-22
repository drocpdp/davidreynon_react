import React, { useEffect, useState, useContext } from "react";
import './main-content.styles.scss';
import projectsContentData from '../../assets/data/projects-content';
import { ProjectsContentContext } from "../../contexts/projects-content.context";

const MainContent = () => {

    const [imageSrc, setImageSrc] = useState(null);
    const {projectsContentState, projectContentDispatch} = useContext(ProjectsContentContext);
    const currSelectedIndex = projectsContentState.projectsContentData.data.selections.currentIndexSelected;
    const currProject = projectsContentState.projectsContentData.data.allCards[currSelectedIndex];

    useEffect(() => {
        import(`../../assets/${currProject.projectImageSource}`)
          .then(image => {
            setImageSrc(image.default);
          })
          .catch(err => {
            console.error("Error loading image:", err);
          });
      }, [currProject.projectImageSource]);
    
    
    return (
        <div class="display-container">
                <div class="display-content-project-name">{currProject.name}</div>
            <div class="display-content-content-container-grid">
                <div class="display-content-image-container">
                    <img 
                        class="display-content-large-image" 
                        src={require(`../../assets/${currProject.projectImageSource}`)} 
                        alt={currProject.name}
                    />
                </div>
                <div class="display-content-content-container">
                    <div class="display-content-long-description">
                        {currProject.longDescription}
                    </div>
                    <div class="display-content-long-description">
                    {currProject.longDescription2}
                    </div>
                    <div class="display-content-long-description">
                    {currProject.longDescription3}
                    </div>
                    <div class="display-content-long-description">
                    {currProject.longDescription4}
                    </div>                    
                    <div class="display-content-project-url-container">
                        <a href="" class="display-content-project-url">{currProject.projectUrl}</a>
                    </div>
                    <div class="display-content-project-keywords">
                        {currProject['keywords']}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
