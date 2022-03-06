import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductList() {
    const [products, setProducts] = useState([]);
    const getItems = useSelector(state => state.products.items);

    useEffect(() => {
        setProducts([...getItems]);
    }, []);
    return (
        <ul className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product.id}
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
