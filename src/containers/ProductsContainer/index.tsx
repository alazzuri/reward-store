//REACT
import React from "react";

//COMPONENTS
import Card from "../../components/Card";
import CardSkeleton from "../../components/Skeletons/CardSkeleton";

//TYPESCRIPT
import { Product } from "../../types/products";

const ProductsContainer: React.FC<{ products: Product[] }> = ({ products }) => {
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
      <CardSkeleton />
    </section>
  );
};

export default ProductsContainer;
