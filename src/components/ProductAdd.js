import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products-redux/products-slice";
import { useNavigate } from "react-router-dom";
import CategoryFurnitureInputs from "./CategoryFurnitureInputs";
import CategoryDVDInputs from "./CategoryDVDInputs";
import CategoryBooksInputs from "./CategoryBooksInputs";
import DropFileInput from "./DropFileInput";
import ViewWrapper from "./ViewWrapper";
import uploadImage from "../api/uploadImage";
import { v4 as uuidv4 } from "uuid";
import initialState from "../helpers/initialState";
import { furniture, dvd, books } from "../helpers/categories";

function ProductAdd() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({ ...initialState });
    const handleChange = useCallback(e => {
        const { value, name } = e.target;
        setInputValues({ ...inputValues, [name]: value });
        localStorage.setItem("inputs", JSON.stringify(inputValues));
    });

    const [drag, setDrag] = useState(false);
    const dragStartHandler = e => {
        e.preventDefault();
        setDrag(true);
    };
    const dragLeaveHandler = e => {
        e.preventDefault();
        setDrag(false);
    };
    const onDropHandler = e => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "scandiweb-preset");
        uploadImage(formData).then(link =>
            setInputValues({ ...inputValues, url: link }),
        );
        setDrag(false);
        localStorage.setItem("store", JSON.stringify(inputValues));
    };
    const onChangeImg = () => {
        setInputValues({ ...inputValues, url: "" });
    };

    const handleSubmit = useCallback(e => {
        e.preventDefault();
        if (inputValues.sku && inputValues.name && inputValues.price) {
            const updatedState = { ...inputValues, id: uuidv4() };
            dispatch(addProduct(updatedState));
            setInputValues({ ...initialState });
            return navigate("/");
        }
        alert("SKU-, Name- and Price- inputs should not be empty!");
    });

    return (
        <>
            <ViewWrapper
                title="Add Product"
                firstBtnName="save"
                firstBtnType="submit"
                firstBtnLink="#"
                firstBtnClick={handleSubmit}
                secondBtnName="cancel"
                secondBtnType="button"
                secondBtnLink="/"
                secondBtnClick={null}
            />
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="block-container">
                    <div className="required-input-container">
                        <div className="label-container">
                            <label htmlFor="sku">SKU</label>
                            <label htmlFor="name">Name</label>
                            <label htmlFor="price">Price ($)</label>
                            <label htmlFor="type">Category</label>
                        </div>
                        <div className="input-container">
                            <input
                                required
                                type="text"
                                name="sku"
                                onChange={handleChange}
                                id="input-use-effect-hook"
                            />
                            <input
                                required
                                type="text"
                                name="name"
                                onChange={handleChange}
                                id="input-use-effect-hook"
                            />
                            <input
                                required
                                type="number"
                                name="price"
                                onChange={handleChange}
                                id="input-use-effect-hook"
                            />
                            <select
                                className="select-input"
                                name="type"
                                onChange={handleChange}
                                id="input-use-effect-hook"
                            >
                                <option>{furniture}</option>
                                <option>{dvd}</option>
                                <option>{books}</option>
                            </select>
                        </div>
                    </div>
                    <div className="category-container">
                        <div className="render-category-container">
                            {inputValues.type === furniture && (
                                <CategoryFurnitureInputs
                                    onChange={handleChange}
                                />
                            )}
                            {inputValues.type === dvd && (
                                <CategoryDVDInputs onChange={handleChange} />
                            )}
                            {inputValues.type === books && (
                                <CategoryBooksInputs onChange={handleChange} />
                            )}
                        </div>
                        <div className="description-container">
                            <div className="label-container">
                                <label htmlFor="description">Description</label>
                            </div>
                            <div className="input-container">
                                <textarea
                                    name="description"
                                    onChange={handleChange}
                                    id="input-use-effect-hook"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-block-container">
                    <DropFileInput
                        url={inputValues.url}
                        drag={drag}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                        onChangeImg={onChangeImg}
                    />
                </div>
            </form>
        </>
    );
}

export default ProductAdd;
