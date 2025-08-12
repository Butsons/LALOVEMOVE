import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider, useCart } from './context/CartContext';
import './App.css';

// Create a small component just for the Cart Link with badge
function CartLink() {
  const { cart } = useCart();  // get cart items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-link">
      <Link to="/Cart" className="cart-icon">
        🛒 Cart
        {totalItems > 0 && (
          <span className="cart-count-badge">{totalItems}</span>
        )}
      </Link>
    </div>
  );
}

function App() {
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  return (
    <CartProvider>
      <Router>
        <div className="app-body">
          <header className="app-header">
  <nav className="nav-links">
    <Link to="/">🏠 Home</Link>
  </nav>

  <div className="logo">𝕃𝔸𝕃𝕆𝕍𝔼𝕄𝕆𝕍𝔼 ᴾᴴ</div>

  <CartLink />
</header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
