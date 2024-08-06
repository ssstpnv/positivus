import Button from "./shared/Button.tsx";
import illustration from "../assets/images/illustrations/01.svg";


function AboutUs() {
  return (
    <div className="mt-[70px] flex flex-col relative gap-3 tablet:gap-9 text-left">
      <h1 className="tablet:max-w-[50%]">
        Navigating the digital landscape for success
      </h1>
      <img
        src={illustration}
        alt="About Us Illustration"
        className="static tablet:max-h-none tablet:max-w-[50%] tablet:absolute tablet:right-0"
      />
      <p className="tablet:max-w-[50%]">
        Our digital marketing agency helps businesses grow and succeed online through a range of services including
        SEO, PPC, social media marketing, and content creation.
      </p>
      <Button className="w-full px-9 py-5 mt-5 tablet:w-fit tablet:m-0">
        Book a consultation
      </Button>
    </div>
  );
}

export default AboutUs;