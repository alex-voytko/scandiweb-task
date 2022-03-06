function CategoryBooksInputs({ onChange }) {
    return (
        <>
            <div className="label-container">
                <label htmlFor="author">Author</label>
                <label htmlFor="weight">Weight (KG)</label>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    name="author"
                    onChange={onChange}
                    id="input-use-effect-hook"
                />
                <input
                    type="number"
                    name="weight"
                    onChange={onChange}
                    id="input-use-effect-hook"
                />
            </div>
        </>
    );
}

export default CategoryBooksInputs;
