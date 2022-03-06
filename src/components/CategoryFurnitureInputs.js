function CategoryFurnitureInputs({ onChange }) {
    return (
        <>
            <div className="label-container">
                <label htmlFor="width">Width (CM)</label>
                <label htmlFor="height">Height (CM)</label>
                <label htmlFor="depth">Depth (CM)</label>
            </div>
            <div className="input-container">
                <input
                    type="number"
                    name="width"
                    onChange={onChange}
                    id="input-use-effect-hook"
                />
                <input
                    type="number"
                    name="height"
                    onChange={onChange}
                    id="input-use-effect-hook"
                />
                <input
                    type="number"
                    name="depth"
                    onChange={onChange}
                    id="input-use-effect-hook"
                />
            </div>
        </>
    );
}

export default CategoryFurnitureInputs;
