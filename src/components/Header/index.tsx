//REACT
import React, { useContext } from "react";

//CONTEXT
import { AppContext } from "../../context/AppContext";

//COMPONENTS
import MainLogo from "../MainLogo";
import DropDownButton from "../DropdownButton";

//ASSETS
import Logo from "../../assets/logos/main-logo.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//CONSTANTS
import { dropDownItems } from "../../constants/dropdown";

//HOOKS
import { useDropdown } from "../../hooks/useDropdown";

//UTILS
import { formatNumber } from "../../utils/data";

const Header: React.FC = () => {
  const { open, toggle, ref } = useDropdown();

  const {
    state: { user },
  } = useContext(AppContext);

  return (
    <header className="relative bg-white w-full p-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10">
            <MainLogo logoSrc={Logo} title="Rewards Store" />
            <div
              className="flex md:ml-10 md:pr-4 w-11/12 md:w-3/4 justify-end items-center"
              data-testId="user-info"
            >
              <p className="font-medium text-gray-900 flex mr-8">
                {user?.name}
              </p>
              <DropDownButton
                menuItems={dropDownItems}
                open={open}
                toggle={toggle}
                ref={ref}
              >
                <Coin />
                <span>{user ? formatNumber(user.points) : ""}</span>
                <ChevronDown />
              </DropDownButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
