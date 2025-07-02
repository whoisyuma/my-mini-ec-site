import { notFound } from "next/navigation";
import products from "../../../data/products";
import styles from "./product.module.css";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }))
}

export default function ProductPage({ params }) {
    const product = products.find(
        (product) => product.id.toString() === params.id
    );

    if (!product) {
        return notFound();
    }
    
    return (
        <main className={styles.productDetail}>
                <div className={styles.productImg}>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.productInfo}>
                    <h1>{product.name}</h1>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
    
                    <AddToCartButton product={product}/>
                    <Link href="/">← Back</Link>
                </div>
            </main>
    )
}