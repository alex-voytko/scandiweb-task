import products from '../db.json';
import sliceTitle from '../helpers/sliceTitle';

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
                    <div className="content-container">
                        <h3 className="title">{sliceTitle(product.name)}</h3>
                        <p>
                            Category: <span>{product.type}</span>
                        </p>
                        <p>
                            Price: <span>{'$' + product.price}</span>
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;
