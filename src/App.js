import "./App.css";
import { Banner } from "./components/Banner/Banner";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { ProjectSection } from "./components/Projects/ProjectSection";
import { Skills } from "./components/SkillsSection/SkillSection";

function App() {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <Skills />
      <ProjectSection />
    </div>
  );
}

export default App;
