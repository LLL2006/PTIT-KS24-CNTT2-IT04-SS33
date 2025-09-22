
const ProductItem = ({ product, onAddToCart }) => {
  const handleBuy = () => {
    if (product.stock <= 0) {
      alert("Số lượng sản phẩm vượt quá số lượng trong kho");
      return;
    }
    onAddToCart(product);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
      </div>
      <div className="product-actions">
        <input
          type="number"
          value={product.stock}
          readOnly
          className="quantity-input"
        />
        <button onClick={handleBuy} className="add-button">
          {product.price} USD
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
