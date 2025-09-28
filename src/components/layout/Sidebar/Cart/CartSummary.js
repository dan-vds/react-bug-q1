// Cart summary with totals
export default function CartSummary({ summary, hasItems }) {
  return (
    <>
      <div className="cart-totals">
        <div className="total-line">
          <span>Subtotal:</span>
          <span>${summary.subtotal}</span>
        </div>

        {summary.discount > 0 && (
          <div className="total-line discount">
            <span>Discount:</span>
            <span>-${summary.discount}</span>
          </div>
        )}

        <div className="total-line">
          <span>Tax:</span>
          <span>${summary.tax}</span>
        </div>

        <div className="total-line final-total">
          <span>Total:</span>
          <span>${summary.total}</span>
        </div>
      </div>
    </>
  );
}
