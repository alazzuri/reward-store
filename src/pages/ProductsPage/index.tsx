//REACT
import React, { useContext, useEffect, useState } from "react";

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
import { useGetFetch, usePostFetch } from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";

//UTILS
import { normalizedProductData } from "../../utils/products";
import {
  createFetchBody,
  getDefaultHeaders,
  getPostHeaders,
} from "../../utils/fetchOptions";

//CONSTANTS
import { API_URL } from "../../constants/api";
import { Product } from "../../types/products";
import { log } from "console";
import { createFilters, getCategories } from "../../utils/filters";

const ProductsPage = () => {
  const {
    data: productsData,
    hasError,
    errorMessage,
    executeFetch,
  } = useGetFetch(`${API_URL}/products`, getDefaultHeaders());

  const {
    executeFetch: redeemProduct,
    hasError: redeemError,
    errorMessage: redeemErrorMessage,
    data,
  } = usePostFetch();

  const {
    state: { products, user },
    setState,
  } = useContext(AppContext);

  const {
    itemsInPage,
    totalItems,
    currentData,
    nextPage,
    prevPage,
  } = usePagination(products || [], 16);

  const [filters, setFilters] = useState<{
    category?: string;
    price?: string;
  }>({});

  const productsCategories = getCategories(products);
  const dropdownFilterItems = createFilters(productsCategories);

  const onSelectFilter = (e: any) => {
    const {
      dataset: { itemtype },
      textContent,
    } = e.target;

    setFilters((prevState) => ({ ...prevState, [itemtype]: textContent }));
  };

  const onClearFilters = () => setFilters({});

  const onRedeemProduct = (productId: string) => {
    const body = createFetchBody(productId);
    redeemProduct(`${API_URL}/redeem`, getPostHeaders(), body);
  };

  useEffect(() => {
    if (!products) executeFetch();

    if (productsData) {
      setState((prevState: any) => ({
        ...prevState,
        products: normalizedProductData(productsData, user),
      }));
    } else if (hasError || redeemError) {
      console.error(errorMessage || redeemErrorMessage);
      throw new Error(errorMessage);
    }
  }, [productsData, hasError, redeemError]);

  return (
    <>
      <Header />
      <Banner
        title="Electronics"
        imgSrc={MainImage}
        srcSet={`${MainImage2x} 2x`}
      />
      <FilterBar
        handleNext={nextPage}
        handlePrev={prevPage}
        maxItems={totalItems}
        currentItems={itemsInPage}
        filterItems={dropdownFilterItems}
        handleSelect={onSelectFilter}
        filters={filters}
        handleClear={onClearFilters}
      />
      <ProductsContainer
        products={currentData()}
        onHandleRedeem={onRedeemProduct}
      />
      <Pagination
        onClickNext={nextPage}
        onClickPrev={prevPage}
        maxItems={totalItems}
        currentItems={itemsInPage}
      />
      <Footer />
    </>
  );
};

export default ProductsPage;
