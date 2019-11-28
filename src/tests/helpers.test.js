import { getIndex } from '../utils/helpers';

const currencies = [
    { base: "GBP", exchange: "EUR", flag: "GB" },
    { base: "CHF", exchange: "USD", flag: "CH" },
    { base: "USD", exchange: "GBP", flag: "US" }
];

describe('test helpers functions', () => {
    it('getIndex gives right index', () => {
        const result = getIndex("right", currencies, 1);
        expect(result).toBe(2);
    });
});
