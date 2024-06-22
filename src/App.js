import "./App.css";
import { Banner } from "./components/Banner/Banner";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Skills } from "./components/SkillsSection/SkillSection";

function App() {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
