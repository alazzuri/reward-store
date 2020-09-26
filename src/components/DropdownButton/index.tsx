//REACT
import React, { RefObject } from "react";

//ROUTER
import { Link } from "react-router-dom";

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
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center items-center w-full rounded-full py-2 px-4 border border-gray-300 bg-gray-200 leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            onClick={toggle}
          >
            <Coin />
            <span>{points}</span>
            <ChevronDown />
          </button>
        </span>
      </div>
      {open && <DropDownMenu menuItems={menuItems} />}
    </div>
  );
};

export default DropDownButton;
