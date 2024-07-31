import positivusLogo from '../assets/images/logos/positivus-white.svg';
import linkedInLogo from '../assets/images/logos/linkedIn.svg';
import facebookLogo from '../assets/images/logos/facebook.svg';
import twitterLogo from '../assets/images/logos/twitter.svg';
import Link from "./shared/Link.tsx";
import TextInput from "./shared/TextInput.tsx";
import Button from "./shared/Button.tsx";

const headerMenuOptions = ['About Us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

function Footer() {
  return (
    <div className="mt-[140px] rounded-t-[45px] bg-p-black p-14">
      <div className="flex items-center justify-between">
        <img src={positivusLogo} alt="positivus logo" className="max-w-[180px]" />
        <nav className="flex gap-6">
          {headerMenuOptions.map((option) => (
            <Link
              href="https://example.com"
              key={option}
              label={option}
              variant="grey"
              className="hover:text-p-green after:hidden underline"
            />
          ))}
        </nav>
        <div className="flex gap-4">
          <a href="https://example.com"><img src={linkedInLogo} alt="link to Linked In"/></a>
          <a href="https://example.com"><img src={facebookLogo} alt="link to Facebook"/></a>
          <a href="https://example.com"><img src={twitterLogo} alt="link to Twitter"/></a>
        </div>
      </div>
      <div className="flex justify-between mt-14 text-white">
        <div className="flex flex-col gap-6 max-w-[330px]">
          <h4 className="highlight-green text-black w-fit">Contact us:</h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className="flex items-center p-7 bg-p-grey-dark rounded-[14px]">
          <TextInput type="email" placeholder="Email" className="mt-0 bg-p-grey-dark border-white w-[285px]" />
          <Button className="ml-5 px-5 py-4" variant="green">
            Subscribe to news
          </Button>
        </div>
      </div>
      <hr className="my-14" />
      <p className="text-white">
        © 2023 Positivus. All Rights Reserved.
        <Link
          href="https://example.com"
          label="Privacy Policy"
          variant="grey"
          className="hover:text-p-green after:hidden underline ml-6"
        />
      </p>
    </div>
  );
}

export default Footer;