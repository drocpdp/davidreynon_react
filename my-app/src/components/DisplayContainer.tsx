

const DisplayContainer = ({ selectedProject }: { selectedProject: any }) => {
  return (
    <div className="display-container">
      <div
        id="display-container-project-name"
        className="display-content-project-name"
      >
        {selectedProject.name}
      </div>

      <div className="display-content-content-container-grid">
        <div className="display-content-image-container">
          <img
            src={selectedProject.projectImageSource}
            alt={selectedProject.name}
            className="display-content-large-image"
          />
        </div>

        <div className="display-content-content-container">
          {selectedProject.longDescription && (
            <div
              id="display-container-content-long-description"
              className="display-content-long-description"
            >
              {selectedProject.longDescription}
            </div>
          )}
          {selectedProject.longDescription2 && (
            <div
              id="display-container-content-long-description-2"
              className="display-content-long-description"
            >
              {selectedProject.longDescription2}
            </div>
          )}
          {selectedProject.longDescription3 && (
            <div
              id="display-container-content-long-description-3"
              className="display-content-long-description"
            >
              {selectedProject.longDescription3}
            </div>
          )}
          {selectedProject.longDescription4 && (
            <div
              id="display-container-content-long-description-4"
              className="display-content-long-description"
            >
              {selectedProject.longDescription4}
            </div>
          )}
        <div
            className="display-content-project-url-container"
            id="display-container-content-url"
        >
            <a className="display-content-project-url"
                href={selectedProject.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
            >{selectedProject.projectUrl}
            </a>
        </div>

        <div
            className="display-content-project-keywords"
            id="display-container-content-project-keywords"
        >
            {selectedProject.keywords}
        </div>

                      
        </div>
        
      </div>
      
    </div>
  );
};

export default DisplayContainer;

  