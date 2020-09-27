//REACT
import React from "react";

//COMPONENTS
import MainLogo from "../MainLogo";
import DropDownButton from "../DropdownButton";
import Banner from "../Banner";

//ASSETS
import Logo from "../../assets/logos/aerolab-logo.svg";
import MainImage from "../../assets/images/header-x1.png";
import MainImage2x from "../../assets/images/header-x2.png";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//CONSTANTS
import { dropDownItems } from "../../constants/dropdown";

//HOOKS
import { useDropdown } from "../../hooks/useDropdown";

const Header = () => {
  const { open, toggle, ref } = useDropdown();

  return (
    <header className="relative bg-white w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <MainLogo logoSrc={Logo} />
              </div>
            </div>
            <div className="flex md:ml-10 md:pr-4 w-3/4 justify-end items-center">
              <p className="font-medium text-gray-900 flex mr-8">Julia Coi</p>
              <DropDownButton
                menuItems={dropDownItems}
                open={open}
                toggle={toggle}
                ref={ref}
              >
                <Coin />
                <span>5000</span>
                <ChevronDown />
              </DropDownButton>
            </div>
          </nav>
        </div>
      </div>
      <Banner
        title="Electronics"
        imgSrc={MainImage}
        srcSet={`${MainImage2x} 2x`}
      />
    </header>
  );
};

export default Header;
