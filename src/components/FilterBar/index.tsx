//REACT
import React, { useState } from "react";

//COMPONENTS
import DropDownButton from "../DropdownButton";
import Pagination from "../Pagination";

//ASSETS
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

//HOOKS
import { useDropdown } from "../../hooks/useDropdown";

//TYPESCRIPT
import { DropDownItem } from "../../types/dropdownMenu";

//CONSTANTS
import { filterItems } from "../../constants/filters";

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
      const buttonStyles = filters[item.type] && "bg-lightblue";
      const dropdownColor = filters[item.type] ? "white" : "gray";

      const labelColor = filters[item.type]
        ? "text-gray-100"
        : "text-gray-700 hover:text-gray-600";

      return (
        <FilterButton
          itemType={item.type}
          menuItems={item.menuItems}
          label={label}
          handleClick={onSelectFilter}
          buttonStyles={buttonStyles}
          labelStyles={`p-2 filter-button ${labelColor}`}
          dropdownColor={dropdownColor}
        />
      );
    });

  return (
    <Pagination>
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row lg:items-center lg:border-l-2 justify-start px-6">
        <p className=" w-100 text-center mb-4 lg:mb-0 lg:w-2/12 text-gray-600">
          Sort By
        </p>
        <div className=" w-full mb-4 lg:mb-0 lg:w-3/5 flex justify-around lg:justify-between">
          {renderFilterButtons(filterItems)}
        </div>
      </div>
    </Pagination>
  );
};

export default FilterBar;
