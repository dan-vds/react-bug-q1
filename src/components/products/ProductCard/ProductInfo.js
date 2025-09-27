// Product Info component
export default function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-price">
        ${parseFloat(product.price).toFixed(2)}
      </div>
    </div>
  );
}
