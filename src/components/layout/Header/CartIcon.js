// Cart icon with item count
export default function CartIcon({ itemCount = 0 }) {
  return (
    <div className="cart-icon">
      <div className="cart-count">Cart: {itemCount} items</div>
    </div>
  );
}
