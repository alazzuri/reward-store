//REACT
import React from "react";

//ASSETS
import { ReactComponent as ChevronLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ChevronRigth } from "../../assets/icons/arrow-right.svg";

const Pagination: React.FC<{
  onClickNext: () => void;
  onClickPrev: () => void;
  maxItems?: number;
  currentItems?: number;
}> = ({ children, onClickNext, onClickPrev, maxItems, currentItems }) => (
  <div
    className={`w-11/12 mt-16 mb-4 pb-6 flex flex-col lg:flex-row items-center mx-auto border-b-2 ${
      children ? "justify-start" : "justify-between"
    }`}
  >
    <p className="w-100 mb-4 lg:mb-0 lg:w-1/4 px-3 text-lg text-gray-700">
      {`${currentItems} of ${maxItems}`}
    </p>
    {children}
    <div className="flex  w-1/2 lg:w-1/6 flex justify-center">
      <ChevronLeft
        className="cursor-pointer mr-3 transform hover:scale-105"
        onClick={onClickPrev}
      />
      <ChevronRigth
        className="cursor-pointer transform hover:scale-105"
        onClick={onClickNext}
      />
    </div>
  </div>
);

export default Pagination;
