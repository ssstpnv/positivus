import './App.css';
import Header from './Header';
import AboutUs from "./AboutUs.tsx";
import LogoCarousel from "./LogoCarousel.tsx";
import Services from "./Services.tsx";
import Team from './Team.tsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <AboutUs />
      <LogoCarousel />
      <Services />
      <Team />
    </div>
  )
}

export default App
