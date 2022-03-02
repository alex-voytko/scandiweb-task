import products from '../db.json';

function ProductList() {
    return (
        <ul className="product-list">
            {products.map(product => (
                <li className="product-list-item" key={product.id}>
                    <div className="img-container">
                        <div className="img-fill"></div>
                        <p>{product.sku}</p>
                        <img src={product.url} alt={product.name} />
                    </div>
                    <div>
                        <h3>{product.name}</h3>
                        <p>Category: {product.type}</p>
                        <p>{`Price: $${product.price}`}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;
