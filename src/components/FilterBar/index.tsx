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

const categories: DropDownItem[] = [{ title: "Sign out", type: "primary" }];
const price: DropDownItem[] = [
  { title: "Top To Bottom", type: "primary" },
  { title: "Bottom to Top", type: "primary" },
];

const FilterBar: React.FC = () => {
  const {
    open: categoriesOpen,
    toggle: toggleCategories,
    ref: categoriesRef,
    setDisabled: disableInCategories,
  } = useDropdown();
  const {
    open: priceOpen,
    toggle: togglePrice,
    ref: priceRef,
    setDisabled: disableInPrice,
  } = useDropdown();

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

  const categoryLabel = filters.category || "All categories";
  const priceLabel = filters.price || "Price";

  return (
    <div className="w-11/12 mt-16 mb-4 pb-6 flex flex-row items-center justify-start mx-auto border-b-2">
      <p className="w-1/4 px-3 text-lg text-gray-700">16 of 32 products</p>
      <div className="w-3/4 flex items-center border-l-2 justify-start px-6">
        <p className="w-auto text-gray-600">Sort By</p>
        <div className="w-3/5 flex justify-evenly">
          <DropDownButton
            menuItems={categories}
            open={categoriesOpen}
            toggle={toggleCategories}
            ref={categoriesRef}
            disableOutside={disableInCategories}
            handleClick={onSelectFilter}
            itemType="category"
            styles={filters.category && "bg-lightblue"}
          >
            <span
              className={`p-2 filter-button ${
                filters.category
                  ? "text-gray-100"
                  : "text-gray-700 hover:text-gray-600"
              }`}
            >
              {categoryLabel}
            </span>
            <ChevronDown color={filters.category ? "white" : "gray"} />
          </DropDownButton>
          <DropDownButton
            menuItems={price}
            open={priceOpen}
            toggle={togglePrice}
            ref={priceRef}
            disableOutside={disableInPrice}
            handleClick={onSelectFilter}
            itemType="price"
            styles={filters.price && "bg-lightblue"}
          >
            <span
              className={`p-2 filter-button ${
                filters.price
                  ? "text-gray-100"
                  : "text-gray-700 hover:text-gray-600"
              }`}
            >
              {priceLabel}
            </span>
            <ChevronDown color={filters.price ? "white" : "gray"} />
          </DropDownButton>
        </div>
      </div>
      <div className="flex w-1/6 flex justify-around">
        <ChevronLeft className="cursor-pointer transform hover:scale-105" />
        <ChevronRigth className="cursor-pointer transform hover:scale-105" />
      </div>
    </div>
  );
};

export default FilterBar;
