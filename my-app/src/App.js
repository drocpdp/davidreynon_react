import FooterMenuComponent from "./components/footer/footer-menu/footer-menu.component";
import HeaderMenuComponent from "./components/header-banner/header-menu/header-menu.component";
import HeaderTitle from "./components/header-banner/header-title/header-title.component";
import MainContent from "./components/main-content/main-content.component";
import ProjectCards from "./components/project-cards/project-cards.component";


function App() {
  return (
    <div className="App">
      <HeaderMenuComponent />
      <HeaderTitle />
      <MainContent />
      <ProjectCards />
      <FooterMenuComponent />
    </div>
  );
}

export default App;
