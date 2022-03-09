function CategoryBooksInputs({ onChange, authorValue, weightValue }) {
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
          value={authorValue}
        />
        <input
          type="number"
          name="weight"
          onChange={onChange}
          id="input-use-effect-hook"
          value={weightValue}
        />
      </div>
    </>
  );
}

export default CategoryBooksInputs;
