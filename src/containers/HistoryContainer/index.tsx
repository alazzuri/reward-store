//REACT
import React from "react";

//COMPONENTS
import HistoryItem from "../../components/HistoryItem";
import HistorySkeleton from "../../components/Skeletons/HistorySkeleton";

//LIBS
//@ts-ignore
import uuid from "react-uuid";

//TYPESCRIPT
import { HistoryItemProps } from "../../types/history";

export const TableHeading: React.FC = () => (
  <div className="md:w-3/4 mx-auto flex items-center justify-between rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-4 md:px-8 py-3 text-gray-700 font-bold my-3">
    <p className="flex flex-col text-xs sm:text-base pl-6 w-1/4">Photo</p>
    <p className="flex flex-col w-1/4 items-start text-xs sm:text-base">
      Product
    </p>
    <p className="text-xs sm:text-base sm:pl-10 w-1/4 flex justify-center">
      Date
    </p>
    <p className="text-red-600 flex items-center justify-end text-xs sm:text-base pr-8 w-1/4">
      Cost
    </p>
  </div>
);

export const LoadingSkeletons: React.FC<{ amount: number }> = ({ amount }) => {
  const itemsToRender = Array.from(new Array(amount));

  return (
    <>
      {itemsToRender.map(() => (
        <HistorySkeleton key={uuid()} />
      ))}
    </>
  );
};

export const HistoryCards: React.FC<{ historyItems: HistoryItemProps[] }> = ({
  historyItems,
}) => (
  <>
    {historyItems.map((product) => (
      <HistoryItem
        name={product.name}
        category={product.category}
        cost={product.cost}
        img={product.img}
        createDate={product.createDate}
        key={uuid()}
      />
    ))}
  </>
);

const HistoryContainer: React.FC<{ redeemHistory: HistoryItemProps[] }> = ({
  redeemHistory,
}) => {
  return (
    <section className="w-full mx-auto">
      <TableHeading />
      {redeemHistory.length ? (
        <HistoryCards historyItems={redeemHistory} />
      ) : (
        <LoadingSkeletons amount={16} />
      )}
    </section>
  );
};

export default HistoryContainer;
