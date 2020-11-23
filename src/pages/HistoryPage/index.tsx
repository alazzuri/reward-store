//REACT
import React, { useContext } from "react";

//COMPONENTS
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import HistoryContainer from "../../containers/HistoryContainer";
import { AppContext } from "../../context/AppContext";
import usePagination from "../../hooks/usePagination";

const HistoryPage = () => {
  const {
    state: { user },
  } = useContext(AppContext);

  const {
    totalItems,
    itemsInPage,
    currentData,
    nextPage,
    prevPage,
  } = usePagination(user?.redeemHistory || [], 6);

  return (
    <>
      <Header />
      <div className="mx-auto w-11/12">
        <div className="mt-6 w-full py-8 md:py-16 flex flex-col items-center justify-center md:mb-6">
          <h2 className="w-3/4 text-4xl md:text-5xl text-gray-700">
            Hello There!
          </h2>
          <h3 className="w-3/4 text-3xl md:text-4xl text-gray-600">
            {`Hope you're enjoying these awesome products :)`}
          </h3>
        </div>
        <Pagination
          onClickNext={nextPage}
          onClickPrev={prevPage}
          currentItems={itemsInPage}
          maxItems={totalItems}
        />
        <HistoryContainer redeemHistory={currentData()} />
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
