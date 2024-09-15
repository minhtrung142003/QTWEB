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
export interface IFeature {
    category_id: number;
    description: string;
    feature_id: number;
    feature_name: string;
    icon: string;
    pricing: string;
}
