import ViewWrapper from "../components/ViewWrapper";
import ProductAdd from "../components/ProductAdd";

function AddProductView() {
    return (
        <>
            <ViewWrapper
                title={"Add Product"}
                firstBtnName={"save"}
                secondBtnName={"cancel"}
                firstBtnLink={"#"}
                secondBtnLink={"/"}
            />
            <ProductAdd />
        </>
    );
}

export default AddProductView;
