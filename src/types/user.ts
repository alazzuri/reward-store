import { HistoryItemProps } from "./history";

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: HistoryItemProps[];
  createDate: string;
}
