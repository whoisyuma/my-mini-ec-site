import { CartProvider } from "@/context/cartcontext";
import "./globals.css";

export const metadata = {
  title: "MY EC SITE",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header>
            <h1>My-EC-Site</h1>
          </header>

          {children}
        </CartProvider>
      </body>
    </html>
  );
}
