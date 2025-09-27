// Product Card component with complex structure
import ProductImage from "./ProductImage.js";
import ProductInfo from "./ProductInfo.js";
import QuantitySelector from "./QuantitySelector.js";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <ProductImage product={product} />
      <ProductInfo product={product} />
      <QuantitySelector product={product} onAddToCart={onAddToCart} />
    </div>
  );
}
