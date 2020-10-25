export interface Product {
  _id: string;
  remainingPoints: number | boolean | undefined;
  name: string;
  category: string;
  img: { url: string; hdUrl: string };
  cost: number;
}
