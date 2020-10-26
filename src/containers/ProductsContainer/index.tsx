//REACT
import React from "react";

//COMPONENTS
import Card from "../../components/Card";
import CardSkeleton from "../../components/Skeletons/CardSkeleton";

//TYPESCRIPT
import { Product } from "../../types/products";

//LIBS
//@ts-ignore
import uuid from "react-uuid";

const LoadingSkeletons: React.FC<{ amount: number }> = ({ amount }) => {
  const itemsToRender = Array.from(new Array(amount));

  return (
    <>
      {itemsToRender.map(() => (
        <CardSkeleton key={uuid()} />
      ))}
    </>
  );
};

const ProductCards: React.FC<{
  products: Product[];
  handleClick: (productId: string) => void;
}> = ({ products, handleClick }) => {
  return (
    <>
      {products.map((product: Product) => (
        <Card
          name={product.name}
          category={product.category}
          requiredPoints={product.cost}
          onHandleClick={() => handleClick(product._id)}
          imgSrc={product.img.url}
          remainingPoints={product.remainingPoints}
          key={uuid()}
        />
      ))}
    </>
  );
};

const ProductsContainer: React.FC<{
  products: Product[];
  onHandleRedeem: (productId: string) => void;
}> = ({ products, onHandleRedeem }) => {
  return (
    <section className="w-11/12 cards-container mx-auto">
      {products.length ? (
        <ProductCards products={products} handleClick={onHandleRedeem} />
      ) : (
        <LoadingSkeletons amount={16} />
      )}
    </section>
  );
};

export default ProductsContainer;
