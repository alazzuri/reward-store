//REACT
import React from "react";

//COMPONENTS
import { ClimbingBoxLoader } from "react-spinners";

const Spinner: React.FC = () => (
  <div className="w-screen h-screen flex justify-center items-center bg-ligthblue fixed bg-gray-100 z-50 overflow-hidden">
    <ClimbingBoxLoader color="#718096" />
  </div>
);

export default Spinner;
