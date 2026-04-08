import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Ship {
    shipType: string;
    name: string;
    description: string;
    imageUrl: string;
}
export interface NewsArticle {
    title: string;
    date: bigint;
    summary: string;
    imageUrl: string;
}
export interface Career {
    title: string;
    description: string;
    category: string;
}
export interface backendInterface {
    getAllCareers(): Promise<Array<Career>>;
    getAllNews(): Promise<Array<NewsArticle>>;
    getAllShips(): Promise<Array<Ship>>;
}
