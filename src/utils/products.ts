import { Product } from "../types/products";
import { User } from "../types/user";

export const getRemainingPoints: (
  requiredPoints: number,
  availablePoints: number
) => boolean | number = (requiredPoints, availablePoints = 0) => {
  if (!availablePoints || requiredPoints < availablePoints) return false;

  return (requiredPoints - availablePoints) * -1;
};

export const normalizedProductData: (
  products: Product[],
  user?: User
) => any[] = (
  products,
  user = { points: 0, id: "", name: "", redeemHistory: [], createDate: "" }
) =>
  products.map((product) => ({
    ...product,
    remainingPoints: getRemainingPoints(product.cost, user.points),
  }));
