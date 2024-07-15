import Header from './Header';
import AboutUs from "./AboutUs.tsx";
import LogoCarousel from "./LogoCarousel.tsx";
import Services from "./Services.tsx";
import Promo from "./Promo.tsx";
import CaseStudies from "./CaseStudies.tsx";
import Team from './Team.tsx';

function App() {
  return (
    <div className="max-w-screen-desktop mx-5 desktop:mx-auto">
      <Header />
      <AboutUs />
      <LogoCarousel />
      <Services />
      <Promo />
      <CaseStudies />
      <Team />
    </div>
  )
}

export default App
