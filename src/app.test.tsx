import React from "react"
import { render } from "@testing-library/react"
import { CartItemsDisplay } from "./components/CarItemsDisplay"
import { CartItem } from "./etc/get-items-total"

describe("The Cart Item Display", () => {
    it("Should match the snapshot", () => {
        const specItems : CartItem[] = [
            {name: "item1", cost: 1},
            {name: "item2", cost: 2}
        ]

        const { container } = render(<CartItemsDisplay shoppingCartItems={specItems} />)
        console.info(container)

        expect(container).toMatchSnapshot()
    })
})