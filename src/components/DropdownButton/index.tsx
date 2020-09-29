//REACT
import React, { Dispatch, RefObject, SetStateAction } from "react";

//ROUTER
import { Link } from "react-router-dom";

//COMPONENTS
import PillButton from "../PillButton";

//TYPESCRIPT
import { DropDownItem } from "../../types/dropdownMenu";

export const DropDownMenu: React.FC<{
  menuItems: DropDownItem[];
  handleClick?: (e: any) => void;
  itemType?: string;
}> = ({ menuItems, handleClick, itemType = "" }) => {
  const itemClassNames = {
    primary:
      "block w-full text-left px-4 py-2 text-sm leading-5 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",

    secondary:
      "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",
  };

  const renderMenuItems = (items: DropDownItem[]) =>
    items.map((item) =>
      item.path ? (
        <Link
          to={item.path}
          className={itemClassNames[item.type]}
          key={`item-${item.title}-${item.type}`}
        >
          {item.title}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={itemClassNames[item.type]}
          key={`item-${item.title}-${item.type}`}
          data-itemType={itemType}
        >
          {item.title}
        </button>
      )
    );

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
  menuItems: DropDownItem[];
  open: boolean;
  toggle: () => void;
  ref?: RefObject<HTMLDivElement>;
  handleClick?: (e: any) => void;
  disableOutside?: Dispatch<SetStateAction<boolean>>;
  itemType?: string;
  styles?: string;
}> = ({
  menuItems,
  open,
  toggle,
  ref,
  children,
  handleClick = () => {},
  disableOutside = () => {},
  itemType = "",
  styles = "",
}) => {
  return (
    <div
      className="relative inline-block text-left z-50"
      ref={ref}
      onMouseEnter={() => disableOutside(true)}
      onMouseLeave={() => disableOutside(false)}
    >
      <div>
        <PillButton onHandleClick={toggle} styles={styles}>
          {children}
        </PillButton>
      </div>
      {open && (
        <DropDownMenu
          menuItems={menuItems}
          handleClick={handleClick}
          itemType={itemType}
        />
      )}
    </div>
  );
};

export default DropDownButton;
