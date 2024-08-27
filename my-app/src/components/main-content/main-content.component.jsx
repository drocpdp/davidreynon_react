import React, { useEffect, useState } from "react";
import './main-content.styles.scss';
import projectData from '../../assets/data/projects-content.json';

const MainContent = () => {

    const [imageSrc, setImageSrc] = useState(null);
    const currProject = projectData[4];
    
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
                    <img class="display-content-large-image" src={imageSrc} />
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
