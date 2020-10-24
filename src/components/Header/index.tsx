//REACT
import React, { useContext, useEffect } from "react";

//CONTEXT
import { AppContext } from "../../context/AppContext";

//COMPONENTS
import MainLogo from "../MainLogo";
import DropDownButton from "../DropdownButton";
import Spinner from "../Spinner";

//ASSETS
import Logo from "../../assets/logos/aerolab-logo.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//CONSTANTS
import { dropDownItems } from "../../constants/dropdown";
import { API_URL } from "../../constants/api";

//HOOKS
import { useDropdown } from "../../hooks/useDropdown";
import useFetch from "../../hooks/useFetch";

//UTILS
import { getDefaultHeaders } from "../../utils/headers";

//TYPESCRIPT
import { User } from "../../types/user";

const Header: React.FC = () => {
  const { open, toggle, ref } = useDropdown();
  const {
    data: userData,
    isLoading,
    hasError,
    errorMessage,
    executeFetch,
  }: {
    data: User;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
    executeFetch: () => void;
  } = useFetch(`${API_URL}/user/me`, getDefaultHeaders());

  const {
    state: { user },
    setState,
  } = useContext(AppContext);

  useEffect(() => {
    if (!user) executeFetch();

    if (userData) {
      setState((prevState) => ({ ...prevState, user: userData }));
    } else if (hasError) {
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }, [userData, hasError, user]);

  ///TODO - ver como juega con el products
  if (isLoading) return <Spinner />;

  return (
    <header className="relative bg-white w-full p-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <MainLogo logoSrc={Logo} />
              </div>
            </div>
            <div className="flex md:ml-10 md:pr-4 w-3/4 justify-end items-center">
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
                <span>{user?.points}</span>
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
