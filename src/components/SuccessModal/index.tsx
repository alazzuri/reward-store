//REACT
import React from "react";

//LIBS
import Lottie from "react-lottie";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const SuccessModal: React.FC<{ earnedCoins: number; animationData: any }> = ({
  earnedCoins,
  animationData,
}) => {
  const { width, height } = useWindowSize();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pt-10">
      <p className="font-bold flex flex-col text-5xl text-gray-100 mb-8">
        <span className="mb-4">You got</span>
        <span>{`${earnedCoins.toLocaleString()} coins`}</span>
      </p>
      <Confetti width={width} height={height} />
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default SuccessModal;
