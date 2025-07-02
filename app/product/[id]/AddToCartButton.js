'use client'

const { useCart } = require("@/context/cartcontext")

export default function AddToCartButton({product}) {
    const {addToCart} = useCart();

    return (
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
    )
}