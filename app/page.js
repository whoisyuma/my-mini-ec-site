import styles from "./page.module.css";
import products from "../data/products";
import Link from "next/link";
import CartIcon from "./CartIcon";

export const revalidate = 60;

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.cart}>
        <h1>All items:</h1>
        <CartIcon />
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className={styles.productCard}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
