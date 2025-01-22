import FooterMenuComponent from "./components/footer/footer-menu/footer-menu.component";
import HeaderContainer from "./components/header-container/header-container.component";
import MainContent from "./components/main-content/main-content.component";
import ProjectCards from "./components/project-cards/project-cards.component";


function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContent />
      <ProjectCards />
      <FooterMenuComponent />
    </div>
  );
}

export default App;
