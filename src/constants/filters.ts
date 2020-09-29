import { DropDownItem } from "../types/dropdownMenu";

const categories: DropDownItem[] = [{ title: "Sign out", type: "primary" }];
const price: DropDownItem[] = [
  { title: "Top To Bottom", type: "primary" },
  { title: "Bottom to Top", type: "primary" },
];

export const filterItems: Array<{
  type: "category" | "price";
  defaultLabel: string;
  menuItems: DropDownItem[];
}> = [
  { type: "category", defaultLabel: "All categories", menuItems: categories },
  { type: "price", defaultLabel: "Price", menuItems: price },
];
