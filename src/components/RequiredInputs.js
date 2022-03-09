import { furniture, dvd, books } from "../helpers/categories";

function RequiredInputs({ handleChange, sku, name, price, type }) {
  return (
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
          value={sku}
        />
        <input
          required
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
        />
        <input
          required
          type="number"
          name="price"
          onChange={handleChange}
          value={price}
        />
        <select
          className="select-input"
          name="type"
          onChange={handleChange}
          value={type}
        >
          <option>{furniture}</option>
          <option>{dvd}</option>
          <option>{books}</option>
        </select>
      </div>
    </div>
  );
}

export default RequiredInputs;
