import Header from './Header';
import AboutUs from "./AboutUs.tsx";
import LogoCarousel from "./LogoCarousel.tsx";
import Services from "./Services.tsx";
import Promo from "./Promo.tsx";
import CaseStudies from "./CaseStudies.tsx";
import WorkingProcess from "./WorkingProcess.tsx";
import Team from './Team.tsx';
import Testimonials from "./Testimonials.tsx";
import ContactUs from "./ContactUs.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <div className="max-w-screen-desktop px-5 tablet:px-16 desktop:mx-auto">
      <Header />
      <AboutUs />
      <LogoCarousel />
      <Services />
      <Promo />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
