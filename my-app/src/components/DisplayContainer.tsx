
const DisplayContainer = ({ selectedProject }: { selectedProject: any }) => {
  if (!selectedProject) return null; // prevent rendering if no project is passed

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
            src={`${import.meta.env.BASE_URL}${selectedProject.projectImageSource}`}
            alt={selectedProject.name}
            className="display-content-large-image"
          />
        </div>

        <div className="display-content-content-container">
          {[1, 2, 3, 4].map((n) => {
            const key = `longDescription${n === 1 ? '' : n}` as keyof typeof selectedProject;
            return (
              selectedProject[key] && (
                <div
                  key={key}
                  id={`display-container-content-${key}`}
                  className="display-content-long-description"
                >
                  {selectedProject[key]}
                </div>
              )
            );
          })}

          {selectedProject.projectUrl && (
            <div
              className="display-content-project-url-container"
              id="display-container-content-url"
            >
              <a
                className="display-content-project-url"
                href={selectedProject.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.projectUrl}
              </a>
            </div>
          )}

          {selectedProject.keywords && (
            <div
              className="display-content-project-keywords"
              id="display-container-content-project-keywords"
            >
              {selectedProject.keywords}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayContainer;
