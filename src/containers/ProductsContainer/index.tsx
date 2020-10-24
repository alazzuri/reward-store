//REACT
import React, { useContext } from "react";

//CONTEXT
import { AppContext } from "../../context/AppContext";

//COMPONENTS
import Card from "../../components/Card";
import CardSkeleton from "../../components/Skeletons/CardSkeleton";

//TYPESCRIPT
import { Product } from "../../types/products";
import { User } from "../../types/user";

//LIBS
//@ts-ignore
import uuid from "react-uuid";

//UITLS
import { getRemainingPoints } from "../../utils/products";

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

const ProductCards: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      {products.map((product: Product) => (
        <Card
          name={product.name}
          category={product.category}
          requiredPoints={product.cost}
          onHandleClick={() => alert("lala")}
          imgSrc={product.img.url}
          remainingPoints={product.remainingPoints}
        />
      ))}
    </>
  );
};

const ProductsContainer: React.FC = () => {
  const {
    state: { products, user },
  }: {
    state: { user?: User | undefined; products?: Product[] | undefined };
  } = useContext(AppContext);

  const normalizedProductData: (products: Product[], user?: User) => any[] = (
    products,
    user = { points: 0, id: "", name: "", redeemHistory: [], createDate: "" }
  ) =>
    products.map((product) => ({
      ...product,
      remainingPoints: getRemainingPoints(product.cost, user.points),
    }));

  return (
    <section className="w-11/12 cards-container mx-auto">
      {products ? (
        <ProductCards products={normalizedProductData(products, user)} />
      ) : (
        <LoadingSkeletons amount={16} />
      )}
    </section>
  );
};

export default ProductsContainer;
