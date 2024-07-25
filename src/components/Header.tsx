import { useState } from "react";
import logo from "../assets/images/logos/positivus-black.svg";
import burgerMenuIcon from "../assets/images/icons/burger-menu-icon.svg";
import closeIcon from "../assets/images/icons/close-icon.svg";
import Button from "./shared/Button.tsx";
import Link from "./shared/Link.tsx";

const headerMenuOptions = ['About Us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between mt-[60px]">
      <img src={logo} alt="Positivus Logo" />
      <button onClick={onToggleMenu}>
        <img src={isMenuOpen ? closeIcon : burgerMenuIcon} alt="Menu" className="desktop:hidden" />
      </button>
      <nav className={`
        flex flex-col justify-start desktop:flex-row desktop:justify-end items-center gap-6 desktop:gap-10 transition-all ease-in-out duration-300 overflow-hidden
        ${isMenuOpen
          ? 'flex-col mobile:max-desktop:fixed w-full h-full right-0 top-28 bg-white items-end z-10'
          : 'flex-col mobile:max-desktop:fixed w-full h-full -right-full top-28 bg-white items-end z-10'
        }
      `}>
        {headerMenuOptions.map((option) => (
          <Link href="https://example.com" key={option} label={option} variant="green" />
        ))}
        <Button label="Request a quote" variant="secondary" style="w-60 h-16" />
      </nav>
    </header>
  );
}

export default Header;
