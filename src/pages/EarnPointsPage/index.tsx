//REACT
import React from "react";

//COMPONENTS
import Header from "../../components/Header";
import PointsPicker from "../../components/PointsPicker";
import Footer from "../../components/Footer";

const EarnPointsPage: React.FC = () => {
  return (
    <>
      <Header />
      <PointsPicker />
      <Footer />
    </>
  );
};

export default EarnPointsPage;
