// Individual cart item component
import { useState, useEffect } from "react";
import Input from "../../../ui/Input.js";

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  const [localQuantity, setLocalQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    setLocalQuantity(newQuantity);

    onUpdateQuantity(item.id, newQuantity);
  };

  useEffect(() => {
    setLocalQuantity(item.quantity);
  }, [item.quantity]); // Fixed: Sync with prop changes

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>${parseFloat(item.price).toFixed(2)} each</p>
      </div>

      <div className="cart-item-controls">
        <Input
          type="number"
          min="0"
          value={localQuantity}
          onChange={handleQuantityChange}
          className="cart-quantity-input"
        />
        <button
          onClick={() => onRemove(item.id)}
          className="remove-item-btn"
          aria-label={`Remove ${item.name} from cart`}
        >
          ✕
        </button>
      </div>

      <div className="cart-item-total">
        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
