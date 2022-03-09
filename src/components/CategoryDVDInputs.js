function CategoryDVDInputs({ onChange, sizeValue }) {
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
          value={sizeValue}
        />
      </div>
    </>
  );
}

export default CategoryDVDInputs;
