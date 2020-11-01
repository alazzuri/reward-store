//REACT
import React from "react";

//ASSETS
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//UTILS
import { formatNumber } from "../../utils/data";

const PointPill: React.FC<{ number: number; selected?: boolean }> = ({
  number,
  selected = false,
}) => (
  <figure
    className={`rounded-full border-2 text-sm md:text-base w-auto font-bold flex p-4 mx-1 my-4 items-center ${
      selected && "bg-lightblue text-gray-100"
    }`}
    data-testId="pill-container"
  >
    <span className="mr-2">{formatNumber(number)}</span>
    <Coin />
  </figure>
);

export default PointPill;
