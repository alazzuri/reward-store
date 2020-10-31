//REACT
import React from "react";

//COMPONENTS
import DropDownButton from "../DropdownButton";
import Pagination from "../Pagination";

//ASSETS
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

//HOOKS
import { useDropdown } from "../../hooks/useDropdown";

//TYPESCRIPT
import { DropDownItem } from "../../types/dropdownMenu";

//LIBS
//@ts-ignore
import uuid from "react-uuid";

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

const renderFilterButtons = (
  filterItems: Array<{
    type: "category" | "price";
    defaultLabel: string;
    menuItems: DropDownItem[];
  }>,
  onHandleSelect: (e: any) => void,
  filters: { category?: string; price?: string }
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
        handleClick={onHandleSelect}
        buttonStyles={buttonStyles}
        labelStyles={`p-2 filter-button ${labelColor}`}
        dropdownColor={dropdownColor}
        key={uuid()}
      />
    );
  });

const FilterBar: React.FC<{
  filterItems: Array<any>;
  maxItems: number;
  currentItems: number;
  filters: { category?: string; price?: string };
  handlePrev: () => void;
  handleNext: () => void;
  handleSelect: (e: any) => void;
  handleClear: () => void;
}> = ({
  filters,
  filterItems,
  maxItems,
  currentItems,
  handleNext,
  handlePrev,
  handleSelect,
  handleClear,
}) => {
  return (
    <Pagination
      onClickPrev={handlePrev}
      onClickNext={handleNext}
      maxItems={maxItems}
      currentItems={currentItems}
    >
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row lg:items-center lg:border-l-2 justify-start px-6">
        <p className=" w-100 text-center mb-4 lg:mb-0 lg:w-2/12 text-gray-600">
          Sort By
        </p>
        <div className="w-full mb-4 lg:mb-0 lg:w-3/5 flex justify-around lg:justify-between">
          {renderFilterButtons(filterItems, handleSelect, filters)}
        </div>
        <button
          className="text-gray-600 hover:text-gray-700 lg:ml-6 mb-3 md:mb-0"
          onClick={handleClear}
        >
          Clear Filters
        </button>
      </div>
    </Pagination>
  );
};

export default FilterBar;
