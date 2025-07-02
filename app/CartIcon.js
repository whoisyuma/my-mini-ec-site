'use client'

import { useCart } from "@/context/cartcontext";
import Link from "next/link";

export default function CartIcon() {
  const { cartItems } = useCart();

  return (
    <Link href="/cart">
        🛒
        {cartItems.length > 0 && (
            <span>{cartItems.length}</span>
        )}
    </Link>
  )
}