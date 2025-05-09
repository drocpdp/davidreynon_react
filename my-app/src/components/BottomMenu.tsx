const BottomMenu = () => {
  return (
    <div id="bottom-menu-container" className="bottom-menu">
      <a id="bottom-menu-about-me-link" href="/">About Me</a> |{" "}
      <a
        id="bottom-menu-linkedin-link"
        href="https://linkedin.com/in/daveqa"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>{" "}
      |{" "}
      <a
        id="bottom-menu-github-link"
        href="https://github.com/drocpdp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{" "}
      |{" "}
      <a
        id="bottom-menu-bitbucket-link"
        href="https://bitbucket.com/drocpdp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bitbucket
      </a>{" "}
      -- Copyright <span id="copyright_year">{new Date().getFullYear()}</span> - David Eynon
    </div>
  );
};

export default BottomMenu;
