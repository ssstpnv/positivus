import Button from "./shared/Button.tsx";
import illustration from "../assets/images/illustrations/01.svg";


function AboutUs() {
  return (
    <div className="mt-[70px] flex justify-between">
      <div className="flex flex-col gap-9 text-left max-w-[530px]">
        <h1>Navigating the digital landscape for success</h1>
        <p className="text-xl">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <Button label="Book a consultation" variant="primary" style="px-9 py-5 w-fit" />
      </div>
      <img src={illustration} alt="About Us Illustration" />
    </div>
  );
}

export default AboutUs;