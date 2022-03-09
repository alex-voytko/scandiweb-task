import { v4 as uuidv4 } from "uuid";

function CreateSelectField({ name, handleChange, value, arrayOptions }) {
  return (
    <select
      className="select-input"
      name={name}
      onChange={handleChange}
      value={value}
    >
      {arrayOptions.map(item => (
        <option key={uuidv4()}>{item}</option>
      ))}
    </select>
  );
}

export default CreateSelectField;
