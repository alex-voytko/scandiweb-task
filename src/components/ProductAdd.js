import { useState, useCallback, useEffect } from "react";

function ProductAdd() {
    const [inputValues, setInputValues] = useState({
        sku: "",
        name: "",
        price: 0,
        description: "",
        width: 0,
        height: 0,
        depth: 0,
        size: 0,
        weight: 0,
        author: "",
        type: "Furniture",
    });
    const handleChange = useCallback(e => {
        const { value, name } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    }, []);
    // useEffect = () => {};
    const handleSubmit = () => {
        return;
    };

    console.log(inputValues.type);
    return (
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
                        />
                        <input
                            required
                            type="text"
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            required
                            type="number"
                            name="price"
                            onChange={handleChange}
                        />
                        <select
                            className="select-input"
                            name="type"
                            onChange={handleChange}
                        >
                            <option>Furniture</option>
                            <option>DVD/Flash</option>
                            <option>Books</option>
                        </select>
                    </div>
                </div>
                <div className="category-container">
                    <div className="render-category-container">
                        {inputValues.type === "Furniture" && (
                            <>
                                <div className="label-container">
                                    <label htmlFor="width">Width (CM)</label>
                                    <label htmlFor="height">Height (CM)</label>
                                    <label htmlFor="depth">Depth (CM)</label>
                                </div>
                                <div className="input-container">
                                    <input type="number" name="width" />
                                    <input type="number" name="height" />
                                    <input type="number" name="depth" />
                                </div>
                            </>
                        )}
                        {inputValues.type === "DVD/Flash" && (
                            <>
                                <div className="label-container">
                                    <label htmlFor="size">Size (GB)</label>
                                </div>
                                <div className="input-container">
                                    <input type="number" name="size" />
                                </div>
                            </>
                        )}
                        {inputValues.type === "Books" && (
                            <>
                                <div className="label-container">
                                    <label htmlFor="author">Author</label>
                                    <label htmlFor="weight">Weight (KG)</label>
                                </div>
                                <div className="input-container">
                                    <input type="text" name="author" />
                                    <input type="number" name="weight" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="second-block-container">
                <div className="description-container">
                    <div className="label-container">
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="input-container">
                        <textarea name="description" />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ProductAdd;
