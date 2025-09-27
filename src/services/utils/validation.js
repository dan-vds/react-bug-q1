// Validation utilities for forms and data
export const validateEmail = (email) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const cleanPhone = phone.replace(/\D/g, "");
  return /^\d{10,11}$/.test(cleanPhone);
};

export const validateCardNumber = (cardNumber) => {
  const cleanCard = cardNumber.replace(/\s/g, "");
  return /^\d{13,19}$/.test(cleanCard);
};

export const validateExpiryDate = (expiryDate) => {
  const [month, year] = expiryDate.split("/");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  const expMonth = parseInt(month);
  const expYear = parseInt(year);

  if (expMonth < 1 || expMonth > 12) {
    return { isValid: false, error: "Please enter a valid month (1-12)" };
  }

  if (
    expYear < currentYear ||
    (expYear === currentYear && expMonth < currentMonth)
  ) {
    return { isValid: false, error: "Card has expired" };
  }

  return { isValid: true };
};

export const validateRequired = (value) => {
  return value.trim().length > 0;
};
