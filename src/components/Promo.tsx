import Button from "./shared/Button.tsx";
import promoIllustration from "../assets/images/illustrations/promo-illustration.svg";

function Promo() {
  return (
    <div className="flex justify-between items-center relative mt-[140px] p-[60px] rounded-[45px] bg-p-grey">
      <div className="flex flex-col gap-6 max-w-[500px] text-left">
        <h3>Let’s make things happen</h3>
        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <Button label="Get your free proposal" variant="primary" style="px-9 py-5 w-fit" />
      </div>
      <img src={promoIllustration} alt="Promo Illustration" className="absolute right-32" />
    </div>
  );
}

export default Promo;