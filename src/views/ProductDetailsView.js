import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    selectProduct,
    removeCurrentProduct,
} from "../redux/products-redux/products-slice";
import ViewWrapper from "../components/ViewWrapper";
import Container from "../components/Container";
import { furniture, books, dvd } from "../helpers/categories";

function ProductView() {
    const dispatch = useDispatch();

    const { productID } = useParams();
    dispatch(selectProduct(productID));

    const recievedProduct = useSelector(
        state => state.products.selectedProduct,
    );
    const [product, setProduct] = useState({});
    useEffect(() => {
        setProduct({ ...recievedProduct });
    }, []);

    const onProductDelete = () => {
        dispatch(removeCurrentProduct(product.id));
    };

    return (
        <>
            <ViewWrapper
                title="Product Details"
                firstBtnName="back home"
                firstBtnType="button"
                firstBtnLink="/"
                firstBtnClick={null}
                secondBtnName="delete this product"
                secondBtnType="button"
                secondBtnLink="/"
                secondBtnClick={onProductDelete}
            />
            <Container className="container-wrapper">
                <div className="product-view-container">
                    <div className="img-container">
                        <img src={product.url} alt={product.name} />
                    </div>
                    <div className="content-container">
                        <h3>{product.name}</h3>
                        <p className="sku-render">{product.sku}</p>
                        <p>
                            Category: <span>{product.type}</span>
                        </p>
                        <p>
                            Price: <span>{`$${product.price}`}</span>
                        </p>
                        <div className="category-container">
                            {product.type === furniture && (
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
                            {product.type === dvd && (
                                <>
                                    <p>
                                        Size: <span>{product.size} GB</span>
                                    </p>
                                </>
                            )}
                            {product.type === books && (
                                <>
                                    <p>
                                        Author: <span>{product.author}</span>
                                    </p>
                                    <p>
                                        Weight: <span>{product.weight} KG</span>
                                    </p>
                                </>
                            )}
                        </div>
                        <p className="description">
                            Description: <span>{product.description}</span>
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ProductView;
