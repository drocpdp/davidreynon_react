import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div id="top-menu-container" className="top-menu">
      <Link 
        id="top-menu-about-me-link" to="/about">About Me</Link> |{" "}
      <a
        id="top-menu-linkedin-link"
        href="https://linkedin.com/in/daveqa"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>{" "}
      |{" "}
      <a
        id="top-menu-github-link"
        href="https://github.com/drocpdp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{" "}
      |{" "}
      <a
        id="top-menu-bitbucket-link"
        href="https://bitbucket.com/drocpdp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bitbucket
      </a>
    </div>
  );
};

export default TopMenu;
