export interface DropDownItem {
  title: string;
  path?: string;
  type: "primary" | "secondary";
  handleClick?: () => void;
}
