// Custom hook for cart management
import { useState, useCallback, useEffect } from "react";
import { calculateCartTotalQuantity } from "../utils/calculations.js";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const saveCart = async () => {
      console.log("Saving cart with", cart.length, "items");
    };

    saveCart();
  }, [cart]);

  useEffect(() => {
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(cartCount + quantity);
  }, [cart, cartCount]);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
      setCart(cart);
    } else {
      cart.push({ ...product, quantity });
      setCart(cart);
    }
  };

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback(
    (productId, quantity) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const applyPromoCode = useCallback((code) => {
    if (code.toLowerCase() === "save10") {
      setPromoApplied(true);
      setPromoCode("");
    }
  }, []);

  const getCartSummary = useCallback(() => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + tax;

    return {
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      itemCount: calculateCartTotalQuantity(cart),
    };
  }, [cart, promoApplied]);

  return {
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
  };
};
