// API Configuration and Constants
export const API_ENDPOINTS = {
  PRODUCTS: "/api/products",
  CART: "/api/cart",
  ORDERS: "/api/orders",
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export const PROMO_CODES = {
  SAVE10: {
    code: "SAVE10",
    discount: 0.1,
    description: "10% off entire order",
  },
  WELCOME: {
    code: "WELCOME",
    discount: 0.05,
    description: "5% welcome discount",
  },
};

export const TAX_RATE = 0.08;
export const API_TIMEOUT = 5000;
