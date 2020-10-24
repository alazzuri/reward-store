//REACT
import React, { useContext, useEffect } from "react";

//CONTEXT
import { AppContext } from "../../context/AppContext";

//COMPONENTS
import Banner from "../../components/Banner";
import FilterBar from "../../components/FilterBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import ProductsContainer from "../../containers/ProductsContainer";

//ASSETS
import MainImage from "../../assets/images/header-x1.png";
import MainImage2x from "../../assets/images/header-x2.png";

//HOOKS
import useFetch from "../../hooks/useFetch";

//TYPES
import { Product } from "../../types/products";

//UTILS
import { API_URL } from "../../constants/api";
import { getDefaultHeaders } from "../../utils/headers";

const ProductsPage = () => {
  const {
    data: productsData,
    hasError,
    errorMessage,
    executeFetch,
  }: {
    data: Product[];
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
    executeFetch: () => void;
  } = useFetch(`${API_URL}/products`, getDefaultHeaders());

  const {
    state: { products },
    setState,
  } = useContext(AppContext);

  useEffect(() => {
    if (!products) executeFetch();

    if (productsData) {
      setState((prevState: any) => ({
        ...prevState,
        products: productsData,
      }));
    } else if (hasError) {
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }, [productsData, hasError, products]);

  return (
    <>
      <Header />
      <Banner
        title="Electronics"
        imgSrc={MainImage}
        srcSet={`${MainImage2x} 2x`}
      />
      <FilterBar />
      <ProductsContainer />
      <Pagination />
      <Footer />
    </>
  );
};

export default ProductsPage;
