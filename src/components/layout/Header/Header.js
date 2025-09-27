// Header component - main store header
import CartIcon from "./CartIcon.js";

export default function Header({ cartItemCount = 0 }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="store-title">🛒 FreshMart Grocery</h1>
        </div>
        <div className="header-right">
          <CartIcon itemCount={cartItemCount} />
        </div>
      </div>
    </header>
  );
}
