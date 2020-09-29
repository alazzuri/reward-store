import React from "react";
import Card from "../../components/Card";

const products = [
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
  {
    name: "Kodak 234",
    category: "Cameras",
    cost: 10000,
    imgSrc: " https://picsum.photos/200",
  },
];

const ProductsContainer = () => {
  return (
    <section className="w-11/12 cards-container mx-auto">
      {products.map((product) => (
        <Card
          name={product.name}
          category={product.category}
          requiredPoints={product.cost}
          onHandleClick={() => alert("lala")}
          imgSrc={product.imgSrc}
          remainingPoints={3000}
        />
      ))}
    </section>
  );
};

export default ProductsContainer;
