//REACT
import React, { useEffect, useState } from "react";

//COMPONENTS
import PointPill from "../../components/PointPill";
import SuccessModal from "../../components/SuccessModal";

//ASSETS
import animationData from "../../assets/lotties/treasure-box-coine.json";

//LIBS
//@ts-ignore
import uuid from "react-uuid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//UITLS
import { pickRandomElement } from "../../utils/randomPicker";

//CONSTANTS
import { prizePoints } from "../../constants/earnPoints";

const PointsPicker: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [earnedCoins, setEarnedCoins] = useState<number | null>(null);

  const MySwal = withReactContent(Swal);

  const showSuccessNotification = async (earnedCoins: number) => {
    const sentNotification = await MySwal.fire({
      html: (
        <SuccessModal earnedCoins={earnedCoins} animationData={animationData} />
      ),
      background: "transparent",
      width: "100%",
      height: "100%",
      position: "top-start",
      showConfirmButton: false,
      onOpen: () => {
        setTimeout(() => MySwal.clickConfirm(), 5000);
      },
    });

    if (sentNotification)
      return MySwal.fire(<p>Coins added to your account</p>);
  };

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
      showSuccessNotification(earnedCoins);
    }
  }, [earnedCoins, isDisabled]);

  return (
    <div className="mx-auto h-screen flex flex-col items-center">
      <div className="mt-6 w-full py-16 flex flex-col items-center justify-center mb-2">
        <h2 className="w-3/4 text-4xl md:text-5xl text-gray-700">
          Test your luck!
        </h2>
        <h3 className="w-3/4 text-3xl md:text-4xl text-gray-600">
          {`Click the button and get some points :)`}
        </h3>
      </div>
      <div className="mx-auto w-11/12 md:w-1/2 lg:w-1/3 flex justify-center md:justify-between items-center py-6 flex-wrap">
        {prizePoints.map((number, index) => (
          <PointPill
            key={uuid()}
            number={number}
            selected={index === selectedIndex}
          />
        ))}
      </div>
      <button
        className={`rounded-full border px-6 py-2 mt-4 ${
          isDisabled
            ? "bg-lightblue text-gray-100 cursor-not-allowed border-gray-100"
            : "text-gray-800 hover:text-gray-600 border-gray-600"
        }`}
        onClick={pickRandomPrize}
        disabled={isDisabled}
      >
        <span>{isDisabled ? "Good Luck!" : "Get Points!"}</span>
      </button>
    </div>
  );
};

export default PointsPicker;
