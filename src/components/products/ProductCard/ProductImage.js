// Product Image component
export default function ProductImage({ product }) {
  return (
    <div className="product-image">
      <div className="product-emoji">
        <span>{product.emoji || "🛍️"}</span>
      </div>
      <div className="product-category">{product.category}</div>
    </div>
  );
}
