import { createContext, useReducer } from "react";
import projectsContentData from "../assets/data/projects-content";

const INITIAL_STATE = {projectsContentData};

const displayProjectIDJustClicked = (state, action) => {
    const newProjectIDIndex = action.payload.newProjectID - 1; // Adjust index
    const returnObject = {
        ...state,
        projectsContentData: {
            ...state.projectsContentData, // Spread existing `projectsContentData`
            data: {
                ...state.projectsContentData.data, // Spread existing `data`
                selections: {
                    ...state.projectsContentData.data.selections, // Spread existing `selections`
                    currentIndexSelected: newProjectIDIndex, // Update only `currentIndexSelected`
                },
            },
        },
    };
    return returnObject;
};


const projectsContentReducer = (projectsContentState, projectsContentAction) => {
    switch(projectsContentAction.type) {
        case "CHANGE_PROJECT_DISPLAY_ID":
            return displayProjectIDJustClicked(projectsContentState, projectsContentAction);
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