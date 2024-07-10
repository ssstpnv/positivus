import './App.css';
import Header from './Header';
import AboutUsSection from "./AboutUsSection.tsx";
import TeamSection from './TeamSection.tsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <AboutUsSection />
      <TeamSection />
    </div>
  )
}

export default App
