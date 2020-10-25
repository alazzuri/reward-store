//REACT
import React, { useState } from "react";

//COMPONENTS
import PillButton from "../PillButton";

//ASSETS
import { ReactComponent as BuyWhite } from "../../assets/icons/buy-white.svg";
import { ReactComponent as BuyBlue } from "../../assets/icons/buy-blue.svg";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//UTILS
import { formatNumber } from "../../utils/data";

export const RedeemView: React.FC<{
  show: boolean;
  requiredPoints: number;
  buttonTitle?: string;
  onHandleClick: () => void;
}> = ({ show, requiredPoints, buttonTitle = "Redeem Now", onHandleClick }) => (
  <div className={show ? "block" : "hidden"} data-testid="container">
    <BuyWhite className="absolute right-0 mr-3 top-0 mt-3 z-50" />
    <figure className="w-full h-full absolute bg-lightblue top-0 left-0 flex justify-center items-center flex-col">
      <figcaption className="w-1/2 text-white text-3xl flex justify-center items-center h-auto">
        <span className="h-20 flex items-center">
          {formatNumber(requiredPoints)}
        </span>
        <Coin className="ml-2 h-full flex items-center mt-2" />
      </figcaption>
      <div className="w-3/4 opacity-1">
        <PillButton
          styles="py-3 font-bold text-lg bg-white"
          onHandleClick={onHandleClick}
        >
          {buttonTitle}
        </PillButton>
      </div>
    </figure>
  </div>
);

export const DefaultView: React.FC<{
  name: string;
  category: string;
  remainingPoints?: number | boolean;
  imgSrc: string;
}> = ({ name, category, remainingPoints, imgSrc }) => (
  <div>
    {!remainingPoints && (
      <BuyBlue className="absolute right-0 mr-4 top-0 mt-3" />
    )}
    <figure className="px-2 py-2">
      <figcaption className="w-auto p-0 absolute right-0 mr-4">
        {remainingPoints && (
          <PillButton styles="w-auto bg-gray-900 bg-opacity-50 border-none">
            <span className="text-sm mr-2 text-white">
              {`You need ${formatNumber(+remainingPoints)}`}
            </span>
            <Coin />
          </PillButton>
        )}
      </figcaption>
      <img
        className="w-auto mx-auto h-auto"
        src={imgSrc}
        alt={`product-${name}`}
      />
    </figure>
    <div className="py-4 border-t-2 border-gray-400">
      <div className="font-bold text-base mb-2 text-gray-500">{category}</div>
      <p className="text-gray-600 text-xl font-bold">{name}</p>
    </div>
  </div>
);

const Card: React.FC<{
  name: string;
  category: string;
  imgSrc: string;
  requiredPoints: number;
  remainingPoints?: number | boolean;
  onHandleClick: () => void;
}> = ({
  name,
  category,
  imgSrc,
  requiredPoints,
  remainingPoints,
  onHandleClick,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const toggleView = () => {
    setIsHover((prevState) => !prevState);
  };

  return (
    <div
      className={`max-w-sm rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-6 relative cursor-pointer transition-all duration-200 product-card ${
        isHover && "transform -translate-y-2 box-shadow-hover"
      }`}
      onMouseEnter={toggleView}
      onMouseLeave={toggleView}
    >
      <DefaultView
        name={name}
        category={category}
        imgSrc={imgSrc}
        remainingPoints={remainingPoints}
      />
      {!remainingPoints && (
        <RedeemView
          show={isHover}
          requiredPoints={requiredPoints}
          onHandleClick={onHandleClick}
        />
      )}
    </div>
  );
};

export default Card;
