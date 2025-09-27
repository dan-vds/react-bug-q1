// Online Grocery Store - Main Component
// Demonstrates complex state management and component composition
"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header/Header.js";
import ProductList from "../components/products/ProductList/ProductList.js";
import Cart from "../components/layout/Sidebar/Cart/Cart.js";
import CheckoutForm from "../components/checkout/CheckoutForm/CheckoutForm.js";
import LoadingSpinner from "../components/LoadingSpinner.js";
import ErrorMessage from "../components/ErrorMessage.js";
import { useProducts } from "../services/hooks/useProducts.js";
import { useCart } from "../services/hooks/useCart.js";
import { productService } from "../services/api/productService.js";

export default function GroceryStore() {
  const { products, loading, error } = useProducts();
  const [sortOrder, setSortOrder] = useState("default");
  const {
    cart,
    cartCount,
    promoCode,
    promoApplied,
    setPromoCode,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyPromoCode,
    getCartSummary,
  } = useCart();

  // Sort products based on selected order
  const sortedProducts = React.useMemo(() => {
    if (sortOrder === "default" || !products) return products;

    return productService.sortProductsByPrice(products, sortOrder);
  }, [products, sortOrder]);

  // Show loading spinner while data is being fetched
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error message if something went wrong
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="grocery-store">
      <Header cartItemCount={cartCount} />

      <div className="store-layout">
        <div className="products-section">
          <div className="sort-controls">
            <label htmlFor="sort-select">Sort by price:</label>
            <select
              id="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="sort-select"
            >
              <option value="default">Default Order</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
          <ProductList products={sortedProducts} onAddToCart={addToCart} />
        </div>

        <div className="cart-section">
          <Cart
            cart={cart}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onCheckout={() => {}}
            summary={getCartSummary()}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            onApplyPromo={applyPromoCode}
            promoApplied={promoApplied}
          />
        </div>
      </div>

      {/* Checkout form would go here */}
    </div>
  );
}
