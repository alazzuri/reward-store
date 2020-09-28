//REACT
import React, { useState } from "react";

//COMPONENTS
import DropDownButton from "../DropdownButton";

//ASSETS
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ChevronRigth } from "../../assets/icons/arrow-right.svg";

//HOOKS
import { useDropdown } from "../../hooks/useDropdown";

//TYPESCRIPT
import { DropDownItem } from "../../types/dropdownMenu";

///MOCKED DATA
const categories: DropDownItem[] = [{ title: "Sign out", type: "primary" }];
const price: DropDownItem[] = [
  { title: "Top To Bottom", type: "primary" },
  { title: "Bottom to Top", type: "primary" },
];

const filterItems: Array<{
  type: "category" | "price";
  defaultLabel: string;
  menuItems: DropDownItem[];
}> = [
  { type: "category", defaultLabel: "All categories", menuItems: categories },
  { type: "price", defaultLabel: "Price", menuItems: price },
];

export const FilterButton: React.FC<{
  menuItems: DropDownItem[];
  handleClick: (e: any) => void;
  itemType: string;
  buttonStyles?: string;
  labelStyles?: string;
  label: string;
  dropdownColor?: string;
}> = ({
  menuItems,
  handleClick,
  itemType,
  buttonStyles,
  labelStyles,
  label,
  dropdownColor,
}) => {
  const { open, toggle, ref, setDisabled } = useDropdown();
  return (
    <DropDownButton
      menuItems={menuItems}
      open={open}
      toggle={toggle}
      ref={ref}
      disableOutside={setDisabled}
      handleClick={handleClick}
      itemType={itemType}
      styles={buttonStyles}
    >
      <span className={labelStyles}>{label}</span>
      <ChevronDown color={dropdownColor} />
    </DropDownButton>
  );
};

const FilterBar: React.FC = () => {
  const [filters, setFilters] = useState<{ category?: string; price?: string }>(
    {}
  );

  const onSelectFilter = (e: any) => {
    const {
      dataset: { itemtype },
      textContent,
    } = e.target;

    setFilters((prevState) => ({ ...prevState, [itemtype]: textContent }));
  };

  const renderFilterButtons = (
    filterItems: Array<{
      type: "category" | "price";
      defaultLabel: string;
      menuItems: DropDownItem[];
    }>
  ) =>
    filterItems.map((item) => {
      const label = filters[item.type] || item.defaultLabel;

      return (
        <FilterButton
          itemType={item.type}
          menuItems={item.menuItems}
          label={label}
          handleClick={onSelectFilter}
          buttonStyles={filters[item.type] && "bg-lightblue"}
          labelStyles={`p-2 filter-button ${
            filters[item.type]
              ? "text-gray-100"
              : "text-gray-700 hover:text-gray-600"
          }`}
          dropdownColor={filters[item.type] ? "white" : "gray"}
        />
      );
    });

  return (
    <div className="w-11/12 mt-16 mb-4 pb-6 flex flex-col lg:flex-row items-center justify-start mx-auto border-b-2">
      <p className="w-100 mb-4 lg:mb-0 lg:w-1/4 px-3 text-lg text-gray-700">
        16 of 32 products
      </p>
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row lg:items-center lg:border-l-2 justify-start px-6">
        <p className=" w-100 text-center mb-4 lg:mb-0 lg:w-2/12 text-gray-600">
          Sort By
        </p>
        <div className=" w-full mb-4 lg:mb-0 lg:w-3/5 flex justify-around lg:justify-between">
          {renderFilterButtons(filterItems)}
        </div>
      </div>
      <div className="flex  w-1/2 lg:w-1/6 flex justify-around">
        <ChevronLeft className="cursor-pointer transform hover:scale-105" />
        <ChevronRigth className="cursor-pointer transform hover:scale-105" />
      </div>
    </div>
  );
};

export default FilterBar;
