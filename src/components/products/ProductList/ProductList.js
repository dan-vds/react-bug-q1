// Product List container component
import ProductGrid from "./ProductGrid.js";

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <ProductGrid products={products} onAddToCart={onAddToCart} />
    </div>
  );
}
