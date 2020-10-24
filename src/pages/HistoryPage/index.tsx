//REACT
import React from "react";

//COMPONENTS
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HistoryContainer from "../../containers/HistoryContainer";

const HistoryPage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto w-11/12">
        <div className="mt-6 w-full py-16 flex flex-col items-center justify-center mb-6">
          <h2 className="w-3/4 text-4xl md:text-5xl text-gray-700">
            Hello There!
          </h2>
          <h3 className="w-3/4 text-3xl md:text-4xl text-gray-600">
            {`Hope you're enjoying these awesome products :)`}
          </h3>
        </div>
        <HistoryContainer />
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
