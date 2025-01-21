import React from "react";
import { useContext, useEffect } from "react";
import './project-cards.styles.scss';
import { ProjectsContentContext } from "../../contexts/projects-content.context";

const ProjectCards = () => {

    const {projectsContentState, projectsContentDispatch} = useContext(ProjectsContentContext);

    return (

        <div class="project-cards">
            
            {projectsContentState.projectsContentData.data.allCards
                .slice(1)
                .map((card) => ( 
                        <div 
                            class="project-card" 
                            key={card.id}
                            onClick = {ev => {
                                                projectsContentDispatch(
                                                    {
                                                        type:"CHANGE_PROJECT_DISPLAY_ID",
                                                        payload:{"newProjectID": card.id}    
                                                    }
                                                )
                                               }
                            }   
                        >
                            
                            <div class="project-title">{card.name}</div>
                            <div class="project-image">
                                <img 
                                    class="project-cards-image" 
                                    src={require(`../../assets/${card.projectImageSource}`)}
                                    alt="not found image"
                                />
                            </div>
                            <div class="project-short-description">
                                {card.shortDescription}
                            </div>
                            ---
                            <div class="project-keywords">
                                {card.keywords}
                            </div>
                            <br/>
                        </div>
                    )
                )
            };
            
        </div>
        
        )
};

export default ProjectCards;