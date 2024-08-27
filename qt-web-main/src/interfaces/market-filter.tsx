export interface IMarketPlaceFilterOption {
  label: string;
  value: string;
  disabled?: boolean;
}
export interface IItemCard {
  id?: number;
  image?: string[];
  title: string;
  sub: string;
  onClick?: () => void;
  price?: string;
  sale?: string;
}
