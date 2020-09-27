//REACT
import React, { RefObject } from "react";

//ROUTER
import { Link } from "react-router-dom";

//COMPONENTS
import PillButton from "../PillButton";

//ASSETS
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//TYPESCRIPT
import { DropDownItem } from "../../types/dropdownMenu";

export const DropDownMenu: React.FC<{ menuItems: DropDownItem[] }> = ({
  menuItems,
}) => {
  const itemClassNames = {
    primary:
      "block w-full text-left px-4 py-2 text-sm leading-5 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",

    secondary:
      "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",
  };

  const renderMenuItems = (items: DropDownItem[]) =>
    items.map((item) => (
      <Link to={item.path} className={itemClassNames[item.type]}>
        {item.title}
      </Link>
    ));

  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
      <div className="rounded-md bg-white shadow-xs">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {renderMenuItems(menuItems)}
        </div>
      </div>
    </div>
  );
};

const DropDownButton: React.FC<{
  points: number;
  menuItems: DropDownItem[];
  open: boolean;
  toggle: () => void;
  ref?: RefObject<HTMLDivElement>;
}> = ({ points, menuItems, open, toggle, ref }) => {
  return (
    <div className="relative inline-block text-left z-50" ref={ref}>
      <div>
        <PillButton onHandleClick={toggle}>
          <Coin />
          <span>{points}</span>
          <ChevronDown />
        </PillButton>
      </div>
      {open && <DropDownMenu menuItems={menuItems} />}
    </div>
  );
};

export default DropDownButton;
