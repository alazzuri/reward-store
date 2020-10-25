import { BOTTOM_TO_TOP, TOP_TO_BOTTOM } from "../constants/filters";
import { DropDownItem } from "../types/dropdownMenu";
import { Product } from "../types/products";

const createCategoryFilters: (categories: string[]) => DropDownItem[] = (
  categories
) => categories.map((category) => ({ title: category, type: "primary" }));

const createPriceFilters: (priceRules: string[]) => DropDownItem[] = (
  priceRule
) => priceRule.map((rule) => ({ title: rule, type: "primary" }));

export const createFilters: (
  categories?: string[],
  priceRules?: string[]
) => Array<{
  type: "category" | "price";
  defaultLabel: string;
  menuItems: DropDownItem[];
}> = (categories = [], priceRules = [TOP_TO_BOTTOM, BOTTOM_TO_TOP]) => [
  {
    type: "category",
    defaultLabel: "All categories",
    menuItems: createCategoryFilters(categories),
  },
  {
    type: "price",
    defaultLabel: "Price",
    menuItems: createPriceFilters(priceRules),
  },
];

export const sortByPrice = (products: Product[] = [], type: string) =>
  products.sort((product1, product2) =>
    type === BOTTOM_TO_TOP
      ? product1.cost - product2.cost
      : product2.cost - product1.cost
  );

export const sortByCategory = (products: Product[] = [], category: string) =>
  products.filter((product) => product.category === category);

export const getCategories = (products: Product[] = []) =>
  products?.reduce((acumulattor: string[], currentProduct: Product) => {
    if (acumulattor.includes(currentProduct.category)) return acumulattor;
    else return [...acumulattor, currentProduct.category];
  }, []);
