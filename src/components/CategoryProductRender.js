function CategoryProductRender({ product, arr }) {
  return (
    <>
      {product.type === arr[0] && (
        <>
          <p>
            Width: <span>{product.width} CM</span>
          </p>
          <p>
            Height: <span>{product.height} CM</span>
          </p>
          <p>
            Depth: <span>{product.depth} CM</span>
          </p>
        </>
      )}
      {product.type === arr[1] && (
        <>
          <p>
            Size: <span>{product.size} GB</span>
          </p>
        </>
      )}
      {product.type === arr[2] && (
        <>
          <p>
            Author: <span>{product.author}</span>
          </p>
          <p>
            Weight: <span>{product.weight} KG</span>
          </p>
        </>
      )}
    </>
  );
}

export default CategoryProductRender;
