import ProductCard from "./ProductCard";

function ProductList({ products, handleChange, onClickHandler }) {
  return (
    <ul className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          onClickHandler={onClickHandler}
          handleChange={handleChange}
          sku={product.sku}
          url={product.url}
          name={product.name}
          type={product.type}
          price={product.price}
        />
      ))}
    </ul>
  );
}

export default ProductList;
