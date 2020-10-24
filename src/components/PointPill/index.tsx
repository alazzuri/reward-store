//REACT
import React from "react";

//ASSETS
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

const PointPill: React.FC<{ number: number; selected?: boolean }> = ({
  number,
  selected,
}) => (
  <figure
    className={`rounded-full border-2 text-sm md:text-base w-auto font-bold flex p-4 mx-1 my-4 items-center ${
      selected && "bg-lightblue text-gray-100"
    }`}
  >
    <span className="mr-2">{number.toLocaleString()}</span>
    <Coin />
  </figure>
);

export default PointPill;
