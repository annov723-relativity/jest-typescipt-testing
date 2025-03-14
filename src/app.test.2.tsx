jest.mock('./effects/getConversionMap')
import { Currency, convertCurrency } from "./convertCurrency"

describe("The currency converter", () => {
    it("Should convert USD to CAD", async () => {
        const value = 1
        const root = Currency.USD
        const target = Currency.CAD
        const nextValue = await convertCurrency(value, root, target)
        expect(nextValue).toBeCloseTo(1.5)
    })
})