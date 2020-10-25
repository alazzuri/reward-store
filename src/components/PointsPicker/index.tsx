//REACT
import React, { useEffect, useState } from "react";

//COMPONENTS
import PointPill from "../../components/PointPill";

//LIBS
//@ts-ignore
import uuid from "react-uuid";

//UITLS
import { pickRandomElement } from "../../utils/randomPicker";

//CONSTANTS
import { prizePoints } from "../../constants/earnPoints";

const PointPrizes: React.FC<{
  prizePoints: number[];
  selectedIndex: number | null;
}> = ({ prizePoints, selectedIndex }) => (
  <>
    {prizePoints.map((number, index) => (
      <PointPill
        key={uuid()}
        number={number}
        selected={index === selectedIndex}
      />
    ))}
  </>
);

const StartButton: React.FC<{
  isDisabled: boolean;
  handleClick: () => void;
}> = ({ isDisabled, handleClick }) => (
  <button
    className={`rounded-full border px-6 py-2 mt-4 mx-auto ${
      isDisabled
        ? "bg-lightblue text-gray-100 cursor-not-allowed border-gray-100"
        : "text-gray-800 hover:text-gray-600 border-gray-600"
    }`}
    onClick={handleClick}
    disabled={isDisabled}
  >
    <span>{isDisabled ? "Good Luck!" : "Get Points!"}</span>
  </button>
);

const PointsPicker: React.FC<{
  onFinishPicking: (earnedCoins: number) => void;
}> = ({ onFinishPicking }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [earnedCoins, setEarnedCoins] = useState<number | null>(null);

  const pickRandomPrize = () => {
    setIsDisabled(true);

    const interval = setInterval(() => {
      const { randomIndex, item } = pickRandomElement(prizePoints);
      setSelectedIndex(randomIndex);
      setEarnedCoins(item);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsDisabled(false);
    }, 5000);
  };

  useEffect(() => {
    if (earnedCoins && !isDisabled) {
      onFinishPicking(earnedCoins);
    }
  }, [earnedCoins, isDisabled]);

  return (
    <div className="mx-auto h-auto flex flex-col items-center">
      <div className="mx-auto w-full md:w-11/12 lg:w-1/3 flex justify-center items-center py-3 flex-wrap">
        <PointPrizes prizePoints={prizePoints} selectedIndex={selectedIndex} />
      </div>
      <StartButton isDisabled={isDisabled} handleClick={pickRandomPrize} />
    </div>
  );
};

export default PointsPicker;
