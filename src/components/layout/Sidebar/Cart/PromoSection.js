// Promo code section
import Input from "../../../ui/Input.js";
import Button from "../../../ui/Button.js";

export default function PromoSection({
  promoCode,
  setPromoCode,
  onApplyPromo,
  promoApplied,
}) {
  return (
    <div className="promo-section">
      <div className="promo-input">
        <Input
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          disabled={promoApplied}
        />
        <Button
          onClick={() => onApplyPromo(promoCode)}
          disabled={promoApplied || !promoCode.trim()}
          variant="success"
          size="small"
        >
          Apply
        </Button>
      </div>
      {promoApplied && (
        <div className="promo-applied">✅ Promo code applied (10% off)</div>
      )}
    </div>
  );
}
