import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ViewWrapper from "../components/ViewWrapper";
import Container from "../components/Container";
import ProductList from "../components/ProductList";
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
  }, [onClickHandler]);

  const handleRemove = () => {
    dispatch(removeProducts(false));
    setOnClickHandler(false);
  };

  const handleChange = useCallback(e => {
    const { checked, id } = e.target;
    dispatch(onToggleToRemove({ id, checked }));
    setProducts([...getItems]);
  });

  return (
    <>
      <ViewWrapper
        title="Product List"
        firstBtnName={!onClickHandler ? "add" : "cancel"}
        firstBtnType="button"
        firstBtnLink={!onClickHandler ? "/add" : "#"}
        firstBtnClick={!onClickHandler ? null : handleClick}
        secondBtnName={!onClickHandler ? "mass delete" : "confirm"}
        secondBtnType="button"
        secondBtnLink="#"
        secondBtnClick={!onClickHandler ? handleClick : handleRemove}
      />
      <Container className="container-wrapper">
        <ProductList
          onClickHandler={onClickHandler}
          products={products}
          handleChange={handleChange}
        />
      </Container>
    </>
  );
}

export default HomeView;
