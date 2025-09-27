// Quantity Selector component
import { useState, useCallback } from "react";
import Input from "../../ui/Input.js";
import Button from "../../ui/Button.js";

export default function QuantitySelector({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = useCallback((e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, Math.min(value, product.stock)));
  }, []);

  const handleAddToCart = useCallback(() => {
    onAddToCart(product, quantity);
    setQuantity(1);
  }, [onAddToCart, product, quantity]);

  return (
    <div className="product-controls">
      <div className="quantity-selector">
        <label htmlFor={`quantity-${product.id}`}>Qty:</label>
        <Input
          id={`quantity-${product.id}`}
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={handleQuantityChange}
          className="quantity-input"
        />
      </div>

      <Button
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className="add-to-cart-btn"
      >
        Add to Cart
      </Button>
    </div>
  );
}
