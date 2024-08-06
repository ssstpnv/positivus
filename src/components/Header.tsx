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
    <header className="flex items-center justify-between mt-[30px] tablet:mt-[60px]">
      <img src={logo} alt="Positivus Logo" className="max-w-[144px] tablet:max-w-none" />
      <button onClick={onToggleMenu}>
        <img src={isMenuOpen ? closeIcon : burgerMenuIcon} alt="Menu" className="desktop:hidden" />
      </button>
      <nav className={`
        flex flex-col justify-start items-center fixed top-28 w-full h-full bg-white z-10 gap-6 pt-5
        tablet:w-1/2 tablet:pr-16 tablet:items-end
        desktop:flex-row desktop:static desktop:justify-end desktop:items-center desktop:gap-10 desktop:bg-transparent desktop:w-auto desktop:h-auto desktop:p-0
        transition-all ease-in-out duration-300 overflow-hidden
        ${isMenuOpen ? 'right-0' : '-right-full'}
      `}>
        {headerMenuOptions.map((option) => (
          <Link href="https://example.com" key={option} label={option} variant="green" />
        ))}
        <Button variant="white" className="w-60 h-16">Request a quote</Button>
      </nav>
    </header>
  );
}

export default Header;
