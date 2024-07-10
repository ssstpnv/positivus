import logo from '../assets/images/logo/positivus-black.svg';
import Button from "./shared/Button.tsx";
import Link from "./shared/Link.tsx";

const headerMenuOptions = ['About Us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

function Header () {
  return (
    <header className="flex items-center justify-between mt-[60px]">
      <img src={logo} alt="Positivus Logo" />
      <nav className="flex items-center gap-10">
        {headerMenuOptions.map((option) => (
          <Link href="https://example.com" key={option} label={option} />
        ))}
        <Button label="Request a quote" variant="secondary" style="w-60 h-16" />
      </nav>
    </header>
  );
}

export default Header;
