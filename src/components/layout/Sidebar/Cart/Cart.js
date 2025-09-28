// Cart sidebar component
import CartItem from "./CartItem.js";
import CartSummary from "./CartSummary.js";
import PromoSection from "./PromoSection.js";

export default function Cart({
  cart,
  onRemoveItem,
  onUpdateQuantity,
  summary,
  promoCode,
  setPromoCode,
  onApplyPromo,
  promoApplied,
}) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Add some items to get started!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemoveItem}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>

          <PromoSection
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            onApplyPromo={onApplyPromo}
            promoApplied={promoApplied}
          />

          <CartSummary
            summary={summary}
            hasItems={cart.length > 0}
          />
        </>
      )}
    </div>
  );
}
