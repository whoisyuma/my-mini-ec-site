'use client'

import { useCart } from "@/context/cartcontext";
import products from "@/data/products";
import styles from "./cart.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const router = useRouter();

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    if (cartItems.length === 0) {
        return (
            <div className={styles.empty}>
                <p>Your cart is currently empty...</p>
                <Link href="/">← Shop Now</Link>
            </div>
        )
    }

    return (
        <main className={styles.cart}>
            <h1 className={styles.shoppingCart}>Shopping Cart</h1>
            <ul className={styles.cartDetail}>
                <div className={styles.cartItems}>
                    {cartItems.map((item, index) => (
                        <li key={index} className={styles.cartItem}>
                            <div className={styles.itemImg}>
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.itemName}>
                                    <h2>{item.name}</h2>
                                    <button onClick={() => removeFromCart(index)}>×</button>
                                </div>
                                <p>${item.price}</p>
                            </div>
                        </li>
                    ))}
                </div>


                <div className={styles.orderSummary}>
                    <h1>ORDER SUMMARY</h1>
                    <div className={styles.totalItem}>
                        <h3>Total Item(s)</h3>
                        <h2>{cartItems.length}</h2>
                    </div>
                    <div className={styles.orderTotal}>
                        <h3>Order Total</h3>
                        <h2>${totalPrice}</h2>
                    </div>
                    <div className={styles.pay}>
                        <button onClick={() => {
                            alert("Thank you!");
                            clearCart();
                            router.push("/");
                        }}>Pay Now</button>
                    </div>
                </div>
                
                
            </ul>
        </main>
    )
}