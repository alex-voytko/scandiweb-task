function CategoryFurnitureInputs({
  onChange,
  widthValue,
  heightValue,
  depthValue,
}) {
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
          value={widthValue}
        />
        <input
          type="number"
          name="height"
          onChange={onChange}
          id="input-use-effect-hook"
          value={heightValue}
        />
        <input
          type="number"
          name="depth"
          onChange={onChange}
          id="input-use-effect-hook"
          value={depthValue}
        />
      </div>
    </>
  );
}

export default CategoryFurnitureInputs;
