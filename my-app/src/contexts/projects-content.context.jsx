import { createContext, useReducer } from "react";
import projectsContentData from "../assets/data/projects-content";

const INITIAL_STATE = {projectsContentData};

const projectsContentReducer = (projectsContentState, projectsContentAction) => {
    switch(projectsContentAction.type) {
        default:
            return projectsContentState;
    }
}


export const ProjectsContentContext = createContext({
    
});

export const ProjectsContentContextProvider = ({ children }) => {

    const [projectsContentState, projectsContentDispatch] = useReducer(projectsContentReducer, INITIAL_STATE);

    const value = {
        projectsContentState,
        projectsContentDispatch
        
    };

    return <ProjectsContentContext.Provider value={value}> {children} </ProjectsContentContext.Provider>
};