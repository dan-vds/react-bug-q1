// Cart API Service
// Handles all cart-related operations
import { API_ENDPOINTS, API_TIMEOUT } from "../../constants/api.js";

// Simulate API timeout
const createTimeoutPromise = (timeoutMs) => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("API request timeout")), timeoutMs);
  });
};

export const cartService = {
  /**
   * Saves cart to persistent storage (simulated)
   * @param {Array} cartItems - Cart items to save
   * @returns {Promise<Object>} Save confirmation
   */
  saveCart: async (cartItems) => {
    const savePromise = new Promise((resolve) => {
      setTimeout(() => {
        // Simulate saving to localStorage or API
        localStorage.setItem("cart", JSON.stringify(cartItems));
        resolve({
          success: true,
          itemCount: cartItems.length,
          timestamp: Date.now(),
        });
      }, 200);
    });

    return Promise.race([savePromise, createTimeoutPromise(API_TIMEOUT)]);
  },

  /**
   * Loads cart from persistent storage (simulated)
   * @returns {Promise<Array>} Cart items
   */
  loadCart: async () => {
    const loadPromise = new Promise((resolve) => {
      setTimeout(() => {
        const savedCart = localStorage.getItem("cart");
        const cartItems = savedCart ? JSON.parse(savedCart) : [];
        resolve(cartItems);
      }, 200);
    });

    return Promise.race([loadPromise, createTimeoutPromise(API_TIMEOUT)]);
  },

  /**
   * Validates cart items against current inventory
   * @param {Array} cartItems - Cart items to validate
   * @returns {Promise<Object>} Validation result
   */
  validateCart: async (cartItems) => {
    const validatePromise = new Promise((resolve) => {
      setTimeout(() => {
        // Simulate inventory validation
        const invalidItems = cartItems.filter((item) => item.stock <= 0);
        resolve({
          isValid: invalidItems.length === 0,
          invalidItems: invalidItems.map((item) => item.id),
          message:
            invalidItems.length > 0
              ? "Some items are out of stock"
              : "Cart is valid",
        });
      }, 150);
    });

    return Promise.race([validatePromise, createTimeoutPromise(API_TIMEOUT)]);
  },
};
