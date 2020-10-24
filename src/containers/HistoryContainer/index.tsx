//REACT
import React, { useContext } from "react";

//COMPONENTS
import HistoryItem from "../../components/HistoryItem";
import HistorySkeleton from "../../components/Skeletons/HistorySkeleton";
import { AppContext } from "../../context/AppContext";

//LIBS
//@ts-ignore
import uuid from "react-uuid";

//TYPESCRIPT
import { HistoryItemProps } from "../../types/history";

const TableHeading: React.FC = () => (
  <div className="md:w-3/4 mx-auto flex items-center justify-between rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-4 md:px-8 py-3 text-gray-700 font-bold my-3">
    <p className="flex flex-col text-sm md:text-base pl-2 md:pl-4">Photo</p>
    <p className="flex flex-col text-sm md:text-base pl-6 md:pl-8">Product</p>
    <p className="text-sm md:text-base pl-10">Date</p>
    <p className="text-red-600 flex items-center justify-center text-sm md:text-base px-12">
      Cost
    </p>
  </div>
);

const LoadingSkeletons: React.FC<{ amount: number }> = ({ amount }) => {
  const itemsToRender = Array.from(new Array(amount));

  return (
    <>
      {itemsToRender.map(() => (
        <HistorySkeleton key={uuid()} />
      ))}
    </>
  );
};

const HistoryCards: React.FC<{ historyItems: HistoryItemProps[] }> = ({
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
      />
    ))}
  </>
);

const HistoryContainer: React.FC = () => {
  const {
    state: { user },
  } = useContext(AppContext);

  console.log(user?.redeemHistory);

  return (
    <section className="w-full mx-auto">
      <TableHeading />
      {user?.redeemHistory.length ? (
        <HistoryCards historyItems={user.redeemHistory} />
      ) : (
        <LoadingSkeletons amount={16} />
      )}
    </section>
  );
};

export default HistoryContainer;
