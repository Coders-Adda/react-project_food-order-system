import React , { useState } from "react";
import Cart from "./components/cart/Cart";
import { Header } from "./components/layout/header/Header";
import { Meals } from "./components/meals/Meals";
import CartProvider from "./storage/cartProvider";

function App() {

  const [isCartOpen,setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  }

  const handleCartClose = () => {
    setIsCartOpen(false);
  }

  return (
    <CartProvider>
      { isCartOpen && <Cart onClose={handleCartClose}/>}
      <Header onCartShow={handleCartOpen} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
