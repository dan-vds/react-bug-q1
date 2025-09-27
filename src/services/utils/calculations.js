// Calculation utilities for cart and pricing
import { TAX_RATE } from "../../constants/api.js";

export const calculateSubtotal = (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const calculateDiscount = (subtotal, promoApplied) => {
  return promoApplied ? subtotal * 0.1 : 0;
};

export const calculateTax = (subtotal, discount) => {
  return (subtotal - discount) * TAX_RATE;
};

export const calculateTotal = (subtotal, discount, tax) => {
  return subtotal - discount + tax;
};

export const formatCurrency = (amount) => {
  return `$${parseFloat(amount).toFixed(2)}`;
};

export const calculateCartTotalQuantity = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};
