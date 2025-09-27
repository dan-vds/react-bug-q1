# Interview Assessment Bug Analysis

**This file will be removed before presenting the codebase to candidates.**

## Bug 1: String Prices Instead of Numbers

**Location:** `src/services/api/productService.js`

**What:** Product prices stored as strings instead of numbers

**Expected:** Numeric price sorting and comparisons

**Actual:** String comparison fails (e.g., "25.00" < "10.00" returns true)

**Fix:**

1. Change `mockProducts` price values from strings to numbers
2. Update `sortProductsByPrice()` to use `(a, b) => a.price - b.price`
3. Update `findCheapestProduct()` to use numeric comparison

**Solution Code:**

```javascript
// Fix price data type
const mockProducts = [
  {
    id: 1,
    name: "Organic Apples",
    price: 3.99, // ❌ String "3.99" → ✅ Number 3.99
    // ... other properties
  }
  // ... other products
];

// Fix sorting function
sortProductsByPrice(products, order) {
  return products.sort((a, b) => {
    if (order === 'asc') return a.price - b.price;    // ❌ String comparison
    if (order === 'desc') return b.price - a.price;   // ✅ Numeric comparison
    return 0;
  });
}
```

## Bug 2: Infinite Loop in useEffect Dependency Array

**Location:** `src/services/hooks/useCart.js` (lines 20-24)

**What:** `useEffect` with incorrect dependency array causes infinite loop

**Expected:** Cart count updates correctly when items added/removed

**Actual:** Cart count grows exponentially (2 → 4 → 6 → 8...) due to compounding bug

**Root Cause:**

```javascript
useEffect(() => {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  setCartCount(cartCount + quantity); // Wrong: compounds instead of replacing
}, [cart, cartCount]); // cartCount in dependencies creates infinite loop
```

**Fix:**

1. Remove `cartCount` from dependency array: `[cart]`
2. Change `cartCount + quantity` to just `quantity`
3. Or use `useMemo` for cart count calculation

**Solution Code:**

```javascript
// Option 1: Fix the useEffect
useEffect(() => {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  setCartCount(quantity); // ✅ Just set the quantity, don't add to existing count
}, [cart]); // ✅ Remove cartCount from dependencies

// Option 2: Use useMemo instead of state + useEffect
const cartCount = useMemo(() => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}, [cart]);
```

## Bug 3: State Mutation Instead of Replacement

**Location:** `src/services/hooks/useCart.js` (lines 24-36)

**What:** Direct mutation of state array instead of proper immutable updates

**Expected:** Cart updates immediately when items are added

**Actual:** Cart appears unchanged until another state update triggers re-render (stale UI)

**Root Cause:**

```javascript
const addToCart = (product, quantity = 1) => {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity; // ❌ Direct mutation
    setCart(cart); // Same reference - no re-render!
  } else {
    cart.push({ ...product, quantity }); // ❌ Direct mutation
    setCart(cart); // Same reference - no re-render!
  }
};
```

**Fix:**

1. Use proper immutable updates: `setCart([...cart, item])`
2. For existing items: `setCart(prevCart.map(item => item.id === productId ? {...item, quantity: item.quantity + quantity} : item))`

**Solution Code:**

```javascript
// ✅ Proper immutable state update
const addToCart = (product, quantity = 1) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);
    if (existingItem) {
      // Update existing item immutably
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Add new item immutably
      return [...prevCart, { ...product, quantity }];
    }
  });
};
```
