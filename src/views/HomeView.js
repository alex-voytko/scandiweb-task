import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ViewWrapper from "../components/ViewWrapper";
import sliceTitle from "../helpers/sliceTitle";
import {
    onToggleToRemove,
    resetAllToggles,
    removeProducts,
} from "../redux/products-redux/products-slice";

function HomeView() {
    const dispatch = useDispatch();

    const [onClickHandler, setOnClickHandler] = useState(false);
    const handleClick = () => {
        setOnClickHandler(!onClickHandler);
        dispatch(resetAllToggles());
    };

    const [products, setProducts] = useState([]);
    const getItems = useSelector(state => state.products.items);
    useEffect(() => {
        dispatch(resetAllToggles());
        setProducts([...getItems]);
        console.log("Данные обновились");
    }, [onClickHandler]);

    const handleRemove = () => {
        dispatch(removeProducts(false));
        setOnClickHandler(false);
        console.log("продукты удалены");
    };

    const handleChange = useCallback(e => {
        const { checked, id } = e.target;
        dispatch(onToggleToRemove({ id, checked }));
        setProducts([...getItems]);
    });

    console.log(products);

    return (
        <>
            <ViewWrapper
                title="Product List"
                firstBtnName={!onClickHandler ? "add" : "cancel"}
                firstBtnType="button"
                firstBtnLink={!onClickHandler ? "/add" : "#"}
                firstBtnClick={!onClickHandler ? null : handleClick}
                secondBtnName={
                    !onClickHandler ? "mass delete" : "delete selected products"
                }
                secondBtnType="button"
                secondBtnLink="#"
                secondBtnClick={!onClickHandler ? handleClick : handleRemove}
            />
            <>
                <ul className="product-list">
                    {products.map(product => (
                        <li className="product-list-item" key={product.id}>
                            {onClickHandler && (
                                <div
                                    className="delete-checkbox-container"
                                    key={product.id}
                                >
                                    <input
                                        type="checkbox"
                                        id={product.id}
                                        className="delete-checkbox"
                                        onChange={handleChange}
                                    />
                                </div>
                            )}
                            <div className="img-container">
                                <div className="img-fill"></div>
                                <p>{product.sku}</p>
                                <img src={product.url} alt={product.name} />
                            </div>
                            <div className="content-container">
                                <h3 className="title">
                                    {sliceTitle(product.name)}
                                </h3>
                                <p>
                                    Category: <span>{product.type}</span>
                                </p>
                                <p>
                                    Price: <span>{"$" + product.price}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        </>
    );
}

export default HomeView;
