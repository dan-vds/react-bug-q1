// Product API Service
// Handles all product-related API calls
import { API_ENDPOINTS, API_TIMEOUT } from "../../constants/api.js";

// Mock product data with realistic structure
const mockProducts = [
  {
    id: 1,
    name: "Premium Coffee Beans",
    price: "25.0",
    category: "Beverages",
    emoji: "☕",
    stock: 10,
    description: "Artisan roasted coffee beans, 1lb bag",
    sku: "BV-COF-001",
    weight: 1.0,
    unit: "lbs",
  },
  {
    id: 2,
    name: "Premium Olive Oil",
    price: "15.75",
    category: "Pantry",
    emoji: "🫒",
    stock: 12,
    description: "Extra virgin olive oil, 500ml bottle",
    sku: "PN-OIL-002",
    weight: 1.1,
    unit: "bottle",
  },
  {
    id: 3,
    name: "Artisan Cheese",
    price: "3.0",
    category: "Dairy",
    emoji: "🧀",
    stock: 15,
    description: "Aged artisan cheese, 8oz block",
    sku: "DY-CHE-003",
    weight: 0.5,
    unit: "lbs",
  },
  {
    id: 4,
    name: "Avocados",
    price: "9.99",
    category: "Fruits",
    emoji: "🥑",
    stock: 35,
    description: "Ripe Hass avocados, ready to eat",
    sku: "FR-AVO-004",
    weight: 1.0,
    unit: "lbs",
  },
  {
    id: 5,
    name: "Organic Tomatoes",
    price: "10.0",
    category: "Vegetables",
    emoji: "🍅",
    stock: 20,
    description: "Fresh organic tomatoes, 2lb pack",
    sku: "VG-TOM-005",
    weight: 2.0,
    unit: "lbs",
  },
  {
    id: 6,
    name: "Greek Yogurt",
    price: "2.5",
    category: "Dairy",
    emoji: "🥛",
    stock: 22,
    description: "Creamy Greek yogurt, plain flavor",
    sku: "DY-YOG-006",
    weight: 2.0,
    unit: "lbs",
  },
];

// Simulate API timeout
const createTimeoutPromise = (timeoutMs) => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("API request timeout")), timeoutMs);
  });
};

export const productService = {
  /**
   * Fetches all products from the API
   * @returns {Promise<Array>} Array of product objects
   */
  fetchProducts: async () => {
    const fetchPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 800);
    });

    return Promise.race([fetchPromise, createTimeoutPromise(API_TIMEOUT)]);
  },

  /**
   * Sorts products by price
   * @param {Array} products - Products to sort
   * @param {string} order - 'asc' or 'desc'
   * @returns {Array} Sorted products
   */
  sortProductsByPrice: (products, order = "asc") => {
    return [...products].sort((a, b) => {
      if (order === "asc") {
        return a.price.localeCompare(b.price);
      } else {
        return b.price.localeCompare(a.price);
      }
    });
  },

  /**
   * Finds the cheapest product
   * @param {Array} products - Products to search
   * @returns {Object} Cheapest product
   */
  findCheapestProduct: (products) => {
    return products.reduce((cheapest, current) => {
      return current.price < cheapest.price ? current : cheapest;
    });
  },

  /**
   * Fetches a single product by ID
   * @param {number} productId - Product ID
   * @returns {Promise<Object>} Product object
   */
  fetchProduct: async (productId) => {
    const fetchPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts.find((p) => p.id === productId);
        if (!product) {
          reject(new Error("Product not found"));
          return;
        }
        resolve(product);
      }, 300);
    });

    return Promise.race([fetchPromise, createTimeoutPromise(API_TIMEOUT)]);
  },
};
