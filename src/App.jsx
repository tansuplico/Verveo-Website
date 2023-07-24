import React from "react";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const { mainData, itemsInCart, itemsInFavorite } = useContext(CartContext);

  return (
    <div>
      <Header
        data={mainData}
        itemsInCart={itemsInCart}
        itemsInFavorite={itemsInFavorite}
      />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
