function CategoryDVDInputs({ onChange }) {
    return (
        <>
            <div className="label-container">
                <label htmlFor="size">Size (GB)</label>
            </div>
            <div className="input-container">
                <input
                    type="number"
                    name="size"
                    onChange={onChange}
                    id="input-use-effect-hook"
                />
            </div>
        </>
    );
}

export default CategoryDVDInputs;
