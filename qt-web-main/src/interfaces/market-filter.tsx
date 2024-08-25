export interface IMarketPlaceFilterOption {
  label: string;
  value: string;
  disabled?: boolean;
}
export interface IItemCard {
  image?: string[];
  title: string;
  sub: string;
  onClick?: () => void;
}
