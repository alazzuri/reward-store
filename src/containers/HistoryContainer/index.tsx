//REACT
import React from "react";

//COMPONENTS
import Card from "../../components/Card";
import HistoryItem from "../../components/HistoryItem";
import HistorySkeleton from "../../components/Skeletons/HistorySkeleton";

const products = [
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
    date: "23/05/2020",
  },
];

const HistoryContainer = () => {
  return (
    <section className="w-11/12 mx-auto">
      {products.map((product) => (
        <HistoryItem
          name={product.name}
          category={product.category}
          cost={product.cost}
          imgUrl={product.imgSrc}
          date={product.date}
        />
      ))}
      <HistorySkeleton />
    </section>
  );
};

export default HistoryContainer;
