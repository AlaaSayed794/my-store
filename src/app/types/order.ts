import { Product } from "./product";

export type Order = {
    id?: number;
    username: string;
    address: string;
    price: number;
    products: Product[];
};