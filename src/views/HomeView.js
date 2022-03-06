import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import ViewWrapper from "../components/ViewWrapper";

function HomeView() {
    return (
        <>
            <ViewWrapper
                title="Product List"
                firstBtnName="add"
                firstBtnType="button"
                firstBtnLink="/add"
                firstBtnClick={null}
                secondBtnName="mass delete"
                secondBtnType="button"
                secondBtnLink="#"
                secondBtnClick={null}
            />
            <ProductList />
        </>
    );
}

export default HomeView;
