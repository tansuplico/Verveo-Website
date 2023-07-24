import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

import Watches from './Pages/Watches/Watches';
import Boutiques from './Pages/Boutiques/Boutiques'
import Brand from './Pages/Brand/Brand'
import App from './App';

import data from './Pages/Watches/WatchesData';

function Root() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsInFavorite, setItemsInFavorite] = useState([])
  const [mainData, setMainData] = useState(data)

  return (
    <React.StrictMode>
      <Router>
        <CartContext.Provider value={{ itemsInCart, setItemsInCart, mainData, setMainData, itemsInFavorite, setItemsInFavorite }}>
          <Routes>
            <Route index element={<App />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/boutiques" element={<Boutiques />} />
            <Route path="/brand" element={<Brand />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
