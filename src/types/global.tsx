export interface Slide {
    base: string;
    exchange: string;
    flag: string;
}
export interface Currency {
    base: string;
    date: string;
    rates: Record<string, number>;
}