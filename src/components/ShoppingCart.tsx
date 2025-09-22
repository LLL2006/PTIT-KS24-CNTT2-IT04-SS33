import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import '../index.css';
import {initialProducts} from '../reducer/productsReducer'

const ShoppingCart = () => {
  const [products, setProducts] = useState(initialProducts);

  const [cartItems, setCartItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = (product) => {
  if (product.stock <= 0) {
    alert("Sản phẩm đã hết hàng!");
    return;
  }

  setProducts(products.map(p =>
    p.id === product.id ? { ...p, stock: p.stock - 1 } : p
  ));

  const existingItem = cartItems.find(item => item.id === product.id);
  if (existingItem) {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }

  setShowSuccess(true);
  setTimeout(() => setShowSuccess(false), 2000);
};


  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };
  
  

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="container">
      <h1 className="title">Shopping Cart</h1>
      
      <div className="main-grid">
        <ProductList
          products={products}
          onAddToCart={handleAddToCart}
        />
        
        <Cart
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          showSuccess={showSuccess}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;