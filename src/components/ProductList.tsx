import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="card">
      <div className="card-header product-header">
        List Products
      </div>
      <div>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;